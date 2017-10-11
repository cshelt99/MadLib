//Initialize Variables
	var sentence = [];
	var replacements = [];
	var index = 0;
	//Call Functions
	filler(sentence, "Next Word" );
	filler(replacements, "Next Position");
	replace(sentence,replacements,"Part of Speech for word in sentence");
	alert("Switch Positions");
	//Which words are being replaced
function filler (myArray,myPrompt){
index = -1;
// first do to prompt for it.
do{
	index++;
	myArray[index] = prompt(myPrompt+"["+index+"] = ");
}
	while(myArray[index] != "^");
		myArray.pop();
		console.log(myArray);
}
 function replace (mySArray,myRArray,myPrompt) {
	for(index = 0; index < myRArray.length; index++) {
			mySArray[myRArray[index]] = prompt(myPrompt+"["+[myRArray[index]]+"] = ");
			}
			while(myArray[index] != "^");
			console.log(myArray);
 }

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*
do {
	index++
	sentence[index] =prompt("Word: "+index);

}
while (sentence[index]!="^");
console.log(sentence);

// replacemens

var replacements = [];
var index = -1;
do {
	index++
	replacements[index] =prompt("position:"+index+ "");

}
while (replacements[index]!="^");
console.log(replacements);

for (index = 0; index < replacements.length-1; index++)
	sentence[replacements[index]]=prompt("Part of speech for "+sentence[replacements[index]]);
	
	console.log(sentence);
	
	// ask for replacements words
	for (index=0; index < replacements.length; index++) {
		sentence[replacements[index]] =prompt("Enter a thing to change "+sentence[replacements[index]]);
	}
	sentenceString = sentence.join(' ');
	alert(sentenceString.toString());