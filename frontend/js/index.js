//alert("Hello from JS!!");

//console.log("Hello from JS!!");

const users = [
    {
        name: "John Doe",
        gender: "Male",
        image: "../images/john autouggest.png"
    },
    {
        name: "Jenny Smith",
        gender: "Female",
        image: "../images/jhon wife autosuggest.webp"
    }
];

let currentUser = 0;

const btn = document.getElementById("toggleBtn");
const nameEl = document.getElementById("userName");
const genderEl = document.getElementById("userGender");
const imageEl = document.getElementById("userImage");

if (btn) {
    btn.addEventListener("click", () => {
        currentUser = (currentUser + 1) % users.length;

        nameEl.textContent = users[currentUser].name;
        genderEl.textContent = users[currentUser].gender;
        imageEl.src = users[currentUser].image;
    });
}
