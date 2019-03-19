/**
 * Initializer Segment that takes inputs
 * * Takes the input and creates the Execution object.
 */
class Initializer {

	constructor() {
		this.inputValue = 0;
		this.stateValue = 0;
		$('.radiobutton').click(function() { getInitializer().input = this.value; })
		$('#submitBtnId').click(function() { getInitializer().prepareExecution(); });
		$('#startBtnId').click(function() { getExecutor().line += 1; });
	}

	set input(value) { $('#textFieldId').val(value); }
	get input() { this.inputValue = $('#textFieldId').val(); return parseFloat(this.inputValue); }

	validate() {
		if ($('#textFieldId').value === '' || isNaN($('#textFieldId').val())) {
			alert('You tried to type in ' + $('#textFieldId').val() + '. Please only feed in Integer Values.');
			$('.radiobutton').attr('checked', false); return false;
		} return true;
	}

	prepareExecution() {
		if (! this.validate()) return; 
		$('#submitBtnId').attr("disabled", true);
		$('#startBtnId').attr("disabled", false);
		$('#startBtnId').removeClass().addClass('button margin15');
		$('#submitBtnId').removeClass().addClass('buttonDisable margin15');
		$('.dayIcon').css('opacity', 0.2);
		$('.dayImage').css('opacity', 0.2);
		getExecutor().initialize(getInitializer().input);
	}
	terminateExecution() {
		$('#submitBtnId').attr("disabled", false);
		$('#startBtnId').attr("disabled", true);
		$('#startBtnId').removeClass().addClass('buttonDisable margin15');
		$('#submitBtnId').removeClass().addClass('button margin15');
		getOutputter().reset();
	}
}


/**
 * Controls the Execution of the Sample Program
 * * Maintains line number and colors it red.
 * * Executes and Outputs to the output screen.
 */
class Executor {

	constructor() {
		this.statements = [
			'mainId', 'charId', 'strId', 'switchId',
			'case1Id', 'case1BreakId', 'case2Id', 'case2BreakId',
			'case3Id', 'case3BreakId', 'case4Id', 'case4BreakId',
			'case5Id', 'case5BreakId', 'case6Id', 'case6BreakId',
			'case7Id', 'case7BreakId', 'defaultId', 'defaultBreakId',
			'closeBrc1Id', 'ifId', 'holidayId', 'elseIfId', 
			'workingdayId', 'elseId', 'invalidIPId', 'closeBrc2Id', 'endOfCodeId'
		];
		this.day = 0;
		this.execution = [];
		this.position = 0;
		this.line = -1;
	}

	initialize(input) {
		this.day = input;
		const exec1 = [0, 1, 2, 3];
		const exec2 = input <= 7 && input >= 1 ? [input*2 + 2, input*2 + 3] : [18, 19];
		const e31 = [20, 21, 22, 27];
		const e32 = [20, 21, 23, 24, 27];
		const e33 = [20, 21, 23, 25, 26, 27];
		let exec3; if (input === 7) exec3 = e31; else if ([1, 2, 3, 4, 5, 6].includes(input)) exec3 = e32; else exec3 = e33;
		this.execution = exec1.concat(exec2).concat(exec3);
	}

	set line(line) {
		$('.redClass').removeClass('redClass');
		if (line >= this.execution.length) { this.position = -1; getInitializer().terminateExecution(); }
		else { this.position = line; }
		if (this.position >= 0) $('#'+this.statements[this.execution[this.position]]).addClass('redClass'); 
		this.execute(this.execution[this.position]);
	}
	get line() {
		return this.position;
	}

	execute(lineNumber) {
		if (lineNumber === 0) {
			getOutputter().day = this.day;
		} else if ([4, 6, 8, 10, 12, 14, 16].includes(lineNumber)) {
			getOutputter().str = getOutputter().week[ [ 1, 2, 3, 4, 5, 6, 7 ].includes(this.day) ? this.day : 0];
		} else if ([22, 24, 26].includes(lineNumber)) {
			if (lineNumber === 22) getOutputter().out = 'holiday';
			if (lineNumber === 24) getOutputter().out = 'working';
			if (lineNumber === 26) getOutputter().out = 'invalid';
		}
	}
}


/**
 * Output display screen with text and image
 * * Prints out the str, day and output variables.
 * * Highlights the final images.
 */
class Outputter {
	constructor() {
		this.week = [ null, 'Monday', 'Tuesday', 'Wednesday', 
					'Thursday', 'Friday', 'Saturday', 'Sunday'];
		this.reset();
	}

	reset() {
		this.str = null; this.day = 0; this.out = null;
		$('.dayIcon').css('opacity', 0.2);
		$('.dayImage').css('opacity', 0.2);
	}

	set day(day) {
		this.mDay = day;
		if (day !== 0) $('#idOfDay').html(this.mDay); else $('#idOfDay').html('');
	}
	get day() {
		return this.mDay;
	}

	set str(str) {
		console.assert(this.week.includes(str), 'Not a valid week day', { "string":str, "executor":this });
		this.mStr = str;
		if(str !== null) $('#' + this.mStr.toLowerCase() + 'Images').css('opacity', '1.0');
		$('#strNullId').html(this.mStr);
	}
	get str() {
		return this.mStr;
	}

	set out(output) {
		this.mOutput = output;
		if (this.mOutput === null) {
			$('#outputDayId').html(null);
			$('#workingdayImage').css('opacity', 0.2);
			$('#holidayImage').css('opacity', 0.2);
		} else if (this.mOutput === 'working') {
			$('#outputDayId').html('WORKING DAY');
			$('#workingdayImage').css('opacity', 1.0);
			$('#holidayImage').css('opacity', 0.2);
		} else if (this.mOutput === 'holiday') {
			$('#outputDayId').html('HOLIDAY');
			$('#holidayImage').css('opacity', 1.0);
			$('#workingdayImage').css('opacity', 0.2);
		} else {
			$('#outputDayId').html('INVALID INPUT');
			$('#holidayImage').css('opacity', 0.2);
			$('#workingdayImage').css('opacity', 0.2);
		}
	}
	get out() {
		return this.mOutput;
	}
}


/**
 * Singleton class initialization model.
 */
$(document).ready(function() {
	var initializer = new Initializer();
	var executor = new Executor();
	var outputter = new Outputter();
	getInitializer = function() { return initializer; }
	getExecutor = function() { return executor; }
	getOutputter = function() { return outputter; }
});