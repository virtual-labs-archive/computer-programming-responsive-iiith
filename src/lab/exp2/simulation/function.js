window.view = {
	i: 0,
	area: 0,
	totalArea: 0,
	correctInputs: 0,
	disableElement: function(buttonId) {
		document.getElementById(buttonId).disabled = true
	},
	enableElement: function(buttonId) {
		document.getElementById(buttonId).disabled = false
	},
    hideInstructions: function() {
        document.getElementById('instructions').className = 'hide'
    },
    showInstructions: function() {
        document.getElementById('instructions').className = 'questionBlock'
    },
	activateClicks: function() {
		this.addClickEvent('imageSquare', function() { view.showSquareInputs() })
		this.addTouchEvent('imageSquare', function() { view.showSquareInputs() })
		this.addClickEvent('okSquare', function() { view.validateSquareInputs() })
		this.addClickEvent('imageRectangle', function() { view.showRectangleInputs() })
		this.addClickEvent('okRectangle', function() { view.validateRectangleInputs() })
		this.addClickEvent('imageTriangle', function() { view.showTriangleInputs() })
		this.addClickEvent('okTriangle', function() { view.validateTriangleInputs() })
		this.addClickEvent('imageCircle', function() { view.showCircleInputs() })
		this.addClickEvent('okCircle', function() { view.validateCircleInputs() })
		this.addClickEvent('btnExecute', function() { view.calculateArea() })
	},
	unCheckRadioButtons: function() {
		var elements = document.getElementsByClassName('radiobutton')
		for ( i = 0 ; i < elements.length ; i ++ )
			elements[i].checked = false
	},
	hideQuestionBlock: function(id1, id2) {
		document.getElementById(id1).className = 'questionBlock hide'
		document.getElementById(id2).style.opacity = '0.3'
	},
	showQuestionBlock: function(id1, id2) {
		document.getElementById(id1).className = 'questionBlock'
		document.getElementById(id2).style.opacity = '1'
	},
	showSquareInputs: function() {
		this.hideQuestionBlock('questionRectangle', 'imageRectangle')
		this.hideQuestionBlock('questionCircle', 'imageCircle')
		this.hideQuestionBlock('questionTriangle', 'imageTriangle')
		this.showQuestionBlock('questionSquare', 'imageSquare')
        this.hideInstructions()
		this.unCheckRadioButtons()
	},
	showRectangleInputs: function() {
		this.hideQuestionBlock('questionSquare', 'imageSquare')
		this.hideQuestionBlock('questionCircle', 'imageCircle')
		this.hideQuestionBlock('questionTriangle', 'imageTriangle')
		this.showQuestionBlock('questionRectangle', 'imageRectangle')
        this.hideInstructions()
		this.unCheckRadioButtons()
	},
	showTriangleInputs: function() {
		this.hideQuestionBlock('questionRectangle', 'imageRectangle')
		this.hideQuestionBlock('questionSquare', 'imageSquare')
		this.hideQuestionBlock('questionCircle', 'imageCircle')
		this.showQuestionBlock('questionTriangle', 'imageTriangle')
        this.hideInstructions()
		this.unCheckRadioButtons()
	},
	showCircleInputs: function() {
		this.hideQuestionBlock('questionSquare', 'imageSquare')
		this.hideQuestionBlock('questionRectangle', 'imageRectangle')
		this.hideQuestionBlock('questionTriangle', 'imageTriangle')
		this.showQuestionBlock('questionCircle', 'imageCircle')
        this.hideInstructions()
		this.unCheckRadioButtons()
	},
	approveRectangleInputs: function() {
		this.displayFunctionForRectangle()
        this.showInstructions()
		document.getElementById('questionRectangle').className = 'questionBlock hide'
		document.getElementById('imageRectangle').className += ' disabledImage'
		document.getElementById('tickRectangle').className = 'tick'
		document.getElementById('imageRectangle').style.opacity = '0.3'
		this.i ++
		this.replaceDivs()
	},
	approveSquareInputs: function() {
		this.displayFunctionForSquare()
        this.showInstructions()
		document.getElementById('questionSquare').className = 'questionBlock hide'
		document.getElementById('imageSquare').className += ' disabledImage'
		document.getElementById('tickSquare').className = 'tick'
		document.getElementById('imageSquare').style.opacity = '0.3'
		this.i ++
		this.replaceDivs()
	},
	approveCircleInputs: function() {
		this.displayFunctionForCircle()
        this.showInstructions()
		document.getElementById('questionCircle').className = 'questionBlock hide'
		document.getElementById('imageCircle').className += ' disabledImage'
		document.getElementById('tickCircle').className = 'tick'
		document.getElementById('imageCircle').style.opacity = '0.3'
		this.i ++
		this.replaceDivs()
	},
	approveTriangleInputs: function() {
		this.displayFunctionForTriangle()
        this.showInstructions()
		document.getElementById('questionTriangle').className = 'questionBlock hide'
		document.getElementById('imageTriangle').className += ' disabledImage'
		document.getElementById('tickTriangle').className = 'tick'
		document.getElementById('imageTriangle').style.opacity = '0.3'
		this.i ++
		this.replaceDivs()
	},
	validateSquareInputs: function() {
		var options1, options2, options3, options4
		var a, b, c, d
		options1 = document.getElementsByName('radio_group1')
		for ( i = 0 ; i < options1.length ; i++ ) {
			if ( options1[i].checked )
				a = options1[i].value
			options1[i].checked = false
		}
		options2 = document.getElementsByName('radio_group2')
		for ( i = 0 ; i < options2.length ; i++ ) {
			if ( options2[i].checked )
				b = options2[i].value
			options2[i].checked = false
		}
		options3 = document.getElementsByName('radio_group3')
		for ( i = 0 ; i < options3.length ; i++ ) {
			if ( options3[i].checked )
				c = options3[i].value
			options3[i].checked = false
		}
		options4 = document.getElementsByName('radio_group4')
		for ( i = 0 ; i < options4.length ; i++ ) {
			if ( options4[i].checked )
				d = options4[i].value
			options4[i].checked = false
		}
		if ( a !== '1')
			alert('Incorrect value of input variables(arguments). Calculating the area of a square only requires the length of the side of the square. Try again.')
		else if ( b !== 'float' )
			alert('Incorrect datatype of input variables(arguments). The value of the side of a square need not be an integer. Try again.')
		else if ( c !== 'float' )
			alert('Incorrect datatype for return type. The value of the area of a square need not be an integer. Try again.')
		else if ( d !== 'a*a' )
			alert('Incorrect formula for calculating the area of a square. Try again.')
		else
			this.approveSquareInputs()
	}, 
	validateRectangleInputs: function() {
		var options1, options2, options3, options4
		var a, b, c, d
		options1 = document.getElementsByName('radio_group5')
		for ( i = 0 ; i < options1.length ; i++ ) {
			if ( options1[i].checked )
				a = options1[i].value
			options1[i].checked = false
		}
		options2 = document.getElementsByName('radio_group6')
		for ( i = 0 ; i < options2.length ; i++ ) {
			if ( options2[i].checked )
				b = options2[i].value
			options2[i].checked = false
		}
		options3 = document.getElementsByName('radio_group7')
		for ( i = 0 ; i < options3.length ; i++ ) {
			if ( options3[i].checked )
				c = options3[i].value
			options3[i].checked = false
		}
		options4 = document.getElementsByName('radio_group8')
		for ( i = 0 ; i < options4.length ; i++ ) {
			if ( options4[i].checked )
				d = options4[i].value
			options4[i].checked = false
		}
		if ( a !== '2')
			alert('Incorrect value of input variables(arguments). Calculating the area of a rectangle requires the length of the two different parallel sides of the rectangle. Try again.')
		else if ( b !== 'float' )
			alert('Incorrect datatype of input variables(arguments). The value of the sides of a rectangle need not be integers. Try again.')
		else if ( c !== 'float' )
			alert('Incorrect datatype for return type. The value of the area of a rectangle need not be an integer. Try again.')
		else if ( d !== 'a*b' )
			alert('Incorrect formula for calculating the area of a rectangle. Try again.')
		else
			this.approveRectangleInputs()
	},
	validateTriangleInputs: function() {
		var options1, options2, options3, options4
		var a, b, c, d
		options1 = document.getElementsByName('radio_group9')
		for ( i = 0 ; i < options1.length ; i++ ) {
			if ( options1[i].checked )
				a = options1[i].value
			options1[i].checked = false
		}
		options2 = document.getElementsByName('radio_group10')
		for ( i = 0 ; i < options2.length ; i++ ) {
			if ( options2[i].checked )
				b = options2[i].value
			options2[i].checked = false
		}
		options3 = document.getElementsByName('radio_group11')
		for ( i = 0 ; i < options3.length ; i++ ) {
			if ( options3[i].checked )
				c = options3[i].value
			options3[i].checked = false
		}
		options4 = document.getElementsByName('radio_group12')
		for ( i = 0 ; i < options4.length ; i++ ) {
			if ( options4[i].checked )
				d = options4[i].value
			options4[i].checked = false
		}
		if ( a !== '1')
			alert('Incorrect value of input variables(arguments). Calculating the area of an equilateral triangle only requires the length of one of the sides of the triangle. Try again.')
		else if ( b !== 'float' )
			alert('Incorrect datatype of input variables(arguments). The value of the side of an equilateral triangle need not be an integer. Try again.')
		else if ( c !== 'float' )
			alert('Incorrect datatype for return type. The value of the area of an equilateral triangle need not be an integer. Try again.')
		else if ( d !== 'correct' )
			alert('Incorrect formula for calculating the area of an equilateral triangle. Try again.')
		else
			this.approveTriangleInputs()
	},
	validateCircleInputs: function() {
		var options1, options2, options3, options4
		var a, b, c, d
		options1 = document.getElementsByName('radio_group13')
		for ( i = 0 ; i < options1.length ; i++ ) {
			if ( options1[i].checked )
				a = options1[i].value
			options1[i].checked = false
		}
		options2 = document.getElementsByName('radio_group14')
		for ( i = 0 ; i < options2.length ; i++ ) {
			if ( options2[i].checked )
				b = options2[i].value
			options2[i].checked = false
		}
		options3 = document.getElementsByName('radio_group15')
		for ( i = 0 ; i < options3.length ; i++ ) {
			if ( options3[i].checked )
				c = options3[i].value
			options3[i].checked = false
		}
		options4 = document.getElementsByName('radio_group16')
		for ( i = 0 ; i < options4.length ; i++ ) {
			if ( options4[i].checked )
				d = options4[i].value
			options4[i].checked = false
		}
		if ( a !== '1')
			alert('Incorrect value of input variables(arguments). Calculating the area of circle only requires the radius. Try again.')
		else if ( b !== 'float' )
			alert('Incorrect datatype of input variables(arguments). The value of the radius of the circle need not be an integer. Try again.')
		else if ( c !== 'float' )
			alert('Incorrect datatype for return type. The value of the area of the circle need not be an integer. Try again.')
		else if ( d !== '(pi*a*a)/2' )
			alert('Incorrect formula for calculating the area of the circle. Try again.')
		else
			this.approveCircleInputs()
	},
	displayFunctionForSquare: function() {
		document.getElementById('functionSquare').innerHTML += 'float area_sq (float a)<br>{<br> &emsp; float area = a*a;<br>&emsp; return area;<br>}'
	},
	displayFunctionForRectangle: function() {
		document.getElementById('functionRectangle').innerHTML += 'float area_rect (float a,float b)<br>{<br> &emsp; float area = a*b;<br> &emsp; return area;<br>}'
	},
	displayFunctionForTriangle: function() {
		document.getElementById('functionTriangle').innerHTML += 'float area_triangle (float a)<br>{<br>&emsp;float area = (sqrt(3)/4.0)*a*a;<br>&emsp;return area;<br>}'
	},
	displayFunctionForCircle: function() {
		document.getElementById('functionCircle').innerHTML += 'float area_semicircle (float a)<br>{<br>&emsp;float area = (3.14*a*a)/2;<br>&emsp;return area;<br>}'
	},
	addClickEvent: function(id, method) {
		var element = document.getElementById(id)
		element.addEventListener('click', method, false)
	},
	addMouseOverEvent: function(id, method) {
		var element = document.getElementById(id)
		element.addEventListener('mouseover', method, false)
	},
	addMouseOutEvent: function(id, method) {
		var element = document.getElementById(id)
		element.addEventListener('mouseout', method, false)
	},
	addTouchEvent: function(id, method) {
		var element = document.getElementById(id)
		element.addEventListener('touchend', method, false)
	},
	replaceDivs: function() {
		if ( this.i === 4 ) {
            this.hideInstructions()
			document.getElementById('imageBlock').className = 'imageBlock hide'
			document.getElementById('imageComplex').className = 'imageComplex'
			document.getElementById('calculateArea').className = 'questionBlock'
		}
	},
	area_sq: function( param, functionCall ) {
		this.area = param * param
		this.totalArea += this.area
		alert( 'area from function call ' + String( i + 1 ) + ' ) : ' + functionCall + ' is ' + this.area.toFixed(2) )
		this.correctInputs ++
	},
	area_triangle: function( param, functionCall ) {
		this.area = Math.sqrt(3)/4 * param * param
		this.totalArea += this.area
		alert( 'area from function call ' + String( i + 1 ) + ' ) : ' + functionCall + ' is ' + this.area )
		this.correctInputs ++
	},
	area_semicircle: function( param, functionCall ) {
		this.area = (Math.PI * param * param)/2
		this.totalArea += this.area
		alert( 'area from function call ' + String( i + 1 ) + ' ) : ' + functionCall + ' is ' + this.area )
		this.correctInputs ++
	},
	area_rect: function( param, functionCall ) {
		this.area = Number(param[0]) * Number(param[1])
		this.totalArea += this.area
		alert( 'area from function call ' + String( i + 1 ) + ' ) : ' + functionCall + ' is ' + this.area.toFixed(2) )
		this.correctInputs ++
	},
	resetToInitialState: function() {
		document.getElementById('imageBlock').className = 'imageBlock'
		document.getElementById('imageComplex').className = 'imageComplex hide'
		document.getElementById('calculateArea').className = 'questionBlock hide'
		document.getElementById('imageSquare').className = 'imageSquare'
		document.getElementById('imageRectangle').className = 'imageRectangle'
		document.getElementById('imageTriangle').className = 'imageTriangle'
		document.getElementById('imageCircle').className = 'imageCircle'
		document.getElementById('tickSquare').className = 'tick hide'
		document.getElementById('tickRectangle').className = 'tick hide'
		document.getElementById('tickCircle').className = 'tick hide'
		document.getElementById('tickTriangle').className = 'tick hide'
		document.getElementById('functionSquare').innerHTML = ''
		document.getElementById('functionRectangle').innerHTML = ''
		document.getElementById('functionCircle').innerHTML = ''
		document.getElementById('functionTriangle').innerHTML = ''
        document.getElementById('instructions').className = 'questionBlock'
		this.i = 0
		this.area = 0
		this.totalArea = 0
		this.correctInputs = 0
	},
	calculateArea: function() {
		var elements = document.getElementById('inputBoxSection').childNodes
		for ( i = 0 ; i < elements.length ; i ++ ) {
			var parsedValue = elements[i].value.replace(/\s/g, '')
			var a = parsedValue.indexOf('(')
			var b = parsedValue.indexOf(')')
			parameter = parsedValue.substring(a+1, b)
			parameter = parameter.split(',')
			functionCall = parsedValue.replace(parameter, '')
			if ( parameter.length === 1 ) {
				parameter = Number(parameter)
				if ( functionCall === 'area_sq()' && isNaN(parameter) === false )
					this.area_sq(parameter, parsedValue)
				else if ( functionCall === 'area_triangle()' && isNaN(parameter) === false )
					this.area_triangle(parameter, parsedValue)
				else if ( functionCall === 'area_semicircle()' && isNaN(parameter) === false )
					this.area_semicircle(parameter, parsedValue)
				else
					alert( 'Incorrect function call at line ' + String( i + 1 ) )
			}
			else if ( parameter.length === 2 && functionCall === 'area_rect()' && isNaN(parameter[0]) === false && isNaN(parameter[1]) === false )
				this.area_rect(parameter, parsedValue)
			else
		 	alert( 'Incorrect function call at line ' + String( i + 1 ) )
		}	
		if ( this.correctInputs === 7 ) {
			alert( 'Total area is : ' + this.totalArea + ' ' + ' ' + 'Correct value is : 132.02272227950945' )
			this.resetToInitialState()
		}
		else
			alert( 'Some function calls were incorrect. Please try again !' )
	},
	init: function() {
		this.activateClicks()
	}
}

window.onload = function() { view.init() }
