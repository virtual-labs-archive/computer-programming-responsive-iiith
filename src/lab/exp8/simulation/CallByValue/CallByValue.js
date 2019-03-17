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
	explanationCBR1: 'This program demonstrates the call-by-value method and why it is not useful for swapping.',
	explanationCBR2: 'Variables A and B are declared as integer types and assigned values 5 and 9 respectively.',
	explanationCBR3: 'Value stored in variable A is 5 which is displayed in the output.',
	explanationCBR4: 'Value stored in variable B is 9 which is displayed in the output.',
	explanationCBR5: 'The function \'swap\' is called and values of A and B are passed as arguments.',
	explanationCBR6: 'Function call. Local integer type  variables Pa and Pb get assigned the values of A and B respectively.',
	explanationCBR7: 'A local integer type variable \'temp\' is declared and the value in Pa is assigned to it i.e. Pa\'s value is stored in temp.',
	explanationCBR8: 'Value in Pa is changed to the value in Pb i.e. Pa\'s value is now stored in Pb.',
	explanationCBR9: 'Value in Pb is changed to the value of temp i.e. temp is now stored in Pb.',
	explanationCBR10: 'Function returns.',
	explanationCBR11: 'The same old value in variable A is 5 is displayed in the output.',
	explanationCBR12: 'The same old value in variable B is 9 is displayed in the output.',
	explanationCBR13: 'Program Execution Complete',
	outputCBR1: 'Value of A is 5',
	outputCBR2: 'Value of B is 9',
	outputCBR3: 'Value of A after swapping is 5',
	outputCBR4: 'Value of B after swapping is 9',
	// addClickEvent: add EventListener to other methods.
	addClickEvent: function (id, method) {
		var element = document.getElementById(id);
		element.addEventListener('click', method, false);
	},
	// activateEvents: calls addClickEvent method to add EventListener to other methods.
	activateEvents: function () {
		this.addClickEvent('startBtnId', function () { view.startExecution() });
		this.addClickEvent('nextBtnId', function () { view.continueExecution() });
		this.addClickEvent('backBtnId', function () { view.reverseExecution() });
	},
	// setString: set given string to a element.
	setString: function (id, string) {
		document.getElementById(id).innerHTML = string;
	},
	// enableElement: makes element enable.
	enableElement: function (Id) {
		document.getElementById(Id).disabled = false;
	},
	// disableElement: makes element disable.
	disableElement: function (Id) {
		document.getElementById(Id).disabled = true;
	},
	// changeClass: changes class name of a element.
	changeClass: function (id, className) {
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
		var previousSiblingElement = element.previousSibling;
		previousSiblingElement = previousSiblingElement.previousSibling;
		return previousSiblingElement;
	},
	// codeExecutionWithColour: shows execution of code by changing color in code Content.
	codeExecutionWithColour: function () {
		this.removeColorClass(this.currentSiblingElement.id, 'redClass');
		this.applyColorClass(this.nextSiblingElement.id, 'redClass');
	},
	// codeExecutionWithColourAndId: shows execution of code by changing color with given id in code Content.
	codeExecutionWithColourAndId: function (id) {
		this.removeColorClass(this.currentSiblingElement.id, 'redClass');
		this.applyColorClass(id, 'redClass');
	},
	// reverseCodeExecutionWithColour: shows reverse execution of code by changing color in code Content.
	reverseCodeExecutionWithColour: function () {
		this.removeColorClass(this.currentSiblingElement.id, 'redClass');
		this.applyColorClass(this.previousSiblingElement.id, 'redClass');
	},
	// setValueAtAddress60And56: set value in memory map where address is 60 and 56.
	setValueAtAddress60And56: function () {
		this.setInnerHtml('60byte1', '0');
		this.setInnerHtml('60byte2', '0');
		this.setInnerHtml('60byte3', '0');
		this.setInnerHtml('60byte4', '5');
		this.setInnerHtml('60variable', 'A');
		this.setInnerHtml('56byte1', '0');
		this.setInnerHtml('56byte2', '0');
		this.setInnerHtml('56byte3', '0');
		this.setInnerHtml('56byte4', '9');
		this.setInnerHtml('56variable', 'B');
	},
	// setValueAtAddress40And36: set value in memory map where address is 40 and 36.
	setValueAtAddress40And36: function () {
		this.setInnerHtml('40byte1', '0');
		this.setInnerHtml('40byte2', '0');
		this.setInnerHtml('40byte3', '0');
		this.setInnerHtml('40byte4', '5');
		this.setInnerHtml('40variable', 'Pa');
		this.setInnerHtml('36byte1', '0');
		this.setInnerHtml('36byte2', '0');
		this.setInnerHtml('36byte3', '0');
		this.setInnerHtml('36byte4', '9');
		this.setInnerHtml('36variable', 'Pb');
	},
	// setValueAtAddress32: set value in memory map where address is 32.
	setValueAtAddress32: function () {
		this.setInnerHtml('32byte1', '0');
		this.setInnerHtml('32byte2', '0');
		this.setInnerHtml('32byte3', '0');
		this.setInnerHtml('32byte4', '5');
		this.setInnerHtml('32variable', 'temp');
	},
	changeValueAtAddress40: function () {
		this.setInnerHtml('40byte4', '9');
	},
	changeValueAtAddress36: function () {
		this.setInnerHtml('36byte4', '5');
	},
	// eraseValueAtAddress60And56: erase value from memory map where address is 60 and 56.
	eraseValueAtAddress60And56: function () {
		this.setInnerHtml('60byte1', '');
		this.setInnerHtml('60byte2', '');
		this.setInnerHtml('60byte3', '');
		this.setInnerHtml('60byte4', '');
		this.setInnerHtml('60variable', '');
		this.setInnerHtml('56byte1', '');
		this.setInnerHtml('56byte2', '');
		this.setInnerHtml('56byte3', '');
		this.setInnerHtml('56byte4', '');
		this.setInnerHtml('56variable', '');
	},
	// eraseValueAtAddress36And40: erase value from memory map where address is 36 and 40.
	eraseValueAtAddress36And40: function () {
		this.setInnerHtml('40byte1', '');
		this.setInnerHtml('40byte2', '');
		this.setInnerHtml('40byte3', '');
		this.setInnerHtml('40byte4', '');
		this.setInnerHtml('40variable', '');
		this.setInnerHtml('36byte1', '');
		this.setInnerHtml('36byte2', '');
		this.setInnerHtml('36byte3', '');
		this.setInnerHtml('36byte4', '');
		this.setInnerHtml('36variable', '');
	},
	// eraseValueAtAddress32: erase value from memory map where address is 32.
	eraseValueAtAddress32: function () {
		this.setInnerHtml('32byte1', '');
		this.setInnerHtml('32byte2', '');
		this.setInnerHtml('32byte3', '');
		this.setInnerHtml('32byte4', '');
		this.setInnerHtml('32variable', '');
	},
	// swapValueBetweenAddress60And56: swaps value in memory map between address 60 and 56.
	swapValueBetweenAddress60And56: function () {
		if (this.nextSiblingElement.id === 'codeContentCBR6') {
			this.setInnerHtml('60byte4', '5');
			this.setInnerHtml('56byte4', '9');
		}
		else if (this.previousSiblingElement.id === 'codeContentCBR5') {
			this.setInnerHtml('60byte4', '5');
			this.setInnerHtml('56byte4', '9');
		}
	},
	// resetTable: calls methods that erase values from memory map.
	resetTable: function () {
		this.eraseValueAtAddress36And40();
		this.eraseValueAtAddress60And56();
		this.eraseValueAtAddress32();
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
		this.applyColorClass('codeContentCBR1', 'redClass');
		this.replaceElement('startBtnId', 'backBtnId');
		this.disableElement('startBtnId');
		this.enableElement('nextBtnId');
		this.disableElement('backBtnId');
		this.eraseStringFromElement('outputText', 'explanationText', this.explanationCBR1);
		this.changeClass('nextBtnId', 'button nextButton');
		this.changeClass('startBtnId', 'buttonDisable startButton');
	},
	// continueExecution: shows values in memory map and shows Code Output or Explanation during code execution.
	continueExecution: function () {
		this.currentSiblingElement = this.getElementByClass('redClass');
		if (this.currentSiblingElement.id === 'codeContentCBR9') {
			this.endOfExecution();
		}
		this.nextSiblingElement = this.getNextSiblingElement(this.currentSiblingElement);
		if (this.nextSiblingElement.id === 'codeContentCBR2') {
			this.codeExecutionWithColour();
			this.eraseString('explanationText');
			this.enableElement('backBtnId');
			this.changeClass('backBtnId', 'button startButton');
		}
		else if (this.nextSiblingElement.id === 'codeContentCBR3') {
			this.codeExecutionWithColour();
			this.setString('explanationText', this.explanationCBR2);
			this.setValueAtAddress60And56();
		}
		else if (this.nextSiblingElement.id === 'codeContentCBR4') {
			this.codeExecutionWithColour();
			this.setStringInElement(this.outputCBR1, this.explanationCBR3);
		}
		else if (this.nextSiblingElement.id === 'codeContentCBR5') {
			this.codeExecutionWithColour();
			this.setStringInElement(this.outputCBR2, this.explanationCBR4);
		}
		else if (this.nextSiblingElement.id === 'codeContentCBR6') {
			this.codeExecutionWithColour();
			this.eraseStringFromElement('outputText', 'explanationText', this.explanationCBR5);
			this.swapValueBetweenAddress60And56();
		}
		else if (this.nextSiblingElement.id === 'codeContentCBR7') {
			this.codeExecutionWithColourAndId('codeContentCBR11');
			this.setString('explanationText', this.explanationCBR6);
			this.setValueAtAddress40And36();
		}
		else if (this.nextSiblingElement.id === 'codeContentCBR12') {
			this.codeExecutionWithColour();
			this.setString('explanationText', this.explanationCBR7);
			this.setValueAtAddress32();
		}
		else if (this.nextSiblingElement.id === 'codeContentCBR13') {
			this.codeExecutionWithColour();
			this.setString('explanationText', this.explanationCBR8);
			this.changeValueAtAddress40();
		}
		else if (this.nextSiblingElement.id === 'codeContentCBR14') {
			this.codeExecutionWithColour();
			this.setString('explanationText', this.explanationCBR9);
			this.changeValueAtAddress36();

		}
		else if (this.nextSiblingElement.id === 'codeContentCBR15') {
			this.codeExecutionWithColour();
			this.setString('explanationText', this.explanationCBR10);
			this.eraseValueAtAddress36And40();
			this.eraseValueAtAddress32();
		}
		else if (this.nextSiblingElement.id === 'codeContentCBR16') {
			this.codeExecutionWithColourAndId('codeContentCBR7');
			this.setStringInElement(this.outputCBR3, this.explanationCBR11);
		}
		else if (this.nextSiblingElement.id === 'codeContentCBR8') {
			this.codeExecutionWithColour();
			this.setStringInElement(this.outputCBR4, this.explanationCBR12);
		}
		else if (this.nextSiblingElement.id === 'codeContentCBR9') {
			this.codeExecutionWithColour();
			this.eraseStringFromElement('outputText', 'explanationText', this.explanationCBR13);
		}
	},
	// reverseExecution: shows values in memory map  and shows Code Output or Explanation during reverse of code execution.
	reverseExecution: function () {
		this.currentSiblingElement = this.getElementByClass('redClass');
		this.previousSiblingElement = this.getPsreviousSiblingElement(this.currentSiblingElement);
		if (this.previousSiblingElement.id === 'codeContentCBR1') {
			this.reverseCodeExecutionWithColour();
			this.setString('explanationText', this.explanationCBR1);
			this.disableElement('backBtnId');
			this.changeClass('backBtnId', 'buttonDisable nextButton');
		}
		else if (this.previousSiblingElement.id === 'codeContentCBR2') {
			this.reverseCodeExecutionWithColour();
			this.eraseString('explanationText');
			this.eraseValueAtAddress60And56();
		}
		else if (this.previousSiblingElement.id === 'codeContentCBR3') {
			this.reverseCodeExecutionWithColour();
			this.eraseStringFromElement('outputText', 'explanationText', this.explanationCBR2);
		}
		else if (this.previousSiblingElement.id === 'codeContentCBR4') {
			this.reverseCodeExecutionWithColour();
			this.setStringInElement(this.outputCBR1, this.explanationCBR3);
		}
		else if (this.previousSiblingElement.id === 'codeContentCBR5') {
			this.reverseCodeExecutionWithColour();
			this.setStringInElement(this.outputCBR2, this.explanationCBR4);
			this.swapValueBetweenAddress60And56();
		}
		else if (this.previousSiblingElement.id === 'codeContentCBR10') {
			this.codeExecutionWithColourAndId('codeContentCBR6');
			this.setString('explanationText', this.explanationCBR5);
			this.eraseValueAtAddress36And40();
		}
		else if (this.previousSiblingElement.id === 'codeContentCBR11') {
			this.reverseCodeExecutionWithColour();
			this.setString('explanationText', this.explanationCBR6);
			this.eraseValueAtAddress32();
		}
		else if (this.previousSiblingElement.id === 'codeContentCBR12') {
			this.reverseCodeExecutionWithColour();
			this.setString('explanationText', this.explanationCBR7);
		}
		else if (this.previousSiblingElement.id === 'codeContentCBR13') {
			this.reverseCodeExecutionWithColour();
			this.setString('explanationText', this.explanationCBR8);
		}
		else if (this.previousSiblingElement.id === 'codeContentCBR14') {
			this.reverseCodeExecutionWithColour();
			this.setString('explanationText', this.explanationCBR9);
			this.setValueAtAddress40And36();
			this.setValueAtAddress32();
		}
		else if (this.previousSiblingElement.id === 'codeContentCBR6') {
			this.codeExecutionWithColourAndId('codeContentCBR15');
			this.eraseStringFromElement('outputText', 'explanationText', this.explanationCBR10);
		}
		else if (this.previousSiblingElement.id === 'codeContentCBR7') {
			this.reverseCodeExecutionWithColour();
			this.setStringInElement(this.outputCBR3, this.explanationCBR11);
		}
		else if (this.previousSiblingElement.id === 'codeContentCBR8') {
			this.reverseCodeExecutionWithColour();
			this.setStringInElement(this.outputCBR4, this.explanationCBR12);
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
