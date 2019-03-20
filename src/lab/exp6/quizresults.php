<?php

$total=0;

$qCount = 5;
$ans_actual = array_fill(0, $qCount, 0);
for($n = 1; $n <= $qCount; $n++){
	$ans_actual[$n - 1] = $_POST['Q' . $n];
}
$ans_exp = array(1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 3, 2, 1, 1, 4, 3, 2, 2, 3, 2);

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
                  if((a &lt;&lt; 2) == 102))
                     printf(&quot;Hello&quot;);
                  printf(&quot;World&quot;);
                                   
                }
		</code></pre>

		World<br>
 		<br>       

</ol>";
echo "</body></html>";
?>
