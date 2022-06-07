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



function saveText (task){

    localStorage.setItem("task",JSON.stringify(task) );


    var text = localStorage.getItem("task",task);
    console.log("text", text);

    if(!text){
        return false;
      }
      text = JSON.parse(text);
      
    
     }



var saveTasks = function(){

document.querySelectorAll("button").forEach(el => el.addEventListener("click",function(){
    console.log("why did i do this to myself")

    var task = {
        hrNine: document.querySelector("div#hour-9 input[name='entries']").value,
        hrTen: document.querySelector("div#hour-10 input[name='entries']").value,
        hrEleven: document.querySelector("div#hour-11 input[name='entries']").value,
        hrTwelve: document.querySelector("div#hour-12 input[name='entries']").value,
        hrThirteen: document.querySelector("div#hour-13 input[name='entries']").value,
        hrFourteen: document.querySelector("div#hour-14 input[name='entries']").value,
        hrFifteen: document.querySelector("div#hour-15 input[name='entries']").value,
        hrSixteen: document.querySelector("div#hour-16 input[name='entries']").value,
        hrSeventeen: document.querySelector("div#hour-17 input[name='entries']").value
}
    
saveText(task)
}))

};

saveTasks();

// function getText(){

//     var text = JSON.parse(localStorage.getItem("task"));
//     console.log("text", text);
// }

// getText()