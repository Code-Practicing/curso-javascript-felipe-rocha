const submitButton = document.querySelector("#submit-button");
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const myForm = document.querySelector("#my-form")

const items = document.querySelector(".items")
const body = document.querySelector("body")

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    
    if (nameValue === " " || emailValue === ""){
        return alert("Please fill out the fields!")
    }

    myForm.style.background = "red";
    items.firstElementChild.textContent = nameValue;
    items.children[1].textContent = emailValue;

    body.style.background = "white"
});

// escuta uma mudança e logo mostra o input
// nameInput.addEventListener("change", function(event) {
//     console.log(event.target.value)
// });