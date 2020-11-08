/*
Written by Brianna Cottrill - 10/23/2020
JavaScript file for moonshadow.html.
Used to get user input (radio checkbox selection and click of a submit button).
Radio checkbox selection is a number which is then used to determine how many random colors from the Sailor Moon x ColourPop Eyeshadow Palette to select.
*/

document.getElementsByName("transformBtn").onclick=function(){transform();};

function transform(){
	var selections = document.forms["selectionForm"].elements["numColors"].value;
	var sel = parseInt(selections);
	var paletteArray = ['Shining Moon', 'Twilight Flash', 'Silver Crystal', 'Moon Castle',
	                    'Fullmoon', 'Silver Millennium', 'Mare Serenitas', 'Luna',
						'Justice', 'Tuxedo Rose', 'Love', 'Miracle Romance'];
	var makeupArray = [];
	paletteArray.sort(function() { return 0.5 - Math.random();}) //Shuffles paletteArray.
	for(var i=1; i<=sel; i++){
	  makeupArray.push(paletteArray.pop());
	}
	makeupList = "<ul>";
	makeupArray.forEach(makeList);
	makeupList += "</ul>";
	document.getElementById("transformationDiv").innerHTML = makeupArray.join(" <br> ");
	//document.getElementById("transformationDiv").innerHTML = makeupList;
	
	function makeList(value) {
		makeupList += "<ol>" + value + "</ol>";
	}
}

