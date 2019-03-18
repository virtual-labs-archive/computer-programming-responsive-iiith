<?php


$total=0;

$Q1 = $_POST['Q1'];
$Q2 = $_POST['Q2'];
$Q3 = $_POST['Q3'];
$Q4 = $_POST['Q4'];
$Q5 = $_POST['Q5'];
$Q6 = $_POST['Q6'];
$Q7 = $_POST['Q7'];
$Q8 = $_POST['Q8'];
$Q9 = $_POST['fib1'];

echo "You answered the following questions correctly : ";
if ($Q1==1)
{
$total=$total+1;
echo "1 ";
}
if ($Q2==1)
{
$total=$total+1;
echo "2 ";
}
if ($Q3==1)
{
$total=$total+1;
echo "3 ";
}
if ($Q4==2)
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
if ($Q7==1)
{
$total=$total+1;
echo "7 ";
}
if ($Q8==2)
{
$total=$total+1;
echo "8 ";
}
if ((strcasecmp($Q9,"single")==0)){
$total= $total+1;
echo "9 ";
}
echo "\n\n\n\n";
echo "<html>
<head></head>";
echo "<body class=\"page_bg\">";

echo "<br>Total number of correct answers : ".$total."/9";

echo '	<h2>Correct Answers</h2>
<br>
	 <ol>
                <li><b>Which operator is used to access a member of a structure: </b></li>
		
		"."<br>
                <br>

                <li><b>All the functionality of a union can be performed by a structure? </b></li>
                True<br>
                <br>

                <li><b>A structure can be defined inside a structure </b> </li>
                True<br>
                <br>
		
                <li><b>Default values can be given to the members of the structure : </b> </li>
                False<br>
		<br>

                <li><b>What will be the ouptut of the following function call: fun4(4,3); where fun4 is defined as: </b> </li>
		<pre class="prettyprint lang-c">
		typedef struct S
		{
               		int x;
               		int y;
                }S;

		S func(S A, S B)
                {
	                B.x=A.x;
        	        B.y=B.y+A.y;
                	return B;
                }
                main()
                {
                	S a,b;
	                a.x=10;
        	        a.y=20;
              	        b.x=30;
	                b.y=40;
        	        b=func(a,b);
               		printf("%d %d\n",b.x,b.y);
                }
		</pre>
                10 60<br>
		<br>

                <li><b>Arrays can be a part of the structure? </b> </li>
                True<br>
		<br>

                <li><b>One can define an array of structure variables?</b> </li>
                True<br>
		<br>
                <li><b>The following structure declaration is correct? </b> </li>
		<pre class="prettyprint lang-c">
		typedef struct X
		{
			int x;
			int y=50;
		}X;
		</pre>
                False<br>
		<br>
		
		<li><b>A structure is a collection of variables under a "single" name .</b></li><br><br>
</ol>';
echo "</body></html>";
?>
