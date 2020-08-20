<?php


$total=0;

$Q1 = $_POST['Q1'];
$Q2 = $_POST['Q2'];
$Q3 = $_POST['Q3'];
$Q4 = $_POST['Q4'];
$Q5 = $_POST['Q5'];
$Q6 = $_POST['fib1'];
$Q7 = $_POST['fib2'];

echo "You answered the following questions correctly : ";
if ($Q1==4)
{
$total=$total+1;
echo "1 ";
}
if ($Q2==2)
{
$total=$total+1;
echo "2 ";
}
if ($Q3==3)
{
$total=$total+1;
echo "3 ";
}
if ($Q4==4)
{
echo "4 ";
$total=$total+1;
}
if ($Q5==2)
{
$total=$total+1;
echo "5 ";
}
#if ((strcasecmp($Q6,"itself")==0)){
#$total= $total+1;
#echo "6 ";
#}
#if ((strcasecmp($Q7,"base case")==0) || (strcasecmp($Q7,"end-condition")==0)|| (strcasecmp($Q7,"end condition")==0) || (strcasecmp($Q7,"base-case")==0)){
#$total= $total+1;
#echo "7 ";
#}
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
