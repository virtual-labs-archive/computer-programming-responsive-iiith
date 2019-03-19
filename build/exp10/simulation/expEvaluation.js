window.model = {	
	a: '',
	b: '',
	c: '',
	d: '',
	isBracket: false,
	highlight : [],
	getInputs: function () {
		this.a = document.getElementById('a').value
		this.b = document.getElementById('b').value
		this.c = document.getElementById('c').value
		this.d = document.getElementById('d').value
	},
	findexp: function (expression) {
		var isexpfinished = 1, offset = 0;
		var j, i;
		for(i=0;i<expression.length;i++) {   // returns if expression evaluation is complete
			if(isNaN(expression[i]) && i!=0){
				isexpfinished = 0;
				break;
			}
		}
		if(isexpfinished == 1)
			return [-1, -1]
		var sub;
		var symbols = ['%', '*', '/', '-', '+'];
		var closeindex = expression.indexOf(')');

		if( closeindex != -1) {    // finding the part in bracket to be highlighted
			for ( i = closeindex ; i >= 0 ; i-- ) {
				if(expression[i] == '(') {
					this.isBracket = true
					break;
				}
			}
			sub = expression.substring(i+1, closeindex);
			console.log(sub);
			offset = i+1;
		}
		else sub = expression;
		var start, end, a, b, c;
		for ( j = 0 ; j < symbols.length ; j++ ) {
			var found = 0;
			for ( i = 0 ; i < sub.length ; i++ ) {
				if(sub[i] == symbols[j]) {
					var tmp = i;
					a = 0;
					var unary = 0;
					if( i==0 || (i!=0 && isNaN(sub[i-1])) ) {
						continue;
					}
					if(sub[i+1] == '-')
					{
						unary = 1;
						i++;
					}
					for( var end = i+1 ; end < sub.length && !isNaN(sub[end]) ; end++){
						a = a*10 + parseInt(sub[end]);
					}
					if(unary == 1) {
						i--;
						a = -a;
					}
					unary = 0;
					b = 0, ten = 1;
					for( var start = tmp-1 ; start >= 0 && !isNaN(sub[start]) ; start--){
						b = b + ten*parseInt(sub[start]);
						ten *= 10;
					}
					if(start==0 && sub[start] == '-') {
						b = -b;
						start--;
					}
					else if(start > 0 && sub[start] == '-' && isNaN(sub[start])) {
						b = -b;
						start--;
					}
					found = 1;
					break;
				}
			}
			if(found == 1)
				break;
		}
		if(found == 0){
			return [offset, offset+sub.length-1];
		}
		return [offset+start+1, offset+end-1];
	},
	firsteval: function (expression, start, end) {
		var sub = expression.substring(start, end+1);
		console.log(sub);
		var symbols = ['%', '*', '/', '-', '+'];
		var i=0, j;
		var a = 0, b = 0, c;
		var unary = 0;
		if(sub[0] == '-')
		{
			unary = 1;
			i++;
		}

		for( ; i < sub.length && !isNaN(sub[i]) ; i++ ){
			b = b*10 + parseInt(sub[i]);
		}
		if(unary == 1) {
			b = -b;
		}
		unary = 0;
		if(sub[i]!='%' && sub[i] != '*' && sub[i] != '/' && sub[i] != '+' && sub[i] != '-'){
			while((start-1)>=0 && expression[start - 1] == '(' && (end+1)<expression.length && expression[end+1] == ')') {
				start--;
				end++;
			}
		//	if(start>0 && expression[start - 1] == '(' && (end+1) < expression.length && expression[end+1] == ')') 
		//			expression = expression.substring(0, start-1) + sub.toString() + expression.substring(end+2, expression.length);
			expression = expression.substring(0, start) + sub.toString() + expression.substring(end+1, expression.length);
			return expression;
		}

		j = i+1;
		if(sub[j] == '-')
		{
			unary = 1;
			j++;
		}

		for( ; j < sub.length && !isNaN(sub[j]) ; j++ ){
			a = a*10 + parseInt(sub[j]);
		}
		if(unary == 1) {
			a = -a;
		}
		console.log("a: ", a, "b: ", b);
		if( sub[i] == '+' )
			c = a + b;
		else if( sub[i] == '-' )
			c = b - a;
		else if( sub[i] == '*' )
			c = a * b;
		else if( sub[i] == '/' )
			c = Math.floor(b / a);
		else if( sub[i] == '%' )
			c = b % a;
		while((start-1)>=0 && expression[start - 1] == '(' && (end+1)<expression.length && expression[end+1] == ')') {
			start--;
			end++;
		}
			expression = expression.substring(0, start) + c.toString() + expression.substring(end+1, expression.length);
		return expression;
	},
	calculate: function (exp, count, start, end) {
		if(count == 0) {
			highlight = this.findexp(exp); //findexp returns the indices which are to be highlighted now, and evaluated in the next step
			return [exp, highlight];
		}
		else {
			exp = this.firsteval(exp, start, end);
			highlight = this.findexp(exp); //findexp returns the indices which are to be highlighted now, and evaluated in the next step
			return [exp, highlight];
		}
	},
	findexplogical: function (expression) {
		var isexpfinished = 1, offset = 0;
		var j, i;
		for(i=0;i<expression.length;i++) {   // returns if expression evaluation is complete
			if(isNaN(expression[i])){
				isexpfinished = 0;
				break;
			}
		}
		if(isexpfinished == 1)
			return [-1, -1]
		var sub;
		var symbols = ['&', '|'];
		var closeindex = expression.indexOf(')');

		if( closeindex != -1) {    // finding the part in bracket to be highlighted
			for ( i = closeindex ; i >= 0 ; i-- ) {
				if(expression[i] == '(') {
					break;
				}
			}
			sub = expression.substring(i+1, closeindex);
			console.log(sub);
			offset = i+1;
		}
		else sub = expression;
		var start, end, a, b, c;
		for ( j = 0 ; j < symbols.length ; j++ ) {
			var found = 0;
			for ( i = 0 ; i < sub.length ; i++ ) {
				if(sub[i] == symbols[j]) {
					var tmp = i;
					i++;    // the operators always exist in pairs
					a = 0;
					var unary = 0;
				//	if( i==0 || (i!=0 && isNaN(sub[i-1])) ) {
				//		continue;
				//	}
					if(sub[i+1] == '-')
					{
						unary = 1;
						i++;
					}
					for( var end = i+1 ; end < sub.length && !isNaN(sub[end]) ; end++){
						a = a*10 + parseInt(sub[end]);
					}
					if(unary == 1) {
						i--;
						a = -a;
					}
					unary = 0;
					b = 0, ten = 1;
					for( var start = tmp-1 ; start >= 0 && !isNaN(sub[start]) ; start--){
						b = b + ten*parseInt(sub[start]);
						ten *= 10;
					}
					if(start==0 && sub[start] == '-') {
						b = -b;
						start--;
					}
					else if(start > 0 && sub[start] == '-' && isNaN(sub[start])) {
						b = -b;
						start--;
					}
					found = 1;
					break;
				}
			}
			if(found == 1)
				break;
		}
		if(found == 0){
			return [offset, offset+sub.length-1];
		}
		return [offset+start+1, offset+end-1];
	},
	firstevallogical: function (expression, start, end) {
		var sub = expression.substring(start, end+1);
		console.log(sub);
		var symbols = ['&', '|'];
		var i=0, j;
		var a = 0, b = 0, c;
		var unary = 0;
		if(sub[0] == '-')
		{
			unary = 1;
			i++;
		}

		for( ; i < sub.length && !isNaN(sub[i]) ; i++ ){
			b = b*10 + parseInt(sub[i]);
		}
		if(unary == 1) {
			b = -b;
		}
		unary = 0;
		if(sub[i]!='&' && sub[i] != '|'){
			while((start-1)>=0 && expression[start - 1] == '(' && (end+1)<expression.length && expression[end+1] == ')') {
				start--;
				end++;
			}

		//	if(start>0 && expression[start - 1] == '(' && (end+1) < expression.length && expression[end+1] == ')') 
		//			expression = expression.substring(0, start-1) + sub.toString() + expression.substring(end+2, expression.length);
			expression = expression.substring(0, start) + sub.toString() + expression.substring(end+1, expression.length);
			return expression;
		}

		j = i+2;
		if(sub[j] == '-')
		{
			unary = 1;
			j++;
		}

		for( ; j < sub.length && !isNaN(sub[j]) ; j++ ){
			a = a*10 + parseInt(sub[j]);
		}
		if(unary == 1) {
			a = -a;
		}
		console.log("a: ", a, "b: ", b);
		if( sub[i] == '&' )
			c = (a && b);
		else if( sub[i] == '|' )
			c = (b || a);
		
		while((start-1)>=0 && expression[start - 1] == '(' && (end+1)<expression.length && expression[end+1] == ')') {
			start--;
			end++;
		}

		//if(expression[start - 1] == '(' && expression[end+1] == ')') {
		//		expression = expression.substring(0, start-1) + c.toString() + expression.substring(end+2, expression.length);
		//}
		//else {
		expression = expression.substring(0, start) + c.toString() + expression.substring(end+1, expression.length);
		//}
		return expression;

	},
	calclogical: function (exp, count, start, end) {
		if(count == 0) {
			highlight = this.findexplogical(exp); //findexp returns the indices which are to be highlighted now, and evaluated in the next step
			return [exp, highlight];
		}
		else {
			exp = this.firstevallogical(exp, start, end);
			highlight = this.findexplogical(exp); //findexp returns the indices which are to be highlighted now, and evaluated in the next step
			return [exp, highlight];
		}
	},
	findexpbitwise: function (expression) {
		var isexpfinished = 1, offset = 0;
		var j, i;
		for(i=0;i<expression.length;i++) {   // returns if expression evaluation is complete
			if(isNaN(expression[i])){
				isexpfinished = 0;
				break;
			}
		}
		if(isexpfinished == 1)
			return [-1, -1]
		var sub;
		var symbols = ['<', '>', '&', '^', '|'];
		var closeindex = expression.indexOf(')');

		if( closeindex != -1) {    // finding the part in bracket to be highlighted
			for ( i = closeindex ; i >= 0 ; i-- ) {
				if(expression[i] == '(') {
					break;
				}
			}
			sub = expression.substring(i+1, closeindex);
			console.log(sub);
			offset = i+1;
		}
		else sub = expression;
		var start, end, a, b, c;
		for ( j = 0 ; j < symbols.length ; j++ ) {
			var found = 0;
			for ( i = 0 ; i < sub.length ; i++ ) {
				if(sub[i] == symbols[j]) {
					var tmp = i;
					if(j<2)
						i++;    // the first two operators exist in pairs
					a = 0;
					var unary = 0;
				//	if( i==0 || (i!=0 && isNaN(sub[i-1])) ) {
				//		continue;
				//	}
					if(sub[i+1] == '-')
					{
						unary = 1;
						i++;
					}
					for( var end = i+1 ; end < sub.length && !isNaN(sub[end]) ; end++){
						a = a*10 + parseInt(sub[end]);
					}
					if(unary == 1) {
						i--;
						a = -a;
					}
					unary = 0;
					b = 0, ten = 1;
					for( var start = tmp-1 ; start >= 0 && !isNaN(sub[start]) ; start--){
						b = b + ten*parseInt(sub[start]);
						ten *= 10;
					}
					if(start==0 && sub[start] == '-') {
						b = -b;
						start--;
					}
					else if(start > 0 && sub[start] == '-' && isNaN(sub[start])) {
						b = -b;
						start--;
					}
					found = 1;
					break;
				}
			}
			if(found == 1)
				break;
		}
		if(found == 0){
			return [offset, offset+sub.length-1];
		}
		return [offset+start+1, offset+end-1];
	},
	firstevalbitwise: function (expression, start, end) {
		var sub = expression.substring(start, end+1);
		console.log(sub);
		var symbols = ['<', '>', '&', '^', '|'];
		var i=0, j;
		var a = 0, b = 0, c;
		var unary = 0;
		if(sub[0] == '-')
		{
			unary = 1;
			i++;
		}

		for( ; i < sub.length && !isNaN(sub[i]) ; i++ ){
			b = b*10 + parseInt(sub[i]);
		}
		if(unary == 1) {
			b = -b;
		}
		unary = 0;
		if(sub[i] == ')'){
			while((start-1)>=0 && expression[start - 1] == '(' && (end+1)<expression.length && expression[end+1] == ')') {
				start--;
				end++;
			}

	//		if(start>0 && expression[start - 1] == '(' && (end+1) < expression.length && expression[end+1] == ')') 
	//				expression = expression.substring(0, start-1) + sub.toString() + expression.substring(end+2, expression.length);
			expression = expression.substring(0, start) + sub.toString() + expression.substring(end+1, expression.length);
			return expression;
		}
		if(sub[i] == '<' || sub[i] == '>')
			j = i+2;
		else j = i+1;
		if(sub[j] == '-')
		{
			unary = 1;
			j++;
		}

		for( ; j < sub.length && !isNaN(sub[j]) ; j++ ){
			a = a*10 + parseInt(sub[j]);
		}
		if(unary == 1) {
			a = -a;
		}
		console.log("a: ", a, "b: ", b);
		if( sub[i] == '&' )
			c = (a & b);
		else if( sub[i] == '|' )
			c = (b | a);
		else if( sub[i] == '>' )
			c = (b>>a);
		else if( sub[i] == '<' )
			c = (b<<a);
		else if( sub[i] == '^' )
			c = (b^a);

		while((start-1)>=0 && expression[start - 1] == '(' && (end+1)<expression.length && expression[end+1] == ')') {
			start--;
			end++;
		}

		//if(expression[start - 1] == '(' && expression[end+1] == ')') {
		//		expression = expression.substring(0, start-1) + c.toString() + expression.substring(end+2, expression.length);
		//}
		//else {
			expression = expression.substring(0, start) + c.toString() + expression.substring(end+1, expression.length);
		//}
		return expression;

	},
	calcbitwise: function (exp, count, start, end) {
		if(count == 0) {
			highlight = this.findexpbitwise(exp); //findexp returns the indices which are to be highlighted now, and evaluated in the next step
			return [exp, highlight];
		}
		else {
			exp = this.firstevalbitwise(exp, start, end); //wvluate the expression highlighted in previous call
			highlight = this.findexpbitwise(exp); //findexp returns the indices which are to be highlighted now, and evaluated in the next step
			return [exp, highlight];
		}
	},

}

