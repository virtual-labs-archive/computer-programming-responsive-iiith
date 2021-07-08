/* global view */

window.view = {
	S: 1,
	D: 2,
	T: 3,
	n: 0,
	step: 0,
	totalDisks: 0,
	clicks: 0,
	callerFunction: "none",
	lastRedDiv: {},
	nextRedDiv: {},
	last: {},
	next: {},
	disks: ["disk1", "disk2", "disk3", "disk4", "disk5"],
	position: ["position1", "position2", "position3", "position4", "position5"],
	highlightNextStep: function() {
		this.changeClass(this.lastRedDiv.id, "showDiv");
		this.changeClass(this.nextRedDiv.id, "showDivInRed");
	},
	getInput: function() {
		var input = Number(document.getElementById("input").value);
		if (input === 0) alert("Enter number of disks first !");
		else if (isNaN(input) === true) alert("Number of disks must be an integer value !");
		else if (input > 5 || input % 1 !== 0)
			alert("Only integral value (Greater than equal to 1 and less than equal to 5) is accepted !");
		else {
			this.disableElement("btnOk");
			this.enableElement("btnStart");
			this.disableElement("input");
			this.changeClass("btnOk", "buttonDisable okButton");
			this.changeClass("btnStart", "button startButton");
			this.n = input;
			this.totalDisks = input;
			var elements = document.getElementById("1").childNodes;
			for (var i = 0; i < input; i++) elements[i].className += " " + this.disks[i];
		}
	},
	changeClass: function(id, className) {
		document.getElementById(id).className = className;
	},
	getLastHighlightedDiv: function() {
		var findClass = document.getElementsByClassName("showDivInRed");
		return findClass[0];
	},
	getNextDivToHighlight: function(lastHighlightedDiv) {
		var next = lastHighlightedDiv.nextSibling;
		if (!next.nextSibling) throw new Error("Next sibling does not exist");
		next = next.nextSibling;
		return next;
	},
	jumpTo: function(targetDivId) {
		var element = document.createElement("div");
		element.id = targetDivId;
		return element;
	},
	disableElement: function(buttonId) {
		document.getElementById(buttonId).disabled = true;
	},
	enableElement: function(buttonId) {
		document.getElementById(buttonId).disabled = false;
	},
	addClickEvent: function(id, method) {
		var element = document.getElementById(id);
		element.addEventListener("click", method, false);
	},
	showCode: function() {
		document.getElementById("code").className = "codeLayout";
		this.toggleBold(["line10", "line11", "line12"], true);

		this.changeClass("line1", "showDivInRed");
		this.changeClass("line13", "");
		this.disableElement("btnStart");
		this.enableElement("btnNext");
		this.changeClass("btnStart", "buttonDisable startButton");
		this.changeClass("btnNext", "button nextButton");
	},
	hideCode: function() {
		document.getElementById("code").className = "hide";
		this.changeClass("line1", "showDiv");
		this.disableElement("btnNext");
		this.disableElement("btnStart");
		this.enableElement("btnOk");
		this.changeClass("btnOk", "button okButton");
		this.changeClass("btnNext", "buttonDisable nextButton");
		this.changeClass("btnStart", "buttonDisable nextButton");
		this.enableElement("input");
		document.getElementById("input").value = "";
	},
	setLocalVariables: function() {
		var pref = "&nbsp;&emsp;&emsp;";
		document.getElementById("s").innerHTML = pref + this.S;
		document.getElementById("d").innerHTML = pref + this.D;
		document.getElementById("t").innerHTML = pref + this.T;
		document.getElementById("n").innerHTML = pref + this.n;
	},
	swapTandD: function() {
		var temp = this.T;
		this.T = this.D;
		this.D = temp;
	},
	swapSandT: function() {
		var temp = this.T;
		this.T = this.S;
		this.S = temp;
	},
	moveDisksAround: function() {
		var source, destination, sourceClass, destinationClass, sourceLastChild, destinationLastChild;
		var sourceDiskClass = "";
		source = document.getElementById(String(this.S)).childNodes;
		destination = document.getElementById(String(this.D)).childNodes;
		for (var i = 0; i < source.length; i++) {
			sourceClass = source[i].className.split(" ");
			if (sourceClass.length > 1) {
				sourceDiskClass = sourceClass[1];
				sourceLastChild = source[i];
			}
		}
		for (var j = destination.length - 1; j >= 0; j--) {
			destinationClass = destination[j].className.split(" ");
			if (destinationClass.length > 1) {
				destinationLastChild = destination[j + 1];
				break;
			} else destinationLastChild = destination[0];
		}
		var elementClass = sourceLastChild.className.split(" ");
		sourceLastChild.className = elementClass[0];
		destinationLastChild.className += " " + sourceDiskClass;
	},
	toggleBold: function(IDList, reset) {
		var val = reset ? "normal" : "bold";
		IDList.forEach(id => (document.getElementById(id).style.fontWeight = val));
	},
	executeFirstFunctionCall: function() {
		this.toggleBold(["line10"]);
		this.swapTandD();
		this.n = 2;
		this.setLocalVariables();
		this.moveDisksAround();
		this.nextRedDiv = this.jumpTo("line11");
		this.highlightNextStep();
	},
	executeSecondFunctionCall: function() {
		this.toggleBold(["line10", "line11", "line12"]);
		this.swapSandT();
		this.n = 2;
		this.setLocalVariables();
		this.nextRedDiv = this.jumpTo("line13");
		this.highlightNextStep();
	},
	removeHighlights: function() {
		this.toggleBold(["line12", "line13"]);
	},
	executeCode: function() {
		this.clicks++;
		this.lastRedDiv = this.getLastHighlightedDiv();
		this.nextRedDiv = this.getNextDivToHighlight(this.lastRedDiv);

		if (this.lastRedDiv.id === "line4") {
			this.nextRedDiv = this.jumpTo("line6");
			this.highlightNextStep();
			this.setLocalVariables();
		} else if (this.lastRedDiv.id === "line7" && this.n !== 1) {
			this.nextRedDiv = this.jumpTo("line10");
			this.highlightNextStep();
		} else if (this.lastRedDiv.id === "line8") {
			this.moveDisksAround();
			this.highlightNextStep();
		} else if (this.lastRedDiv.id === "line9") {
			if (this.callerFunction === "firstCaller") this.executeFirstFunctionCall();
			else if (this.callerFunction === "secondCaller") this.executeSecondFunctionCall();
		} else if (this.lastRedDiv.id === "line10" && this.callerFunction === "none") {
			this.nextRedDiv = this.jumpTo("line6");
			this.highlightNextStep();
			this.swapTandD();
			this.n--;
			this.setLocalVariables();
			if (this.n === 1) this.callerFunction = "firstCaller";
		} else if (this.lastRedDiv.id === "line11") {
			this.toggleBold(["line10", "line11"], true);
			this.highlightNextStep();
		} else if (this.lastRedDiv.id === "line12") {
			if (this.callerFunction !== "secondCaller") {
				this.nextRedDiv = this.jumpTo("line6");
				this.swapSandT();
				this.n--;
				this.setLocalVariables();
				this.highlightNextStep();
				if (this.n === 1) this.callerFunction = "secondCaller";
			}
		} else if (this.lastRedDiv.id === "line13") {
			if (
				(this.totalDisks === 4 && this.clicks === 40) ||
				(this.totalDisks === 5 && this.clicks === 43) ||
				(this.totalDisks === 5 && (this.clicks === 79 || this.clicks === 80)) ||
				(this.totalDisks === 5 && this.clicks === 119)
			) {
				this.swapSandT();
				this.n++;
				this.setLocalVariables();
			} else {
				this.swapTandD();
				this.n++;
				this.setLocalVariables();
				this.moveDisksAround();
				this.removeHighlights();
				this.nextRedDiv = this.jumpTo("line11");
				this.highlightNextStep();
				this.callerFunction = "none";
			}
		} else this.highlightNextStep();
	},
	proceed: function() {
		var children = 0;
		var terminal = document.getElementById("2").childNodes;
		for (var k = 0; k < terminal.length; k++) {
			var temp = terminal[k].className.split(" ");
			if (temp.length > 1) children++;
		}
		if (children < this.totalDisks) {
			this.executeCode();
		} else {
			if (this.step === 0) {
				this.changeClass("line9", "showDiv");
				this.changeClass("line13", "showDivInRed");
				this.executeSecondFunctionCall();
				this.step++;
			} else {
				if (this.n < this.totalDisks) {
					this.swapSandT();
					this.n++;
					this.setLocalVariables();
				} else {
					this.terminate();
				}
			}
		}
	},
	clearSecondPillar: function() {
		var element = document.getElementById("2").childNodes;
		for (var i = 0; i < element.length; i++) {
			element[i].className = this.position[i];
		}
	},
	terminate: function() {
		this.S = 1;
		this.D = 2;
		this.T = 3;
		this.n = 0;
		this.step = 0;
		this.totalDisks = 0;
		this.clicks = 0;
		this.callerFunction = "none";
		this.lastRedDiv = {};
		this.nextRedDiv = {};
		document.getElementById("s").innerHTML = "";
		document.getElementById("d").innerHTML = "";
		document.getElementById("t").innerHTML = "";
		document.getElementById("n").innerHTML = "";
		this.hideCode();
		this.clearSecondPillar();
	},
	activateEvents: function() {
		this.addClickEvent("btnOk", function() {
			view.getInput();
		});
		this.addClickEvent("btnStart", function() {
			view.showCode();
		});
		this.addClickEvent("btnNext", function() {
			view.proceed();
		});
	},
	init: function() {
		this.activateEvents();
	}
};
window.onload = () => view.init();
