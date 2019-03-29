function func(){
	var string=''
	string = "10" + "\/" + "0";
	var method = new Function('return' + ' ' + string)
	console.log(method())
	}
func()
