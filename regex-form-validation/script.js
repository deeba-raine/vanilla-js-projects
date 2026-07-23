const formData = document.querySelector(".form")
const submit = document.querySelector("#submit")
const errorMsg = document.querySelectorAll(".error")
let field 
let firstName, lastName, email, password


for (let error of errorMsg) {
    error.classList.add("d-none");
  
}

formData.addEventListener("keyup", (event)=> {
    event.preventDefault()
     field = event.target.dataset.key
    console.log(field)
    
})

submit.addEventListener("click", (event)=> {
     event.preventDefault();
    field = event.target.dataset.key
    console.log(field)
})