const textArea = document.getElementById("#userInput")

/*Displays the date in jumbotron----------------------------------------------------*/
function displayDate (){
var currentDate= moment().format("MMM Do, YYYY");
$("#today-date").text(currentDate)
}

setInterval(displayDate,1000)

/*save btn function------------------------------------------------------------------*/
$(".saveBtn").on("click", function(){
    var userData = $(this).siblings("textarea").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, userData)
 })

/*refresh page doesnt get rid of text area content-----------------------------------*/

$(document).ready(function(){
    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    $("#hour-1 .description").val(localStorage.getItem("hour-1"))
    $("#hour-2 .description").val(localStorage.getItem("hour-2"))
    $("#hour-3 .description").val(localStorage.getItem("hour-3"))
    $("#hour-4 .description").val(localStorage.getItem("hour-4"))
    $("#hour-5 .description").val(localStorage.getItem("hour-5"))
})

/*changes each hour row color to resemble real time----------------------------------*/

function timeColor (){
var currentTime = moment().format("ha");
var timebox = $(this).parent().attr("class")

if (currentTime === timebox){

}