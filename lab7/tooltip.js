/* write functions that define the action for each event */
function showTip() {
	var sidTip = document.getElementById("sidTip"); //obtain access to the HTML tool tip element using id "sidTip" and link it a varialbe named sidTip
	sidTip.style.display = "inline";  				//display the HTML tool tip element sidTip bying change the value of its CSS property "display" to "inline"
}

function hideTip() {  								//this function hides the tool tip
	var sidTip = document.getElementById("sidTip"); //first, get access to the tool tip HTML element
	sidTip.style.display = "none";					//then, hide the tool tip HTML element by changing its CSS property "display" to "none"
}

function init() {									/* the init function links functions to appropriate events of corresponding HTML elements */
	/* create a variable named sid */
	var sid = document.getElementById("sid");		/* get access to the HTML element by its id "sid" and link it to sid */

	sid.onmouseover = showTip;						/* link function showTip to the onmouseover event of sid */
	sid.onmouseout = hideTip;						/* link function hideTip to the onmouseout event of sid  */
}

							/* link function init to the onload event of the window so that function init will be called when the page is loaded */

function showTip() {
	var passTip = document.getElementById("passTip"); //obtain access to the HTML tool tip element using id "passTip" and link it a varialbe named passTip
	passTip.style.display = "inline";  				//display the HTML tool tip element passTip bying change the value of its CSS property "display" to "inline"
}

function hideTip() {  								//this function hides the tool tip
	var passTip = document.getElementById("passTip"); //first, get access to the tool tip HTML element
	passTip.style.display = "none";					//then, hide the tool tip HTML element by changing its CSS property "display" to "none"
}

function init() {									/* the init function links functions to appropriate events of corresponding HTML elements */
	/* create a variable named pwd1 */
	var pwd1 = document.getElementById("pwd1");		/* get access to the HTML element by its id "pass" and link it to pass*/

	pwd1.onmouseover = showTip;						/* link function showTip to the onmouseover event of pass */
	pwd1.onmouseout = hideTip;						/* link function hideTip to the onmouseout event of pass  */
}

window.onload = init;								/* link function init to the onload event of the window so that function init will be called when the page is loaded */