var API_url = "https://autosuggest-backend.onrender.com/api/autosuggest"

//https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8


var searchbar = document.getElementById("searchbar");
var searchsuggestions = document.getElementById("search-suggestions");
//when user gives input in a searchbar this function will be called and this function will get the data user typed and calls api for suggestions and then weights the suggestions regarding

//function use:

//get user input 
//use user typed data in the query in the API call
//API call
//append all the search suggestions to div tag in UI
searchbar.addEventListener("input", function(){
    var query = searchbar.value.trim();
    console.log(query);
    fetchsugg(query);
});

function fetchsugg(query){
    var fullAPI = API_url + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(fullAPI)
    .then(function(result){
        return result.json();
    })
    .then(function(data){
        //console.log(data)
        showsugg(data);
    })
    .catch(function(err){
        console.log("Error : " + err);
    })
}

function showsugg(data){
    var values = data.results;
    if(data.count==0){
        searchsuggestions.innerHTML = "<div> NO matching results found </div>";
    }
    else{
        var HTMLString = "";
        for(var i=0;i<values.length;i++){
            HTMLString += "<div> <span class='suggestion-item'>" + values[i].text + "</span><span class='weight-item'>" + values[i].weight + "</span></div>";
        }
        searchsuggestions.innerHTML=HTMLString;
    }
}