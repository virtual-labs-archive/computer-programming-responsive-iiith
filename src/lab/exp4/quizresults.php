<?php


$total=0;

$Q1 = $_POST['Q1'];
$Q2 = $_POST['Q2'];
$Q3 = $_POST['Q3'];
$Q4 = $_POST['Q4'];
$Q5 = $_POST['Q5'];
$Q6 = $_POST['Q6'];
$Q7 = $_POST['Q7'];


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
if ($Q6==1)
{
$total=$total+1;
echo "6 ";
}
if ($Q7==2)
{
$total=$total+1;
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
                <li><b>In C programming, Arr[1] refers to which element of an array Arr.</b></li>
		2<br>
                <br>
                <li><b>The first element of an array is referred to by which index</b></li>
		0<br>
                <br>
                <li><b>The index of the last element of an array of size n elements is:</b> </li>
		n-1<br>
                <br>
                <li><b>The memory address of the first element of an array is called</b></li>
                base address<br>
                <br>
                <li><b>The memory allocation for array elements is done</b></li>
                contigously<br>
                <br>
                <li><b>If the memory address of the first element of an array is 2000, what is the memory address of the 6th emement</b></li>
                2020<br>
                <br>
                <li><b>In C programming, a string is actually a </b></li>
                array of characters<br>
                <br>

</ol>";
echo "</body></html>";
?>
