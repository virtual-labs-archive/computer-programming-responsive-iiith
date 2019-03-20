<?php



$total=0;
$ques = 20;
$responses = array_fill(0, $ques, 0);
for($n = 1; $n <= $ques; $n++)
{
      $responses[$n - 1] = $_POST['Q' . $n];  
}
$solution = array(1, 2, 2, 1, 3, 3, 3, 2, 1, 2, 2, 1, 4, 1, 1, 4, 3, 3, 3, 1);
echo "You answered the following questions correctly: ";
for($n = 0; $n < $ques; $n++)
{
    if($responses[$n] == $solution[$n])
    {
        echo ($n + 1), "\n";
        $total++;
    }
}
echo "You answered the following questions correctly : ";

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
printf(.Hello World.);
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
