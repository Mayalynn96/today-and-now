
$(function () {
  // using the id in the containing time-block as a key to save the user input in
  // local storage. 
  var allBlocksString = localStorage.getItem("allBlocks")
  var allBlocks = JSON.parse(allBlocksString) || [];

  var allSaveBtns = $('.saveBtn');
  for(var i = 0; i < allSaveBtns.length; i++){
    allSaveBtns[i].addEventListener("click", function() {
      var newBlock = {
        id: $(this).parent().attr('id'), 
        text: $(this).siblings("textarea").val(),
      }
      allBlocks.push(newBlock)

      localStorage.setItem("allBlocks", JSON.stringify(allBlocks))
    })
  }


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
  
  // code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  for(var i = 0; i < allBlocks.length; i++){
    for(var j = 0; j < allTimeBlockEl.length; j++){
      if(allBlocks[i].id === allTimeBlockEl[j].getAttribute("id")) {
        allTimeBlockEl[j].children[1].textContent = allBlocks[i].text;
      }
    }
  }
  // Code to display the current date in the header of the page.
  var today = dayjs().format("dddd, MMM D, YYYY")
  document.getElementById("currentDay").textContent = today;

  // Additional code for the clear all button on top of the page
  var clearBtn = $("#clearAll")
  
  clearBtn.on("click", function() {
    localStorage.clear();
    location.reload();
  })
});