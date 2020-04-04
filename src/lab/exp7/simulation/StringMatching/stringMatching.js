//---------------------------------+
// Author: Parvesh Kumar Gahanolia |
// Email: <parvesh@vlabs.ac.in>    |
//---------------------------------+
window.model = {
	inputString1: '', //user input 1st string.
	inputString2 : '', //user input 2st string.
}

window.view = {
	i: 0, // represent index number of table for i character.	
	k: 1, // represent index number of table for k character.
	j: 0, // represent index number of table for j character.	
	s1i: 0, // represent index numbar of string 1st for i character.
	s1k: 0, // represent index numbar of string 1st for k character.
	s2j: 0, // represent index numbar of string 2nd for j character.
	currentSiblingElement: new Object(), // Object value of current sibling.
	nextSiblingElement: new Object(), // Object value of next sibling.
	// below two string show final result at the end of code execution.
	outputStrSM1: 'String str2 is found in str1.',
	outputStrSM2: 'String str2 is not found in str1.',
	// addClickEvent: add EventListener to other methods.
	addClickEvent: function (id, method) {
		var element = document.getElementById(id);
		element.addEventListener('click', method, false);
	},
	// activateEvents: calls addClickEvent method to add EventListener to other methods.
	activateEvents: function() {
		this.addClickEvent('startBtnId', function() { view.startExperiment() });
		this.addClickEvent('okBtnId', function() { view.validationInput() });
		this.addClickEvent('nextBtnId', function() { view.matchString() });
		this.addClickEvent('stopBtnId', function() { view.stopExperiment() });
	},
	// setValue: set given value to a element.
	setValue: function (id, value) {
		document.getElementById(id).value = value;
	},
	// disableElement: makes element disable.
	disableElement: function(Id) {
		document.getElementById(Id).disabled = true;
	},
	// enableElement: makes element enable.
	enableElement: function(Id) {
		document.getElementById(Id).disabled = false;
	},
	// changeClass: changes class name of a element.
	changeClass: function(id, className) {
		document.getElementById(id).className = className
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
	// getString: return string from element.
	getString: function (id) {
		var string = document.getElementById(id).value;
		return string;
	},
	// getNextSiblingElement: return next sibling element.
	getNextSiblingElement: function (element) {
		var nextSiblingElement = element.nextSibling;
		nextSiblingElement = nextSiblingElement.nextSibling;
		return nextSiblingElement;
	},
	// setValue: set given value to a element.
	setValue: function (id, valueToSet) {
		document.getElementById(id).value = valueToSet;
	},
	// getElementByClass: return element by given class name.
	getElementByClass: function (className) {
		var element = document.getElementsByClassName(className);
		return element[0];
	},
	// resetVariables: reset variables to it's initial state in the middle of code execution.
	resetVariables: function () {
		this.j = 0;
		this.s2j = 0;
	},
	// resetStrings: clear all output values that displayed during the execution.
	resetStrings: function () {
		this.setInnerHtml('outputStr', '');
		this.setInnerHtml('iVariable', '');
		this.setInnerHtml('jVariable', '');
		this.setInnerHtml('kVariable', '');
		this.setInnerHtml('iValue', '');
		this.setInnerHtml('jValue', '');
		this.setInnerHtml('kValue', '');
	},
	/* validationInput: check validation of input that is given by user and if input value is valid 
	then make text field and ok button disable and make start button enable. */
	validationInput: function () {
		model.inputString1 = this.getString('str1Id');
		model.inputString2 = this.getString('str2Id');
		if ( model.inputString1.length > 7 || model.inputString2.length > 7 || model.inputString1.length < 1 || model.inputString2.length < 1 || model.inputString2.length > model.inputString1.length) {
			alert('Maximum String Size allowed is Seven, Minimum Size is One and size of str2 should be less than equal to size of str1');
			return false;
		}
		else{
			var i=0;
			var j=0;
			var k=0;
			for(i=0 ; i < model.inputString1.length ; i++){
					if( model.inputString1[i] == ' '){
							j=1;
					}
			}
			for(i=0; i < model.inputString2.length ; i++){
					if(model.inputString2[i]== ' '){
							k=1;
					}
			}
			if(j==1 && k==1){
				alert("Input the strings with no spaces in it");
				return false;
			}
			else if(j==1 && k==0){
				alert("Input the string str1 with no spaces in it");
				return false;
			}
			else if(j==0 && k==1){
				alert("Input the string str2 with no spaces in it");
				return false;
			}
		}
		this.changePropertyOfElements();
		this.resetStrings();
		this.resetTable();
	},
	// changePropertyOfElements: changes property of elemants with enableElement, disableElement and changeClass.
	changePropertyOfElements: function () {
		this.enableElement('startBtnId');
		this.disableElement('okBtnId');
		this.disableElement('str1Id');
		this.disableElement('str2Id');
		this.changeClass('okBtnId', 'buttonDisable startButton');
		this.changeClass('startBtnId', 'button myStartButton');
	},
	// startExperiment: work to start code execution.
	startExperiment: function () {
		this.replaceElement('startBtnId', 'stopBtnId');
		this.enableElement('stopBtnId');
		this.enableElement('nextBtnId');
		this.disableElement('startBtnId');
		this.applyColorClass('codeContentId1', 'redClass');
		this.changeClass('startBtnId', 'myStartButton button');
		this.changeClass('stopBtnId', 'myStartButton button');
		this.changeClass('nextBtnId', 'nextButton button');
	},
	// stopExperiment: stop code execution at any point.
	stopExperiment: function () {
		this.endOfExecution();
	},
	// setStringInTable: set characters of string in table.
	setStringInTable: function (id, string) {
		for (var i = 0; i <= string.length; ++i) {
			if ( i < string.length ) {
				document.getElementById(id).rows[0].cells[i].innerHTML = string[i];
			}
			else if ( i === string.length ) {
				document.getElementById(id).rows[0].cells[i].innerHTML = '/0';
			}
		}
	},
	// clearStringTable: clear characters of string from table.
	clearStringTable: function (id) {
		var tableLength = document.getElementById(id).rows[0].cells.length;
		for (var i = 0; i <= tableLength; ++i) {
			if ( i < tableLength ) {
				document.getElementById(id).rows[0].cells[i].innerHTML = '';
			}
			else if ( i === tableLength ) {
				document.getElementById(id).rows[0].cells[0].innerHTML = '/0';
			}
		}
	},
	// clearStringTable: clear variable from table.
	clearVariableTable: function (id) {
		var tableLength = document.getElementById(id).rows[0].cells.length;
		for (var i = 0; i <= tableLength; ++i) {
			if ( i < tableLength ) {
				document.getElementById(id).rows[0].cells[i].innerHTML = '';
			}
		}
	},
	// resetTable: calls other method that clear table.
	resetTable: function () {
		this.clearStringTable('memoryMap1');
		this.clearVariableTable('variableMap1');
		this.clearStringTable('memoryMap2');
		this.clearVariableTable('variableMap2');
	},
	// showVariables: show variable at given position in table.
	showVariables: function (id, variable, value) {
		document.getElementById(id).rows[0].cells[variable].innerHTML = value;
	},
	// hideVariables: hide variable from given position in table.
	hideVariables: function (id, variable) {
		document.getElementById(id).rows[0].cells[variable].innerHTML = '';
	},
	// setInnerHtml: set innerText to a element.
	setInnerHtml: function (id, innerText) {
		document.getElementById(id).innerHTML = innerText;
	},
	// resetVariablesAtEnd: reset all variables to it's initial state at the end of code execution.
	resetVariablesAtEnd: function () {
		this.i = 0;
		this.k = 1;	
		this.j = 0;
		this.s1i = 0;
		this.s1k = 0;
		this.s2j = 0;
		model.inputString1 = '';
		model.inputString2 = '';
	},
	// resetButtonAndTextField: reset button it's initial state and do text field enable.
	resetButtonAndTextField: function () {
		this.replaceElement('stopBtnId', 'startBtnId');
		this.enableElement('str1Id');
		this.enableElement('str2Id');
		this.enableElement('okBtnId');
		this.disableElement('nextBtnId');
		this.disableElement('stopBtnId');
		this.changeClass('okBtnId', 'button startButton');
		this.changeClass('startBtnId', 'buttonDisable myStartButton');
		this.changeClass('stopBtnId', 'buttonDisable startButton');
		this.changeClass('nextBtnId', 'buttonDisable nextButton');
	},
	// endOfExecution: work at end of code execution and with stop button to reset whole experiment at it's initial state.
	endOfExecution: function () {
		this.resetVariablesAtEnd();
		this.resetButtonAndTextField();
		this.setValue('str1Id', '');
		this.setValue('str2Id', '');
		var idOfRedText = this.getElementByClass('redClass').id;
		this.removeColorClass(idOfRedText, 'redClass');
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
	// showVariablesijk: shows i, j and k variable during code execution.
	showVariablesijk: function () {
		this.setInnerHtml('iVariable', 'i = ');
		this.setInnerHtml('jVariable', 'j = ');
		this.setInnerHtml('kVariable', 'k = ');
	},
	// showStringInMemoryMap: calls other methods that set string characters in table.
	showStringInMemoryMap: function () {
		this.setStringInTable('memoryMap1', model.inputString1);
		this.setStringInTable('memoryMap2', model.inputString2);
	},
	// initializationOfVariables: initialize i, j and k variable with zero during code execution.
	initializationOfVariables: function () {
		this.setInnerHtml('iValue', '0');
		this.setInnerHtml('jValue', '0');
		this.setInnerHtml('kValue', '0');
	},
	// assignValueiTok: assign i variable value to k variable.
	assignValueiTok: function () {
		this.codeExecutionWithColour();
		this.showVariables('variableMap1', this.i, 'i');
		this.hideVariables('variableMap1', this.k);
		this.k = 1 + this.i;
		this.showVariables('variableMap1', this.k, 'k');
		this.hideVariables('variableMap2', this.j);
		this.resetVariables();			
		this.showVariables('variableMap2', this.j, 'j');
		this.setInnerHtml('kValue', this.s1k);
		this.setInnerHtml('jValue', this.s2j);
	},
	// incrementInVariableValue: do increment in value of variables.
	incrementInVariableValue: function () {
		this.codeExecutionWithColourAndId('codeContentId12');
		this.s1k = this.s1k + 1;
		this.s2j = this.s2j + 1;
		this.setInnerHtml('kValue', this.s1k);
		this.setInnerHtml('jValue', this.s2j);
		this.hideVariables('variableMap2', this.j);
		this.j = this.j + 2;
		this.showVariables('variableMap2', this.j, 'j');
		this.hideVariables('variableMap1', this.k);
		this.k = this.k + 2;
		this.showVariables('variableMap1', this.k, 'k');
	},
	// assignStringVariableValueiTok: assign string index value of i to string index value of k.
	assignStringVariableValueiTok: function () {
		this.codeExecutionWithColourAndId('codeContentId18');
		this.s1i = this.s1i + 1;
		this.s1k = this.s1i;
		this.setInnerHtml('iValue', this.s1i);
		this.hideVariables('variableMap1', this.i);
		this.i = this.i + 2;
		this.showVariables('variableMap1', this.i, 'i');
	},
	// matchString: match two string characters during code execution and show final result at end of code.
	matchString: function() {
		this.currentSiblingElement = this.getElementByClass('redClass');
		if ((this.currentSiblingElement.id === 'codeContentId6' && this.s1i === model.inputString1.length) || this.currentSiblingElement.id === 'codeContentId16') {
			this.endOfExecution();
		}
		this.nextSiblingElement = this.getNextSiblingElement(this.currentSiblingElement);
		if (this.nextSiblingElement.id === 'codeContentId2' || this.nextSiblingElement.id === 'codeContentId6' || this.nextSiblingElement.id === 'codeContentId8' || this.nextSiblingElement.id === 'codeContentId16')
			this.codeExecutionWithColour();
		else if (this.nextSiblingElement.id === 'codeContentId3') {
			this.codeExecutionWithColour();
			this.showVariablesijk();
		}
		else if (this.nextSiblingElement.id === 'codeContentId4') {
			this.codeExecutionWithColour();
			this.showStringInMemoryMap();	
		}
		else if (this.nextSiblingElement.id === 'codeContentId5') {
			this.codeExecutionWithColour();
			this.initializationOfVariables();
		}
		else if (this.nextSiblingElement.id === 'codeContentId7') {
			if (this.s1i != model.inputString1.length)
				this.assignValueiTok();
			else if (this.s1i === model.inputString1.length) {
				this.setInnerHtml('outputStr', this.outputStrSM2);
			}
		}
		else if (this.nextSiblingElement.id === 'codeContentId9') {
			if (this.s1k != model.inputString1.length && this.s2j != model.inputString2.length)
				this.codeExecutionWithColour();
			else if (this.s1k === model.inputString1.length || this.s2j === model.inputString2.length )
				this.codeExecutionWithColourAndId('codeContentId14');
		}
		else if (this.nextSiblingElement.id === 'codeContentId10') {
			if (model.inputString1[this.s1k] != model.inputString2[this.s2j])
				this.codeExecutionWithColour();
			else if (model.inputString1[this.s1k] === model.inputString2[this.s2j])
				this.incrementInVariableValue();
		}
		else if (this.nextSiblingElement.id === 'codeContentId13')
			this.codeExecutionWithColourAndId('codeContentId8');
		else if (this.nextSiblingElement.id === 'codeContentId11' && model.inputString1[this.s1k] != model.inputString2[this.s2j])
			this.codeExecutionWithColourAndId('codeContentId14');
		else if (this.nextSiblingElement.id === 'codeContentId15') {
			if (this.s2j === model.inputString2.length) {
				this.codeExecutionWithColour();
				this.setInnerHtml('outputStr', this.outputStrSM1);
			}
			else if (this.s2j != model.inputString2.length) 
				this.assignStringVariableValueiTok();
		}
		else if (this.nextSiblingElement.id === 'codeContentId17') {
		}
		else if (this.nextSiblingElement.id === 'codeContentId19')
			this.codeExecutionWithColourAndId('codeContentId6');
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