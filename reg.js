console.log("javascript is connected!");
let heading=document.getElementById("heading");
heading.innerHtml="<h1>Welcome to our registration form element</h1>";

heading.style.color="red";
heading.style.fontFamily="Courier New";
heading.style.textAlign="center";
heading.style.textTransform="uppercase";
heading.style.padding="20px";
let heading3=document.getElementById("heading3");
heading3.textContent="so you have to fill all the information before you submit the form";
heading3.style.color="orange";
heading3.style.backgroundColor="green";
heading3.style.fontSize="40px";
let headings=document.getElementById("headings");
headings.style.backgroundColor="yellow";
myButton=document.getElementById("myButton");
myButton.style.backgroundColor="blue";
myButton.style.textAlign="right";
myButton.addEventListener("click",function(){
    console.log("the button was clicked!")

});
myButton.addEventListener("mouseover",function(){
    console.log("the mouse move over the button");
});
myButton.addEventListener("input",function(){
    console.log("the mouse is out of the button");
});
let username=document.getElementById("username");
let counter=document.getElementById("counter");
let message=document.getElementById("message");
console.log(username);
console.log(counter);
console.log(message);
username.addEventListener("input",function(){
    console.log(username.value);
    console.log(username.value.length);
    if (username.value.trim()===""){
        message.textContent=" please enter your username!";
       

        
    }
    else{
        message.textContent="you entered your name successfully";
         
        
    }
    counter.textContent=username.value.length;

});


let result=document.getElementById("result");
let province=document.getElementById("province");
result.textContent="please enter your province please!";
province.addEventListener("input",function(){
    if (province.value.trim()===""){
        result.textContent="please enter your province!";
    }
    else{
        result.textContent="your province entered successcully";
        result.textContent=province.value.length;
    }
});
let phone=document.getElementById("phone");
let number=document.getElementById("number");
let correct=document.getElementById("correct");
phone.addEventListener("input",function(){
    if(phone.value.trim()===""){
        number.textContent="enter your phone number";


    }
    else if(phone.value.length!=10){
        number.textContent="enter the correct number please!";

    }
    else if(isNaN(phone.value)){
        number.textContent="";
        correct.textContent="please enter number only";
        
        
    }
    else{
        correct.textContent="";
        number.textContent="you have successfully entered the phone number";
    
}});