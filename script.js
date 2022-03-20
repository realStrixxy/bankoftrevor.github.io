function nameInput(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for(let user in userDatabase.UserInfo){
        if(username == userDatabase.UserInfo[user]?.username && password == userDatabase.UserInfo[user]?.password)
        {
            let currentName = userDatabase.UserInfo[user]?.name;
            let currentBalance = userDatabase.UserInfo[user]?.BankInfo[0]?.Balance;
            localStorage.setItem('currentName', `${currentName}`);
            localStorage.setItem('currentBalance', `${currentBalance}`);
            window.location.href = "accountpage.html";
        }
    }
}

const userDatabase =
{
    "UserInfo": [
        {
            "name": "Trevor Edwards",
            "username": "realStrixxy",
            "password": "securePassword",
            "BankInfo": [
                {
                    "Balance": "2500"
                }
            ]
        },
        {
            "name": "Colton Bombinski",
            "username": "Honu",
            "password": "password",
            "BankInfo": [
                {
                    "Balance": "1500"
                }
            ]
        },
        {
            "name": "Carter Meza",
            "username": "DeathSquadron",
            "password": "password",
            "BankInfo": [
                {
                    "Balance": "10"
                }
            ]
        }
    ]
};

function SetForAccount(){
    const hellonameheading = document.getElementById('hellonameheading');
    
    var currentStats = "Hello, " + localStorage.getItem('currentName') + ", your balance is $" + localStorage.getItem('currentBalance') + "!";
    hellonameheading.textContent = currentStats;
    }

function Deposit(){
    var depositt = prompt("How much would you like to deposit?");
    var selection = parseInt(depositt, 10);
    if(/^[0-9.]+$/.test(selection)){
        alert("$" + depositt + " were deposited to your account!");
        let newBalance = parseInt(localStorage.getItem('currentBalance')) + selection;
        console.log(newBalance);
        localStorage.setItem('currentBalance', `${newBalance}`);
        SetForAccount();
    }
    else{
        alert("Not a valid number!")
    }
}

function Withdrawal(){
    var withdrawall = prompt("How much would you like to withdraw?");
    var selection = parseInt(withdrawall, 10);
    if(/^[0-9.]+$/.test(selection)){
        alert("$" + withdrawall + " were deposited to your account!");
        let newBalance = parseInt(localStorage.getItem('currentBalance')) - selection;
        console.log(newBalance);
        localStorage.setItem('currentBalance', `${newBalance}`);
        SetForAccount();
    }
    else{
        alert("Not a valid number!")
    }
}