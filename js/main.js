let field = [1,0,1,0,1]  ///musu laukuma 
let position = 0;			 ///pozicija grafa
let tourn = "MIN";       ///jusu status grafa
let scoreMIN = 5;			///punkti
let scoreMAX = 5;			///punkti
let flagfirst = false; //flazok na pervij hod
let graf = 
[	{field: [1,0,1,0,1], layer: 0, parent: ['non'], child: [1,2,3,4], status: 0, MAX: 0, MIN: 0},
	{field: ["-",1,1,0,1], layer: 1, parent: [0], child: [5,6,7], status: -1, MAX: 3, MIN: 5},
	{field: ["-",1,0,0,1], layer: 1, parent: [0], child: [5,8,9], status: -1, MAX: 3, MIN: 5},
	{field: ["-",1,0,1,1], layer: 1, parent: [0], child: [5,6,8], status: -1, MAX: 3, MIN: 5},
	{field: ["-",1,0,1,0], layer: 1, parent: [0], child: [7,8,9], status: 0, MAX: 3, MIN: 5},
	{field: ["-","-",1,0,1], layer: 2, parent: [1,2,3], child: [10,11], status: -1, MAX: 2, MIN: 5},
	{field: ["-","-",1,1,1], layer: 2, parent: [1,3], child: [12], status: 0, MAX: 3, MIN: 3},
	{field: ["-","-",1,1,0], layer: 2, parent: [1,4], child: [13,14], status: 1, MAX: 3, MIN: 3},
	{field: ["-","-",1,0,1], layer: 2, parent: [2,3,4], child: [14,15], status: 0, MAX: 3, MIN: 3},
	{field: ["-","-",1,0,0], layer: 2, parent: [2,4], child: [13,15], status: 1, MAX: 3, MIN: 3},
	{field: ["-","-","-",1,1], layer: 3, parent: [5], child: [16], status: -1, MAX: 0, MIN: 5},
	{field: ["-","-","-",1,0], layer: 3, parent: [5], child: [17], status: -1, MAX: 0, MIN: 5},
	{field: ["-","-","-",1,1], layer: 3, parent: [6], child: [18], status: 0, MAX: 3, MIN: 2},
	{field: ["-","-","-",1,0], layer: 3, parent: [7], child: [19], status: 1, MAX: 3, MIN: 2},
	{field: ["-","-","-",1,1], layer: 3, parent: [7,8], child: [17], status: -1, MAX: 1, MIN: 3},
	{field: ["-","-","-",1,0], layer: 3, parent: [8,9], child: [20], status: 0, MAX: 1, MIN: 3},
	{field: ["-","-","-","-",1], layer: 4, parent: [10], child: ['non'], status: -1, MAX: -1, MIN: 5},
	{field: ["-","-","-","-",1], layer: 4, parent: [11], child: ['non'], status: -1, MAX: 0, MIN: 3},
	{field: ["-","-","-","-",1], layer: 4, parent: [12], child: ['non'], status: 0, MAX: 2, MIN: 2},
	{field: ["-","-","-","-",1], layer: 4, parent: [13], child: ['non'], status: 1, MAX: 3, MIN: 0},
	{field: ["-","-","-","-",1], layer: 4, parent: [15], child: ['non'], status: 0, MAX: 1, MIN: 1}
]

