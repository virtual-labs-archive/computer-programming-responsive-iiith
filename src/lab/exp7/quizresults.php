<?php
$total=0;

$qCount = 7;
$ans_actual = array_fill(0, $qCount, 0);
for($n = 1; $n <= $qCount; $n++){
	if($n <= 4){
		$ans_actual[$n - 1] = $_POST['Q' . $n];
	}else{
		$ans_actual[$n - 1] = $_POST['fib' . ($n - 5)];
	}
}
$ans_exp = array(4, 2, 3, 2, 2);

echo "You answered the following questions correctly: ";

for($n = 0; $n < $qCount; $n++){
	if($n < 5 && $ans_actual[$n] == $ans_exp[$n])
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
                <li><b> Fill in the function name in the blank so that the output of the following code snippet is "YES" :  </b></li>

                <pre class="prettyprint lang-c">
                void myfunction{
                  char word1[] = "India";
                  char word2[] = "Free Country";
                  word2 = ________(word2,word1);
                  if(strcmp(word1,word2) == 0)
                    printf("YES\n");
                  else
                    printf("NO\n");
                }
                </pre>
                strcpy<br>
                <br>

                <li><b>The name of the string is a (char *)  pointer to the last character in the array.</b></li>
                False<br>
                <br>

		

                <li><b>What will be the ouptut of the following code snippet? </b> </li>

                <pre class="prettyprint lang-c">
                char word[] = "Attitude";
                word[4] = \'\0\';
                int length = strlen(word);
                printf("%d\n",length);

                </pre>
                4<br>
                <br>
                <li><b>What will be the ouptut of the following code snippet? </b> </li>

                <pre class="prettyprint lang-c">
                char w[] = "india";
                w[5] = \'n\';
                printf("%s\n",w);
                </pre>
                segmentation fault<br>
                <br>

                <li><b> What will the follwing function output if word is "heLlO_WOrLd !" ?</b> </li>
                <pre class="prettyprint lang-c">
                void func(char *word)
                {
                  word[strlen(word)-1] = \'S\';
                  *(word + 3) = \'d\';
                  *(word + 5) = word[6] + 1;
                  printf("%s\n",word);
                }
                </pre>
		heLdOXWOrLd S <br>
		<br>
</ol>'
;
echo '</body></html>';
?>
