$(document).ready(function(){
	for (i = 1; i <= 100; i++){
		if (i % 3 === 0){
			if (i % 5 === 0){
				$('body').append('<p>FizzBuzz</p>');
			} else {
				$('body').append('<p>Fizz</p>');
			}
		} else{
			if (i % 5 === 0){
				$('body').append('<p>Buzz</p>');
			} else{
				$('body').append('<p>'+i+'</p>');
			}
		}
	}


});