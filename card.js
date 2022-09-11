let cardnumber=document.querySelector(".cardnumber");
let month=document.getElementById("month");
let year=document.getElementById("year");
let cvc=document.getElementById("CVC");
let confirmbutton=document.querySelector(".button");

function onlyNumberKey(e){
    var ASCIICode=(e.which)?e.which:e.keyCode; //The which property returns the  character code of the key that triggered the onkeypress event,
    if((ASCIICode>=48 && ASCIICode<=57)|| ASCIICode==32){
        return true;
    }
    else{
        alert("please enter a number");
    }
}


month.onkeyup=function(){
    var input=parseInt(this.value);

    if(input>=0 && input<=31 || input=="Backspace"){
        return;
    }

    if(input>31) {
        alert("enter a valid input");
    }

}

year.onkeyup=function(){

    var input=parseInt(this.value);
    if(input>=22 && input<=40 || input=="Backspace"){
        return;
    }
    if(input>41) {
        alert("enter a valid input");
    }
}

cvc.onkeyup=function(){
    var input=parseInt(this.value);
    if(input>=001 && input<=999 || input=="Backspace"){
        return;
    }
    if(input>999) {
        alert("enter a valid input");
    }
}

confirmbutton.addEventListener("click",function(e){
    alert("Information has been submitted successfully");
})