//grafa katra pozicija ir grafa vieta
//layer tas ir rinda
//child tas saistiti grafa vietas 
//status minimaks value
///MAX un MIN punktu skaits
document.addEventListener('DOMContentLoaded', function () {           ////tur caur trigeri mainam Max vai Min mes esam 
  var checkbox = document.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      tourn = "MAX";
      if(tourn == "MIN"){  ///parbaudam un parrakstim jaunie dati
      	position = 0    				//jaunie dati
      	field = graf[position].field
			 scoreMIN = 5
			 scoreMAX = 5
			 console.log(scoreMIN)
			 console.log(scoreMAX)
			  console.log("-----------")
			 document.getElementById("value1").innerHTML=field[0];   ////aizpildam laukumu
		    document.getElementById("value2").innerHTML=field[1];
		    document.getElementById("value3").innerHTML=field[2];
		    document.getElementById("value4").innerHTML=field[3];
		    document.getElementById("value5").innerHTML=field[4];
    		document.getElementById("scoreNumYour").innerHTML=scoreMIN;   ///punkti uzrakstim tur kur nepieciesams mums vai pretiniekam
    		document.getElementById("scoreNumEnemy").innerHTML=scoreMAX;
    	}else{
    		position = 0  			//jaunie dati
      	field = graf[position].field
			 scoreMIN = 5
			 scoreMAX = 5
			 console.log(scoreMIN)
			 console.log(scoreMAX)
			  console.log("-----------")
			 document.getElementById("value1").innerHTML=field[0];  ////aizpildam laukumu
		    document.getElementById("value2").innerHTML=field[1];
		    document.getElementById("value3").innerHTML=field[2];
		    document.getElementById("value4").innerHTML=field[3];
		    document.getElementById("value5").innerHTML=field[4];
    		document.getElementById("scoreNumYour").innerHTML=scoreMAX; ///punkti uzrakstim tur kur nepieciesams mums vai pretiniekam
    		document.getElementById("scoreNumEnemy").innerHTML=scoreMIN;
    	}
    } else {
      tourn = "MIN";
      if(tourn == "MIN"){
    		document.getElementById("scoreNumYour").innerHTML=scoreMIN; ///punkti uzrakstim tur kur nepieciesams mums vai pretiniekam
    		document.getElementById("scoreNumEnemy").innerHTML=scoreMAX;
    	}else{
    		document.getElementById("scoreNumYour").innerHTML=scoreMAX; ///punkti uzrakstim tur kur nepieciesams mums vai pretiniekam
    		document.getElementById("scoreNumEnemy").innerHTML=scoreMIN;
    }
    }
  });
});


window.onload = function(){ 	///saja funkija sakt darbu per lappas sakumu
    document.getElementById("value1").innerHTML=field[0];		////aizpildam laukumu
    document.getElementById("value2").innerHTML=field[1];
    document.getElementById("value3").innerHTML=field[2];
    document.getElementById("value4").innerHTML=field[3];
    document.getElementById("value5").innerHTML=field[4];
    if(tourn == "MIN"){
    	document.getElementById("scoreNumYour").innerHTML=scoreMIN;     //punkti uzrakstim tur kur nepieciesams mums vai pretiniekam
    	document.getElementById("scoreNumEnemy").innerHTML=scoreMAX;
    }else{
    	document.getElementById("scoreNumYour").innerHTML=scoreMAX;		//punkti uzrakstim tur kur nepieciesams mums vai pretiniekam
    	document.getElementById("scoreNumEnemy").innerHTML=scoreMIN;
    }
    document.getElementById("messageOutput").innerHTML="Nospiediet START lai sakt";    
}

function combination12(){  		////sajas funkcijas saucas pec zalas pogas kliku (vieta nozime kadas ciparas nepieciesams dzest )
	hodCheloveka(4)					////funkcija kura dzes ciparus 
}

function combination23(){
	hodCheloveka(3)
}

function combination34(){
	hodCheloveka(2)
}

function combination45(){
	hodCheloveka(1)
}

