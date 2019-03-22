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
if ($Q4==1)
{
echo "4 ";
$total=$total+1;
}
if ($Q5==1)
{
$total=$total+1;
echo "5 ";
}
if ($Q6==2)
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
if ($Q9==1)
{
$total=$total+1;
echo "9 ";
}
if ($Q10==1)
{
$total=$total+1;
echo "10 ";
}
if ($Q11==3)
{
$total=$total+1;
echo "11 ";
}
if ($Q12==2)
{
$total=$total+1;
echo "12 ";
}
if ($Q13==1)
{
$total=$total+1;
echo "13 ";
}
if ($Q14==1)
{
$total=$total+1;
echo "14 ";
}
if ($Q15==4)
{
$total=$total+1;
echo "15 ";
}
if ($Q16==3)
{
$total=$total+1;
echo "16 ";
}
if ($Q17==2)
{
$total=$total+1;
echo "17 ";
}
if ($Q18==2)
{
$total=$total+1;
echo "18 ";
}
if ($Q19==3)
{
$total=$total+1;
echo "19 ";
}
if ($Q20==2)
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
               <li><b>Which statement is used in Switch to prevent fall through.</b></li> 
		<br>                
		break<br>
                 
		<br> 

                <li><b>Every switch construct can be replaced by a series of if-else statements</b> </li> 

		True<br>

		<br> 

                <li><b>In an if-else construct, curly braces can be ignored for the else part if the block contains only one statement</b></li> 

		True<br>

		<br> 
                <li><b>An if-else construct can be replaced by a set of if constructs</b></li> 

		True<br>

		<br> 
 
                <li><b>The default scope of the if statement is only the next statement.</b></li> 

		True<br>

		<br> 
                
               <li> <b>For every if block there is always a corresponding else block</b></li> 

                False<br>
 		<br>
                <li> <b>What will be the output for this code:</b></li> 
		<pre><code>
                     void main(){ 
                         int x=1;
                         if(x--)
                            printf(&quot;Hi&quot;);         
                        else 
                         printf(&quot;Bye&quot;);
                    } 
		</code></pre>

                
		Hi<br>
                  <br>

                <li> <b>What will be the output for this code:</b></li> 
 		<code><pre>
                      void main(){
                       int x=1;
                       if(--x)
                        printf(&quot;Hi&quot;);
                        else
                         printf(&quot;Bye&quot;);
                      }
		</code></pre>

		Bye<br>
 		<br>
 
                 <li> <b>What will be the output for this code:</b></li> 
		<pre><code>
                      void main(){
                       int x=1;
                       if(x=2)
                         printf(&quot;Hi&quot;);
                       else
                         printf(&quot;Bye&quot;);
                      }
		</code></pre>
		Hi<br>
       		<br>

                <li> <b>What will be the output for this code:</b></li> 
		<pre><code>
                 void main(){
                     int a=100;
                     if(a &gt; 10)
                       printf(&quot;Dhoni&quot;);
                     else if(a &gt; 20)
                       printf(&quot;Hussey&quot;);
                     else if(a &gt; 30)
                       printf(&quot;De villiers&quot;);
                  }
 		</code></pre>
		Dhoni<br>
		<br>

		<li> <b>What will be the output for this code:</b></li> 
        	<pre><code>
            
                   void main(){
                       int m=5,n=10,q=20;
                       if(q/n*m)
                            printf(&quot;A&quot;);
                       else
                        printf(&quot;B&quot;);
                        printf(&quot;C&quot;);
                     }
 		</code></pre>

		AC<br>

 		<br>

	          <li> <b>Float expressions are allowed in switch cases</b></li> 


		No<br>
		<br>
 
            <li> <b>Switch cases works faster than equivalent if-else ladder</b></li> 

		True<br>

		<br>

             <li> <b>The case keyword is followed by an integer or a character constant.</b></li> 
		True<br>
		<br>
 
             <li> <b>What will be the output for this code:</b></li> 
                <code><pre>
                main( )
                  {
                  int c = 1 ;
                  switch ( c )
                   {
                    case 1 :
                          printf ( &quot;I &quot; ) ;
                    case 2 :
                         printf ( &quot;Love &quot; ) ;
                    case 3:
                         printf ( &quot;Programming&quot;) ;
                   }
                  
                }
		</pre></code>
                
		I Love Programming<br>
 		<br>
                                       
          
            <li> <b>What will be the output for this code:</b></li> 
 		<pre><code>
                main( )
                  {
                  int c = 3 ;
                  switch ( c )
                   {
                    case 1 :
                          printf ( &quot;I &quot; ) ;
                          break;
                    case 2 :
                         printf ( &quot;Love &quot; ) ;
                         break;
                    case 3:
                         printf ( &quot;You&quot;) ;
                   }

 
                }
 		</code></pre>
		Programming<br>

 		<br>

           
           <li> <b>What will be the output for this code:</b></li> 
		<pre><code> 
                main( )
                  {
                  int c = 3 ;
                  if(c%3)
                    printf(&quot;Hi&quot;)
                  else
                    printf(&quot;Bye&quot;)
 
                }
 		</code></pre>
 

		Bye<br>
 		<br>          

            <li> <b>What will be the output for this code:</b></li> 
		<pre><code>
                main( )
                  {
                  int a=1,b=2 ;
                  if(a-- == 0)
                    printf(&quot;Hi&quot;)
                  if(--b == 1)
                    printf(&quot;Bye&quot;)
 
                }
		</code></pre>

		Bye<br>
 		<br>          

            <li> <b>What will be the output for this code:</b></li> 
 		<pre><code>               
                main( )
                  {
                  int a=1,b=0 ;
                  if(a||b)
                    printf(&quot;Hi&quot;);
                  if(a &amp;&amp; b)
                    printf(&quot;Bye&quot;);
                  if(~b)
                    printf(&quot;Hello&quot;);
 
                }
		</code></pre>
		HiHello<br>

 		<br>          
 
           <li> <b>What will be the output for this code:</b></li> 

		<pre><code>
                main( )
                  {
                  int a=100 ;
                  if((a &lt;&lt; 2) == 102)
                     printf(&quot;Hello&quot;);
                  printf(&quot;World&quot;);
                                   
                }
		</code></pre>

		World<br>
 		<br>       

</ol>";
echo "</body></html>";
?>
