

var database = { "__NOUN" : { 1 : { "nominative" : ["ena", "enae"], "genitive" : ["ast", "arum"], "dative" : ["tea", "teas"], "pointerial" : ["erea", "erae"], "accusative" : ["enam", "enas"], "ablative" : ["beca", "becae"], }, 2 : { "nominative" : ["enus", "eni"], "genitive" : ["ust", "urum"], "dative" : ["teu", "teos"], "pointerial" : ["eru", "erucis"], "accusative" : ["enum", "enos"], "ablative" : ["beu", "benue"] }, 3 : { "nominative" : ["", "enes"], "genitive" : ["est", "erem"], "dative" : ["tee", "tenis"], "pointerial" : ["ten", "tens"], "accusative" : ["enem", "enen"], "ablative" : ["bece", "becus"], } }, "__NOUN_PARTICIPLES" : { "present" : { "perfect" : "", "imperfect" : "er", "active" : "ab", "passive" : "or" }, "past" : { "perfect" : "an", "imperfect" : "en", "active" : "eb", "passive" : "on" }, "future" : { "perfect" : "isan", "imperfect" : "esan", "active" : "ib", "passive" : "osan" }, "future-in-past" : { "perfect" : "isin", "imperfect" : "ensin", "active" : "ibins", "passive" : "osins" } }, "__VERB" : { "__comment" : "use id for the mood required", "indicative" : { 1 : ["m", "mus", "sis"], 2 : ["s", "tis"], 3 : ["t", "nt"], 4 : ["nare", "qere"] }, "subjuntive" : { 1 : ["num", "numus", "nusseis"], 2 : ["nus", "nutis"], 3 : ["nut", "nunt"], 4 : ["nequr", "nequres"] }, "conditional" : { 1 : ["rem", "remus", "resseis"], 2 : ["res", "retis"], 3 : ["ret", "rent"], 4 : ["reqir", "reqiris"] }, "opative" : { 1 : ["jem", "jemus", "jessis"], 2 : ["jes", "jetis"], 3 : ["jet", "jent"], 4 : ["jequr", "jerqers"] }, "imperative" : { 1 : ["eom", "eomus", "eoessis"], 2 : ["e", "ete"], 3 : ["etut", "etont"], 4 : ["eipi", "eipis"] }, "hypothetical" : { 1 : ["cem", "cemus", "cessis"], 2 : ["ces", "cetis"], 3 : ["cet", "cent"], 4 : ["cequ", "ceques"] }, "potential" : { 1 : ["qom", "qomus", "qessis"], 2 : ["qos", "qotis"], 3 : ["qot", "qont"], 4 : ["ququ", "ququs"] }, "superpotential" : { 1 : ["qoum", "qoumus", "qossis"], 2 : ["qous", "qoutis"], 3 : ["qout", "qount"], 4 : ["qour", "quorete"] }, "subpotential" : { 1 : ["qem", "qemus", "qeussis"], 2 : ["qes", "qetis"], 3 : ["qet", "qent"], 4 : ["qeur", "qeurete"] } }, "__VERB_GENERICS" : { "infinitive" : "re", "question" : ["ne"] }, "__ABLATIVES" : { "agential" : "hecer", "comparative" : "locri", "casual" : "buca", "meanial" : "vios", "manneral" : "ponconi", "circumstantial" : "cerci", "catagorial" : "erini" }, "__VERB_TENSES" : { "present" : { "perfect" : ["", false], "imperfect" : ["bu", false], "active" : ["qi", false], "passive" : ["to", false] }, "past" : { "perfect" : ["i", true], "imperfect" : ["ba", false], "active" : ["qa", false], "passive" : ["ta", false] }, "future" : { "perfect" : ["pi", false], "imperfect" : ["ici", false], "active" : ["qusi", false], "passive" : ["mi", false] }, "future-in-past" : { "perfect" : ["no", false], "imperfect" : ["imi", true], "active" : ["iti", true], "passive" : ["ja", false] } }, "__TO_BE" : { "infinitive" : "essere", "present" : { "perfect" : { 1 : ["sum", "sumus", "essis"], 2 : ["es", "estis"], 3 : ["est", "sunt"], 4 : ["Inare", "Iuqere"] }, "imperfect" : "suru", "active" : "siru", "passive" : "sumu" }, "past" : { "perfect" : "fuie", "imperfect" : "era", "active" : "fi", "passive" : "fa" }, "future" : { "perfect" : "eri", "imperfect" : "ero", "active" : "aro", "passive" : "erase" }, "future-in-past" : { "perfect" : "pi", "imperfect" : "pero", "active" : "paro", "passive" : "pere" } }, "__PRONOUNS" : { 1 : {"nominative" : ["ego", "nos", "los"], "genitive" : ["mei", "nostri", "lostri"], "dative" : ["mihi", "nobis", "lobis"], "pointerial" : ["misi", "nosis", "losis"], "accusative" : ["me", "ne", "le"], "ablative" : ["mine", "nocis", "locis"] }, 2 : { "nominative" : ["tu", "vos"], "genitive" : ["tui", "vestri"], "dative" : ["tibi", "vobis"], "pointerial" : ["tisi", "vosis"], "accusative" : ["te", "vois"], "ablative" : ["tine", "vocis"] }, 3 : {"nominative" : ["bu", "bos"], "genitive" : ["bui", "bostri"], "dative" : ["bihi", "bobis"], "pointerial" : ["bisi", "bosis"], "accusative" : ["be", "bois"], "ablative" : ["bine", "bocina"] }, 4 : { "nominative" : ["ci", "cos"], "genitive" : ["cui", "costri"], "dative" : ["cihi", "cobis"], "pointerial" : ["cisi", "cosis"], "accusative" : ["ce", "cois"], "ablative" : ["cine", "cocina"] } }, "__PRONOUNS_GENITIVE" : { 1 : ["men", "nost", "lost"], 2 : ["ten", "nostr"], 3 : ["bi", "bo"], 4 : ["c", "co"] } };
var verbs = database["__VERB"];
var toBe = database["__TO_BE"];
var verbTenses = database["__VERB_TENSES"];
var noun = database["__NOUN"];
var participle = database["__NOUN_PARTICIPLES"];
var pronouns = database["__PRONOUNS"];
var pronouns_genitive = database["__PRONOUNS_GENITIVE"];
function titleCase(str) {
	str = str.toLowerCase();
	str = str.split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
}
var tense_aspect_matchups = {
	"present-perfect" : "I walk.",
	"present-imperfect" : "I am walking.",
	"present-active" : "I have walked.",
	"present-passive" : "I have been walking.",
	
	"past-perfect" : "I walked.",
	"past-imperfect" : "I was walking.",
	"past-active" : "I had walked.",
	"past-passive" : "I had been walking.",
	
	"future-perfect" : "I will walk.",
	"future-imperfect" : "I will be walking.",
	"future-active" : "I will have walked.",
	"future-passive" : "I will have been walking.",
	
	"future-in-past-perfect" : "I would walk.",
	"future-in-past-imperfect" : "I would be walking.",
	"future-in-past-active" : "I would have walked.",
	"future-in-past-passive" : "I would have been walking." 
}

