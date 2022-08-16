let button =document.getElementById('finish');
button.addEventListener('click',checkTest);

function checkTest(){
	let result = 0;

	let a1 = document.getElementById("question1").value;
	if(a1 === '6'){
		result++;
	}
	let a2 = document.getElementById("question2").value;
	if(a2 === '4'){
		result++;
	}
	let a3 = document.getElementById("question3").value;
	if(a3 === '3'){
		result++;
	}

	let a4 = document.getElementById("question4").value;
	if(a4 === '3'){
		result++;
	}
	let a5 = document.getElementById("question5").value;
	if(a5 === '24'){
		result++;
	}
		alert('Right answers \n answer1 = 6, answer2 = 4, answer3 = 3, answer4 = 3, answer5 = 24 ' +"\n Your answers " + "\n" +'answer1 = '+ a1 +', answer2 = '+a2+', answer3 = '+a3+", answer4 = "+a4+", answer5 = "+a5+'\n number of correct answers: ' + result);
	
}