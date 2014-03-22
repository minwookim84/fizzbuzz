$(document).ready(function(){
	for (i = 1; i <= 100; i++){
		if (i % 3 === 0){
			if (i % 5 === 0){
				$('body').append('<p>Fizzbuzz</p>');
			} else {
				$('body').append('<p>Fizz</p>');
			}
		}
		else{
			if (i % 5 === 0){
				$('body').append('<p>Buzz</p>');
			}
		}
	}

});