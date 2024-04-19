const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = function enterName() {
    let Name = prompt("What is your name: ");
    if (!Name) {
        enterName();
    } else {
        alert(`Wellcome ${Name}, Nice to meet you.`);
        headingA.textContent = `Wellcom ${Name}`;
    }
}