function hodCheloveka(btn){ ///funkcija niem koefientu 
 	if(4 == btn){
 		if(graf[position].child.length == 4){   ///ja koefiecients lidzigs vai mazaks par child garumu, tad varam dzest ciparus
 			position = graf[position].child[0]		///mainam berna poziciju uz to kura nepieciesama
 			document.getElementById("messageOutput").innerHTML="Lai dators varētu pārvietoties, nepicisams uzspiest pogu";  ///izvadam vestule speletajam
 			document.getElementById("starting").innerHTML="Dators veic soli";
 		}else{
 			document.getElementById("messageOutput").innerHTML="Tada para nav atljauja";    ///izvadam vestule speletajam
 		}
 	}
 	if(3 == btn){
 		if(graf[position].child.length == 4){	///ja koefiecients lidzigs vai mazaks par child garumu, tad varam dzest ciparus
 			position = graf[position].child[1]	///mainam berna poziciju uz to kura nepieciesama
 			document.getElementById("messageOutput").innerHTML="Lai dators varētu pārvietoties, nepicisams uzspiest pogu";
 			document.getElementById("starting").innerHTML="Dators veic soli";
 		}else if (graf[position].child.length == 3){	///ja koefiecients lidzigs vai mazaks par child garumu, tad varam dzest ciparus
 			position = graf[position].child[0]	///mainam berna poziciju uz to kura nepieciesama
 			document.getElementById("messageOutput").innerHTML="Lai dators varētu pārvietoties, nepicisams uzspiest pogu"; ///izvadam vestule speletajam
 			document.getElementById("starting").innerHTML="Dators veic soli";
 		}else{
 			document.getElementById("messageOutput").innerHTML="Tada para nav atljauja"; ///izvadam vestule speletajam
 		}
 	}
 	if(2 == btn){
 		if(graf[position].child.length == 4){ ///ja koefiecients lidzigs vai mazaks par child garumu, tad varam dzest ciparus
 			position = graf[position].child[2] ///mainam berna poziciju uz to kura nepieciesama
 			document.getElementById("messageOutput").innerHTML="Lai dators varētu pārvietoties, nepicisams uzspiest pogu";
 			document.getElementById("starting").innerHTML="Dators veic soli";
 		}else if (graf[position].child.length == 3){ ///ja koefiecients lidzigs vai mazaks par child garumu, tad varam dzest ciparus
 			position = graf[position].child[1] ///mainam berna poziciju uz to kura nepieciesama
 			document.getElementById("messageOutput").innerHTML="Lai dators varētu pārvietoties, nepicisams uzspiest pogu";
 			document.getElementById("starting").innerHTML="Dators veic soli";
 		}else if (graf[position].child.length == 2){ ///ja koefiecients lidzigs vai mazaks par child garumu, tad varam dzest ciparus
 			position = graf[position].child[0] ///mainam berna poziciju uz to kura nepieciesama
 			document.getElementById("messageOutput").innerHTML="Lai dators varētu pārvietoties, nepicisams uzspiest pogu"; //izvadam vestule speletajam
 			document.getElementById("starting").innerHTML="Dators veic soli";
 		}else{
 			document.getElementById("messageOutput").innerHTML="Tada para nav atljauja"; //izvadam vestule speletajam
 		}
 	}
 	if(1 == btn){
 		if(graf[position].child.length == 4){ ///ja koefiecients lidzigs vai mazaks par child garumu, tad varam dzest ciparus
 			position = graf[position].child[3] ///mainam berna poziciju uz to kura nepieciesama
 			document.getElementById("messageOutput").innerHTML="Lai dators varētu pārvietoties, nepicisams uzspiest pogu";
 			document.getElementById("starting").innerHTML="Dators veic soli";
 		}else if (graf[position].child.length == 3){ ///ja koefiecients lidzigs vai mazaks par child garumu, tad varam dzest ciparus
 			position = graf[position].child[2] ///mainam berna poziciju uz to kura nepieciesama
 			document.getElementById("messageOutput").innerHTML="Lai dators varētu pārvietoties, nepicisams uzspiest pogu";
 			document.getElementById("starting").innerHTML="Dators veic soli";
 		}else if (graf[position].child.length == 2){ ///ja koefiecients lidzigs vai mazaks par child garumu, tad varam dzest ciparus
 			position = graf[position].child[1] ///mainam berna poziciju uz to kura nepieciesama
 			document.getElementById("messageOutput").innerHTML="Lai dators varētu pārvietoties, nepicisams uzspiest pogu";
 			document.getElementById("starting").innerHTML="Dators veic soli";
 		}else if (graf[position].child.length == 1){ ///ja koefiecients lidzigs vai mazaks par child garumu, tad varam dzest ciparus
 			position = graf[position].child[0] ///mainam berna poziciju uz to kura nepieciesama
 			document.getElementById("messageOutput").innerHTML="Lai dators varētu pārvietoties, nepicisams uzspiest pogu"; //izvadam vestule speletajam
 			document.getElementById("starting").innerHTML="Dators veic soli"; //izvadam vestule speletajam
 		}else{
 			document.getElementById("messageOutput").innerHTML="Tada para nav atljauja"; //izvadam vestule speletajam
 		}
 	}
	 field = graf[position].field  ///aizpildam mainigas ar jaunas pozicija datiem
	 scoreMIN = graf[position].MIN
	 scoreMAX = graf[position].MAX
	 console.log(scoreMIN)
	 console.log(scoreMAX)
	  console.log("-----------")
	 document.getElementById("value1").innerHTML=field[0];	////aizpildam laukumu
    document.getElementById("value2").innerHTML=field[1];
    document.getElementById("value3").innerHTML=field[2];
    document.getElementById("value4").innerHTML=field[3];
    document.getElementById("value5").innerHTML=field[4];
    if(tourn == "MIN"){
    	document.getElementById("scoreNumYour").innerHTML=scoreMIN;  //punkti uzrakstim tur kur nepieciesams mums vai pretiniekam
    	document.getElementById("scoreNumEnemy").innerHTML=scoreMAX;
    }else{
    	document.getElementById("scoreNumYour").innerHTML=scoreMAX; //punkti uzrakstim tur kur nepieciesams mums vai pretiniekam
    	document.getElementById("scoreNumEnemy").innerHTML=scoreMIN;
    }
    winnerAndLoser(gameEnd())
}




