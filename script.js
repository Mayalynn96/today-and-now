// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // code to apply the past, present, or future class to each time block by comparing the id to the current hour.
  var allTimeBlockEl = document.getElementById("allTimeBlocks").children;
  var now = "hour-"+dayjs().format("HH");

  for(var i = 0; i < allTimeBlockEl.length; i++) {
    if(allTimeBlockEl[i].getAttribute("id") === now) {
      allTimeBlockEl[i].setAttribute("class", "row time-block present")
    } else if(allTimeBlockEl[i].getAttribute("id") < now) {
      allTimeBlockEl[i].setAttribute("class", "row time-block past")
    } else {
      allTimeBlockEl[i].setAttribute("class", "row time-block future")
    }
  }
  
  var timeBlocks = [
    {
      id: "hour-09",
      text: "Going to class"
    },
    {
      id: "hour-15",
      text: "Done with class"
    },
    {
      id: "hour-10",
      text: "in Class"
    }
  ]
for(var i = 0; i < timeBlocks.length; i++){
  for(var j = 0; j < allTimeBlockEl.length; j++){
    if(timeBlocks[i].id === allTimeBlockEl[j].getAttribute("id")) {
      allTimeBlockEl[j].children[1].textContent = timeBlocks[i].text;
      console.log(timeBlocks[i].text)
    }
  }
}
console.log(allTimeBlockEl[i].children[1])
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // Code to display the current date in the header of the page.
  var today = dayjs().format("dddd, MMM D, YYYY")
  document.getElementById("currentDay").textContent = today;
});