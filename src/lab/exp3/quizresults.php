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
$Q9 = $_POST['Q9'];
$Q10 = $_POST['Q10'];
$Q11 = $_POST['Q11'];
$Q12 = $_POST['Q12'];
$Q13 = $_POST['Q13'];
$Q14 = $_POST['Q14'];
$Q15 = $_POST['Q15'];
$Q16 = $_POST['Q16'];
$Q17 = $_POST['Q17'];
$Q18 = $_POST['Q18'];
$Q19 = $_POST['Q19'];
$Q20 = $_POST['Q20'];


echo "You answered the following questions correctly : ";
if ($Q1==1)
{
$total=$total+1;
echo "1 ";
}
if ($Q2==2)
{
$total=$total+1;
echo "2 ";
}
if ($Q3==2)
{
$total=$total+1;
echo "3 ";
}
if ($Q4==1)
{
echo "4 ";
$total=$total+1;
}
if ($Q5==3 || $Q5==4)
{
$total=$total+1;
echo "5 ";
}
if ($Q6==3)
{
$total=$total+1;
echo "6 ";
}
if ($Q7==3)
{
$total=$total+1;
echo "7 ";
}
if ($Q8==2)
{
$total=$total+1;
echo "8 ";
}
if ($Q9==1)
{
$total=$total+1;
echo "9 ";
}
if ($Q10==2)
{
$total=$total+1;
echo "10 ";
}
if ($Q11==2)
{
$total=$total+1;
echo "11 ";
}
if ($Q12==1)
{
$total=$total+1;
echo "12 ";
}
if ($Q13==4)
{
$total=$total+1;
echo "13 ";
}
if ($Q14==1)
{
$total=$total+1;
echo "14 ";
}
if ($Q15==1)
{
$total=$total+1;
echo "15 ";
}
if ($Q16==4)
{
$total=$total+1;
echo "16 ";
}
if ($Q17==3)
{
$total=$total+1;
echo "17 ";
}
if ($Q18==3)
{
$total=$total+1;
echo "18 ";
}
if ($Q19==3)
{
$total=$total+1;
echo "19 ";
}
if ($Q20==1 )
{
$total=$total+1;
echo "20 ";
}
echo "\n\n\n\n";
echo "<html>
<head></head>";
echo "<body class=\"page_bg\">";

echo "<br>Total number of correct answers : ".$total."/20";

echo "	<h2>Correct Answers</h2>
<br>
	<ol> 

		<br> 
                <li><b>The execution of a loop typically starts with: </b></li> 
                
		initialization statements<br>
                 
		<br> 

                <li><b>The break statement is used to exit from:</b> </li> 


		a for loop<br>

		<br> 

                <li><b>A do-while loop is useful when we want that the statements within the loop must be executed</b></li> 


		At Least Once<br>


		<br> 

                <li><b>In what sequence the initialization, testing and execution of body is done in a do-while loop </b></li> 

		Initialization, execution of body, testing<br>

		<br> 
 
                <li><b>Which of the following is not an infinite loop. </b></li> 



		<pre><code>
for(int i =1; i<100; i++)
printf(\"Hello World\");

int i = 0; 
do{
i--
printf(\"%d \",i);
}while(i>0);
		</code></pre><br>



                <li> <b> Which of the following statement is used to take the control to the beginning of the loop? </b></li> 
		continue<br>

 
                <li> <b>How many * this code will print:</b></li> 
		<pre><code>
main()
{
   int i;
    for (i=1;i<3;i++)
      printf(.*.);
}
		</code></pre>

                


		2<br>

                  <br>

                <li> <b>Multiple intialization is not possible in for loop</b></li> 
 		

		Flase<br>
 		<br>


                <li> <b>For loop can be converted into equivalent while loop</b></li> 
 		
		True<br>

 		<br>
 
                <li> <b>Loop can not be nested</b></li> 
 		

		Flase<br>
 		<br>
 
                <li> <b>When break is encountered inside any loop, control automatically passes to the beginning of the loop. </b></li> 
 		

		Flase<br>
 		<br>
 

                <li> <b>Which of the following is not a loop in C</b></li> 

		Repeat<br>
		<br>
 
                <li> <b>What is the output of the following code:</b></li> 
		<pre><code>
main( ) 
{ 
   int j =2; 
   while ( j <= 1) 
   { 
         printf ( \"%d \", j ) ; 
         j=j+1; 
   } 
} 
		</code></pre>
		Print nothing<br>
		<br>

                <li> <b>What is the output of the following code:</b></li> 
		<pre><code>
main( ) 
{ 
   int x = 1 ; 
   while ( x == 1 ) 
   { 
        x=x-1; 
        printf ( \"\n%d\", x ) ; 
   } 
} 
		</code></pre>
		0<br>
		<br>


                <li> <b>What is the output of the following code:</b></li> 
		<pre><code>
main( ) 
{ 
   while ( 'a' < 'b' ) 
        printf ( \"hello world\" ) ; 
}

		</code></pre>
		Hello world<br>
		<br>


                <li> <b>What is the output of the following code:</b></li> 
		<pre><code>
main()
{
 int i = 0;
   do
       {
             printf(.Hello.);
             i++;
       }
   while(i > 1);
}
		</code></pre>
Infinite Loop<br>
		<br>

                <li> <b>What is the output of the following code:</b></li> 
		<pre><code>
main()
{
 int i = 0;
   do
       {
             printf(.%d., i);
             i++;
       }
   while(i < 2);
} 
		</code></pre>
		1 2<br>

		<br>


               <li> <b>How many * this code will print:</b></li> 
		<pre><code>
main()
{
int i,j
for (i =1; i<=5;i++)
     for(j=i;j<=5;j++)
           printf(.*.);
}
		</code></pre>

                
		15<br>

                  <br>



            <li> <b>Which of the following is an exit controlled loop:</b></li> 
 		
		Do-While<br>

 		<br>          
 
           <li> <b>Which among the following is an unconditional control structure:</b></li> 

		goto<br>
 		<br>          



</ol>";
echo "</body></html>";
?>