function gameEnd(){ //saja funkcija parbaud, vai spele beidzas, vai ne. UN return bool 
	let space = 0;
	for (let i = 0; i < field.length; i++) {
		if(field[i] == '-'){
			space++;
		}
	}
	if(space == 4){
		return true
	}else{
		return false 
	}
}


function start(){   /////saja funkcija start spele, un sak finkciju step, tad kad nepiecisams, lai dators sak savu soli
	document.getElementById("messageOutput").innerHTML="Tava solis";
	if(gameEnd()){
		document.getElementById("messageOutput").innerHTML="Spele beidzas"; 
		winnerAndLoser(gameEnd())  /// tur parbaudam vai spele beigta, ja beigda tad saucam funkciju, kura aizpild ar finalo informaciju
	}
	if (tourn == "MIN" || flagfirst){   ///tur parbaudam, vai dators sak spele, vai cilveks
		step()
		winnerAndLoser(gameEnd())
	}
	flagfirst = true; 
}

let smaller; /// mainiga ar vismazaku minimax zime
let bigger;	/// mainiga ar vislielako minimax zime
let neededposforbig; /// mainiga ar vislabaku soli MAX
let neededposforsmall;  /// mainiga ar vislabaku soli MIN
let forcheck; // mainiga lai darit parbaude

