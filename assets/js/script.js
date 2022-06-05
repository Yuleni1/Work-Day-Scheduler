var entries = {};


//create variable to targer id for date
var currentDate = document.querySelector("#currentDay");
var inputData = document.querySelector("input");


//create a function for date
function showDate(){
var dateEl = document.createElement("div");
console.log(dateEl);
var today = moment().format('MMMM-Do-YYYY');
console.log(today);
dateEl.textContent=today;
currentDate.appendChild(dateEl);


}
showDate()
//push date into display

//Have dom check for time


//Find time from element
function timeChecker (){
var time = moment.utc().local().format("HH");
console.log("this is the time" ,time)


//for loop moving through by block class
//creat a function for the time to grey out if past due/red if current/green if in future.
$(".blocks").each(function(){
    console.log( );
    var blockId= parseInt($(this).attr("id").split('-')[1]);

    //hour, 9 [1]-2nd which is my "number" = number 
    console.log(blockId);

    if (blockId < time){
    
        $(this).addClass("past");
          }

    else if(blockId == time){
        $(this).addClass("present");
    
    }

    else if(blockId > time){
        $(this).addClass("future");
    
    }
   
});


}

timeChecker();


// var currText = "Hello World!";


// function ex1() {
//     console.log("Message 1");
// }

// ex1();

// function ex2(currText) {
//     console.log(currText)
// }

// ex2(currText);
// ex2("Second Message");



function saveText (currentText){

    localStorage.setItem("entries", currentText);
   

}

function getText(){

    var b = localStorage.getItem("entries");
    console.log(b);
}

//button clicked function

$("#cont .saveBtn").click(function(){
    console.log("button was clicked")

})


//text area function
$(".blocks").on("blur","input", function(){

    console.log("text are clicked")

    //get the current value

    var currentText = $(this)
    .val()
   .trim()
   console.log(currentText);

    saveText(currentText);
   

})
//save text to local storage

//add on click event to button 

