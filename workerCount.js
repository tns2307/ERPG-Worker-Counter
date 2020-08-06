var expNeeded = [0,64,157,237,310,379,445,508,570,630,688,746,802,857,912,965,1018,1070,1122,1173,1223,1273,1322,1371,1420,1468,1516,1563,1610,1657,1703,1749,1795,1840,1885,1930,1975,2019,2063,2107,2151,2194,2238,2281,2324,2366,2409,2451,2493,2535,2577,1618,3659,2701,2742,2783,2823,2864,2905,2945,2985,3025,3065,3105,3145,3184,3224,3263,3302,3341,3380,3419,3458,3496,3535,3573,3612,3650,3688,3726,3764,3802,3839,3877,3915,3952,3989,4027,4064,4101,4138,4175,4212,4249,4285,4322,4358,4395,4431,4468];

var cd = 0;
var exp = 0;

var commands = ["chop","axe","bowsaw","chainsaw","fish","net","boat","bigboat","pickup","ladder","tractor","greenhouse","mine","pickaxe","drill","dynamite"];

var exps = [4,8,12,16,4,9,13,18,4,8,12,17,4,8,12,17];

var command;

function setExp(){
	var temp = document.getElementsByClassName("command")[0].value;
	console.log(temp+"{}"+commands[0]);
	for (var i=0;i<exps.length;i++) {
		
		if (temp.toLowerCase().localeCompare(commands[i])==0) exp = exps[i];

	}
}

function setCd(){
	cd = parseInt(document.getElementsByClassName("cd")[0].value);
}

function calculate(){
	setExp();
	setCd();
	var currLv = document.getElementsByClassName("currLv")[0].value;
	currLv = parseInt(currLv);
	var totalExpNeeded = 0;
	for (var i = 0;i<expNeeded.length;i++){
		if (i<currLv) continue;
		totalExpNeeded+=expNeeded[i];
	}
	totalExpNeeded-=parseInt(document.getElementsByClassName("currExp")[0].value)
	var totalWorkNeeded = parseInt(totalExpNeeded/exp) + 1;
	var totalSecondNeeded = totalWorkNeeded * cd;
	document.getElementsByClassName("timeNeeded")[0].innerText = totalSecondNeeded;
	document.getElementsByClassName("timeNeeded")[1].innerText = totalSecondNeeded/60;
	document.getElementsByClassName("timeNeeded")[2].innerText = totalSecondNeeded/60/60;
	document.getElementsByClassName("timeNeeded")[3].innerText = totalSecondNeeded/60/60/24;
}