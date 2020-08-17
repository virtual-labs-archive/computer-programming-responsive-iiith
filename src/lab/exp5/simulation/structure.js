//---------------------------------+
// Author: Parvesh Kumar Gahanolia |
// Email: <parvesh@vlabs.ac.in>    |
//---------------------------------+

window.view = {
	stateOfSolution: 1, // shows state of solution.
	stateOfExeplation: 0, // shows state of exeplation.
	// below strings shows steps, guideline, instruction, and solution during of code execution.
	stepString1: "Step 1: Define a structure",
	stepString2: "Step 2: Declare a structure",
	stepString3: "Step 3: Function to fill a structure",
	stepString4: "Step 4: Use structures to handle data",
	guidelineString1: "Definition of Account",
	guidelineString2: "Declare a structure below",
	guidelineString3: "Function to fill an account",
	guidelineString4: "Find maximum balance holder",
	instruction1: "Bank of Gujrat has decided to computerize all its records.</br>" +
        "They hired a software programmer, Ravi.</br>" +
        "He suggested that five pieces of data had to be maintained in every account.</br></br>" +
        "They are :</br>" + 
        "&emsp;1)Account type, either checking or savings</br>" +
        "&emsp;2)Account holder name</br>" +
        "&emsp;3)Branch in which the account is based</br>" +
        "&emsp;4)A unique account number</br>" +
        "&emsp;5)The current balance in the account</br></br>" +
        "Ravi decides that using different variables to represent all this data would be messy and inefficient.</br>" +
        "He decides that it would be better to represent the account's variables with the help of a structure.</br></br>" +
        "Help Ravi write an account structure with the following variables:</br>" +
        "&emsp;char type:(max size 10)</br>" +
        "&emsp;char holder:(max size 30)</br>" +
        "&emsp;char branch:(max size 20)</br>" +
        "&emsp;char no:(account number,length 10)</br>" +
        "&emsp;unsigned int bal (stores current balance):</br></br>" +
        "Example of an employee structure:</br>" +
        "&emsp;struct database {</br>" +  
        "&emsp;unsigned int id_number;</br>" +  
        "&emsp;unsigned int age;</br>" +  
        "&emsp;unsigned int salary;</br>" +
        "&emsp;};</br>" +
        "Now define an Account structure below:</br>",
	instruction2: "Let us say we are opening an account for Suresh We will simply say:</br></br>" +
        "struct account Suresh;</br></br>" +
        "We can also use a type definition. This allows us to create account as a type of variable" +
        "similar to int or char. If we do that we can create his account as follows:</br></br>" +
        "typedef struct account account;</br>" +
        "account Suresh;</br></br>" +
        "We can also create an array of accounts as follows:</br></br>" +
        "account bank[10];</br></br>" +
        "Create an account variable named ram and one named shyam. Also set balance to be 100 for ram" +
        "and shyam as two times account balance of ram. Assume that account type is created.</br></br>" +
        "//Previous sample code:</br>" +
        "struct account{</br>" +
        "&emsp;char type[11];</br>" +
        "&emsp;char holder[31];</br>" +
        "&emsp;char branch[21];</br>" +
        "&emsp;char no[11];</br>" +
        "&emsp;unsigned int bal;</br>" +
        "}</br>" +
        "typedef struct account account;</br>" +
        "//Or</br>" +
        "struct account{</br>" +
        "&emsp;char type[11];</br>" +
        "&emsp;char holder[31];</br>" +
        "&emsp;char branch[21];</br>" +
        "&emsp;char no[11];</br>" +
        "&emsp;unsigned int bal;</br>" +
        "};</br>",
	instruction3: "Write a function to fill up an account. It takes the account variables as input and returns an account structure.</br>" +
        "Now we have to fill up Suresh's account. Insert code to fill up his account as follows.</br></br>" +
        "Account Type = Savings (Only Savings(smallcase) and Current(smallcase) allowed)</br>" +
        "Account Name = Suresh</br>" +
        "Account Branch = M.G Road, Bangalore</br>" +
        "Account Number = 1000000000 (Check if length = 10 characters)</br>" +
        "Account Balance = 10000</br>",
	instruction4: "Let us now write a code to find the details of the person with maximum balance in their account for the following main function..</br></br>" +
        "//Previous code</br>" +
        "struct account{</br>" +
        "&emsp;char type[11];</br>" +
        "&emsp;char holder[31];</br>" +
        "&emsp;char branch[21];</br>" +
        "&emsp;char no[11];</br>" +
        "&emsp;unsigned int bal;</br>" +
        "}</br>" +
        "typedef struct account account;</br></br>" +
        "//Assume initAcc is defined and following is the prototype</br>" +
        "account initAcc(char* name,char* type,char* branch,char* number,unsigned int balance);</br></br>" +
        "void main(){</br>" +
        "&emsp;account bank[4];</br>" +
        "&emsp;bank[0]=initAcc(\"Ram\",\"Savings\",\",1000000000,300);</br>" +
        "&emsp;bank[1]=initAcc(\"Shyam\",\"Savings\",\",1000000001,700);</br>" +
        "&emsp;bank[2]=initAcc(\"Pradeep\",\"Current\",\",1000000002,600);</br>" +
        "&emsp;bank[3]=initAcc(\"Suresh\",\"Savings\",\",1000000004,800);</br>" +
        "&emsp;account max=findmax(bank);</br>" +
        "}</br>",
	solutionHint1: "struct account{\n\n\n\n};",
	solutionHint2: "",
	solutionHint3: "account initAcc(char* name, char* type, char* branch, char* number, unsigned int balance)\n{\n\n}",
	solutionHint4: "account findMaxBal(account src[], int size){\n}",
	solution1: "struct account{</br>" +
        "&emsp;char type[10];</br>" +
        "&emsp;char holder[30];</br>" +
        "&emsp;char branch[20];</br>" +
        "&emsp;char no[10];</br>" +
        "&emsp;unsigned int bal;</br>" +
        "};</br>",
	solution2: "account ram;</br>" +
        "account shyam;</br>" +
        "ram.bal=100;</br>" +
        "shyam.bal=2*ram.bal;</br>",
	solution3: "account initAcc(char* name,char* type,char* branch,char* number,unsigned int balance){</br>" +
        "int isErr=0;</br>" +
        "account newAc;</br>" +
        "strcpy(newAc.holder,name);</br>" +
        "strcpy(newAc.branch,branch);</br>" +
        "if (strcmp(type,\"current\")==0 || strcmp(type,\"savings\")==0);</br>" +
        "strcpy(newAc.type,type);</br>" +
        "else isErr=1;</br>" +
        "if (strlen(number)==10)</br>" +
        "strcpy(newAc.no,number);</br>" +
        "else isErr=1;</br>" +
        "newAc.bal=balance;</br>" +
        "if (!isErr)</br>" +
        "return (newAc);</br>" +
        "return NULL;</br>" +
        "}</br>",
	solution4: "account findMaxBal(account src[], int size){</br>" +
        "int i=0;</br>" +
        "int maxBalIndex=0;</br>" +
        "for (;i<size;i++){</br>" +
        "if (src[i].bal>src[maxBalIndex].bal)</br>" +
        "maxBalIndex=i;</br>" +
        "}</br>" +
        "printf (\"maxBalIndex is %d\", maxBalIndex);</br>" +
        "return src[maxBalIndex];</br>" +
        "}</br>",
	suggestion1: "\"Try Again\"",
	suggestion2: "",
	// addClickEvent: add EventListener to other methods.
	addClickEvent: function (id, method) {
		var element = document.getElementById(id);
		element.addEventListener("click", method, false);
	},
	// activateEvents: calls addClickEvent method to add EventListener to other methods.
	activateEvents: function () {
		this.addClickEvent("submitBtnId", function() { view.createStaticStateOfSolution(); });
		this.addClickEvent("yesBtnId", function() { view.createStaticStateOfExeplation(); });
		this.addClickEvent("noBtn", function() { view.removeErrorOfCode(); });
	},
	// removeClickEvent: remove EventListener to other methods.
	removeClickEvent: function (id, method) {
		var element = document.getElementById(id);
		element.removeEventListener("click", method, false);
	},
	// changeClass: changes class name of a element.
	changeClass: function(id, className) {
		document.getElementById(id).className = className;
	},
	// enableElement: makes element enable.
	enableElement: function (id) {
		document.getElementById(id).disabled = false;
	},
	// disableElement: makes element disable.
	disableElement: function (id) {
		document.getElementById(id).disabled = true;
	},
	// setString: set given string to a element.
	setString: function (id, value) {
		document.getElementById(id).value = value;
	},
	// getString: gets string from a given element.
	getString: function (id) {
		var string = document.getElementById(id).value;
		return string;
	},
	// eraseString: erase given string to a element.
	eraseString: function (id) {
		document.getElementById(id).value = "";
	},
	// setInnerHTML: set innerText to a element.
	setInnerHTML: function (id, innerHTML) {
		document.getElementById(id).innerHTML = innerHTML;
	},
	// setNewId: set new id to a element.
	setNewId: function (oldId, newId) {
		document.getElementById(oldId).id = newId;
	},
	// showButton: set button display style as block.
	showButton: function (id1, id2) {
		document.getElementById(id1).style.display = "block";
		document.getElementById(id2).style.display = "block";    
	},
	// showButton: set button display style as none.
	hideButton: function (id1, id2) {
		document.getElementById(id1).style.display = "none";
		document.getElementById(id2).style.display = "none";
	},
	// copyValue: copy value from one text area and past this value to another text area.
	copyValue: function (id1, id2) {
		var valueOfTextArea = document.getElementById(id1).value;
		document.getElementById(id2).value = valueOfTextArea;
	},
	// showDefinitionOfAccount: gives solution for how to define structure.
	showDefinitionOfAccount: function () {
		this.setInnerHTML("solutionArea", this.solution1);
		this.copyValue("solutionHintArea", "viewUserCode");
		this.changeClass("yesBtnId", "button buttonPosition");
		this.changeClass("noBtn", "button buttonPosition");
		this.changeClass("submitBtnId", "button buttonPosition hide");
		this.stateOfExeplation = 1;
	},
	// showDeclarationStructure: gives solution for how to declare structure.
	showDeclarationStructure: function () {
		this.setInnerHTML("solutionArea", this.solution2);
		this.copyValue("solutionHintArea", "viewUserCode");
		this.changeClass("yesBtnId", "button buttonPosition");
		this.changeClass("noBtn", "button buttonPosition");
		this.changeClass("submitBtnId", "button buttonPosition hide");
		this.stateOfExeplation = 2;
	},
	// showHowToFillAccount: gives solution to fill an account.
	showHowToFillAccount: function () {
		this.setInnerHTML("solutionArea", this.solution3);
		this.copyValue("solutionHintArea", "viewUserCode");
		this.changeClass("yesBtnId", "button buttonPosition");
		this.changeClass("noBtn", "button buttonPosition");
		this.changeClass("submitBtnId", "button buttonPosition hide");
		this.stateOfExeplation = 3;
	},
	// showMaximumBalance: gives solution to find, maximum balance holder.
	showMaximumBalance: function () {
		this.setInnerHTML("solutionArea", this.solution4);
		this.copyValue("solutionHintArea", "viewUserCode");
		this.changeClass("yesBtnId", "button buttonPosition");
		this.changeClass("noBtn", "button buttonPosition");
		this.changeClass("submitBtnId", "button buttonPosition hide");
		this.stateOfExeplation = 4;
	},
	// goOnDeclareStructure: gives instructions for how to declare structure.
	goOnDeclareStructure: function () {
		this.setInnerHTML("instructionArea", this.instruction2);
		this.setInnerHTML("stepId", this.stepString2);
		this.setInnerHTML("guideLineId",  this.guidelineString2);
		this.setInnerHTML("solutionArea", "");
		this.eraseString("solutionHintArea");
		this.eraseString("viewUserCode");
		this.changeClass("yesBtnId", "button buttonPosition hide");
		this.changeClass("noBtn", "button buttonPosition hide");
		this.changeClass("submitBtnId", "button buttonPosition");
		this.stateOfSolution = 2;
	},
	// goToFillAccount: gives instructions for how to fill account.
	goToFillAccount: function () {
		this.setInnerHTML("instructionArea", this.instruction3);
		this.setInnerHTML("stepId", this.stepString3);
		this.setInnerHTML("guideLineId",  this.guidelineString3);
		this.setInnerHTML("solutionArea", "");
		this.setString("solutionHintArea", this.solutionHint3);
		this.eraseString("viewUserCode");
		this.changeClass("yesBtnId", "button buttonPosition hide");
		this.changeClass("noBtn", "button buttonPosition hide");
		this.changeClass("submitBtnId", "button buttonPosition");
		this.stateOfSolution = 3;
	},
	// goToHandleData: gives instructions to find, maximum balance holder
	goToHandleData: function () {
		//alert('yesBtnId3');
		this.setInnerHTML("instructionArea", this.instruction4);
		this.setInnerHTML("stepId", this.stepString4);
		this.setInnerHTML("guideLineId",  this.guidelineString4);
		this.setInnerHTML("solutionArea", "");
		this.setString("solutionHintArea", this.solutionHint4);
		this.changeClass("yesBtnId", "button buttonPosition hide");
		this.changeClass("noBtn", "button buttonPosition hide");
		this.changeClass("submitBtnId", "button buttonPosition");
		this.eraseString("viewUserCode");
		this.stateOfSolution = 4;
	},
	// goToEndOfCode: resets whole experiment to it's initial state. 
	goToEndOfCode: function () {
		this.stateOfSolution = 1;
		this.setInitialString();
	},
	// removeErrorOfCode: work when user click on button.
	removeErrorOfCode: function () {
		this.setString("viewUserCode", this.suggestion1);
		this.setInnerHTML("solutionArea", this.suggestion2);
		this.changeClass("yesBtnId", "button buttonPosition hide");
		this.changeClass("noBtn", "button buttonPosition hide");
		this.changeClass("submitBtnId", "button buttonPosition");
	},
	// setInitialString: works when whole experiment reset in it's initial state.
	setInitialString: function () {
		this.changeClass("submitBtnId", "button buttonPosition");
		this.changeClass("yesBtnId", "button buttonPosition hide");
		this.changeClass("noBtn", "button buttonPosition hide");
		this.setInnerHTML("instructionArea", this.instruction1);
		this.setString("solutionHintArea", this.solutionHint1);
		this.setInnerHTML("stepId", this.stepString1);
		this.setInnerHTML("guideLineId",  this.guidelineString1);
		this.setString("viewUserCode", "");
		this.setInnerHTML("solutionArea", "");
	},
	// createStaticStateOfSolution: work on submit button according to state of experiment solution.
	createStaticStateOfSolution: function () {
		if (this.stateOfSolution === 1) {
			this.showDefinitionOfAccount();
		}
		else if (this.stateOfSolution === 2) {
			this.showDeclarationStructure();
		}
		else if (this.stateOfSolution === 3) {
			this.showHowToFillAccount();
		}
		else if (this.stateOfSolution === 4) {
			this.showMaximumBalance();
		}
	},
	// createStaticStateOfSolution: work on yes button according to state of experiment exeplation.
	createStaticStateOfExeplation: function () {
		if (this.stateOfExeplation === 1) {
			this.goOnDeclareStructure();
		}
		else if (this.stateOfExeplation === 2) {
			this.goToFillAccount();
		}
		else if (this.stateOfExeplation === 3) {
			this.goToHandleData();
		}
		else if (this.stateOfExeplation === 4) {
			this.goToEndOfCode();
			this.setInitialString();
		}
	},
	// init: calls methods to set Initial String and activate events.
	init: function () {
		this.activateEvents();
		this.setInitialString();
	}
};
// onload function: call init method on window onload.
window.onload = function () {
	view.init();
};