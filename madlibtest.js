var sentence = [];
var replacements = [];
var index = 0;
// Call Functions
filler(sentence,"Next Word: ");
filler(sentence,"Next Word: ");
filler(replacements, "Next Positon: ");

//Which words are being replaced
function filler(myArray,myPrompt) {
	index = -1;
	do {
		index++;
		console.log(index);
		myArray[index] = prompt(myPrompt+index+ ":");
	}
	while(myArray[index] != "^");
}