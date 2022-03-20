function nameInput(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for(let user in userDatabase.UserInfo){
        if(username == userDatabase.UserInfo[user]?.username && password == userDatabase.UserInfo[user]?.password)
        {
            let currentName = userDatabase.UserInfo[user]?.name;
            let currentBalance = userDatabase.UserInfo[user]?.BankInfo[0]?.Balance;
            localStorage.setItem('value1', `${currentName}`);
            localStorage.setItem('value2', `${currentBalance}`);
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
                    "Balance": "$2500"
                }
            ]
        },
        {
            "name": "Colton Bombinski",
            "username": "Honu",
            "password": "password",
            "BankInfo": [
                {
                    "Balance": "$1500"
                }
            ]
        },
        {
            "name": "Carter Meza",
            "username": "DeathSquadron",
            "password": "password",
            "BankInfo": [
                {
                    "Balance": "10 Pesos"
                }
            ]
        }
    ]
};

function SetForAccount(){
    const hellonameheading = document.getElementById('hellonameheading');
    
    var currentStats = "Hello, " + localStorage.getItem('value1') + ", your balance is " + localStorage.getItem('value2') + "!";
    hellonameheading.textContent = currentStats;
    }