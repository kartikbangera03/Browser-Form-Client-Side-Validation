const form =  document.querySelector("form");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zipcode = document.querySelector("#zipcode");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#passwordConfirmation")

password.maxLength = 10;
password.minLength = 5;

const emailError = document.querySelector("#emailError");
const zipcodeError = document.querySelector("#zipcodeError");
const passwordError = document.querySelector("#passwordError");
const passwordConfirmationError = document.querySelector("#passwordConfirmationError");

const indiaRegExp = new RegExp("^[1-9]{1}[0-9]{5}$");
const franceRegExp = new RegExp("^[1-9]{1}[0-9]{4}$");
let selectedPattern ;

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
        emailError.innerText = "Please Type a Valid Email id. Ex: john@google.com";
    } else if (email.validity.valueMissing) {
        emailError.innerText = "Please Enter Email Id";
    } else if (email.validity.valid) {
        emailError.innerText = "";
    }
});


country.addEventListener("click", (event) => {
    if (country.value == "India") {
        selectedPattern = indiaRegExp;
    } else if (country.value == "France") {
        selectedPattern = franceRegExp;
    }
    
// console.log(selectedPattern);    
})


zipcode.addEventListener("input", (event) => {
    if (country.value == "") {
        zipcodeError.innerText = "Please Select a Country";
        zipcode.style.borderBottom = "2px solid red" ;
    } else if (!selectedPattern.test(zipcode.value)) {
        zipcodeError.innerText = "Please Enter the selected country's zipcode"
        zipcode.style.borderBottom = "2px solid red" ;
    }else{
        zipcodeError.innerText= "";
        zipcode.style.borderBottom = "2px solid green" ;
        
    }
});


password.addEventListener("input",(event)=>{
    if( password.value.length > 10 || password.value.length < 5) {
        passwordError.innerText = " Password Length should be minimum 4 and maximum 10";
    }else{
        passwordError.innerText = "";
    }
});


passwordConfirmation.addEventListener("input", (event)=>{

    if(password.value===""){
        passwordConfirmationError.innerText = "Enter Password in the password field";
    }else if(passwordConfirmation.value !== password.value){
        passwordConfirmationError.innerText = "Password Mismatch";
        passwordConfirmation.setCustomValidity("Password Mismatch");
        passwordConfirmation.style.borderBottom = "2px solid red" ; 
        passwordConfirmation.setCustommes       
    }else if(passwordConfirmation.value === password.value){
        passwordConfirmationError.innerText = "";
        passwordConfirmation.style.borderBottom = "2px solid green" ;
        passwordConfirmation.setCustomValidity("");
    }
});

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    if(email.validity.valid 
        && country.validity.valid 
        && zipcode.validity.valid
        && password.validity.valid
        && passwordConfirmation.validity.valid){
        document.querySelector("#formSubmitMessage").style.color = "green";    
        document.querySelector("#formSubmitMessage").innerText = "Form Validation Completed";
    }


});