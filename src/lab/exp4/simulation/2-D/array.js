window.model = {
	i: 0,
	j: 0,
	k: 0,
	p: 0,
	q: 0,
	r: 0,
	a: 0,
	b: 0,
	firstElement: 0,
	secondElement: 0,
	multiplyElements: function() {
		return this.firstElement * this.secondElement
	}
}

window.view = {
	matrixA: new Array(),
	matrixB: new Array(),
	rowsA: 0,
	rowsB: 0,
	colsA: 0,
	colsB: 0,
	matrixCount: 1,
	lastRedDiv: new Object(),
	nextRedDiv: new Object(),
	changeClass: function(id, className) {
		document.getElementById(id).className = className
	},
	resetVariables: function() {
	model.i = 0
	model.j = 0
	model.k = 0
	model.p = 0
	model.q = 0
	model.r = 0
	model.a = 0
	model.b = 0
	model.firstElement = 0
	model.secondElement = 0
	this.matrixA = new Array()
	this.matrixB = new Array()
	this.rowsA = 0
	this.rowsB = 0
	this.colsA = 0
	this.colsB = 0
	this.matrixCount = 1
	this.lastRedDiv = new Object()
	this.nextRedDiv = new Object()
	},
	getLastHighlightedDiv: function() {
		var findClass = document.getElementsByClassName('showDivInRed')
		return findClass[0]
	},
	getNextDivToHighlight: function(lastHighlightedDiv) {
		var next = lastHighlightedDiv.nextSibling
		next = next.nextSibling
		return next
	},
	jumpTo: function(targetDivId) {
		var element = document.createElement('div')
		element.id = targetDivId
		return element
	},
	disableButton: function(buttonId) {
		document.getElementById(buttonId).disabled = true
	},
	enableButton: function(buttonId) {
		document.getElementById(buttonId).disabled = false
	},
	addClickEvent: function(id, method) {
		var element = document.getElementById(id)
		element.addEventListener('click', method, false)
	},
	activateEvents: function() {
		this.addClickEvent('2DbtnOK', function() { view.getRowsAndCols() })
		this.addClickEvent('generateA', function() { view.generateFirstMatrixElements() })
		this.addClickEvent('generateB', function() { view.generateSecondMatrixElements() })
		this.addClickEvent('btnStart2D', function() { view.generateMatrices() })
		this.addClickEvent('btnNext2D', function() { view.multiplyMatrices() })
	},
	highlightNextStep: function() {
		this.changeClass(this.lastRedDiv.id, 'show')
		this.changeClass(this.nextRedDiv.id, 'showDivInRed')
	},
	showCode: function() {
		this.changeClass('2-dArray', 'show')
	},
	getRowsAndCols: function() {
		var row = Number(document.getElementById('row').value)
		var col = Number(document.getElementById('col').value)
		if ( row === 0 || col === 0 )
			alert('Enter Matrix Size First !')
		else if ( isNaN(row) || isNaN(col) )
			alert('Matrix Size Must Be An Integer Value !')
		else
		{	
			if ( this.matrixCount === 1 )
			{	
				this.enableButton('generateA')
				this.changeClass( 'generateA', 'button GenerateValueButton' )
				this.rowsA = row
				this.colsA = col
			}
			else
			{
				this.enableButton('generateB')
				this.changeClass( 'generateB', 'button GenerateValueButton' )
				this.rowsB = row
				this.colsB = col
			}
			this.disableButton('2DbtnOK')
			this.changeClass( '2DbtnOK', 'startButton disableButton' )
		}
	},
	resetRowsAndCols: function() {
		document.getElementById('row').value = this.colsA
		document.getElementById('col').value = ''
	},
	generateFirstMatrixElements: function() {
		var size = this.rowsA * this.colsA
		for ( i = 0 ; i < size ; i++)
		{
			var random = i+1
			this.matrixA.push(random)
		}
		this.resetRowsAndCols()
		this.disableButton('row')
		this.disableButton('generateA')
		this.changeClass('generateA', 'disableButton GenerateValueButton hide')
		this.changeClass('generateB', 'buttonDisable GenerateValueButton show')
		this.enableButton('2DbtnOK')
		this.changeClass( '2DbtnOK', 'button startButton' )
		this.matrixCount ++
	},
	generateSecondMatrixElements: function() {
		var size = this.rowsB * this.colsB
		for ( i = 0 ; i < size ; i++)
		{
			var random = i+1
			this.matrixB.push(random)
		}
		this.disableButton('generateB')
		this.changeClass( 'generateB', 'buttonDisable GenerateValueButton show' )
		this.disableButton('col')
		this.enableButton('btnStart2D')
		this.changeClass( 'btnStart2D', 'button myStartButton' )
	},
	generateMatrixA: function() {
		var matA = document.createElement('table')
		matA.className = 'table'
		 // var caption = matA.createCaption();
		 // caption.innerHTML = ""
		for ( i = 0 ; i < this.rowsA ; i++ )
		{	
			var row = document.createElement('tr')
			for ( j = 0 ; j < this.colsA ; j++ )
			{
				var col = document.createElement('td')
				col.className = 'matrixCell'
				row.appendChild(col)
			}
			matA.appendChild(row)
		}
		document.getElementById('matrixA').appendChild(matA)
		var elements = document.getElementById('matrixA').getElementsByTagName('td')
		for ( i = 0 ; i < elements.length ; i++ )
		{
			elements[i].innerHTML = this.matrixA[i]
		}
	},
	generateMatrixB: function() {
		var matB = document.createElement('table')
		matB.className = 'table'
		// var caption = matB.createCaption();
		// caption.innerHTML = "<b>Matrix B</b>"
		for ( i = 0 ; i < this.rowsB ; i++ )
		{	
			var row = document.createElement('tr')
			for ( j = 0 ; j < this.colsB ; j++ )
			{
				var col = document.createElement('td')
				col.className = 'matrixCell'
				row.appendChild(col)
			}
			matB.appendChild(row)
		}
		document.getElementById('matrixB').appendChild(matB)
		var elements = document.getElementById('matrixB').getElementsByTagName('td')
		for ( i = 0 ; i < elements.length ; i++ )
		{
			elements[i].innerHTML = this.matrixB[i]
		}
	},
	generateResultantMatrix: function() {
		var matResultant = document.createElement('table')
		matResultant.className = 'table'
		// var caption = matResultant.createCaption();
		// caption.innerHTML = "<b>Resultant Matrix</b>"
		for ( i = 0 ; i < this.rowsA ; i++ )
		{	
			var row = document.createElement('tr')
			for ( j = 0 ; j < this.colsB ; j++ )
			{
				var col = document.createElement('td')
				col.className = 'resultMatrixCell'
				row.appendChild(col)
			}
			matResultant.appendChild(row)
		}
		document.getElementById('resultantMatrix').appendChild(matResultant)
		var elements = document.getElementById('resultantMatrix').getElementsByTagName('td')
		for ( i = 0 ; i < elements.length ; i++ )
		{
			elements[i].innerHTML = -1
		}
	},
	generateMatrices: function() {
		this.showCode()
		this.generateMatrixA()
		this.generateMatrixB()
		this.generateResultantMatrix()
		this.disableButton('btnStart2D')
		this.changeClass( 'btnStart2D', 'buttonDisable myStartButton' )
		this.enableButton('btnNext2D')
		this.changeClass( 'btnNext2D', 'nextButton button' )
		this.changeClass('line21', 'showDivInRed')
	},
	highlightRowMatrixA: function() {
		var tableA = document.getElementById('matrixA').firstChild
		for ( model.i, model.j ; model.j < this.colsA ; model.j ++ )	
			tableA.rows[model.i].cells[model.j].className = 'matrixCell blueCell'
		model.j = 0
	},
	highlightColMatrixB: function(){
		var tableB = document.getElementById('matrixB').firstChild
		for ( model.p, model.q ; model.p < this.rowsB ; model.p ++ )
			tableB.rows[model.p].cells[model.q].className = 'matrixCell blueCell'
	},
	highlightNextColumn: function() {
		if ( model.q > 0 )
		{
			var tableA = document.getElementById('matrixA').firstChild
			for ( model.i, model.j ; model.j < this.colsA ; model.j ++ )	
				tableA.rows[model.i].cells[model.j].className = 'matrixCell blueCell'
			var tableB = document.getElementById('matrixB').firstChild
			for ( model.p, model.q ; model.p < this.rowsB ; model.p ++ )
				tableB.rows[model.p].cells[model.q - 1].className = 'matrixCell'
			model.j = 0
			model.p = 0
		}
	},
	highlightMatrixElements: function() {
		var tableA = document.getElementById('matrixA').firstChild
		var firstElement = tableA.rows[model.i].cells[model.k]
		firstElement.className = 'matrixCell yellowCell'
		model.firstElement = firstElement.innerHTML
		var tableB = document.getElementById('matrixB').firstChild
		var secondElement = tableB.rows[model.r].cells[model.q]
		secondElement.className = 'matrixCell yellowCell'
		model.secondElement = secondElement.innerHTML
		var tableRes = document.getElementById('resultantMatrix').firstChild
		var resultantElement = tableRes.rows[model.a].cells[model.b]
		resultantElement.className = 'resultMatrixCell yellowCell'
		model.k ++
		model.r ++
	},
	displayResult: function(res) {
		var element = document.getElementById('resultantMatrix').firstChild.rows[model.a].cells[model.b]
		element.innerHTML = Number(element.innerHTML) + res
	},
	setCellValueToZero: function() {
		document.getElementById('resultantMatrix').firstChild.rows[model.a].cells[model.b].innerHTML = 0
	},
	resetPreviousCells: function() {
		if( model.k > 0 )
		{
			var tableA = document.getElementById('matrixA').firstChild
			var firstElement = tableA.rows[model.i].cells[model.k - 1]
			firstElement.className = 'matrixCell blueCell'
			var tableB = document.getElementById('matrixB').firstChild
			var secondElement = tableB.rows[model.r -1].cells[model.q]
			secondElement.className = 'matrixCell blueCell'
		}
	},
	resetPreviousRow: function() {
		if ( model.i > 0 )
		{
			var tableA = document.getElementById('matrixA').firstChild
			for ( model.i, model.j ; model.j < this.colsA ; model.j ++ )	
				tableA.rows[model.i - 1].cells[model.j].className = 'matrixCell' 
			model.j = 0
		}
	},
	highlightNextRow: function() {
			var tableA = document.getElementById('matrixA').firstChild
			for ( model.i, model.j ; model.j < this.colsA ; model.j ++ )	
				tableA.rows[model.i].cells[model.j].className = 'matrixCell blueCell'
			var tableB = document.getElementById('matrixB').firstChild
			for ( model.p, model.q ; model.p < this.rowsB ; model.p ++ )
				tableB.rows[model.p].cells[model.q - 1].className = 'matrixCell'
			model.j = 0
			model.p = 0
	},
	resetVariablesForMatrixB: function() {
		model.b ++
		model.q ++
		model.k = 0
		model.r = 0
		model.j = 0
		model.p = 0
	},
	resetVariablesForMatrixA: function() {
		model.i ++
		model.a ++
		model.b = 0
		model.q = 0
	},
	resetLastCol: function() {
		if ( model.i > 0 )
		{
			var tableB = document.getElementById('matrixB').firstChild
			for ( model.p, model.q ; model.p < this.rowsB ; model.p ++ )
				tableB.rows[model.p].cells[this.colsB - 1].className = 'matrixCell'
			model.p = 0
		}
	},
	clearDivs: function() {
		document.getElementById('2-dArray').className = 'hide'
		document.getElementById('matrixA').innerHTML = ''
		document.getElementById('matrixB').innerHTML = ''
		document.getElementById('resultantMatrix').innerHTML = ''
	},
	multiplyMatrices: function() {
		this.lastRedDiv = this.getLastHighlightedDiv()
		this.nextRedDiv = this.getNextDivToHighlight(this.lastRedDiv)
		if ( this.lastRedDiv.id === 'line27' )
		{
			if ( model.i < this.rowsA )
			{
				this.highlightRowMatrixA()
				this.resetPreviousRow()
				this.highlightNextStep()
			}
			else
			{
				alert('Code Running Is Over !')
				this.disableButton('btnNext2D')
				this.changeClass( 'btnNext2D', 'buttonDisable nextButton' )
				this.changeClass( this.lastRedDiv.id , 'show' )
				this.enableButton('2DbtnOK')
				this.changeClass( '2DbtnOK', 'button startButton' )
				this.enableButton('row')
				this.enableButton('col')
				document.getElementById('row').value = ''
				document.getElementById('col').value = ''
				this.changeClass( 'generateB', 'hide' )
				this.changeClass( 'generateA', 'buttonDisable GenerateValueButton show' )
				this.resetVariables()
				this.clearDivs()
			}
		}
		else if ( this.lastRedDiv.id === 'line29' )
		{
			if ( model.q < this.colsB )
			{
				this.resetLastCol()
				this.highlightNextColumn()
				this.highlightColMatrixB()
				this.highlightNextStep()
			}
			else
			{
				this.nextRedDiv = this.jumpTo('line37')
				this.highlightNextStep()
			}
		}
		else if ( this.lastRedDiv.id === 'line31' )
		{
			this.setCellValueToZero()
			this.highlightNextStep()
		}
		else if ( this.lastRedDiv.id === 'line32' && model.k >= this.colsA )
		{
			this.nextRedDiv = this.jumpTo('line36')
			this.highlightNextStep()
			this.resetVariablesForMatrixB()
		}
		else if ( this.lastRedDiv.id === 'line34' )
		{
			this.resetPreviousCells()
			this.highlightMatrixElements()
			var result = model.multiplyElements()
			this.displayResult(result)
			this.highlightNextStep()
		}
		else if ( this.lastRedDiv.id === 'line35' )
		{
			this.nextRedDiv = this.jumpTo('line32')
			this.highlightNextStep()
		}
		else if ( this.lastRedDiv.id === 'line36' )
		{
			this.nextRedDiv = this.jumpTo('line29')
			this.highlightNextStep()
		}
		else if ( this.lastRedDiv.id === 'line37' )
		{
			this.nextRedDiv = this.jumpTo('line27')
			this.highlightNextStep()
			this.resetVariablesForMatrixA()
		}
		else
			this.highlightNextStep()
	},
	init: function() {
		this.activateEvents()
	}
}
window.onload = function() { view.init() }
