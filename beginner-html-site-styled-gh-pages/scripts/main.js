let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function changeUser() {
    userName = prompt("Enter your Name: ");
    if (!userName){
        changeUser();
    } else {
        localStorage.setItem("name", userName);
        myHeading.textContent = `Hello , ${userName}`;
    }
};

let Uname = localStorage.getItem("name");
if (!Uname) {
    changeUser();
} else {
    myHeading.textContent = `Hello ${Uname}`;
}

myButton.onclick = () => {
    changeUser();
}

