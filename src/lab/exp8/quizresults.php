<?php


$total=0;

$Q1 = $_POST['Q1'];
$Q2 = $_POST['Q2'];
$Q3 = $_POST['Q3'];
$Q4 = $_POST['Q4'];
$Q5 = $_POST['fib1'];

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
if ($Q3==3)
{
$total=$total+1;
echo "3 ";
}
if ($Q4==4)
{
echo "4 ";
$total=$total+1;
}
if ((strcasecmp($Q5,"first")==0)){
$total= $total+1;
echo "5 ";
}
echo "\n\n\n\n";
echo "<html>
<head></head>";
echo "<body class=\"page_bg\">";

echo "<br>Total number of correct answers : ".$total."/5";

echo '	<h2>Correct Answers</h2>
<br>
         <ol>
                <li><b>What would be the equivalent pointer expression for referring the array element a[i][j][k][l] </b></li>

                *(*(*(*(a+i)+j)+k)+l)<br>
                <br>

                <li><b>NULL pointer points to the 0th memory address: </b></li>
                True<br>
                <br>
                <li><b>Pointer is a : </b> </li>
                A variable that stores address of other variable<br>
                <br>
                <li><b> If a variable is a pointer to a structure, then which of the following operator is used to access data members of the structure through the pointer variable?: </b> </li>

                 "->"<br>
                <br>

                <br>
                <li><b>The name of the array is a pointer to the first element of the array.</b></li><br><br>
        </ol>';

echo "</body></html>";
?>
