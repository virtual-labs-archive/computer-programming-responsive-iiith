<?php


$total=0;

$Q1 = $_POST['Q1'];
$Q2 = $_POST['Q2'];
$Q3 = $_POST['Q3'];
$Q6 = $_POST['fib1'];

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
if ($Q3==3)
{
$total=$total+1;
echo "3 ";
}
if ((strcasecmp($Q4,"practical")==0)){
$total= $total+1;
echo "4 ";
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
                <li><b> An approximate solution may be as good as the accurate solution for <input type="text" name="fib1"> purposes.</b></li><br><br>



</ol>';
echo "</body></html>";
?>
