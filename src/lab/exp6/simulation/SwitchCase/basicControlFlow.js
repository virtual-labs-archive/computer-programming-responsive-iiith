//---------------------------------+
// Author: Parvesh Kumar Gahanolia |
// Email: <parvesh@vlabs.ac.in>    |
//---------------------------------+

class Initializer {

	constructor() {
		this.inputValue = 0;
		this.stateValue = 0;
		$('.radiobutton').click(function() { getInitializer().input = this.value; })
		$('#submitBtnId').click(function() { getInitializer().prepareExecution(); });
		$('#startBtnId').click(function() { getExecutor().line += 1; });
		$('#nextBtnId').click(function() { view.showDayOfWeek() });
		$('#resetBtnId').click(function() { view.resetButtonSwitch() });
		this.str = null; this.day = null; this.output = null;
	}

	set input(value) { this.inputValue = value; $('#textFieldId').val(value); }
	get input() { return this.inputValue; }

	validate() {
		return !($('#textFieldId').value === '' || isNaN($('#textFieldId').value))
	}

	prepareExecution() {
		$('#submitBtnId').attr("disabled", true);
		$('#startBtnId').attr("disabled", false);
		$('#startBtnId').removeClass().addClass('button margin15');
		$('#submitBtnId').removeClass().addClass('buttonDisable margin15');
		this.str = null; this.day = null; this.output = null;
		$('.dayIcon').css('opacity', 0.2);
		$('.dayImage').css('opacity', 0.2);
		getExecutor().initialize(getInitializer().input);
	}
}

class Executor {

	constructor() {
		this.week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
					 'Friday', 'Saturday', 'Sunday'];
		this.statements = [
			'mainId', 'charId', 'strId', 'switchId',
			'case1Id', 'case1BreakId', 'case2Id', 'case2BreakId',
			'case3Id', 'case3BreakId', 'case4Id', 'case4BreakId',
			'case5Id', 'case5BreakId', 'case6Id', 'case6BreakId',
			'case7Id', 'case7BreakId', 'defaultId', 'defaultBreakId',
			'closeBrc1Id', 'ifId', 'holidayId', 'elseIfId', 
			'workingdayId', 'elseId', 'invalidIPId', 'closeBrc2Id', 'endOfCodeId'
		];
		this.execution = [];
		this.position = 0;
		console.log('The position is: ' + this.position);
		this.line = -1;
	}

	initialize(input) {
		const execution1 = [0, 1, 2, 3];
		const execution2 = input <= 7 && input >= 1 ? [input*2 + 2, input*2 + 3] : [18, 19];
		const execution3 = (input === 7) ? [20, 21, 22] : (input >= 1 && input <= 6 ? [20, 21, 23, 24] : [20, 21, 25, 26]);
		const execution4 = [27]
		this.execution = execution1.concat(execution2).concat(execution3).concat(execution4);
	}

	set line(line) {
		console.assert(line < this.execution.length, 'Executing line out of range: ', line);
		$('.redClass').removeClass('redClass');
		this.position = line;
		if (this.position >= 0) $('#'+this.statements[this.execution[this.position]]).addClass('redClass'); 
	}
	get line() {
		return this.position;
	}
}

class Outputter {
	constructor() {
		this.week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
					 'Friday', 'Saturday', 'Sunday'];
	}
}

$(document).ready(function() {
	var initializer = new Initializer();
	var executor = new Executor();
	var outputter = new Outputter();
	getInitializer = function() { return initializer; }
	getExecutor = function() { return executor; }
	getOutputter = function() { return outputter; }
})