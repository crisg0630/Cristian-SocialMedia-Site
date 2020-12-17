function validate(){

var username = document.getElementById("unamer").value;
var pass = document.getElementById("pswr").value;
var confirmpass = document.getElementById("psw-confirm").value;



    if(username.search(/[a-zA-Z][a-zA-Z0-9]{2,}/)==-1){
        alert("Username must begin with a character,(a-z,A-Z), and it should be 3 or more alphanumeric characters long.");
        return false;
    }
    if(pass.length<8){
        alert("Passwords must have at least 8 characters");
        return false;
    }
    if(pass.search(/[!\@\#\$\^\&\*\)\+\-\(\/]/)== -1){
            alert("Password must contain one special character such as: ( , / , * , - , + , ! , @ , # , $ , ^ , & , * , or )");
            return false;
        }
    if(pass.search(/[A-Z]/) < 0 ){
        alert("Your password needs an upper case letter");
        return false;
    }
    if(pass.search(/[0-9]/) < 0){
        alert("Password must contain one number");
        return false;
    }
    if (pass != confirmpass){
        alert ("Passwords do not match")
        return false;
    }
    else{
        return true;
        }
    }