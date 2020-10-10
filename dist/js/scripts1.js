// JavaScript source code


//Function to check email

function validateMail() {   
    var minput = document.querySelector(".email-input");     
    var x = minput.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        alert("The entered Email address is not valid");
    } else {
        alert("It is a valid email address");
    }
}

//Function to check phone number

function validatePhone(){
    var val = document.querySelector(".number-input");
    var x = val.value;
    if(x.length < 10){
        alert("Please Enter a valid number!");
    }
}

//Functio to check age

function validateAge(){
    var val = document.querySelector(".age-input");
    var x = val.value;
    if(x < 100 && x>10){
        alert("The entered age is valid");
    } else {
        alert("Please Enter an age above 10! ");
    }
}

//Function to check  name

function validateName(){
    var val = document.querySelector(".name-input");
    var x = val.value;
    if(x == ""){
        alert("Please Enter a valid name");
    }
}
