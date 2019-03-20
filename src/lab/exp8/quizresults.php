<?php

$total=0;

$qCount = 5;
$ans_actual = array_fill(0, $qCount, 0);
for($n = 1; $n <= $qCount; $n++){
	if($n <= 4){
		$ans_actual[$n - 1] = $_POST['Q' . $n];
	}else{
		$ans_actual[$n - 1] = $_POST['fib1'];
	}
}
$ans_exp = array(2, 2, 3, 4, 1);

echo "You answered the following questions correctly: ";

for($n = 0; $n < $qCount; $n++){
	if(($n < 4 && $ans_actual[$n] == $ans_exp[$n]) ||
	        ($n == 4 && strcasecmp($ans_actual[$n],"itself") == 0))
	{
		echo ($n + 1), "\n";
		$total++;
	}
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
