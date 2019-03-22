<?php


$total=0;

$Q1 = $_POST['Q1'];
$Q2 = $_POST['Q2'];
$Q3 = $_POST['Q3'];
$Q4 = $_POST['Q4'];
$Q5 = $_POST['Q5'];
$Q6 = $_POST['Q6'];



echo "You answered the following questions correctly : ";
if ($Q1==2)
{
$total=$total+1;
echo "1 ";
}
if ($Q2==2)
{
$total=$total+1;
echo "2 ";
}
if ($Q3==1)
{
$total=$total+1;
echo "3 ";
}
if ($Q4==4)
{
echo "4 ";
$total=$total+1;
}
if ($Q5==2)
{
$total=$total+1;
echo "5 ";
}
if ($Q6==1)
{
$total=$total+1;
echo "6 ";
}
<!--if ((strcasecmp($Q7,"prototype")==0) || (strcasecmp($Q7,"definition")==0)){
$total= $total+1;
echo "7 ";
}
if ((strcasecmp($Q8,"int")==0) || (strcasecmp($Q8,"Integer")==0)){
$total= $total+1;
echo "8 ";
} -->
echo "\n\n\n\n";
echo "<html>
<head></head>";
echo "<body class=\"page_bg\">";

echo "<br>Total number of correct answers : ".$total."/6";

echo "	<h2>Correct Answers</h2>
<br>
<ol>
	        <li><b>Function prototype is required in every program</b></li>
                False<br>
                <br>
                <li><b>Functions can return more than one value at a time</b></li>
                False<br>
                <br>
                <li><b> What is the default return value of a function?</b></li>
                int<br>
                <br>
                <li><b>Which of the following is an invalid function prototype?</b></li>
                float fun(int aa, bb);<br>
                <br>
                <li><b>What is the return type of the function with prototype: int func(char x, float v, double t);</b></li>
                int <br>
                <br>
                <li><b> What is printed when this program is executed</b></li>
                4 <!--<br>
                <li><b> The function prototype (or definition) gives a summary of the function</b></li><br>
                <li><b> The default return type of a function is int (or Integer).</b></li><br>
                <br>-->

</ol>";
echo "</body></html>";
?>
