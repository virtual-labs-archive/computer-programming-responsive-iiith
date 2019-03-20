<?php


$total=0;
$ques = 8;
$responses = array_fill(0, $ques, 0);
for($n = 1; $n <= $ques; $n++){
	if($n <= 6)
        {
	       $responses[$n - 1] = $_POST['Q' . $n];
 	}
        else if ($n == 7) 
        {
               $responses[$n - 1] = $_POST['fib1'];
        }
        else 
        {
	       $responses[$n - 1] = $_POST['fib2'];
	}
}
$solution = array(2, 2, 1, 4, 2, 1);
echo "You answered the following questions correctly: ";
for($n = 0; $n < $ques; $n++)
{
    $f=0;
    if(($n < 6 && $responses[$n] == $solution[$n]))
    {
        $f=1;
    }
    else if (($n == 6 && (strcasecmp($responses[$n],"prototype") == 0)||(strcasecmp($responses[$n],"definition") == 0)))
    {
        $f=1;
    }
    else if (($n == 7 && (strcasecmp($responses[$n],"int") == 0)||(strcasecmp($responses[$n],"Integer") == 0))) 
    {
          $f=1;  
    }
    if ($f==1)
    {
        echo ($n + 1), "\n";
        $total++;
    }
}

	
	
echo "\n\n\n\n";
echo "<html>
<head></head>";
echo "<body class=\"page_bg\">";

echo "<br>Total number of correct answers : ".$total."/8";

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
                4 <br>
                <li><b> The function prototype (or definition) gives a summary of the function</b></li><br>
                <li><b> The default return type of a function is int (or Integer).</b></li><br>
                <br>

</ol>";
echo "</body></html>";
?>
