//Create variables to hold the tittle and note text.
var title;
var message;

//Assign values to these variables.
title = "Mooly's Special Offers";
message = '<a href=\"sale.html\">25% off! </a>';

// Get the element with an id of title.
var elTitle = document.getElementById('title');
//Replace the content of this element.
elTitle.textContent = title;

//Get the element with an id of note.
var elNote = document.getElementById('note');
//Replace the content of this element.
elNote.innerHTML = message;

