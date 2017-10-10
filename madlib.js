var sentence = [];
var index = 0;
do {
	sentence[index] =prompt("Word: "+index);
index++
}
while (sentence[index-1]!="^");
console.log(sentence);

// replacemens

var replacements = [];
var index = 0;
do {
	replacements[index] =prompt("position:"+index+ "");
index++
}
while (replacements[index-1]!="^");
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