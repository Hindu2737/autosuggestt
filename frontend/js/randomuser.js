function randomuser(){
    fetch("https://randomuser.me/api/")
       .then(function(result){
            return result.json();
       })
       .then(function(data){
            var user = data.results[0];
            var fullname = user.name.title + " " + user.name.first + " " + user.name.last;

            //image
             document.getElementById("user-Image").src=user.picture.large;
            //name
             document.getElementById("user-Name").innerText=fullname;
            //gender
             document.getElementById("user-Gender").innerText=user.gender;
       })
       .catch(function(err){
            console.log("Error : " + err);
        })
}