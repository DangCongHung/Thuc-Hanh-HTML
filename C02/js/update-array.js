var colors = ['white', 'black', 'custom'];


// update the third item in the array
colors[2] = 'beige';

//get the element with an id of colors
var el = document.getElementById('colors');
//Replace element with third item from the array
el.textContent = colors[2];

/*
Note: textCOntent does not work in IE8 or earlier
You can use innerHTML on line 10, but note the security issueson p228-231
el.innerHTML = colors[2];
 */