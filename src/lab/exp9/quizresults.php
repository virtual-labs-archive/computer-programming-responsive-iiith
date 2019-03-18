<?php


$total=0;

$Q1 = $_POST['Q1'];
$Q2 = $_POST['Q2'];
$Q3 = $_POST['Q3'];
$Q4 = $_POST['Q4'];
$Q5 = $_POST['Q5'];
$Q6 = $_POST['fib1'];
$Q7 = $_POST['fib2'];

echo "You answered the following questions correctly : ";
if ($Q1==2)
{
$total=$total+1;
echo "1 ";
}
if ($Q2==4)
{
$total=$total+1;
echo "2 ";
}
if ($Q3==2)
{
$total=$total+1;
echo "3 ";
}
if ($Q4==4)
{
echo "4 ";
$total=$total+1;
}
if ($Q5==1)
{
$total=$total+1;
echo "5 ";
}
if ((strcasecmp($Q6,"itself")==0)){
$total= $total+1;
echo "6 ";
}
if ((strcasecmp($Q7,"base case")==0) || (strcasecmp($Q7,"end-condition")==0)|| (strcasecmp($Q7,"end condition")==0) || (strcasecmp($Q7,"base-case")==0)){
$total= $total+1;
echo "7 ";
}
echo "\n\n\n\n";
echo "<html>
<head></head>";
echo "<body class=\"page_bg\">";

echo "<br>Total number of correct answers : ".$total."/7";

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
