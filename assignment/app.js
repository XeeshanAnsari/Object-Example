var users = [];

function signUp() {


    var userName = document.getElementById("userName").value;
    var userPass = document.getElementById("userPass").value;
    var error = document.getElementById("text");
    if (userName == "") {
        error.innerHTML = "User and password is invalid";
    }
    if (userPass.lenght < 8) {
        error.innerHTML = "Password is Short";
    } else {
        var newUser = {
            email: userName,
            password: userPass
        }
        users.push(newUser);
        console.log(JSON.stringify(users));
        localStorage.setItem("userData", JSON.stringify(users));
    }


}


function signIn() {
    var usersData = localStorage.getItem("userData");
    console.log(JSON.parse(usersData));


}


function logIn() {
    var userNameLogin = document.getElementById("userNameLogin").value;
    var userPassLogin = document.getElementById("userPassLogin").value;
    var msgLogin = document.getElementById("loginText");
    var usersData = localStorage.getItem("userData");
    var finalData = JSON.parse(usersData);

    for (var i = 0; i < finalData.length; i++) {
        var name = finalData.userName;
        var pass = finalData.userPass;
        if (userNameLogin == name && userPassLogin == pass) {
            msgLogin.innerHTML = "Login Is success";
        }



    }
}