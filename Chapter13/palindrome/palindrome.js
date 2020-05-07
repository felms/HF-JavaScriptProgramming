String.prototype.palindrome = function(){
	
	var rev = "";
	for(var i = this.length - 1; i >= 0 ; i--){
		rev += this[i];
	}
	return (this.valueOf() === rev);
}

var words = ["arara", "marrocos", "civic"];

for(var i = 0; i < words.length; i++){
	if(words[i].palindrome()){
		console.log("The word " + words[i] + " is a palindrome.");
	} else {
		console.log("The word " + words[i] + " isn't a palindrome.");
	}
}