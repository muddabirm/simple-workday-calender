// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function(){
  //for currenrt date
  const currentDate = dayjs().format('dddd, MMMM D').toString();
  console.log(currentDate);
  $("#currentDay").html(currentDate);

  $(function () {
    //onclick button listener
  $("button").on("click",function(){
    var valueOne = $("#1").val() 
    var valueTwo = $("#2").val() 
    var valueThree = $("#3").val() 
    var valueFour = $("#4").val() 
    var valueFive = $("#5").val() 
    var valueSix = $("#6").val() 
    var valueSeven = $("#7").val() 
    var valueEight = $("#8").val() 
    var valueNine = $("#9").val() 
    localStorage.setItem("itemOne", valueOne);
    localStorage.setItem("itemTwo", valueTwo);
    localStorage.setItem("itemThree", valueThree);
    localStorage.setItem("itemFour", valueFour);
    localStorage.setItem("itemFive", valueFive);
    localStorage.setItem("itemSix", valueSix);
    localStorage.setItem("itemSeven", valueSeven);
    localStorage.setItem("itemEight", valueEight);
    localStorage.setItem("itemNine", valueNine);
  })
  $("timeBlock").each(function(){ //loops through each timeBlock div
  let time = dayjs().format('H').toString(); // grabs current time in 12/hr'
  let fakeTime = 3 // used for testing
  let timeShown = parseInt($(this).text());// parseInt used to remove the AM/PM from the string and turn the time into a number.
  console.log(timeShown);
  console.log(time);
  if(time)
  if (time == timeShown ){
    console.log("time is equal")
    $(this).removeClass("future past").addClass("present");
  }else if (time > timeShown){
    console.log("time is greater");
    $(this).removeClass("future present").addClass("past");
  }else if(time < timeShown) {
    console.log("time is less")
    $(this).removeClass("present past").addClass("future");

  }})
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
});
