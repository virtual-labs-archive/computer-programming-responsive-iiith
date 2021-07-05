<?php


$total=0;

$quesCount=9;
$actualAns = array_fill(0, $quesCount, 0)

for($n = 1; $n <= $quesCount; $n++)
{
    if($n <= 8)
    {
        $actualAns[$n-1] = $_POST['Q' . $n];
    }

    else
    {
        $actualAns[$n-1] = $_POST['fib' . ($n - 8)];
    }
}

$expAns = array(1, 1, 1, 2, 1, 1, 1, 2, 0)

echo "You answered the following questions correctly : ";

for($n = 0; $n < $quesCount; $n++)
{
    if(($n < 8 && $actualAns[$n] == $expAns[$n]) || ($n == 8 && (strcasecmp($actualAns[$n],"single")==0)))
    {
        echo ($n + 1), "\n";
        $total++
    }
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