window.view = {
	expression: '',	
	countNext : 0,
	starting : -1,
	ending : -1,
	step: 1,
	disableElement: function (id) {
		document.getElementById(id).disabled = true
	},
	enableElement: function (id) {
		document.getElementById(id).disabled = false
	},
	changeClass: function (id, className) {
		document.getElementById(id).className = className
	},
	setEnvironment: function ( a, b, c, d, environment, expression) {
		document.getElementById('a').value = a
		document.getElementById('b').value = b
		document.getElementById('c').value = c
		document.getElementById('d').value = d
		document.getElementById('selectedExpression').value = expression	
		if ( environment === 'logical' ) {
			document.getElementById('logicalExpressions').className = 'button loopList'
			document.getElementById('arithmaticExpressions').className += ' hide'
			document.getElementById('bitwiseExpressions').className += ' hide'
		}
		else if ( environment === 'arithmatic' ) {
			document.getElementById('arithmaticExpressions').className = 'button loopList'
			document.getElementById('logicalExpressions').className += ' hide'
			document.getElementById('bitwiseExpressions').className += ' hide'
		}
		else {
			document.getElementById('bitwiseExpressions').className = 'button loopList'	
			document.getElementById('arithmaticExpressions').className += ' hide'
			document.getElementById('logicalExpressions').className += ' hide'
		}
	},
	setOperatorEnvironment: function () {
		var list = document.getElementById('operatorList')
		var selectedOption = list.options[list.selectedIndex].text
		if ( selectedOption === 'Logical' )
			this.setEnvironment( 0, 1, 0, 1, 'logical', 'a || b && c' )
		else if ( selectedOption === 'Bitwise' )
			this.setEnvironment( 3, 2, 0, 1, 'bitwise', 'a | b & c ^ d' )
		else
			this.setEnvironment( 2, 5, 10, 11, 'arithmatic', 'a + b - c' )
	},
	setSelectedEquation: function (id) {
		var list = document.getElementById(id)
		var selectedOption = list.options[list.selectedIndex].text
		document.getElementById('selectedExpression').value = selectedOption
	},
	addClickEvent: function (id, method) {
		var element = document.getElementById(id)
		element.addEventListener('click', method, false)
	},
	addChangeEvent: function (id, method) {
		var element = document.getElementById(id)
		element.addEventListener('change', method, false)
	},
	freezeInputs: function () {
		this.disableElement('a')
		this.disableElement('b')
		this.disableElement('c')
		this.disableElement('d')
		document.getElementById('buttonSave').className += ' hide'
		document.getElementById('buttonEdit').className = 'button editButton'
	},
	deFreezeInputs: function () {
		this.enableElement('a')
		this.enableElement('b')
		this.enableElement('c')
		this.enableElement('d')
		document.getElementById('buttonEdit').className += ' hide'
		document.getElementById('buttonSave').className = 'button saveButton'
	},
	killWhiteSpaces: function (expression) {
			return expression.replace(/\s+/g, '')
	},
	validateArithmaticExpression: function (exp) {
		var characterOrOperator = 0
		var braces = 0
		var g=document.getElementById('a').value
		var t=document.getElementById('b').value
		var k=document.getElementById('c').value
		var h=document.getElementById('d').value
		//var braces = 0
		while ( isNaN(g) )
		{
			document.getElementById('a').value=prompt('Please enter "a" as integer','0')
			g=document.getElementById('a').value
		}	
		while ( isNaN(t) )
		{
			document.getElementById('b').value=prompt('Please enter "b" as integer','0')
			t=document.getElementById('b').value
		}
		while ( isNaN(k) )
		{
			document.getElementById('c').value=prompt('Please enter "c" as integer','0')
			k=document.getElementById('c').value
		}
		while ( isNaN(h) )
		{
			document.getElementById('d').value=prompt('Please enter "d" as integer','0')
			h=document.getElementById('d').value
		}		
		for ( var i = 0 ; i < exp.length ; i ++ ) {
			if ( exp[i] !== 'a' && exp[i] !== 'b' && exp[i] !== 'c' && exp[i] !== 'd' && exp[i] !== '*' && exp[i] !== '/' && 
			     exp[i] !== '+' && exp[i] !== '-' &&  exp[i] !== '(' && exp[i] !== ')' && exp[i] !== '%') {
				alert('You Entered Wrong Expression !!!\n Only " a b c d " characters and " * / - + ( ) % "\n operators are allowed !!!')
				return false
			}
		}
		for ( var i = 0 ; i < exp.length ; i++ ) {
			if ( exp[i] === '(' ) {
				if ( characterOrOperator === 1 ) {
					alert('Wrong use of "()" operator !!!')
					return false
				}
				braces ++
			}
			else if ( exp[i] == ')' ) {
				if ( characterOrOperator == 0 ) {
					alert('Wrong use of "()" operator !!!')
					return false
				}
				braces --
			}
			else if ( exp[i] === 'a' || exp[i] === 'b' || exp[i] === 'c' || exp[i] === 'd' ) {
				if ( characterOrOperator === 1 ) {
					alert('You Have Entered  Wrong Expression Syntax !!!')
					return false
				}
				else
					characterOrOperator = 1
			}
			else {
				if ( characterOrOperator === 0 ) {
					alert('You Have Entered  Wrong Expression Syntax !!!')
					return false
				}
				else
					characterOrOperator = 0
			}
			if ( braces < 0 ) {
				alert('You Have Entered  Wrong Expression Syntax for "()" operator !!!')
				return false
			}
		}
		if ( braces !== 0 ) {
			alert('You Have Entered Wrong Expression Syntax.\n "()" Operators are not complete !!!')
			return false
		}
		else if ( characterOrOperator === 0 ) {
				alert('You Have Entered  Wrong Expression Syntax !!!')
				return false
		}
		else 
			return true
	},
	validateLogicalExpression: function (exp) {
		var characterOrOperator = 0
		var braces = 0 
		var g=document.getElementById('a').value
		var t=document.getElementById('b').value
		var k=document.getElementById('c').value
		var h=document.getElementById('d').value
		//var braces = 0
		while ( isNaN(g) )
		{
			document.getElementById('a').value=prompt('Please enter "a" as integer','0')
			g=document.getElementById('a').value
		}	
		while ( isNaN(t) )
		{
			document.getElementById('b').value=prompt('Please enter "b" as integer','0')
			t=document.getElementById('b').value
		}
		while ( isNaN(k) )
		{
			document.getElementById('c').value=prompt('Please enter "c" as integer','0')
			k=document.getElementById('c').value
		}
		while ( isNaN(h) )
		{
			document.getElementById('d').value=prompt('Please enter "d" as integer','0')
			h=document.getElementById('d').value
		}	
		for ( var i = 0 ; i < exp.length ; i ++ ) {
			if ( exp[i] !== 'a' && exp[i] !== 'b' && exp[i] !== 'c' && exp[i] !== 'd' && exp[i] !== '|' && exp[i] !== '&' &&  exp[i] !== '(' && exp[i] !== ')') {
				alert('You Entered Wrong Expression !!!\n Only " a b c d " characters and " || && ( ) "\n operators are allowed !!!')
				return false
			}
		}
		for ( var i = 0 ; i < exp.length ; i++ ) {
			if ( exp[i] === '(' ) {
				if ( characterOrOperator === 1 ) {
					alert('Wrong use of "()" operator !!!')
					return false
				}
				braces ++
			}
			else if ( exp[i] == ')' ) {
				if ( characterOrOperator == 0 ) {
					alert('Wrong use of "()" operator !!!')
					return false
				}
				braces --
			}
			else if ( exp[i] === 'a' || exp[i] === 'b' || exp[i] === 'c' || exp[i] === 'd' ) {
				if ( characterOrOperator === 1 ) {
					alert('You Have Entered  Wrong Expression Syntax !!!')
					return false
				}
				else
					characterOrOperator = 1
			}
			else {
				if ( characterOrOperator === 0 ) {
					alert('You Have Entered  Wrong Expression Syntax !!!')
					return false
				}
				else {
					characterOrOperator = 0
					if((i+1) == exp.length || exp[i+1]!=exp[i] ){
						alert('You Have Entered  Wrong Expression Syntax !!!')
						return false;
					}
					else i++;
				}
			}
			if ( braces < 0 ) {
				alert('You Have Entered  Wrong Expression Syntax for "()" operator !!!')
				return false
			}
		}
		if ( braces !== 0 ) {
			alert('You Have Entered Wrong Expression Syntax.\n "()" Operators are not complete !!!')
			return false
		}
		else if ( characterOrOperator === 0 ) {
				alert('You Have Entered  Wrong Expression Syntax !!!')
				return false
		}
		else 
			return true
	},
	validateBitwiseExpression: function (exp) {
		var characterOrOperator = 0
		var braces = 0
		var g=document.getElementById('a').value
		var t=document.getElementById('b').value
		var k=document.getElementById('c').value
		var h=document.getElementById('d').value
		//var braces = 0
		while ( isNaN(g) )
		{
			document.getElementById('a').value=prompt('Please enter "a" as integer','0')
			g=document.getElementById('a').value
		}	
		while ( isNaN(t) )
		{
			document.getElementById('b').value=prompt('Please enter "b" as integer','0')
			t=document.getElementById('b').value
		}
		while ( isNaN(k) )
		{
			document.getElementById('c').value=prompt('Please enter "c" as integer','0')
			k=document.getElementById('c').value
		}
		while ( isNaN(h) )
		{
			document.getElementById('d').value=prompt('Please enter "d" as integer','0')
			h=document.getElementById('d').value
		}	 
		for ( var i = 0 ; i < exp.length ; i ++ ) {
			if ( exp[i] !== 'a' && exp[i] !== 'b' && exp[i] !== 'c' && exp[i] !== 'd' && exp[i] !== '^' && exp[i] !== '&' && 
			     exp[i] !== '|' && exp[i] !== '<' &&  exp[i] !== '(' && exp[i] !== ')' && exp[i] !== '>') {
				alert('You Entered Wrong Expression !!!\n Only " a b c d " characters and " | & ^ >> << "\n operators are allowed !!!')
				return false
			}
		}
		for ( var i = 0 ; i < exp.length ; i++ ) {
			if ( exp[i] === '(' ) {
				if ( characterOrOperator === 1 ) {
					alert('Wrong use of "()" operator !!!')
					return false
				}
				braces ++
			}
			else if ( exp[i] == ')' ) {
				if ( characterOrOperator == 0 ) {
					alert('Wrong use of "()" operator !!!')
					return false
				}
				braces --
			}
			else if ( exp[i] === 'a' || exp[i] === 'b' || exp[i] === 'c' || exp[i] === 'd' ) {
				if ( characterOrOperator === 1 ) {
					alert('You Have Entered  Wrong Expression Syntax !!!')
					return false
				}
				else
					characterOrOperator = 1

			}
			else {
				if ( characterOrOperator === 0 ) {
					alert('You Have Entered  Wrong Expression Syntax !!!')
					return false
				}
				else {
					characterOrOperator = 0
					if(exp[i] == '<' && ((i+1) == exp.length || exp[i+1]!=exp[i]) ){
						alert('You Have Entered  Wrong Expression Syntax !!!')
						return false;
					}
					else if(exp[i] == '>' && ((i+1) == exp.length || exp[i+1]!=exp[i]) ){
						alert('You Have Entered  Wrong Expression Syntax !!!')
						return false;
					}
					else if(exp[i] == '<' || exp[i] == '>')
						i++;
				}	
			}
			if ( braces < 0 ) {
				alert('You Have Entered  Wrong Expression Syntax for "()" operator !!!')
				return false
			}
		}
		if ( braces !== 0 ) {
			alert('You Have Entered Wrong Expression Syntax.\n "()" Operators are not complete !!!')
			return false
		}
		else if ( characterOrOperator === 0 ) {
				alert('You Have Entered  Wrong Expression Syntax !!!')
				return false
		}
		else 
			return true
	},
	printFirstStep: function () {
		var parent = document.getElementById('executionDisplay')
		var div = document.createElement('div')
		div.className = 'peach'
        model.getInputs()
        this.expression = this.expression.replace(/a/g, Math.floor(model.a))
        this.expression = this.expression.replace(/b/g, Math.floor(model.b))
        this.expression = this.expression.replace(/c/g, Math.floor(model.c))
        this.expression = this.expression.replace(/d/g, Math.floor(model.d))
        var string = this.expression
		for ( var i = 0 ; i < string.length ; i ++ ) {
			if ( string[i] === '+' || string[i] === '-' || string[i] === '*' || string[i] === '/' || 
				 string[i] === '%' || string[i] === '(' || string[i] === ')' || string[i] === '||' || 
				 string[i] === '&&' || string[i] === '|' || string[i] === '&' || string[i] === '^' || 
				 string[i] === '>>' || string[i] === '<<' ) {
				left = string.substring(0, i)
				right = string.substring(i + 1)
				string = left + ' ' + string[i] + ' ' + right
				i ++
			}
		}
		div.innerHTML = '<span class = "boldBlue">Exp&nbsp;:&emsp;&emsp;</span>' + '[ ' + string + ' ]'
		parent.appendChild(div)
	},
	validateExpression: function () {
		this.expression = document.getElementById('selectedExpression').value
		this.expression = this.killWhiteSpaces(this.expression)
		var list = document.getElementById('operatorList')
		var selectedOption = list.options[list.selectedIndex].text
		if ( selectedOption === 'Arithmatic' )
			var isValid = this.validateArithmaticExpression(this.expression)
		else if ( selectedOption === 'Logical' )
			var isValid = this.validateLogicalExpression(this.expression)
		else if ( selectedOption === 'Bitwise' )
			var isValid = this.validateBitwiseExpression(this.expression)
		if ( isValid ) {
      console.log("hello");
			this.printFirstStep(this.expression)
			this.disableElement('buttonStart')
			this.changeClass('buttonStart', 'buttonDisable startButton')
			this.changeClass('buttonNext', 'button nextButton')
			this.enableElement('buttonNext')
			var parent = document.getElementById('reasoningStep')
			var child = document.createElement('div')
			child.innerHTML = 'Here, variables are replaced by their values !!<br><br>'
			parent.appendChild(child)
		}
	},
	printCurrentStep: function () {
		var exp = this.expression
		var parent = document.getElementById('executionDisplay')
		var div = document.createElement('div')
		var firstSpan = document.createElement('span')
		firstSpan.innerHTML = 'Step' + ' ' + this.step + ' ' + ':'
		firstSpan.className = 'italicBlue'
		div.appendChild(firstSpan)
		var secondSpan = document.createElement('span')
		secondSpan.className = 'peach'
		var stringToEval = this.expression.substring(this.starting, this.ending + 1)
		var remainingString =  this.expression.substring(this.ending + 1)
		exp = exp.replace(stringToEval, '<span class = "blue">' + stringToEval )
		exp = exp.replace(remainingString, '<span class = "peach">' + remainingString )
		for ( var i = 0 ; i < exp.length ; i ++ ) {
			if ( exp[i] === '+' || exp[i] === '-' || exp[i] === '*' || exp[i] === '/' ||
				 exp[i] === '%' || exp[i] === '(' || exp[i] === ')' || exp[i] === '||' ||
				 exp[i] === '&&' || exp[i] === '|' || exp[i] === '&' || exp[i] === '^' ||
				 exp[i] === '>>' || exp[i] === '<<' ) {
				left = exp.substring(0, i)
				right = exp.substring(i + 1)
				exp = left + ' ' + exp[i] + ' ' + right
				i ++
			}
		}
		secondSpan.innerHTML = '&emsp;&nbsp;' + '[ ' + exp + ' <span class = "peach"> ]</span>'
		div.appendChild(secondSpan)
		this.step ++
		parent.appendChild(div)
		this.printSingleStep(stringToEval)
		this.showIllustration(this.expression)
	},
	printSingleStep: function (string) {
		var method = new Function('return' + ' ' + string)
		var element = document.getElementById('currentStep')
		for ( var i = 0 ; i < string.length ; i ++ ) {
			if ( string[i] === '+' || string[i] === '-' || string[i] === '*' || string[i] === '/' || 
				 string[i] === '%' || string[i] === '(' || string[i] === ')' || string[i] === '||' || 
				 string[i] === '&&' || string[i] === '|' || string[i] === '&' || string[i] === '^' || 
				 string[i] === '>>' || string[i] === '<<' ) {
				left = string.substring(0, i)
				right = string.substring(i + 1)
				string = left + ' ' + string[i] + ' ' + right
				i ++
			}
		}
		if ( string !== '' )
			element.innerHTML = string + '&emsp;' + '=' + '&emsp;' + method()
	},
	showIllustration: function (equation) {
		var parent = document.getElementById('reasoningStep')
		var child = document.createElement('p')
		if ( model.isBracket === true ) {
			var span = document.createElement('span')
			span.innerHTML =  this.step - 1 + ' ) ' + 'Here brackets have higher precedence than other operators and in case of more than one brackets, the brackets will be solved from left to right fashion.<br>'
			span.className = 'illustrationText'
			child.appendChild(span)
			model.isBracket = false
		}
		else {
			if ( equation.length > 2 ) {
				var eq = equation.substring(this.starting, this.ending + 1)
				var operator = ''
				for ( var i = 0 ; i < eq.length ; i ++ ) {
					if ( eq[i] === '+' || eq[i] === '-' || eq[i] === '/' || eq[i] === '*' || eq[i] === '%' )  {
						operator = eq[i]
						break
					}
				}
				var span = document.createElement('span')
				span.innerHTML =  this.step - 1 + ' ) ' + 'Here ' + operator + ' have higher precedence than other operators. So, it will be solved first.<br>'
				span.className = 'illustrationText'
				child.appendChild(span)	
			}	
		}
		parent.appendChild(child)
	},
	evaluate: function () {
		if(this.starting == -1 && this.countNext != 0) {
			alert('Evaluation Complete');
      location.reload()=true;
			return ;
		}
		var res;
		var list = document.getElementById('operatorList')
		var selectedOption = list.options[list.selectedIndex].text
		if ( selectedOption === 'Arithmatic' )
			res = model.calculate(this.expression, this.countNext, this.starting, this.ending)
		else if ( selectedOption === 'Logical' )
			res = model.calclogical(this.expression, this.countNext, this.starting, this.ending)
		else if ( selectedOption === 'Bitwise' )
			res = model.calcbitwise(this.expression, this.countNext, this.starting, this.ending)
		
		this.expression = res[0].toString();
		this.starting = res[1][0];
		this.ending = res[1][1];
		this.printCurrentStep()
		console.log(this.expression, this.starting, this.ending);
		this.countNext += 1;
    },
	activateEvents: function() {
		this.addClickEvent('buttonSave', function () { view.freezeInputs() })
		this.addClickEvent('buttonEdit', function () { view.deFreezeInputs() })
		this.addClickEvent('buttonStart', function () { view.validateExpression() })
		this.addClickEvent('buttonNext', function () { view.evaluate() })
		this.addChangeEvent('operatorList', function () { view.setOperatorEnvironment() })
		this.addChangeEvent('arithmaticExpressions', function () { view.setSelectedEquation('arithmaticExpressions') })
		this.addChangeEvent('logicalExpressions', function () { view.setSelectedEquation('logicalExpressions') })
		this.addChangeEvent('bitwiseExpressions', function () { view.setSelectedEquation('bitwiseExpressions') })
	},
	init: function () {
		this.activateEvents()
	}
} 

window.onload = function () { view.init() }
