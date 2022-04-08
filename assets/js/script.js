const textArea = document.getElementById("#userInput")

var allUserData =[]
/*Displays the date in jumbotron----------------------------------------*/
function displayDate (){
var currentDate= moment().format("MMM Do, YYYY");
$("#today-date").text(currentDate)
}

setInterval(displayDate,1000)


/*save btn function-----------------------------------------------------*/
 $(".saveBtn").on("click", function(){
    var userData = $(this).siblings("textarea").val()
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, userData)
    // console.log(userData)
    // UserData = JSON.stringify(userData)
    // allUserData.push(userData)
    // localStorage.setItem("allUserData", allUserData)
    // localStorage.getItem("userData", userData)

    // var test = document.createElement("h3")


 })

/*refresh page doesnt get rid of text area content--------------------*/

// $("textarea").val(localStorage.getItem(allUserData))


$(document).ready(function(){
    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
})