var mood_descriptors = {
	"indicative" : "(A fact)",
	"subjunctive" : "(A request)",
	"conditional" : "(Part of a conditional statement)",
	"opative" : "(A wish or desire)",
	"imperative" : "(A command)",
	"hypothetical" : "(Hypothetical)",
	"potential" : "(A possibility)",
	"superpotential" : "(A likely possibility)",
	"subpotential" : "(An unlikely possibility)"
}





var tenses = ["present", "past", "future", "future-in-past"];
var aspects = ["perfect", "imperfect", "active", "passive"];
var persons = [1, 2, 3, 4];
var plural = [1, 2];
var plural_1stperson = [1, 2, 3];
var moods = ["indicative", "subjuntive", "conditional", "opative", "imperative", "hypothetical", "potential", "superpotential", "subpotential"];

var cases = ["nominative", "genitive", "dative", "pointerial", "accusative", "ablative"];
function createIndividualEsse(tense, aspect, voice, person, number) {
	var numberIn;
	var truePerson;
	if (number == 0) {
		numberIn = "Singular";
	} else if (number == 1) {
		numberIn = "Plural";
	} else {
		numberIn = "Plural (Exclusive)";
	}
	if (person == 1) { truePerson = "1st"; }
	else if (person == 2) {truePerson = "2nd";}
	else if (person == 3) {truePerson = "3rd";}
	else {truePerson="4th"}
	//var add = tense+"+"+aspect+"+"+voice+"; "+truePerson+" Person "+numberIn+": ";
	var add = "";
	if (tense == "present" && aspect == "perfect") {
		if (voice == "indicative") {
			var toAdd = toBe[tense][aspect][person][number-1];
			add += toAdd;
		}
		else {
			var infinitive = toBe["infinitive"].slice(0, -2);
			infinitive += verbs[voice][person][number-1];
			add += infinitive;
		}
	} else {
		var stem = toBe[tense][aspect];
		stem+=verbs[voice][person][number-1];
		add += stem;
	}
	return add+"";
}
function createEsse(tense, aspect, voice) {
	//var tbr = document.createElement("p");
	var tbr = document.createElement("table");
	let thead = tbr.createTHead();
	let personh = document.createElement("th");
	let s = document.createElement("th");
	let p = document.createElement("th");
	let pe = document.createElement("th");
	personh.innerHTML = "Person";
	s.innerHtml = "Singular";
	p.innerHTML = "Plural";
	pe.innerHTML = "Plural (Exclusive)";
	thead.appendChild(personh);
	thead.appendChild(s);
	thead.appendChild(p);
	thead.appendChild(pe);
	//let th_singular = thead.insertCell(0);
	//th_singular.innerHTML = "Singular";
	//let th_plural = thead.insertCell(1);
	//th_plural.innerHTML = "Plural";
	//let th_exclusive = thead.insertCell(2);
	//th_exclusive.innerHTML = "Plural (Exclusive)";
	var whatever = [
		tbr.insertRow(0),
		tbr.insertRow(1),
		tbr.insertRow(2),
		tbr.insertRow(3)
	]
	var f1stPerson = whatever[0].insertCell(0);
	var f2ndPerson = whatever[1].insertCell(0);
	var f3rdPerson = whatever[2].insertCell(0);
	var f4thPerson = whatever[3].insertCell(0);
	f1stPerson.innerHTML="<b>1st</b>";
	f2ndPerson.innerHTML="<b>2nd</b>";
	f3rdPerson.innerHTML="<b>3rd</b>";
	f4thPerson.innerHTML="<b>4th</b>";
	
	
	
	var d;
	for (d = 0; d < persons.length; d++) {
		var person = persons[d];
		var e;
		if (person==1) {
			for (e = 0; e < plural_1stperson.length; e++) {
				var pluralIn = plural_1stperson[e];
				var cell = whatever[d].insertCell(e+1);
				cell.innerHTML = createIndividualEsse(tense, aspect, voice, person, pluralIn);
				//document.write(createEsse(tense, aspect, mood, person, pluralIn));
				count++;
			}
		}
		else {
			for (e = 0; e < plural.length; e++) {
				var pluralIn = plural[e];
				var cell = whatever[d].insertCell(e);
				cell.innerHTML = createIndividualEsse(tense, aspect, voice, person, pluralIn);
				//document.write(createEsse(tense, aspect, mood, person, pluralIn));
				count++;
			}
		}
	}
	return tbr;
}
function createIndividualWord(tense, aspect, voice, person, number, infinitive, perfective) {
	var tbr = "";
	if (verbTenses[tense][aspect][1]) {
		tbr+=perfective;
	} else {
		tbr+=infinitive;
	}
	if (voice=="imperative") {
		lastletter = voice.slice(-1);
		if (lastletter=="e") {
			tbr=tbr.slice(0,-1);
		}
	}
	tbr+=verbTenses[tense][aspect][0];
	tbr+=verbs[voice][person][number-1];
	return tbr;
}
function updateParticiple() {}
function createVerb(tense, aspect, voice, infinitive, perfective) {
	//var tbr = document.createElement("p");
	var tbr = document.createElement("table");
	tbr.className = "verb_table";
	let thead = tbr.createTHead();
	let personh = document.createElement("th");
	let si = document.createElement("th");
	let p = document.createElement("th");
	let pe = document.createElement("th");
	personh.innerHTML = "Person";
	si.innerHTML = "Singular";
	p.innerHTML = "Plural";
	pe.innerHTML = "Plural (Exclusive)";
	thead.appendChild(personh);
	thead.appendChild(si);
	thead.appendChild(p);
	thead.appendChild(pe);
	//let th_singular = thead.insertCell(0);
	//th_singular.innerHTML = "Singular";
	//let th_plural = thead.insertCell(1);
	//th_plural.innerHTML = "Plural";
	//let th_exclusive = thead.insertCell(2);
	//th_exclusive.innerHTML = "Plural (Exclusive)";
	var whatever = [
		tbr.insertRow(0),
		tbr.insertRow(1),
		tbr.insertRow(2),
		tbr.insertRow(3)
	]
	var f1stPerson = whatever[0].insertCell(0);
	var f2ndPerson = whatever[1].insertCell(0);
	var f3rdPerson = whatever[2].insertCell(0);
	var f4thPerson = whatever[3].insertCell(0);
	f1stPerson.innerHTML="<b>1st</b>";
	f2ndPerson.innerHTML="<b>2nd</b>";
	f3rdPerson.innerHTML="<b>3rd</b>";
	f4thPerson.innerHTML="<b>4th</b>";
	var d;
	for (d = 0; d < persons.length; d++) {
		var person = persons[d];
		var e;
		if (person==1) {
			for (e = 0; e < plural_1stperson.length; e++) {
				var pluralIn = plural_1stperson[e];
				var cell = whatever[d].insertCell(e+1);
				cell.innerHTML = createIndividualWord(tense, aspect, voice, person, pluralIn, infinitive, perfective);
				//document.write(createEsse(tense, aspect, mood, person, pluralIn));
				count++;
			}
		}
		else {
			for (e = 0; e < plural.length; e++) {
				var pluralIn = plural[e];
				var cell = whatever[d].insertCell(e+1);
				cell.innerHTML = createIndividualWord(tense, aspect, voice, person, pluralIn, infinitive, perfective);
				//document.write(createEsse(tense, aspect, mood, person, pluralIn));
				count++;
			}
		}
	}
	return tbr;
}0
function getTrueRoot(regularBlock, singPlur, plural, caseIn, conjugation) {
	if (conjugation==3 && plural==0) {
		return singPlur;
	} else {return regularBlock;}
}
function makeNouns() {}
function makeNoun(trueroot, tense, aspect, plural, caseIn, conjugation) {
	var to_return = trueroot;
	to_return+=participle[tense][aspect];
	to_return+=noun[conjugation][caseIn][plural-1];
	return to_return;
}
function clearTables() {
	const tables = document.querySelectorAll(".verb_table");
	for (var i = 0; i<tables.length; i++) {
		tables[i].remove();
	}
}
function clearHidden() {
	document.getElementById("selection-tense").className = "";
	document.getElementById("selection-aspect").className = "";
	document.getElementById("selection-mood").className = "";
	document.getElementById("jump_button").className = "";
	document.getElementById("sentencefor").className = "";
}
function jump() {
	var currentElement = document.getElementsByClassName("selected");
	if (currentElement[0]!=null) {
		currentElement.className = "verb_table";
	}
	var tense_getter = document.getElementById("selection-tense");
	var aspect_getter = document.getElementById("selection-aspect");
	var mood_getter = document.getElementById("selection-mood");
	var tense = tense_getter.options[tense_getter.selectedIndex].value;
	var aspect = aspect_getter.options[aspect_getter.selectedIndex].value;
	var mood = mood_getter.options[mood_getter.selectedIndex].value;
	
	console.log(mood);
	console.log(tense);
	console.log(aspect);
	
	const amt = tense+"-"+aspect+"-"+mood;
	console.log(amt);
	var elementIn = document.getElementById(amt);
	
	if (elementIn!=null) {
		elementIn.scrollIntoView();
		elementIn.className+=" selected";
	}
}
function processVerbs() {
	clearTables();
	clearHidden();
	let infinitive = document.getElementById("infinitive-box").value;
	let perfective = document.getElementById("perfective-box").value;
	
	
	var a;
	for (a = 0; a < tenses.length; a++) {
		var tense = tenses[a];
		var b;
		for (b = 0; b < aspects.length; b++) {
		  var aspect = aspects[b];
		  var c;
		  for (c = 0; c < moods.length; c++) {
			  var bold = document.createElement("b");
			  bold.className = "verb_table";
			  var mood = moods[c];
			  bold.id = tense+"-"+aspect+"-"+mood;
			  bold.innerHTML = titleCase(tense)+", "+titleCase(aspect)+", "+titleCase(mood);
			  document.body.appendChild(bold);
			  document.body.appendChild(createVerb(tense, aspect, mood, infinitive, perfective));
			  
		  }
		}
	}
	
}
function processNouns(tense, aspect, conjugation, regularBlock, specialBlock) {
	var tbr = document.createElement("table");
	tbr.className = "verb_table";
	let thead = tbr.createTHead();
	let personh = document.createElement("th");
	let si = document.createElement("th");
	let p = document.createElement("th");
	personh.innerHTML = "Case";
	si.innerHTML = "Singular";
	p.innerHTML = "Plural";
	thead.appendChild(personh);
	thead.appendChild(si);
	thead.appendChild(p);
	//let th_singular = thead.insertCell(0);
	//th_singular.innerHTML = "Singular";
	//let th_plural = thead.insertCell(1);
	//th_plural.innerHTML = "Plural";
	//let th_exclusive = thead.insertCell(2);
	//th_exclusive.innerHTML = "Plural (Exclusive)";
	var whatever = [
		tbr.insertRow(0), //Nominative
		tbr.insertRow(1), //Genitive
		tbr.insertRow(2), //Dative
		tbr.insertRow(3), //Pointerial
		tbr.insertRow(4), //Accusative
		tbr.insertRow(5) //Ablative
	]
	var nominative = whatever[0].insertCell(0);
	var genitive = whatever[1].insertCell(0);
	var dative = whatever[2].insertCell(0);
	var pointerial = whatever[3].insertCell(0);
	var accusative = whatever[4].insertCell(0);
	var ablative = whatever[5].insertCell(0);
	nominative.innerHTML="<b>Nominative</b>";
	genitive.innerHTML="<b>Genitive</b>";
	dative.innerHTML="<b>Dative</b>";
	pointerial.innerHTML="<b>Pointerial</b>";
	accusative.innerHTML="<b>Accusative</b>";
	ablative.innerHTML="<b>Ablative</b>";
	for (var a=0; a<cases.length; a++) {
		caseIn = cases[a];
		for (var b=0; b<plural.length; b++) {
			pluralIn = plural[b];
			var cell = whatever[a].insertCell(b+1);
			//function getTrueRoot(regularBlock, singPlur, plural, caseIn, conjugation)
			var trueRoot = getTrueRoot(regularBlock, specialBlock, pluralIn, caseIn, conjugation);
			console.log(trueRoot);
			//function makeNoun(trueroot, tense, aspect, plural, caseIn, conjugation)
			cell.innerHTML = makeNoun(trueRoot, tense, aspect, pluralIn, caseIn, conjugation);
		}
	}
	tbr.className = "verb_table";
	return tbr;
}
function makeNewVerber() {
	clearTables();
	var mainRoot = document.getElementById("main-box").value;
	var specialRoot = document.getElementById("special-box").value;
	var conjugationId = document.getElementById("selection-conjugation");
	var conjugation = conjugationId.options[conjugationId.selectedIndex].value;
	
	var tenseGetter = document.getElementById("selection-tense");
	var aspectGetter = document.getElementById("selection-aspect");
	
	var tense = tenseGetter.options[tenseGetter.selectedIndex].value;
	var aspect = aspectGetter.options[aspectGetter.selectedIndex].value;
	//function processNouns(tense, aspect, conjugation, regularBlock, specialBlock) {
	document.body.appendChild(processNouns(tense, aspect, conjugation, mainRoot, specialRoot));
}
function updateSentence() {
	var tense_getter = document.getElementById("selection-tense");
	var aspect_getter = document.getElementById("selection-aspect");
	var mood_getter = document.getElementById("selection-mood");
	var tense = tense_getter.options[tense_getter.selectedIndex].value;
	var aspect = aspect_getter.options[aspect_getter.selectedIndex].value;
	var mood = mood_getter.options[mood_getter.selectedIndex].value;
	
	var sentence = tense_aspect_matchups[tense+"-"+aspect]+" "+mood_descriptors[mood];
	document.getElementById("sentencefor").innerHTML = sentence;
	
}
function refreshNouns() {
	var conjugationId = document.getElementById("selection-conjugation");
	var conjugation = conjugationId.options[conjugationId.selectedIndex].value;
	var conjugation3rdButton = document.getElementById("special-box");
	var conjugation3rdLabel = document.getElementById("special-label");
	if (conjugation==3) {
		conjugation3rdButton.className = "";
		conjugation3rdLabel.className = "";
	} else {
		conjugation3rdButton.className = "hidden";
		conjugation3rdLabel.className = "hidden";
	}
	
	
}
function createPronounList(person) {
	clearTables();
	var tbr = document.createElement("table");
	tbr.className = "verb_table";
	let thead = tbr.createTHead();
	let personh = document.createElement("th");
	let si = document.createElement("th");
	let p = document.createElement("th");
	let pe;
	if (person==1) { pe = document.createElement("th"); }
	personh.innerHTML = "Case";
	si.innerHTML = "Singular";
	p.innerHTML = "Plural";
	if (person==1) {pe.innerHTML = "Plural (Exclusive)"}
	thead.appendChild(personh);
	thead.appendChild(si);
	thead.appendChild(p);
	if (person==1) { thead.appendChild(pe); }
	var whatever = [
		tbr.insertRow(0), //Nominative
		tbr.insertRow(1), //Genitive
		tbr.insertRow(2), //Dative
		tbr.insertRow(3), //Pointerial
		tbr.insertRow(4), //Accusative
		tbr.insertRow(5) //Ablative
	]
	var nominative = whatever[0].insertCell(0);
	var genitive = whatever[1].insertCell(0);
	var dative = whatever[2].insertCell(0);
	var pointerial = whatever[3].insertCell(0);
	var accusative = whatever[4].insertCell(0);
	var ablative = whatever[5].insertCell(0);
	nominative.innerHTML="<b>Nominative</b>";
	genitive.innerHTML="<b>Genitive</b>";
	dative.innerHTML="<b>Dative</b>";
	pointerial.innerHTML="<b>Pointerial</b>";
	accusative.innerHTML="<b>Accusative</b>";
	ablative.innerHTML="<b>Ablative</b>";
	for (var a=0; a<cases.length; a++) {
		caseIn = cases[a];
		var array;
		if (person==1) {
			array = plural_1stperson
		} else {
			array = plural;
		}
		for (var b=0; b<array.length; b++) {
			pluralIn = array[b];

			var cell = whatever[a].insertCell(b+1);
			//function getTrueRoot(regularBlock, singPlur, plural, caseIn, conjugation)
			//var trueRoot = getTrueRoot(regularBlock, specialBlock, pluralIn, caseIn, conjugation);
			//console.log(trueRoot);
			//function makeNoun(trueroot, tense, aspect, plural, caseIn, conjugation)
			var pronounIn = pronouns[person][caseIn][pluralIn-1];
			cell.innerHTML = pronounIn;
			//cell.innerHTML = makeNoun(trueRoot, tense, aspect, pluralIn, caseIn, conjugation);
		}
	}
	tbr.className = "verb_table";
	document.body.appendChild(tbr);
	
}
function quidEst(person, plurality) {
	//clearTables();
	var tbr = document.createElement("table");
	tbr.className = "verb_table";
	let thead = tbr.createTHead();
	let personh = document.createElement("th");
	let si = document.createElement("th");
	let p = document.createElement("th");
	let pe;
	if (person==1) { pe = document.createElement("th"); }
	personh.innerHTML = "Case";
	si.innerHTML = "Singular";
	p.innerHTML = "Plural";
	if (person==1) {pe.innerHTML = "Plural (Exclusive)"}
	thead.appendChild(personh);
	thead.appendChild(si);
	thead.appendChild(p);
	if (person==1) { thead.appendChild(pe); }
	var whatever = [
		tbr.insertRow(0), //Nominative
		tbr.insertRow(1), //Genitive
		tbr.insertRow(2), //Dative
		tbr.insertRow(3), //Pointerial
		tbr.insertRow(4), //Accusative
		tbr.insertRow(5) //Ablative
	]
	var nominative = whatever[0].insertCell(0);
	var genitive = whatever[1].insertCell(0);
	var dative = whatever[2].insertCell(0);
	var pointerial = whatever[3].insertCell(0);
	var accusative = whatever[4].insertCell(0);
	var ablative = whatever[5].insertCell(0);
	for (var a=0; a<cases.length; a++) {
		caseIn = cases[a];
		var array;
		if (person==1) {
			array = plural_1stperson
		} else {
			array = plural;
		}
		for (var b=0; b<array.length; b++) {
			pluralIn = array[b];
			var cell = whatever[a].insertCell(b+1);
			//function getTrueRoot(regularBlock, singPlur, plural, caseIn, conjugation)
			//var trueRoot = getTrueRoot(regularBlock, specialBlock, pluralIn, caseIn, conjugation);
			//console.log(trueRoot);
			//function makeNoun(trueroot, tense, aspect, plural, caseIn, conjugation)
			var pronounIn = pronouns[person][caseIn][pluralIn-1];
			cell.innerHTML = pronounIn;
			//cell.innerHTML = makeNoun(trueRoot, tense, aspect, pluralIn, caseIn, conjugation);
		}
	}
	tbr.className = "verb_table";
	document.body.appendChild(tbr);
	
}
function createPronounGenitiveList(person, plurality) {
	//clearTables();
	var tbr = document.createElement("table");
	tbr.className = "verb_table";
	let thead = tbr.createTHead();
	let personh = document.createElement("th");
	let si = document.createElement("th");
	let p = document.createElement("th");
	let pe;
	if (person==1) { pe = document.createElement("th"); }
	personh.innerHTML = "Case";
	si.innerHTML = "Singular";
	p.innerHTML = "Plural";
	if (person==1) {pe.innerHTML = "Plural (Exclusive)"}
	thead.appendChild(personh);
	thead.appendChild(si);
	thead.appendChild(p);
	if (person==1) { thead.appendChild(pe); }
	var whatever = [
		tbr.insertRow(0), //Nominative
		tbr.insertRow(1), //Genitive
		tbr.insertRow(2), //Dative
		tbr.insertRow(3), //Pointerial
		tbr.insertRow(4), //Accusative
		tbr.insertRow(5) //Ablative
	]
	var nominative = whatever[0].insertCell(0);
	var genitive = whatever[1].insertCell(0);
	var dative = whatever[2].insertCell(0);
	var pointerial = whatever[3].insertCell(0);
	var accusative = whatever[4].insertCell(0);
	var ablative = whatever[5].insertCell(0);
	nominative.innerHTML="<b>Nominative</b>";
	genitive.innerHTML="<b>Genitive</b>";
	dative.innerHTML="<b>Dative</b>";
	pointerial.innerHTML="<b>Pointerial</b>";
	accusative.innerHTML="<b>Accusative</b>";
	ablative.innerHTML="<b>Ablative</b>";
	for (var a=0; a<cases.length; a++) {
		caseIn = cases[a];
		var array;
		if (person==1) {
			array = plural_1stperson
		} else {
			array = plural;
		}
		for (var b=0; b<array.length; b++) {
			pluralIn = array[b];
			var cell = whatever[a].insertCell(b+1);
			//function getTrueRoot(regularBlock, singPlur, plural, caseIn, conjugation)
			//var trueRoot = getTrueRoot(regularBlock, specialBlock, pluralIn, caseIn, conjugation);
			//console.log(trueRoot);
			//function makeNoun(trueroot, tense, aspect, plural, caseIn, conjugation)
			var pronounIn = pronouns_genitive[person][pluralIn-1];
			pronounIn+=noun[2][caseIn][plurality];
			cell.innerHTML = pronounIn;
			//cell.innerHTML = makeNoun(trueRoot, tense, aspect, pluralIn, caseIn, conjugation);
		}
	}
	tbr.className = "verb_table";
	document.body.appendChild(tbr);
	
}
function makeTruePronoun() {
	var personSelection = document.getElementById("person-selection");
	
	var person = personSelection.options[personSelection.selectedIndex].value;
	createPronounList(person);
	createPronounGenitiveList(person, 0);
	createPronounGenitiveList(person, 1);
}
var count = 0;
function startWork() {
	
	var a;
	for (a = 0; a < tenses.length; a++) {
		var tense = tenses[a];
		var b;
		for (b = 0; b < aspects.length; b++) {
		  var aspect = aspects[b];
		  var c;
		  for (c = 0; c < moods.length; c++) {
			  var mood = moods[c];
			  
			  document.write("<b class=\"verb_table\">"+titleCase(tense)+", "+titleCase(aspect)+", "+titleCase(mood)+"</b>")
			  document.body.appendChild(createEsse(tense, aspect, mood));
			  
		  }
		}
	}
}
