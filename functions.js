function even(num){
	if(num%2==0){
		return true;
	}
	else
		return false;

}
 function factorial(n){
 	if (n==0){
 		return 1;
 	}
 	return (factorial(n-1))*n;
 }

 function snakeToKebab(str){
 	var res = str.replace("_","-");
 	return res;
 }