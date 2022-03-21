function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        let userDatabase = JSON.parse(localStorage.getItem('userDatabase')) || [];
        
        for(let user in userDatabase){
            if(username == userDatabase[user].Username && password == userDatabase[user].Password)
            {
                localStorage.setItem('currentUser', user);
                window.location.href = 'accountpage.html';
            } else {
                setFormMessage(loginForm, "error", "Invalid username/password combination");
            }
        }
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 5) {
                setInputError(inputElement, "Username must be at least 5 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

function SignUp(){
    var newUsername = document.getElementById("newUsername").value;
    var newEmail = document.getElementById("newEmail").value;
    var newPassword = document.getElementById("newPassword").value;

    let userDatabase = JSON.parse(localStorage.getItem('userDatabase')) || [];
    let exists = userDatabase.length && JSON.parse(localStorage.getItem('userDatabase')).some(data=> data.Username.toLowerCase() == newUsername.toLowerCase() || data.Email.toLowerCase() == newEmail.toLowerCase());

    if(!exists){
        userDatabase.push({
            Username : newUsername,
            Password : newPassword,
            Email : newEmail,
            Balance: 0
        });

        localStorage.setItem('userDatabase', JSON.stringify(userDatabase));
        console.log(localStorage.getItem('userDatabase'));
    } else {
        alert("Username or Email Already Exists!");
    }
}

function setAccountStats(){
    let userDatabase = JSON.parse(localStorage.getItem('userDatabase')) || [];
    var currentUser = localStorage.getItem('currentUser');
    var balance = userDatabase[currentUser].Balance;
    document.getElementById("AccountHeader").textContent = userDatabase[currentUser].Username + "'s Balance: $" + balance;
}

function SignOut(){
    window.location.href = 'index.html';
}

function Deposit(){
    let userDatabase = JSON.parse(localStorage.getItem('userDatabase')) || [];
    var currentUser = localStorage.getItem('currentUser');
    var currentBalance = userDatabase[currentUser].Balance;
    var amount = prompt("How much would you like to deposit?");

    if(isNaN(amount) || amount.length == 0){
        alert("Not a valid amount!");
    } else {
        userDatabase[currentUser].Balance = parseInt(currentBalance, 10) + parseInt(amount, 10);
        localStorage.setItem('userDatabase', JSON.stringify(userDatabase));
        setAccountStats();
        alert("$" + amount + " has been deposited to your account!");
    }
}

function Withdraw(){
    let userDatabase = JSON.parse(localStorage.getItem('userDatabase')) || [];
    var currentUser = localStorage.getItem('currentUser');
    var currentBalance = userDatabase[currentUser].Balance;
    var amount = prompt("How much would you like to withdraw?");

    if(isNaN(amount) || amount.length == 0){
        alert("Not a valid amount!");
    } else {
        userDatabase[currentUser].Balance = parseInt(currentBalance, 10) - parseInt(amount, 10);
        localStorage.setItem('userDatabase', JSON.stringify(userDatabase));
        setAccountStats();
        alert("$" + amount + " has been withdrawn from your account!");
    }
}