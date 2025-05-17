function toCase(text) {
  // write your code here
	if(text === "") return '-';
	return text.toLowerCase() + '-' + str.toUpperCase();
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));