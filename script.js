function nameInput(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username.length > 0 && password.length > 0){
        if(username == "username" && password == "password"){
            alert("You will now be redirected to your account");
            window.location.href = "accountpage.html";
        }
        else{
            alert("Username or Password Incorrect");
        }
    }
    else{
        alert("Username or Password Field Empty");
    }
}