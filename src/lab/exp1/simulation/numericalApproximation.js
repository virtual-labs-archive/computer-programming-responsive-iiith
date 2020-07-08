//---------------------------------+
// Author: Parvesh Kumar Gahanolia |
// Email: <parvesh@vlabs.ac.in>    |
//---------------------------------+

window.model = {
	inputValueA
: '', // user input a.
	inputValueB: '', // usre input b.
	sum: 0, //total sum that compute by computeSum method. 
	width: 1, //width of executing one step.
	//  computeSum: compute total sum of area under cos curve.
	computeSum: function () {
    	this.sum = this.sum + Math.cos(2 * Math.PI/13 * this.inputValueA) * this.width;
    	},
	/* incrementInWidth: compute increment in inputValueA, that represent 
	total width of curve from starting point to current point */
	incrementInWidth: function () {
    	this.inputValueA = this.inputValueA + this.width;
	}
}

window.view = {
	wavelengthController: .0472, //control wavelength of cos curve.
	xCoordinatesValue: 0, // value of x coordinate.
	yCoordinatesValue: 0, // value of y coordinate.
	sum: 0, //  round up the sum(model.sum) value to 2 decimal points.
	canvasContext: '', // canvasContext have many properties and methods for drawing paths, boxes, circles, text, images, and more.
	canvas: new Object(), // Object value of canvas.
	currentSiblingElement: new Object(), //  Object value of current sibling. 
	nextSiblingElement: new Object(), //  Object value of next sibling.
	// addClickEvent: add EventListener to other methods.
	addClickEvent: function (id, method) {
		var element = document.getElementById(id);
		element.addEventListener('click', method, false);
	},
	// activateEvents: calls addClickEvent method to add EventListener to other methods.
	activateEvents: function () {
		this.addClickEvent('okBtnId', function() { view.validationInput() });
		this.addClickEvent('startBtnId', function() { view.startExperiment() });
		this.addClickEvent('nextBtnId', function() { view.plotCurveArea() });
		this.addClickEvent('stopBtnId', function() { view.stopExperiment() });
	},
	// disableElement: makes element disable.
	disableElement: function(Id) {
		document.getElementById(Id).disabled = true;
	},
	// enableElement: makes element enable.
	enableElement: function(Id) {
		document.getElementById(Id).disabled = false;
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
	// applyColorClass: adds new color class to a element.
    	applyColorClass: function (id, colorClass) {
		document.getElementById(id).classList.add(colorClass);
	},
	// removeColorClass: removes color class from element.
	removeColorClass: function (id, colorClass) {
		document.getElementById(id).classList.remove(colorClass);
	},
	// executionWithColour: shows execution of code by changing color in code Content.
	executionWithColour: function () {
		this.removeColorClass(this.currentSiblingElement.id, 'redClass');
		this.applyColorClass(this.nextSiblingElement.id, 'redClass');
	},
	// getValue: return value from element.
	getValue: function (id) {
		var value = document.getElementById(id).value;
		return value;
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
	// getNextSiblingElement: return next sibling element.
	getNextSiblingElement: function (element) {
		var nextSiblingElement = element.nextSibling;
		nextSiblingElement = nextSiblingElement.nextSibling;
		return nextSiblingElement;
	},
	// setInnerHtml: set innerText to a element.
	setInnerHtml: function (id, innerHTML) {
 		document.getElementById(id).innerHTML = innerHTML;
 	},
 	// resetVariables: reset all variables to it's initial state. 
 	resetVariables: function () {
 		model.inputValueA = '';
		model.inputValueB = '';
		this.xCoordinatesValue = 0;
		this.yCoordinatesValue = 0;
		model.sum = 0;
		this.sum = 0;
 	},
 	// resetTextFieldValue: reset text field to their initial state.
 	resetTextFieldValue: function () {
 		this.setValue('valueA', '');
 		this.setValue('valueB', '');
 	},
 	// resetButtonAndTextField: reset button it's initial state and do text field enable.
 	resetButtonAndTextField: function () {
		this.replaceElement('stopBtnId', 'startBtnId');
		this.enableElement('valueA');
		this.enableElement('valueB');
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
		// this.clearOutputValues();
		this.resetVariables();
		this.resetTextFieldValue();
		this.resetButtonAndTextField();
		var idOfRedText = this.getElementByClass('redClass').id;
		this.removeColorClass(idOfRedText, 'redClass');
 	},
 	// clearOutputValues: clear all output values that displayed during the execution.
 	clearOutputValues: function () {
 		this.setInnerHtml('vari', '');
 		this.setInnerHtml('valuei', '');
		this.setInnerHtml('valuesum', '');
		this.setInnerHtml('varsum', '');
 		this.setInnerHtml('integrText', '');
 		this.setInnerHtml('integrValue', '');
 	},
 	// getCanvas: get canvas and canvasContext as a Object.
	getCanvas: function () {
		this.canvas = document.getElementById('myCanvas');
		this.canvasContext = this.canvas.getContext('2d');
	},
	// drawAxis: draw x-axis and y-axis on canvas.
	drawAxis: function () {
		this.getCanvas();
		this.canvasContext.beginPath();
		this.canvasContext.moveTo(20, 0); // 20 is x-coordinate value and 0 is y-coordinate value. 
		this.canvasContext.lineTo(20, 300); // 20 is x-coordinate value and 360 is y-coordinate value.
		this.canvasContext.moveTo(20, 150); // 20 is x-coordinate value and 180 is y-coordinate value.
		this.canvasContext.lineTo(420, 150); // 520 is x-coordinate value and 180 is y-coordinate value.
		this.canvasContext.strokeStyle = '#3072b3';
		this.canvasContext.lineWidth = 2;
		this.canvasContext.stroke();
	},
	// drawText: labels x-axis and y-axis with text on canvas. 
	drawText: function () {
		this.canvasContext.font = '18px Arial';
		this.canvasContext.beginPath();
		this.canvasContext.fillText('0', 8, 150); // 0 is text that to be display, 8 is x-coordinate value and 180 is y-coordinate value.
		this.canvasContext.fillText('1', 8, 85); // 1 is text that to be display, 8 is x-coordinate value and 100 is y-coordinate value.
		this.canvasContext.fillText('2', 8, 15); // 2 is text that to be display, 8 is x-coordinate value and 20 is y-coordinate value.
		this.canvasContext.fillText('1', 8, 220); // 1 is text that to be display, 8 is x-coordinate value and 260 is y-coordinate value.
		this.canvasContext.fillText('2', 8, 290); // 2 is text that to be display, 8 is x-coordinate value and 340 is y-coordinate value.
		var value = 5; // 5 is value to display and position is x-coordinate value where value to be display.
		for (var position = 65; position <= 420; position += 50) {
			if (value === 40)
				continue;
			this.canvasContext.fillText(value, position, 170); // 200 is y-coordinate value.
			value += 5;
		}
	},
	// drawIntersectLines: shows intersection line of x-axis and y-axis on canvas.
	drawIntersectLines: function () {
		this.canvasContext.beginPath();
		for (var position = 10; position <= 300; position += 70) {
			this.canvasContext.moveTo(15, position); // 15 or 25 are x-coordinate value and position is y-coordinate value where intersectlines to be display.
			this.canvasContext.lineTo(25, position);
		}
		for (var position = 70; position <= 420; position += 50) {
			
			this.canvasContext.moveTo(position, 145); // position is x-coordinate value and 175 or 185 are y-coordinate value where intersectlines to be display.
			this.canvasContext.lineTo(position, 155);
		}
		this.canvasContext.lineWidth = 2;
		this.canvasContext.stroke();
	},
	// drawHorizontalLine: shows horizontal lines on canvas. 
	drawHorizontalLine: function () {
		this.canvasContext.beginPath();
		for (var position = 10; position <= 300; position += 35) {
			if (position === 150)
				continue;
			this.canvasContext.moveTo(20, position); // 20 or 520 are x-coordinate value and position is y-coordinate value where horizontalline to be display.
			this.canvasContext.lineTo(520, position);
		}
		this.canvasContext.strokeStyle = '#CCC';
		this.canvasContext.lineWidth = 1;
		this.canvasContext.stroke();
	},
	// drawVerticalLine: shows vertical lines on canvas.
	drawVerticalLine: function () {
		this.canvasContext.beginPath();
		for (var position = 55; position <= 420; position += 35) {
			this.canvasContext.moveTo(position, 0); // 0 or 360 are y-coordinate value and position is x-coordinate value where verticalline to be display.
			this.canvasContext.lineTo(position, 360);
		}
		this.canvasContext.strokeStyle = '#CCC';
		this.canvasContext.lineWidth = 1;
		this.canvasContext.stroke();
	},
	// drawCosCurve: draw cos curve.  
	drawCosCurve: function () {
		this.canvasContext.beginPath();
		var xAxis; // represent x-coordinate value.
		var yAxis; // represent y-coordinate value.
		this.canvasContext.moveTo(20, 80);
		for (xAxis = 20; xAxis <= 420; xAxis++) {
			var y = 70*Math.cos(0 + (xAxis - 20) * this.wavelengthController)
			//alert(y);
			yAxis = 70 + (80 - (y))// 80 is y-coordinate value from where cose curve start. 
			this.canvasContext.lineTo(xAxis, yAxis)
		}
		this.canvasContext.strokeStyle = '#F7971E';
		this.canvasContext.lineWidth = 2;
		this.canvasContext.stroke();
		this.canvasContext.save();
	},
	// drawRectangle: draw rectangle according x and y coordinates values.
	drawRectangle: function (xCoordinates, yCoordinates, width, high) {
		this.canvasContext.beginPath();
		this.canvasContext.globalAlpha= 0.8;
		this.canvasContext.fillStyle='#9BBB5A';
		this.canvasContext.fillRect(xCoordinates, yCoordinates, width, high);
	},
	// showAreaUnderCurve: show area under cos curve, value of i and sum during code execution.
	showAreaUnderCurve: function () {
		model.computeSum();
		this.callDrawRectangle();
		this.incrementInXCoordinates();
		model.incrementInWidth();
		this.sum = Math.round(model.sum * 100) / 100;
		this.setInnerHtml('valuesum', this.sum);
		this.setInnerHtml('valuei', model.inputValueA);
	},
	// calculateXCoordinates: compute starting position of xCoordinatesValue on x-axis.
	calculateXCoordinates: function () {
 		this.xCoordinatesValue = 20 + 10 * model.inputValueA;
 	},
 	// incrementInXCoordinates: compute increment in xCoordinatesValue during code execution on x-axis.
 	incrementInXCoordinates: function () {
 		this.xCoordinatesValue = this.xCoordinatesValue + 10;
 	},
 	// callDrawRectangle: calls drawRectangle method to fill area under cos curve according given x and y coordinates value.
	callDrawRectangle: function () {
		var dynamicValueOfX = this.xCoordinatesValue;
		for (var i = 0; i < 10; i++) {
			dynamicValueOfX++;
			var y = 70*Math.cos(0 + (dynamicValueOfX - 20) * this.wavelengthController);
			this.yCoordinatesValue = 70 + (80 - (y));
			this.drawRectangle(dynamicValueOfX, this.yCoordinatesValue, 1, 150 - this.yCoordinatesValue);
		}
	},
	// drawCanvas: calls methods that are use to draw axis, text, lines and cos curve.
	drawCanvas: function () {
		this.drawAxis();
		this.drawText();
		this.drawIntersectLines();
		this.drawHorizontalLine();
		this.drawVerticalLine();
		this.drawCosCurve();
		this.canvasContext.save();
	},
	/* validationInput: check validation of input that is given by user and if input value is valid 
	then make text field and ok button disable and make start button enable. */
	validationInput: function () {
		var valueA1 = this.getValue('valueA');
		var valueB1 = this.getValue('valueB');
		var valueA2 = parseInt(valueA1);
		var valueB2 = parseInt(valueB1);
		if (valueA1 === '' || valueB1 === '') {
			alert('Enter Value of a and b');
			return false;
		}
		else if ( isNaN(valueA1) || isNaN(valueB1)) {
			alert('Enter numeric value of a and b');
			return false;
		} 
		else if (valueA2 >= valueB2 || valueB2 > 10) {
			alert('Integration Limits are from 0 to 10, b > a and b-a >= 1');
			return false;
		}
		else {
			model.inputValueA = valueA2;
			model.inputValueB = valueB2;
		}
		this.changePropertyOfElements();
		this.clearOutputValues();
		this.restoreCanvas();
	},
	// changePropertyOfElements: changes property of elemants with enableElement, disableElement and changeClass.
	changePropertyOfElements: function () {
		this.enableElement('startBtnId');
		this.disableElement('okBtnId');
		this.disableElement('valueA');
		this.disableElement('valueB');
		this.changeClass('okBtnId', 'buttonDisable startButton');
		this.changeClass('startBtnId', 'button myStartButton');
	},
	// restoreCanvas: restor canvas it's initial state after clear previously drawed canvas.
	restoreCanvas: function () {
		this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height); // to clear previously drawed canvas.
		this.canvasContext.restore(); // restor canvas it's initial state.
		this.drawCanvas(); // redraw graph on canvas.
	},
	// startExperiment: work to start code execution.
	startExperiment: function () {
		this.replaceElement('startBtnId', 'stopBtnId');
		this.enableElement('stopBtnId');
		this.enableElement('nextBtnId');
		this.disableElement('startBtnId');
		this.applyColorClass('NumApproCodeContent1', 'redClass');
		this.changeClass('startBtnId', 'myStartButton button');
		this.changeClass('stopBtnId', 'myStartButton button');
		this.changeClass('nextBtnId', 'nextButton button');
	},
	// stopExperiment: stop code execution at any point.
	stopExperiment: function () {
		this.endOfExecution();
	},
	/* plotCurveArea: fill area under cos curve, show value of i and sum according code execution, 
	and at the end of code execution display final result. */  
	plotCurveArea: function () {
		this.currentSiblingElement = this.getElementByClass('redClass');
		if (this.currentSiblingElement.id === 'NumApproCodeContent10') {
			this.endOfExecution();
		}
		this.nextSiblingElement = this.getNextSiblingElement(this.currentSiblingElement);
		if (this.nextSiblingElement.id === 'NumApproCodeContent2') {
			this.executionWithColour();
			this.setInnerHtml('vari', 'i = ');
		}
		else if (this.nextSiblingElement.id === 'NumApproCodeContent3') {
			this.executionWithColour();
			this.setInnerHtml('varsum', 'sum = ');
		}
		else if (this.nextSiblingElement.id === 'NumApproCodeContent4') {
			this.executionWithColour();
		}
		else if (this.nextSiblingElement.id === 'NumApproCodeContent5') {
			this.executionWithColour();
			this.setInnerHtml('valuei', '0');
			this.setInnerHtml('valuesum', '0');
		}
		else if (this.nextSiblingElement.id === 'NumApproCodeContent6') {
			this.executionWithColour();
			this.calculateXCoordinates();
		}
		else if (this.nextSiblingElement.id === 'NumApproCodeContent7') {
			this.executionWithColour();
			this.showAreaUnderCurve();
		}
		else if (this.nextSiblingElement.id === 'NumApproCodeContent8') {
			this.executionWithColour();
		}
		else if (this.nextSiblingElement.id === 'NumApproCodeContent9') {
			if (model.inputValueA < model.inputValueB) {
				this.removeColorClass(this.currentSiblingElement.id, 'redClass');
				this.applyColorClass('NumApproCodeContent6', 'redClass');
			}
			else if (model.inputValueA = model.inputValueB) {
				this.executionWithColour();
				this.setInnerHtml('integrText', 'INTEGRATION VALUE = ');
				this.setInnerHtml('integrValue', this.sum);
			}
		}
		else if (this.nextSiblingElement.id === 'NumApproCodeContent10') {
			this.executionWithColour();
		}
	},
	// init: calls methods to draw canvas and activate events.
	init: function () {
		this.drawCanvas();
		this.activateEvents();
	}
}
// onload function: call init method on window onload.
window.onload = function () {
	view.init();
}