function step(){
	for (let j = 0; j < graf[position].child.length; j++){ ///skolko sdelaet ciklov po child massivu
		if(j == 0){
			smaller = graf[graf[position].child[j]].status  ////aizpildu mainigu ar piro iespejamo svaru
			bigger = graf[graf[position].child[j]].status	////aizpildu mainigu ar piro iespejamo svaru
		}
		forcheck = graf[graf[position].child[j]].status  ///zapisivaet status pervogo vstrechnogo v child
		if(bigger <= forcheck){									////meklejam vislabako vietu lai izdarit soli MAX
			bigger = forcheck
			neededposforbig = graf[position].child[j]  
		}
		if(smaller >= forcheck){  ////meklejam vislabako vietu lai izdarit soli MIN
			smaller = forcheck
			neededposforsmall = graf[position].child[j]
		}
	}
	if (tourn == "MIN"){   ////aizpildam galvenos mainigos ar time datiem, kuri mums nepiecisami (tas atskiras no ta, vai MAX vai MIN)
		position = neededposforbig;  ///jauna pozicija
		field = graf[position].field   ///jaunais laukums no grafa ar jaunu poziciju
		scoreMIN = graf[position].MIN 	///jaunu punktu skaits galvenos mainigajos
		scoreMAX = graf[position].MAX
	}else{
		position = neededposforsmall    ///jauna pozicija
		field = graf[position].field		///jaunais laukums no grafa ar jaunu poziciju
		scoreMIN = graf[position].MIN    ///jaunu punktu skaits galvenos mainigajos
		scoreMAX = graf[position].MAX
	}
		console.log(scoreMIN)
	 console.log(scoreMAX)
	  console.log("-----------")
	 document.getElementById("value1").innerHTML=field[0];    ////aizpildam laukumu
    document.getElementById("value2").innerHTML=field[1];
    document.getElementById("value3").innerHTML=field[2];
    document.getElementById("value4").innerHTML=field[3];
    document.getElementById("value5").innerHTML=field[4];
    if(tourn == "MIN"){
    	document.getElementById("scoreNumYour").innerHTML=scoreMIN;    //punkti uzrakstim tur kur nepieciesams mums vai pretiniekam
    	document.getElementById("scoreNumEnemy").innerHTML=scoreMAX;
    }else{
    	document.getElementById("scoreNumYour").innerHTML=scoreMAX;    //punkti uzrakstim tur kur nepieciesams mums vai pretiniekam
    	document.getElementById("scoreNumEnemy").innerHTML=scoreMIN;
    }
}


function winnerAndLoser(status){   ///saja funkcija aizpild lapu ar datiem, ja spele beidza, to vina saprot no ievadas mainiga
	if (status == true){
		if (scoreMIN > scoreMAX){  ///parbaudam kas uzvar
			if(tourn == "MIN"){
				document.getElementById("messageOutput").innerHTML="Spele beidzas";  ///izvadisim informaciju speletajiem
    			document.getElementById("scoreNumYour").innerHTML="WIN";
    			document.getElementById("scoreNumEnemy").innerHTML="LOSE";
    		}else{
    			document.getElementById("messageOutput").innerHTML="Spele beidzas";  ///izvadisim informaciju speletajiem
    			document.getElementById("scoreNumYour").innerHTML="LOSE";
    			document.getElementById("scoreNumEnemy").innerHTML="WIN";
    		}
		}else if(scoreMIN < scoreMAX){ ///parbaudam kas uzvar
			if(tourn == "MIN"){
				document.getElementById("messageOutput").innerHTML="Spele beidzas";   ///izvadisim informaciju speletajiem
    			document.getElementById("scoreNumYour").innerHTML="LOSE";
    			document.getElementById("scoreNumEnemy").innerHTML="WIN";
    		}else{
    			document.getElementById("messageOutput").innerHTML="Spele beidzas";   ///izvadisim informaciju speletajiem
    			document.getElementById("scoreNumYour").innerHTML="WIN";
    			document.getElementById("scoreNumEnemy").innerHTML="LOSE";
    		}
		}else{
			document.getElementById("messageOutput").innerHTML="Spele beidzas";   ///izvadisim informaciju speletajiem
			document.getElementById("scoreNumYour").innerHTML="DOUB";
    		document.getElementById("scoreNumEnemy").innerHTML="DOUB";
		}
	}
}

function restart(){  ///funkcija kura restart lapuse un atjauna datus
	location.reload();
}