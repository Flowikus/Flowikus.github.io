//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Кирилл ГУГАГАГА";

const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "cpu.png") {
        myImage.setAttribute("src", "cpu2.jpg");
    } else {
        myImage.setAttribute("src", "cpu.png")
    }
});

let myButton = document.querySelector("button");
myButton.addEventListener("click", () => {
    alert("ВНИМАНИЕ! ВЫ НАЖАЛИ НА КНОПКУ!")
})
