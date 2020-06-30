//---------------------------------+
// Author: Parvesh Kumar Gahanolia |
// Email: <parvesh@vlabs.ac.in>    |
//---------------------------------+

window.model = {
	inputNumber: 0, //user input text field.
}

window.view = {
	currentSiblingElement: new Object(), // Object value of current sibling.
	nextSiblingElement: new Object(), // Object value of next sibling.
	// addClickEvent: add EventListener to other methods.
	addClickEvent: function (id, method) {
		var element = document.getElementById(id);
		element.addEventListener('click', method, false);
	},
	// activateEvents: calls addClickEvent method to add EventListener to other methods.
	activateEvents: function() {
		this.addClickEvent('radioBtn1Id', function() { view.setValue('textFieldId', this.value) });
		this.addClickEvent('radioBtn2Id', function() { view.setValue('textFieldId', this.value) });
		this.addClickEvent('radioBtn3Id', function() { view.setValue('textFieldId', this.value) });
		this.addClickEvent('radioBtn4Id', function() { view.setValue('textFieldId', this.value) });
		this.addClickEvent('radioBtn5Id', function() { view.setValue('textFieldId', this.value) });
		this.addClickEvent('radioBtn6Id', function() { view.setValue('textFieldId', this.value) });
		this.addClickEvent('radioBtn7Id', function() { view.setValue('textFieldId', this.value) });
		this.addClickEvent('submitBtnId', function() { view.validationInput() });
		this.addClickEvent('startBtnId', function() { view.startStepExecution() });
		this.addClickEvent('nextBtnId', function() { view.showDayOfWeek() });
		this.addClickEvent('resetBtnId', function() { view.resetButtonSwitch() });	
	},
	// setInnerHtml: set innerText to a element.
 	setInnerHtml: function (id, innerHTML) {
 		document.getElementById(id).innerHTML = innerHTML;
 	},
 	// enableElement: makes element enable.
    	enableElement: function (id) {
    		document.getElementById(id).disabled = false;
    	},
    	// disableElement: makes element disable.
    	disableElement: function (id) {
    		document.getElementById(id).disabled = true;
    	},
    	// replaceElement: replace one element by another element.
    	replaceElement: function (id1, id2) {
    		document.getElementById(id1).style.display = 'none';
    		document.getElementById(id2).style.display = 'block';  	 
    	},
    	// changeClass: changes class name of a element.
	changeClass: function(id, className) {
		document.getElementById(id).className = className
	},
    	// setValue: set given value to a element.
    	setValue: function (id, value) {
		document.getElementById(id).value = value;
	},
	// getValue: get value from element.
	getValue: function (id) {
		var value = document.getElementById(id).value;
		return value;
	},
	// applyColorClass: adds new color class to a element.
	applyColorClass: function (id, colorClass) {
		document.getElementById(id).classList.add(colorClass);
	},
	// removeColorClass: removes color class from element.
	removeColorClass: function (id, colorClass) {
		document.getElementById(id).classList.remove(colorClass);
	},
	// getNextSiblingElement: return next sibling element.
	getNextSiblingElement: function (element) {
		var nextSiblingElement = element.nextSibling;
		nextSiblingElement = nextSiblingElement.nextSibling;
		return nextSiblingElement;
	},
	// getElementByClass: return element by given class name.
	getElementByClass: function (className) {
		var element = document.getElementsByClassName(className);
		return element[0];
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
	// changeOpacity: changes opacity of image.
	changeOpacity: function (id) {
		document.getElementById(id).style.opacity = '1';
	},
	// showDay: shows desire day that by showing output string and change opacity of day picture.
	showDay: function (id, previousChildId, imagesId, innerHTMLId, innerHTML) {
		this.codeExecutionWithColourAndId(id);
		this.setInnerHtml(innerHTMLId, innerHTML);
		this.changeOpacity(imagesId);	
	},
	// jumpToDay: to jump on desire day.
	jumpToDay: function () {
		switch (model.inputNumber) {
			case 1:
				this.showDay('case1Id', this.currentSiblingElement.id, 'mondayImages', 'strNullId', 'Monday');
  				break;
			case 2:
  				this.showDay('case2Id', this.currentSiblingElement.id, 'tuesdayImages', 'strNullId', 'Tuesday');
  				break;
			case 3:
  				this.showDay('case3Id', this.currentSiblingElement.id, 'wednesdayImages', 'strNullId', 'Wednesday');
  				break;
			case 4:
  				this.showDay('case4Id', this.currentSiblingElement.id, 'thursdayImages', 'strNullId', 'Thursday');
  				break;
			case 5:
  				this.showDay('case5Id', this.currentSiblingElement.id, 'fridayImages', 'strNullId', 'Friday');
  				break;
			case 6:
  				this.showDay('case6Id', this.currentSiblingElement.id, 'saturdayImages', 'strNullId', 'Saturday');
  				break;
			case 7:
  				this.showDay('case7Id', this.currentSiblingElement.id, 'sundayImages', 'strNullId', 'Sunday');
  				break;
  			default:
  				this.showDay('defaultId', this.currentSiblingElement.id, null, 'strNullId', 'null');
        		break;	
		}
	},
	/* validationInput: check validation of input that is given by user if input value is valid
	then make submit button disable and make start button enable. */
	validationInput: function () {
		var textFieldValue = this.getValue('textFieldId');
		if (textFieldValue === '' || isNaN(textFieldValue)) {
			alert('Enter Numeric Values Only');
			return false;
		} 
		else {
			this.changePropertyOfElements();
			model.inputNumber = Number(textFieldValue);
			this.setInnerHtml('idOfDay', model.inputNumber);
		}		
	},
	// changePropertyOfElements: changes property of elemants with enableElement, disableElement and changeClass.
	changePropertyOfElements: function () {
		this.disableElement('submitBtnId');
		this.enableElement('startBtnId');
		this.changeClass('startBtnId', 'button margin15');
		this.changeClass('submitBtnId', 'buttonDisable margin15');
		this.resetStrings();
		this.resetOpacityOfImages();
	},
	// resetRadioButton: reset radio button to it's initial state at the end of code execution.
	resetRadioButton: function () {
		var allRadios = document.getElementsByName('day_radio');
		for(x = 0; x < allRadios.length; x++) {
			allRadios[x].checked = false;
		}
	},
	// resetOpacityOfImages: set opacity of image it's initial state.
	resetOpacityOfImages: function () {
		document.getElementById('workingdayImage').style.opacity = '.2';
		document.getElementById('holidayImage').style.opacity = '.2';
		document.getElementById('mondayImages').style.opacity = '.3';
		document.getElementById('tuesdayImages').style.opacity = '.3';
		document.getElementById('wednesdayImages').style.opacity = '.3';
		document.getElementById('thursdayImages').style.opacity = '.3';
		document.getElementById('fridayImages').style.opacity = '.3';
		document.getElementById('saturdayImages').style.opacity = '.3';
		document.getElementById('sundayImages').style.opacity = '.3';
	},
	// resetVariables: reset variables to it's initial state at the end of code execution.
	resetVariables: function () {
		model.inputNumber = 0;
	},
	// resetStrings: clear all output values that displayed during the execution.
	resetStrings: function () {
		this.setInnerHtml('strNullId', '');
		this.setInnerHtml('idOfDay', '');
		this.setInnerHtml('outputDayId', '');
		//this.setValue('textFieldId', '');
	},
	// resetButton: reset button it's initial state at the end of code execution.
	resetButton: function () {
		this.enableElement('submitBtnId');
		this.changeClass('nextBtnId', 'buttonDisable margin15 hide');
		this.disableElement('startBtnId');
		this.changeClass('submitBtnId', 'button margin15');
		this.changeClass('startBtnId', 'buttonDisable margin15');
	},
	// endOfExecution: work at end of code execution and with stop button to reset whole experiment at it's initial state.
	endOfExecution: function () {
		this.resetVariables();
		this.resetRadioButton();
		//this.resetStrings();
		this.setValue('textFieldId', '');
		this.resetButton();
		var idOfRedText = this.getElementByClass('redClass').id;
		this.removeColorClass(idOfRedText, 'redClass');
		//this.resetOpacityOfImages();
	},
	// startStepExecution: work to start code execution.
	startStepExecution: function () {
		this.applyColorClass('mainId', 'redClass');
		this.changeClass('startBtnId', 'buttonDisable margin15 hide');
		this.changeClass('nextBtnId', 'button margin15');
		this.enableElement('nextBtnId');
	},
	// showDayOfWeek: shows code execution and gives final result at end of code.
	showDayOfWeek: function () {
		this.currentSiblingElement = this.getElementByClass('redClass');
		if (this.currentSiblingElement.id === 'closeBrc2Id') {
	 		this.endOfExecution();
	 	}
		this.nextSiblingElement = this.getNextSiblingElement(this.currentSiblingElement);
		if (this.nextSiblingElement.id === 'charId' || this.nextSiblingElement.id === 'strId' || this.nextSiblingElement.id === 'switchId')
			this.codeExecutionWithColour();
		if (this.nextSiblingElement.id === 'case1Id')
       		this.jumpToDay();
		if (this.nextSiblingElement.className === 'break')
			this.codeExecutionWithColour();
	 	if (this.currentSiblingElement.className === 'break redClass')
			this.codeExecutionWithColourAndId('closeBrc1Id');
		if (1 <= model.inputNumber && model.inputNumber <= 5) {
	 		if (this.nextSiblingElement.id === 'holidayId')
				this.codeExecutionWithColourAndId('elseIfId');
	 		else if (this.nextSiblingElement.id === 'workingdayId') {
	 			this.codeExecutionWithColour();
				this.changeOpacity('workingdayImage');
				this.setInnerHtml('outputDayId', 'WORKING DAY');
	 		}
	 	}
		if ( model.inputNumber > 7 ) {
	 		if (this.nextSiblingElement.id === 'holidayId')
				this.codeExecutionWithColourAndId('elseIfId');
	 		else if (this.nextSiblingElement.id === 'workingdayId') 
				this.codeExecutionWithColourAndId('elseId');
	 		else if (this.nextSiblingElement.id === 'invalidIPId') {
				this.codeExecutionWithColour();
				this.setInnerHtml('outputDayId', 'INVALID INPUT');
	 		}
	 	}
	 	if (model.inputNumber === 6 || model.inputNumber === 7) {
	 		if (this.nextSiblingElement.id === 'holidayId') {
				this.codeExecutionWithColour();
				this.changeOpacity('holidayImage');
				this.setInnerHtml('outputDayId', 'HOLIDAY');
	 		}
	 	}
		if (this.nextSiblingElement.id === 'ifId')
			this.codeExecutionWithColour();
		if (this.nextSiblingElement.id === 'closeBrc2Id' || this.nextSiblingElement.id === 'elseId' || this.nextSiblingElement.id === 'elseIfId') {
			this.codeExecutionWithColourAndId('closeBrc2Id');
	 	}
	},
	// init: calls methods to draw canvas and activate events.
	init: function () {
		this.activateEvents();
		this.resetOpacityOfImages();
	}
}
// onload function: call init method on window onload.
window.onload = function () { 
	view.init();
}
