<?php


$total=0;

$noofques = 4;
<<<<<<< Updated upstream
$givenans = array_fill(0,$noofques,0);

for($n=1;$n<=$noofques;$n++){
        if($n <= 3){
                $givenans[$n-1] = $_POST['Q'.$n];
        }
        else{
                $givenans[$n-1] = $_POST['fib1'];
        }
}

$correctans = array(1, 1, 3, 1);
echo "You answered the following questions correctly : ";

for($n=0; $n < $noofques; $n++){
        if(($n < 3 && $givenans[$n] == $correctans[$n]) ||($n == 3 && strcasecmp($givenans[$n],"practical") == 0))
=======
$correctans = array_fill(0,$noofques,0);

for($n=1;$n<=$noofques;$n++){
        if($n <= 3){
                $correctans[$n-1] = $_POST['Q'.$n];
        }
        else{
                $correctans[$n-1] = $_POST['fib1'];
        }
}

$givenans = array(1, 1, 3, 1);
echo "You answered the following questions correctly : ";

for($n=0; $n < $noofques; $n++){
        if(($n < 3 && $correctans[$n] == $givenans[$n]) ||($n == 3 && strcasecmp($correctans[$n],"practical") == 0))
>>>>>>> Stashed changes
        {
                echo ($n + 1),"\n";
                $total = $total + 1;
        }
}

echo "\n\n\n\n";
echo "<html>
<head></head>";
echo "<body class=\"page_bg\">";

echo "<br>Total number of correct answers : ".$total."/4";

echo '	<h2>Correct Answers</h2>
<br>
<ol>
                <li><b> For the function y=6, the value of area under the curve using the approximation method would be completely accurate.</b></li>
                True<br>
                <br>
                <li><b> Decreasing the length of the interval will imporve tha accuracy of the approximation. </b></li>
                True<br>
                <br>


                <li><b>Increasing the value of the variable width will : </b> </li>
                <pre class="prettyprint lang-c">
                main(){
                        int a , b , width , i;
                        double sum ;
                        scanf("%d%d", &a , &b );
                        sum = 0 ; width = 1 ; i = 0;
                        for ( i = a ; b >= i ; i += width){
                                sum = sum + cos(2*Pi/13*x) * width;
                        }
                        printf("Integration value = %d", sum);
                }
                </pre>
                Make the approximation worse<br>
                <br>
                <li><b> An approximate solution may be as good as the accurate solution for <input  name="fib1" type="text"> purposes.</b></li><br><br>



</ol>';
echo "</body></html>";
?>
