

function submitAnswers()
{
	var total=5;
	var score=0;
	
	//Get User Input
	
	var q1 = document.forms["quizform"]["q1"].value;
	var q2 = document.forms["quizform"]["q2"].value;
	var q3 = document.forms["quizform"]["q3"].value;
	var q4 = document.forms["quizform"]["q4"].value;
	var q5 = document.forms["quizform"]["q5"].value;
	
	if(q1 == null || q1 == '')
	{
		alert('you missed question 1');
		return false;
		
	}
    else if(q2 == null || q2 == '')
	{
		alert('check q2');
		return false;
		
	}
	else if(q3 == null || q3 == '')
	{
		alert("check q3");
		return false;
		
	}
	
	else if(q4 == null || q4 == '')
	{
		alert("check q4");
		return false;
		
	}
	else if(q5 == null || q5 == '')
	{
		alert("check q5");
		return false;
		
	}
	

	
	/*
	// You can also use this code for validation
	
	for(var i=1;i<=total;i++)
	{
		if(eval('q'+i) == null) || eval('q'+i) == '')
		{
			alert('you missed '+ i);
			return false;
		}
	}
	*/

	//set correct answers
	
	var answers=['a','d','c','d','d'];
	
	//check answers
	
	if(q1 == answers[0])
	{
		score++
	}
	
	if(q2 == answers[1])
	{
		score++;
	}
	
	if(q3 == answers[2])
	{
		score++;
	}
	
	if(q4 == answers[3])
	{
		score++;
	}
	
	if(q5 == answers[4])
	{
		score++;
	}
	 
	alert('!!CONGRATULATIONS!!');
	
		alert("you score "+score+" Out of 5");

}//end of function

