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
    localStorage.setItem("userData", userData)
    console.log(userData)
    UserData = JSON.stringify(userData)
    allUserData.push(userData)
    localStorage.setItem("allUserData", allUserData)
    localStorage.getItem("userData", userData)
    console.log(allUserData)

    for ( var i = 0; i < allUserData.length; i++){

    }
 })

/*refresh page doesnt get rid of text area content--------------------*/
