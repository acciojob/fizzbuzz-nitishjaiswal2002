//your JS code here. If required.
let output='';
for(let i=0;i<=20;i++){
	if(i%3==0 || i%5==0){
		output=output+"FizzBuzz\n";
	}
	else if(i%3==0){
		output=output+"Fizz\n";
	}
	else if(i%5==0){
		output=output+"Buzz\n";
	}
	else(
		output=output+i+"\n";
	)
}
alert(output);