<?php


$total=0;
$ques = 7;
$responses = array_fill(0, $ques, 0);
for($n = 1; $n <= $ques; $n++)
{		
     $responses[$n - 1] = $_POST['Q' . $n];
}
$solution = array(2, 4, 2, 4, 1, 4, 2);
echo "You answered the following questions correctly: ";
for($n = 0; $n < $ques; $n++)
{ 
    if(($responses[$n] == $solution[$n]))
    {
	echo ($n + 1), "\n";
        $total++;
    }
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
