function colorChange(myColor1,myColor2){
	document.getElementsByClassName('navbar-default')[0].style.background=myColor1;
	document.getElementsByClassName('navbar-default')[1].style.background=myColor1;
	document.getElementsByClassName('navbar-nav')[0].getElementsByTagName('a')[0].style.background=myColor1;
	document.getElementsByClassName('navbar-nav')[0].getElementsByTagName('a')[1].style.background=myColor1;
	document.getElementsByClassName('navbar-nav')[0].getElementsByTagName('a')[2].style.background=myColor1;
	for (var i = 0; i < 12; i++) {
		document.getElementsByClassName('experiment-card')[i].style.background=myColor2;
	};
}