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
        console.log(users);
    }


}