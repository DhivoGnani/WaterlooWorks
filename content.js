// functionality to update WaterlooWorks posting table
function UpdatePostingsTable(postingsTable) {
	// get table bodies from posting table
	var tableBodies = postingsTable.tBodies;
	// first item contains postings
	var postings = tableBodies.item(0);

	// iterate for each row
	for (var i = 0, row; row = postings.rows[i]; i++) {

	   // first cell contains acceptance result
	   var acceptanceResult = row.cells[0];
	   // remove whitespace from text
	   var acceptanceResultText = removeWhiteSpaces(acceptanceResult.textContent);
	   // 6th cell contains application status
	   var applicationStatus = row.cells[6].textContent;

	   // condition determines that application was not selected
	   if (!Selected(acceptanceResultText) && (NotSelected(applicationStatus) || NotSelected(acceptanceResultText))) {
	   		// update tesxt of acceptance result
	   		acceptanceResult.textContent = "Not Selected";
	   		acceptanceResult.style.textAlign = "center";
	   }
	   // change color of not selected postings to red
	   if(NotSelected(acceptanceResult.textContent)) {
	   		acceptanceResult.style.color = "Red";
	   }
	   // change color of selected postings to green
	   if (Selected(acceptanceResultText)) {
	   		acceptanceResult.style.color = "Green";
	   }

	}
}

// checks to see if selected
function Selected(text) {
	switch(text){
		case "Selected for Interview":
			return true;
		default:
			return false; 
	}
}

// checks to see if not selected
function NotSelected(text) {
	switch(text) {
		case "Interview Complete":
		case "Not Selected":
		case "Interview Selections Complete":
		case "Emp Rankings Finalized":
			return true;
		default:
			return false;
	}
}

// remove unnecessary whitespace from text	
function removeWhiteSpaces(text){
	return text.replace(/\s+/g,' ').trim();
}

// try to get posting table and update it 
function Start() {
	var postingsTable = document.getElementById("postingsTable");
	if(postingsTable) {
		UpdatePostingsTable(postingsTable)
	}
}


// Wait until document is ready
var tid = setInterval( function () {
    if ( document.readyState !== 'complete' ) return;
    clearInterval( tid );       
	// Start
	Start();
}, 100 );
