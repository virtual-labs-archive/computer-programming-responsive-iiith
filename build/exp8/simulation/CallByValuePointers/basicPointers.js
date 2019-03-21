//---------------------------------+
// Author: Parvesh Kumar Gahanolia |
// Email: <parvesh@vlabs.ac.in>    |
//---------------------------------+

window.model = {

}

window.view = {

	currentSiblingElement: new Object(), // Object of current sibling.
	nextSiblingElement: new Object(), // Object of next sibling.
	previousSiblingElement: new Object(), // Object of previous sibling.
	// below strings show explanation and output during of code execution.
	explanationBP1: 'This program gives the basics of variable initialization and memory mapping. It also demonstrates what pointers are.',
	explanationBP2: 'Variable A is defined as integer type and initialized to value 10.',
	explanationBP3: 'value stored in variable A is 10 which is displayed in the output.',
	explanationBP4: '& or address operator is used to display the address of the variable.',
	explanationBP5: 'a pointer P is defined.',
	explanationBP6: 'the pointer P stores the address of variable A. We say that \'P points A\'.',
	explanationBP7: 'the value in P is displayed.',
	explanationBP8: '*P refers to the value at location pointed by P. And hence the value in A is changed to 20.',
	explanationBP9: 'Program execution complete.',
	outputBP1: 'Value of A is 10',
	outputBP2: 'Address of A is 60',
	outputBP3: 'Value of P is 60.',
	outputBP4: 'Address of P is 56',
	outputBP5: 'Value at the address in P is 10',
	outputBP6: 'New Value of A is 20',
	// addClickEvent: add EventListener to other methods.
	addClickEvent: function (id, method) {
		var element = document.getElementById(id);
		element.addEventListener('click', method, false);
	},
	// activateEvents: calls addClickEvent method to add EventListener to other methods.
	activateEvents: function() {
		this.addClickEvent('startBtnId', function() { view.startExecution() });
		this.addClickEvent('backBtnId', function() { view.reverseExecution() });
		this.addClickEvent('nextBtnId', function() { view.continueExecution() });
	},
	// setString: set given string to a element.
	setString: function (id, string) {
		document.getElementById(id).innerHTML = string;
	},
	// enableElement: makes element enable.
	enableElement: function(Id) {
		document.getElementById(Id).disabled = false;
	},
	// disableElement: makes element disable.
	disableElement: function(Id) {
		document.getElementById(Id).disabled = true;
	},
	// changeClass: changes class name of a element.
	changeClass: function(id, className) {
		document.getElementById(id).className = className;
	},
	// applyColorClass: adds new color class to a element.
	applyColorClass: function (id, colorClass) {
		document.getElementById(id).classList.add(colorClass);
	},
	// removeColorClass: removes color class from element.
	removeColorClass: function (id, colorClass) {
		document.getElementById(id).classList.remove(colorClass);
	},
	// replaceElement: replace one element by another element.
	replaceElement: function (id1, id2) {
		document.getElementById(id1).style.display = 'none';
		document.getElementById(id2).style.display = 'block';
	},
	// eraseString: erase string from a given element.
	eraseString: function (id) {
    		document.getElementById(id).innerHTML = '';
	},
	// setInnerHtml: set innerText to a element.
	setInnerHtml: function (id, innerText) {
 		document.getElementById(id).innerHTML = innerText;
 	},
 	// getElementByClass: return element by given class name.
	getElementByClass: function (className) {
		var element = document.getElementsByClassName(className);
		return element[0];
	},
	// getNextSiblingElement: return next sibling element.
	getNextSiblingElement: function (element) {
		var nextSiblingElement = element.nextSibling;
		nextSiblingElement = nextSiblingElement.nextSibling;
		return nextSiblingElement;
	},
	// getPsreviousSiblingElement: return psrevious sibling element.
	getPsreviousSiblingElement: function (element) {
		var previousSiblingElement = element.previousSibling ;
		previousSiblingElement = previousSiblingElement.previousSibling;
		return previousSiblingElement;
	},
	// codeExecutionWithColour: shows execution of code by changing color in code Content.
	codeExecutionWithColour: function () {
		this.removeColorClass(this.currentSiblingElement.id, 'redClass');
		this.applyColorClass(this.nextSiblingElement.id, 'redClass');
	},
	// reverseCodeExecutionWithColour: shows reverse execution of code by changing color in code Content.
	reverseCodeExecutionWithColour: function () {
		this.removeColorClass(this.currentSiblingElement.id, 'redClass');
		this.applyColorClass(this.previousSiblingElement.id, 'redClass');
	},
	// eraseValueAtAddress60: erase value from memory map where address is 60.
	eraseValueAtAddress60: function () {
		this.setInnerHtml('60byte1', '');
		this.setInnerHtml('60byte2', '');
		this.setInnerHtml('60byte3', '');
		this.setInnerHtml('60byte4', '');
		this.setInnerHtml('60variable', '');
	},
	// eraseValueAtAddress56: erase value from memory map where address is 56.
	eraseValueAtAddress56: function () {
		this.setInnerHtml('56byte1', '');
		this.setInnerHtml('56byte2', '');
		this.setInnerHtml('56byte3', '');
		this.setInnerHtml('56byte4', '');
	},
	// setValueAtAddress60: set value in memory map where address is 60.
	setValueAtAddress60: function () {
		this.setInnerHtml('60byte1', '0');
		this.setInnerHtml('60byte2', '0');
		this.setInnerHtml('60byte3', '0');
		this.setInnerHtml('60byte4', '10');
		this.setInnerHtml('60variable', 'A');
	},
	// setValueAtAddress56: set value in memory map where address is 56.
	setValueAtAddress56: function () {
		this.setInnerHtml('56byte1', '0');
		this.setInnerHtml('56byte2', '0');
		this.setInnerHtml('56byte3', '0');
		this.setInnerHtml('56byte4', '60');
	},
	// resetTable: calls methods that erase values from memory map. 
	resetTable: function () {
		this.eraseValueAtAddress60();
		this.eraseValueAtAddress56();
		this.setInnerHtml('56variable', '');
	},
	// resetVariables: reset all variables to it's initial state at the end of code execution.
	resetVariables: function () {
		currentSiblingElement = '';
		nextSiblingElement = '';
		previousSiblingElement = '';
	},
	// resetOutputField: reset output field in it's initial state at the end of code execution.
	resetOutputField: function () {
		this.setStringInElement('', '');
	},
	// setStringInElement: set string in element during the code execution.
	setStringInElement: function (string1, string2) {
		this.setString('outputText', string1);
		this.setString('explanationText', string2);
	},
	// eraseStringFromElement: erase string from element during the code execution.
	eraseStringFromElement: function (id1, id2, string) {
		this.eraseString(id1);
		this.setString(id2, string);
	},
	// resetButton: reset button it's initial state at the end of code execution.
	resetButton: function () {
		this.disableElement('nextBtnId');
		this.changeClass('nextBtnId', 'buttonDisable nextButton');
		this.replaceElement('backBtnId', 'startBtnId');
		this.enableElement('startBtnId');
		this.changeClass('startBtnId', 'button startButton');
	},
	// endOfExecution: work at end of code execution to reset whole experiment in it's initial state.
	endOfExecution: function () {
		this.resetTable();
		this.resetButton();
		this.resetOutputField();
		this.resetVariables();
		this.disableElement('nextBtnId');
		this.replaceElement('backBtnId', 'startBtnId');
		var idOfRedText = this.getElementByClass('redClass').id;
		this.removeColorClass(idOfRedText, 'redClass');
	},
	// startExecution: to start code execution.
	startExecution: function () {
		this.applyColorClass('codeContentBP1', 'redClass');
		this.replaceElement('startBtnId', 'backBtnId');
		this.disableElement('startBtnId');
		this.enableElement('nextBtnId');
		this.disableElement('backBtnId');
		this.eraseStringFromElement('outputText', 'explanationText', this.explanationBP1);
		this.changeClass('nextBtnId', 'button nextButton');
		this.changeClass('startBtnId', 'buttonDisable startButton');
	},
	// continueExecution: show values in memory map  and shows Code Output or Explanation during code execution.
	continueExecution: function () {
		this.currentSiblingElement = this.getElementByClass('redClass');
		if (this.currentSiblingElement.id === 'codeContentBP13') {
			this.endOfExecution();
		}
		this.nextSiblingElement = this.getNextSiblingElement(this.currentSiblingElement);
		this.codeExecutionWithColour();
		if (this.nextSiblingElement.id === 'codeContentBP2') {
			this.eraseString('explanationText');
			this.enableElement('backBtnId');
			this.changeClass('backBtnId', 'button startButton');
		}
		else if (this.nextSiblingElement.id === 'codeContentBP3') {
			this.setString('explanationText', this.explanationBP2);
			this.setValueAtAddress60();
		}
		else if (this.nextSiblingElement.id === 'codeContentBP4')
			this.setStringInElement(this.outputBP1, this.explanationBP3);
		else if (this.nextSiblingElement.id === 'codeContentBP5')
			this.setStringInElement(this.outputBP2, this.explanationBP4);
		else if (this.nextSiblingElement.id === 'codeContentBP6') {
			this.setInnerHtml('56variable', 'P');
			this.eraseStringFromElement('outputText', 'explanationText', this.explanationBP5);
		}
		else if (this.nextSiblingElement.id === 'codeContentBP7') {
			this.setString('explanationText', this.explanationBP6);
			this.setValueAtAddress56();
		}
		else if (this.nextSiblingElement.id === 'codeContentBP8')
			this.setStringInElement(this.outputBP3, this.explanationBP7);
		else if (this.nextSiblingElement.id === 'codeContentBP9') 
			this.eraseStringFromElement('explanationText', 'outputText', this.outputBP4);
		else if (this.nextSiblingElement.id === 'codeContentBP10')
			this.setString('outputText', this.outputBP5);
		else if (this.nextSiblingElement.id === 'codeContentBP11') {
			this.setInnerHtml('60byte4', '20');
			this.eraseStringFromElement('outputText', 'explanationText', this.explanationBP8);
		}
		else if (this.nextSiblingElement.id === 'codeContentBP12') 
			this.eraseStringFromElement('explanationText', 'outputText', this.outputBP6);
		else if (this.nextSiblingElement.id === 'codeContentBP13') {
			this.eraseStringFromElement('outputText', 'explanationText', this.explanationBP9);
			// this.disableElement('nextBtnId');
			// alert('Code running is Over !');
			// this.endOfExecution();
		}
	},
	// reverseExecution: show values in memory map  and shows Code Output or Explanation during reverse of code execution.
	reverseExecution: function () {
		this.currentSiblingElement = this.getElementByClass('redClass');
		this.previousSiblingElement = this.getPsreviousSiblingElement(this.currentSiblingElement);
		this.reverseCodeExecutionWithColour();
		if (this.previousSiblingElement.id === 'codeContentBP1') {
			this.setString('explanationText', this.explanationBP1);
			this.disableElement('backBtnId');
			this.changeClass('backBtnId', 'buttonDisable nextButton');
		}
		else if (this.previousSiblingElement.id === 'codeContentBP2') {
			this.eraseString('explanationText');
			this.eraseValueAtAddress60();
		}
		else if (this.previousSiblingElement.id === 'codeContentBP3') 
			this.eraseStringFromElement('outputText', 'explanationText', this.explanationBP2);
		else if (this.previousSiblingElement.id === 'codeContentBP4') 
			this.setStringInElement(this.outputBP1, this.explanationBP3);
		else if (this.previousSiblingElement.id === 'codeContentBP5') {
			this.setStringInElement(this.outputBP2, this.explanationBP4);
			this.setInnerHtml('56variable', '');
		}
		else if (this.previousSiblingElement.id === 'codeContentBP6') {
			this.eraseStringFromElement('outputText', 'explanationText', this.explanationBP5);
			this.eraseValueAtAddress56();
		}
		else if (this.previousSiblingElement.id === 'codeContentBP7')
			this.eraseStringFromElement('outputText', 'explanationText', this.explanationBP6);
		else if (this.previousSiblingElement.id === 'codeContentBP8')
			this.setStringInElement(this.outputBP3, this.explanationBP7);
		else if (this.previousSiblingElement.id === 'codeContentBP9')
			this.setString('outputText', this.outputBP4);
		else if (this.previousSiblingElement.id === 'codeContentBP10') {
			this.eraseStringFromElement('explanationText', 'outputText', this.outputBP5);
			this.setInnerHtml('60byte4', '10');
		}
		else if (this.previousSiblingElement.id === 'codeContentBP11')
			this.eraseStringFromElement('outputText', 'explanationText', this.explanationBP8);
		else if (this.previousSiblingElement.id === 'codeContentBP12') {
			this.eraseStringFromElement('explanationText', 'outputText', this.outputBP6);
			this.enableElement('nextBtnId');
		}
	},
	// init: calls methods to activate events.
	init: function () {
		this.activateEvents();
	}
}
// onload function: call init method on window onload.
window.onload = function () {
	window.view.init();
}
