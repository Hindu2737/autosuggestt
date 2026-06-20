var users = [
    {
        "name" : "John",
        "gender" : "Male",
        "image" : "/images/john autouggest.png"
    },
    {
        "name" : "Janey",
        "gender" : "Female",
        "image" : "/images/janey autosuggest.png"
    }
]
var curid = 0;

function toggle(){
    //toggle curid from 0->1 && 1 ->0;
    curid = (curid+1)%2

    // toggle the rendered user details
    var user = users[curid];
    //image
    document.getElementById("user-Image").src=user.image;
    //name
    document.getElementById("user-Name").innerText=user.name;
    //gender
    document.getElementById("user-Gender").innerText=user.gender;

}
