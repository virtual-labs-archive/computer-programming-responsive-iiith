//---------------------------------+
// Author: Parvesh Kumar Gahanolia |
// Email: <parvesh@vlabs.ac.in>    |
//---------------------------------+

class Initializer {
	constructor() {
		this.input = 0
		$('.radiobutton').click(function() { view.setValue('textFieldId', this.value) })
		$('#submitBtnId').click(function() { view.validationInput() });
		$('#startBtnId').click(function() { view.startStepExecution() });
		$('#nextBtnId').click(function() { view.showDayOfWeek() });
		$('#resetBtnId').click(function() { view.resetButtonSwitch() });	
	}
}

class Executor {
	constructor() {
		this.input = 0
	}
}

class Outputter {

}

window.model = {
	inputNumber: 0, //user input text field.
}

window.view = {
	currentSiblingElement: new Object(), // Object value of current sibling.
	nextSiblingElement: new Object(), // Object value of next sibling.
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
	// getNextSiblingElement: return next sibling element.
	getNextSiblingElement: function (element) {
		var nextSiblingElement = element.nextSibling;
		nextSiblingElement = nextSiblingElement.nextSibling;
		return nextSiblingElement;
	},
	// codeExecutionWithColour: shows execution of code by changing color in code Content.
	codeExecutionWithColour: function () {
		$('#'+this.currentSiblingElement.id).removeClass('redClass');
		$('#'+this.nextSiblingElement.id).addClass('redClass');
	},
	// codeExecutionWithColourAndId: shows execution of code by changing color with given id in code Content.
	codeExecutionWithColourAndId: function (id) {
		$('#'+this.currentSiblingElement.id).removeClass('redClass');
		$('#'+this.nextSiblingElement.id).addClass('redClass');
	},
	// changeOpacity: changes opacity of image.
	changeOpacity: function (id) {
		document.getElementById(id).style.opacity = '1';
	},
	// showDay: shows desire day that by showing output string and change opacity of day picture.
	showDay: function (id, imagesId, innerHTMLId, innerHTML) {
		this.codeExecutionWithColourAndId(id);
		console.log('#'+innerHTMLId + '    ' + innerHTML)
		$('#'+innerHTMLId).html(innerHTML);
		this.changeOpacity(imagesId);	
	},
	// jumpToDay: to jump on desire day.
	jumpToDay: function () {
		switch (model.inputNumber) {
			case 1:
				this.showDay('case1Id', 'mondayImages', 'strNullId', 'Monday');
  				break;
			case 2:
  				this.showDay('case2Id', 'tuesdayImages', 'strNullId', 'Tuesday');
  				break;
			case 3:
  				this.showDay('case3Id', 'wednesdayImages', 'strNullId', 'Wednesday');
  				break;
			case 4:
  				this.showDay('case4Id', 'thursdayImages', 'strNullId', 'Thursday');
  				break;
			case 5:
  				this.showDay('case5Id', 'fridayImages', 'strNullId', 'Friday');
  				break;
			case 6:
  				this.showDay('case6Id', 'saturdayImages', 'strNullId', 'Saturday');
  				break;
			case 7:
  				this.showDay('case7Id', 'sundayImages', 'strNullId', 'Sunday');
  				break;
  			default:
  				this.showDay('defaultId', null, 'strNullId', 'null');
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
			$('#idOfDay').html(model.inputNumber);
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
		for (x of document.getElementsByClassName('dayIcon')) x.style.opacity = '.3';
	},
	// resetVariables: reset variables to it's initial state at the end of code execution.
	resetVariables: function () {
		model.inputNumber = 0;
	},
	// resetStrings: clear all output values that displayed during the execution.
	resetStrings: function () {
		$('#strNullId').html('');
		$('#idOfDay').html('');
		$('#outputDayId').html('');
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
		$('.redClass').removeClass('redClass');
		//this.resetOpacityOfImages();
	},
	// startStepExecution: work to start code execution.
	startStepExecution: function () {
		$('#mainId').addClass('redClass');
		this.changeClass('startBtnId', 'buttonDisable margin15 hide');
		this.changeClass('nextBtnId', 'button margin15');
		this.enableElement('nextBtnId');
	},
	// showDayOfWeek: shows code execution and gives final result at end of code.
	showDayOfWeek: function () {
		this.currentSiblingElement = document.getElementsByClassName('redClass')[0];
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
		if (1 <= model.inputNumber && model.inputNumber <= 6) {
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
	 	if (model.inputNumber === 7) {
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
		var initializer = new Initializer()
		var executor = new Executor()
		var outputter = new Outputter()
		this.resetOpacityOfImages();
	}
}
// onload function: call init method on window onload.
window.onload = function () { 
	view.init();
}
