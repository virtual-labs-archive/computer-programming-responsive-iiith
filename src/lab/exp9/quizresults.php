<?php

$total=0;

$qCount = 7;
$ans_actual = array_fill(0, $qCount, 0);
for($n = 1; $n <= $qCount; $n++){
	if($n <= 5){
		$ans_actual[$n - 1] = $_POST['Q' . $n];
	}else{
		$ans_actual[$n - 1] = $_POST['fib' . ($n - 5)];
	}
}
$ans_exp = array(2, 4, 2, 4, 1, 0, 0);

echo "You answered the following questions correctly: ";

for($n = 0; $n < $qCount; $n++){
	if(($n < 5 && $ans_actual[$n] == $ans_exp[$n]) ||
		($n == 5 && strcasecmp($ans_actual[$n],"itself") == 0) ||
		($n == 6 && (strcasecmp($ans_actual[$n],"base case")==0) || (strcasecmp($ans_actual[$n],"end-condition")==0)|| (strcasecmp($ans_actual[$n],"end condition")==0) || (strcasecmp($ans_actual[$n],"base-case")==0)))
	{
		echo ($n + 1), "\n";
		$total++;
	}
}
echo "\n\n\n\n";
echo "<html>
<head></head>";
echo "<body class=\"page_bg\">";

echo "<br>Total number of correct answers : ".$total."/9";

echo "	<h2>Correct Answers</h2>
<br>
<ol>

		<li><b>How many stars will the following code output for a given positive value of n: </b></li>
                n(n+1)/2<br>
                <br>


		<li><b>For every recursive solution, there is a corresponding iterative solution</b></li>
		True<br>
		<br>
		
		<li><b>What will be the ouptut of the following function call: fun2(20); where fun2 is defined as: </b> </li>
		20 40 60 80 80 60 40 20<br>
		<br>	

		<li><b>What will be the ouptut of the following function call: fun3(100); where fun3 is defined as: </b> </li>
		6<br>
		<br>

		 <li><b>What will be the ouptut of the following function call: fun4(4,3); where fun4 is defined as: </b> </li>
		 14<br>
		 <li><b>A recursive function must necessarily make a call to itself. </b> </li>
		 <li><b>A base case (or end-condition) is required so that there is no infinite recursive calling of the same function.</b> </li>
		 <br>
</ol>";
echo "</body></html>";
?>
