<?php


$total=0;

$qCount = 18;
$ans_actual = array_fill(0, $qCount, 0);
for($n = 1; $n <= $qCount; $n++){
	$ans_actual[$n - 1] = $_POST['Q' . $n];
}
$ans_exp = array(3, 1, 1, 1, 1, 4, 2, 1, 2, 2, 1, 2, 2, 1, 1, 3, 3, 4);

echo "You answered the following questions correctly: ";

for($n = 0; $n < $qCount; $n++){ 
	if($ans_actual[$n] == $ans_exp[$n])
	{
		echo ($n + 1), "\n";
		$total++;
	}
}

echo "\n\n\n\n";
echo "<html>
<head></head>";
echo "<body class=\"page_bg\">";

echo "<br>Total number of correct answers : ".$total."/18";

echo "	<h2>Correct Answers</h2>
<br>
	<ol> 
                <li><b>Evaluate 2*3+5%3.</b></li> 
                8<br> 
		<br> 
                <li><b>Evaluate (2*(3+5))%3.</b></li> 
                1<br>
		<br> 
                <li><b>The order of evaluation of the operators in (2*(3+5))%3 is:</b> </li> 
                +, *, %<br> 
		<br> 
                <li><b>The order of evaluation of the operators in 2*(3+5)%3 is: </b></li> 
                +, *, %<br> 
		<br> 
<b>Assume x=8.8, y=3.5 and z= -5.2 and m=4 for the following questions</b><br><br> 
<li><b>Calculate x%y</b></li> 
		1.8<br> 
		<br><li><b>Calculate x%m</b></li> 
                0.8<br> 
		<br><li><b>Calculate 7/m</b></li> 
                1<br> 
		<br> 
<li><b>Calculate 2*x/(3*y)</b></li> 
		1.67<br>
		<br>
<li><b>Calculate 2*x/3*y</b></li> 
                20.51<br> 
		<br> 
<b>Assume a=5, b=0 and c=-2 for the following questions</b><br><br> 
<li><b>Calculate (a |b )&gt;c</b></li> 
		1<br> 
		<br> 
<li><b>Calculate (a&amp;c)*b%2</b></li> 
		0<br> 
		<br> 
<li><b>Calculate b++&gt;c</b></li> 
		1<br> 
		<br>
<li><b>Calculate a&gt;((a-2==3)?1:0)</b></li> 
                1<br> 
		<br> 
<b>Assume a='E' , b='5' and c='?' are  char type variables for the following questions</b><br><br> 
<li><b>Calculate b-2</b></li> 
		'C'<br> 
		<br> 
<li><b>Calculate b+c</b></li> 
		't'<br> 
		<br> 
<li><b>Calculate a%c</b></li> 
                6<br> 
		<br> 
<li><b>Calculate a*3</b></li> 
                207<br> 
<br> 
<li><b>Calculate a*&#39;3&#39;</b></li> 
                3519<br> 
		<br> 
</ol>";
echo "</body></html>";
?>
