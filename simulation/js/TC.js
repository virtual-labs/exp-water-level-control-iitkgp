 
   /* This HTML page and script files are developed by
    Piyali Chattopadhyay
    Project Scientist-Technical,
    Virtual Labs IIT Kharagpur.*/      

	
/*$(document).ready(function(){
  $("#instcontrol").click(function(){
	//$("#inst").css("display","block");  
    $("#inst").slideDown();
  });
  //$(".btn2").click(function(){
    //$("p").slideDown();
  });	*/

function config1control(){
	
document.getElementById('controller').src = "./images/config-11.png";	
	
	
	document.getElementById('respT1').style.display="block";
	document.getElementById('respT2').style.display="none";
	
	document.getElementById('b1').style.display="block";
	document.getElementById('c1').style.display="none";
	document.getElementById('r1').style.display="none";
	//document.getElementById('sc1').style.display="block";
	
	document.getElementById('b2').style.display="none";
	document.getElementById('c2').style.display="none";
	document.getElementById('r2').style.display="none";
	//document.getElementById('sc2').style.display="none";
	
}
function Level_Maintain1(){
	
$('#part1').css('display','block');
$('#part11').css('display','none');
$('#part2').css('display','none');
$('#part22').css('display','none');
$('#chkindex').val(1);
	
}

function Level_Track1(){
	
$('#part11').css('display','block');
$('#part1').css('display','none');
$('#part2').css('display','none');
$('#part22').css('display','none');
$('#chkindex').val(2);
	
}


function config2control(){
	
document.getElementById('controller').src = "./images/config-22.png";	
	
	
	document.getElementById('respT2').style.display="block";
	document.getElementById('respT1').style.display="none";
	
	document.getElementById('b1').style.display="none";
	document.getElementById('c1').style.display="none";
	document.getElementById('r1').style.display="none";
	//document.getElementById('sc1').style.display="none";
	
	document.getElementById('b2').style.display="block";
	document.getElementById('c2').style.display="none";
	document.getElementById('r2').style.display="none";
	//document.getElementById('sc2').style.display="block";
	
}

function Level_Maintain2(){
	
$('#part2').css('display','block');
$('#part22').css('display','none');
$('#part1').css('display','none');
$('#part11').css('display','none');
$('#chkindex').val(3);
	
}

function Level_Track2(){
	
$('#part22').css('display','block');
$('#part11').css('display','none');
$('#part2').css('display','none');
$('#part1').css('display','none');
$('#chkindex').val(4);
	
}


function Build(){
	var indexVal = $('#chkindex').val();
	
	
		var timeTank1 = document.getElementById('respT1').value;
		var timeTank2 = document.getElementById('respT2').value;
		
		var time1 = $('#reft1').val();
		var time2 = $('#reft2').val();
		var time3 = $('#reft3').val();
		
		var time11 = $('#refts1').val();
		var time22 = $('#refts2').val();
		var time33 = $('#refts3').val();
		
		///CONFIG-1 CONDITIONS
		if(document.getElementById('controller').src.match("./images/config-11.png")){
		if(timeTank1>=100 && timeTank1<=200){
		if(indexVal == 1  && document.getElementById('waterLevel1').value<=15 && document.getElementById('waterLevel1').value>=1 && document.getElementById('ov').value<=11 && document.getElementById('ov').value>=1 && document.getElementById('ts').value<=10 && document.getElementById('ts').value>=1){
		
		setTimeout(function(){
		alert('Model Built');
		
		document.getElementById('c1').style.display="block";
	
///FOR TANK-1 LEVEL RESPONSE	
		document.getElementById('ov').readOnly=true;
		document.getElementById('ts').readOnly=true;
		document.getElementById('waterLevel1').readOnly=true;
		document.getElementById('respT1').readOnly=true;
		},2000)
		}
		if(indexVal == 1  && (document.getElementById('waterLevel1').value>15 || document.getElementById('waterLevel1').value<1 || document.getElementById('ov').value>11 || document.getElementById('ov').value<1 || document.getElementById('ts').value>10 || document.getElementById('ts').value<1)){
			alert('Follow the instructions. Recheck the ranges of desired level of water, % overshoot and 2% settling time.');
		}
		
		if(indexVal == 2 && math.add(time1,time2,time3)<=timeTank1 && document.getElementById('ref1').value<=15 && document.getElementById('ref1').value>=1 &&  document.getElementById('ref2').value<=15 && document.getElementById('ref2').value>=1 && document.getElementById('ref3').value<=15 && document.getElementById('ref3').value>=1 && document.getElementById('ovt').value<=11 && document.getElementById('ovt').value>=1 && document.getElementById('tst').value<=10 && document.getElementById('tst').value>=1){
		
		setTimeout(function(){
		alert('Model Built');
		
		document.getElementById('c1').style.display="block";
///FOR TANK-1 LEVEL TRACKING
		document.getElementById('ovt').readOnly=true;
		document.getElementById('tst').readOnly=true;
		document.getElementById('ref1').readOnly=true;
		document.getElementById('reft1').readOnly=true;
		document.getElementById('ref2').readOnly=true;
		document.getElementById('reft2').readOnly=true;
		document.getElementById('ref3').readOnly=true;
		document.getElementById('reft3').readOnly=true;
		document.getElementById('respT1').readOnly=true;
		},2000)	
		}
		if(indexVal == 2 && (math.add(time1,time2,time3)>timeTank1 || document.getElementById('ref1').value>15 || document.getElementById('ref1').value<1 ||  document.getElementById('ref2').value>15 || document.getElementById('ref2').value<1 || document.getElementById('ref3').value>15 || document.getElementById('ref3').value<1 || document.getElementById('ovt').value>11 || document.getElementById('ovt').value<1 || document.getElementById('tst').value>10 || document.getElementById('tst').value<1)){
		alert('Follow the instructions. Recheck the ranges of desired levels of water, times to track the water levels, % overshoot and settling time.');
		}
		}
		if(timeTank1<100 || timeTank1>200){
			alert('Check the range of Time of simulation');
		}
		}
		///CONFIG-2 CONDITIONS
 if(document.getElementById('controller').src.match("./images/config-22.png")){
	 if(timeTank2>=100 && timeTank2<=200){
	if(indexVal == 3  && document.getElementById('waterLevel2').value<=15 && document.getElementById('waterLevel2').value>=1 && document.getElementById('ov2').value<=10 && document.getElementById('ov2').value>=1 && document.getElementById('ts2').value<=20 && document.getElementById('ts2').value>=1){
		
		setTimeout(function(){
		alert('Model Built');	
         document.getElementById('c2').style.display  = "block";
		 
		 ///FOR TANK-2 LEVEL RESPONSE	
		document.getElementById('ov2').readOnly=true;
		document.getElementById('ts2').readOnly=true;
		document.getElementById('waterLevel2').readOnly=true;
		document.getElementById('respT2').readOnly=true;
		},2000)
	}
	if(indexVal == 3  && (document.getElementById('waterLevel2').value>15 || document.getElementById('waterLevel2').value<1 || document.getElementById('ov2').value>10 || document.getElementById('ov2').value<1 || document.getElementById('ts2').value>20 || document.getElementById('ts2').value<1)){
	alert('Follow the instructions. Check the ranges of desired level of water, % overshoot and 2% settling time.');	
	}
	if(indexVal == 4 && math.add(time11,time22,time33)<=timeTank2 && document.getElementById('refs1').value<=15 && document.getElementById('refs1').value>=1 &&  document.getElementById('refs2').value<=15 && document.getElementById('refs2').value>=1 && document.getElementById('refs3').value<=15 && document.getElementById('refs3').value>=1 && document.getElementById('ovt2').value<=10 && document.getElementById('ovt2').value>=1 && document.getElementById('tst2').value<=20 && document.getElementById('tst2').value>=1){
		
		setTimeout(function(){
		alert('Model Built');
		document.getElementById('c2').style.display  = "block";
		
///FOR TANK-2 LEVEL TRACKING
		document.getElementById('ovt2').readOnly=true;
		document.getElementById('tst2').readOnly=true;
		document.getElementById('refs1').readOnly=true;
		document.getElementById('refts1').readOnly=true;
		document.getElementById('refs2').readOnly=true;
		document.getElementById('refts2').readOnly=true;
		document.getElementById('refs3').readOnly=true;
		document.getElementById('refts3').readOnly=true;
		document.getElementById('respT2').readOnly=true;
					
		},2000)
 }
 if(indexVal == 4 && (math.add(time11,time22,time33)>timeTank2 || document.getElementById('refs1').value>15 || document.getElementById('refs1').value<1 ||  document.getElementById('refs2').value>15 || document.getElementById('refs2').value<1 || document.getElementById('refs3').value>15 || document.getElementById('refs3').value<1 || document.getElementById('ovt2').value>10 || document.getElementById('ovt2').value<1 || document.getElementById('tst2').value>20 || document.getElementById('tst2').value<1)){
alert('Follow the instructions. Recheck the ranges of desired levels of water, times to track the water levels, % overshoot and settling time.');	 
 }
	 }	
	 if(timeTank2<100 || timeTank2>200){
			alert('Check the range of Time of simulation');
		}
 
 }
	}
	
	
	function CT(){		
		setTimeout(function() {
			alert('Model loaded and ready');
			if(document.getElementById('controller').src.match("./images/config-11.png")){
         document.getElementById('r1').style.display  = "block";
			}
         	
		else if(document.getElementById('controller').src.match("./images/config-22.png")){
         document.getElementById('r2').style.display  = "block";
			}

			
           }, 2000);
	}
	
function uflow(){
	
	document.getElementById('upipe1').classList.add("uflow1");
	
	setTimeout(function(){
		   document.getElementById('upipe2').classList.add("uflow2");
	   },1000);
	   	   
	   setTimeout(function(){
		   document.getElementById('upipe3').classList.add("uflow3");
	   },2000);
	   setTimeout(function(){
		   document.getElementById('upipe4').classList.add("uflow4");
	   },3000);
	   
	setTimeout(function(){
		   document.getElementById('upipe5').classList.add("uflow5");
	   },4000);
	
	
}	

///FOR LEVEL RESPONSE
function flow(){
	
	document.getElementById('pumpoff').style.display="none";
	document.getElementById('pumpon').style.display="block";
	
	uflow();
	
	setTimeout(function(){
	document.getElementById('pipe').classList.add("tank1flow");
	 },4000);
	
	
	setTimeout(function(){
		   document.getElementById('level1').classList.add("tankfill");
	   },6000);///6
	   
	   
	   
	   setTimeout(function(){
		   document.getElementById('pipe2').classList.add("smallflow");
	   },6000);///6
	   setTimeout(function(){
		   document.getElementById('pipe3').classList.add("tank2flow");
	   },8000);///8
	   
	
	setTimeout(function(){
		   document.getElementById('level2').classList.add("tank2fill");
	   },10000);///10
	   
	   setTimeout(function(){
		   document.getElementById('pipe4').classList.add("basinflow1");
	   },10000); ///10
	   
	   setTimeout(function(){
		   document.getElementById('pipe5').classList.add("basinflow2");
	   },11000);///12 
	   
	   setTimeout(function(){
		   document.getElementById('pipe6').classList.add("basinflow3");
	   },12000);///14 
	   
	///new addition   
	setTimeout(function(){
		document.getElementById('upipe1').classList.remove("uflow1");
		document.getElementById('upipe2').classList.remove("uflow2");
		document.getElementById('upipe3').classList.remove("uflow3");
		document.getElementById('upipe4').classList.remove("uflow4");
		document.getElementById('upipe5').classList.remove("uflow5");	
		
		document.getElementById('pipe').classList.remove("tank1flow");
		document.getElementById('level1').classList.remove("tankfill");
		document.getElementById('pipe2').classList.remove("smallflow");
		document.getElementById('pipe3').classList.remove("tank2flow");
		document.getElementById('level2').classList.remove("tank2fill");
		document.getElementById('pipe4').classList.remove("basinflow1");
		document.getElementById('pipe5').classList.remove("basinflow2");
		document.getElementById('pipe6').classList.remove("basinflow3");
		
		document.getElementById('pumpoff').style.display="block";
		document.getElementById('pumpon').style.display="none";
		
		document.getElementById('r1').src = "./images/run.png";
		document.getElementById('r1').style.display="none";
		
		document.getElementById('r2').src = "./images/run.png";
	    document.getElementById('r2').style.display="none";
		
		if(document.getElementById('controller').src.match("./images/config-11.png")){
	
///FOR TANK-1 LEVEL RESPONSE	
		document.getElementById('ov').readOnly=false;
		document.getElementById('ts').readOnly=false;
		document.getElementById('waterLevel1').readOnly=false;
		
///FOR TANK-1 LEVEL TRACKING
		document.getElementById('ovt').readOnly=false;
		document.getElementById('tst').readOnly=false;
		document.getElementById('ref1').readOnly=false;
		document.getElementById('reft1').readOnly=false;
		document.getElementById('ref2').readOnly=false;
		document.getElementById('reft2').readOnly=false;
		document.getElementById('ref3').readOnly=false;
		document.getElementById('reft3').readOnly=false;
		document.getElementById('respT1').readOnly=false;	
		}
else if(document.getElementById('controller').src.match("./images/config-22.png")){
         
		 ///FOR TANK-2 LEVEL RESPONSE	
		document.getElementById('ov2').readOnly=false;
		document.getElementById('ts2').readOnly=false;
		document.getElementById('waterLevel2').readOnly=false;
		
///FOR TANK-2 LEVEL TRACKING
		document.getElementById('ovt2').readOnly=false;
		document.getElementById('tst2').readOnly=false;
		document.getElementById('refs1').readOnly=false;
		document.getElementById('refts1').readOnly=false;
		document.getElementById('refs2').readOnly=false;
		document.getElementById('refts2').readOnly=false;
		document.getElementById('refs3').readOnly=false;
		document.getElementById('refts3').readOnly=false;
		document.getElementById('respT2').readOnly=false;
			}
		
	   },40000); ///15   
	   
	  
}
///NEWLY ADDED CODE FOR TRACKING TANK-1 LEVEL
function flowTrack1(){
	
	document.getElementById('pumpoff').style.display="none";
	document.getElementById('pumpon').style.display="block";
	
	var reft1 = Number(document.getElementById('reft1').value);
	var reft2 = Number(document.getElementById('reft2').value);
	var reft3 = Number(document.getElementById('reft3').value);
	
	var Tfactor = math.divide(4,10);///in simulation desired tracking time of a water level 10 sec = in css class animation duration 3 sec verified with observation on screen
	
	var Tlimit1 = math.multiply(reft1,Tfactor);
	var Tlimit2 = math.multiply(reft2,Tfactor);
	var Tlimit3 = math.multiply(reft3,Tfactor);
	
	uflow();
	
	setTimeout(function(){
	document.getElementById('pipe').classList.add("tank1flow");
	 },4000);
	
	
	setTimeout(function(){
		   document.getElementById('level1').classList.add("tank1fill1");
		   document.getElementById('level1').style.animationDuration = Tlimit1+'s';
	   },6000);///6
	   
	  setTimeout(function(){
		   document.getElementById('level1').classList.add("tank1fill2");
		   document.getElementById('level1').style.animationDuration = Tlimit2+'s';
	   },9000);///6 
	   
	  setTimeout(function(){
		   document.getElementById('level1').classList.add("tank1fill3");
		   document.getElementById('level1').style.animationDuration = Tlimit3+'s';
	   },11000);///6 
	   
	   
	   
	   
	   setTimeout(function(){
		   document.getElementById('pipe2').classList.add("smallflow");
	   },6000);///6
	   setTimeout(function(){
		   document.getElementById('pipe3').classList.add("tank2flow");
	   },8000);///8
	   
	
	setTimeout(function(){
		   document.getElementById('level2').classList.add("tank2fill");
	   },10000);///10
	   
	   setTimeout(function(){
		   document.getElementById('pipe4').classList.add("basinflow1");
	   },10000); ///10
	   
	   setTimeout(function(){
		   document.getElementById('pipe5').classList.add("basinflow2");
	   },11000);///12 
	   
	   setTimeout(function(){
		   document.getElementById('pipe6').classList.add("basinflow3");
	   },12000);///14 
	   
	///new addition   
	setTimeout(function(){
		document.getElementById('upipe1').classList.remove("uflow1");
		document.getElementById('upipe2').classList.remove("uflow2");
		document.getElementById('upipe3').classList.remove("uflow3");
		document.getElementById('upipe4').classList.remove("uflow4");
		document.getElementById('upipe5').classList.remove("uflow5");	
		
		document.getElementById('pipe').classList.remove("tank1flow");
		
		document.getElementById('level1').classList.remove("tank1fill1");
		document.getElementById('level1').classList.remove("tank1fill2");
		document.getElementById('level1').classList.remove("tank1fill3");
		
		document.getElementById('pipe2').classList.remove("smallflow");
		document.getElementById('pipe3').classList.remove("tank2flow");
		document.getElementById('level2').classList.remove("tank2fill");
		document.getElementById('pipe4').classList.remove("basinflow1");
		document.getElementById('pipe5').classList.remove("basinflow2");
		document.getElementById('pipe6').classList.remove("basinflow3");
		
		document.getElementById('pumpoff').style.display="block";
		document.getElementById('pumpon').style.display="none";
		
		document.getElementById('r1').src = "./images/run.png";
		document.getElementById('r1').style.display="none";
		
		document.getElementById('r2').src = "./images/run.png";
	    document.getElementById('r2').style.display="none";
		
		if(document.getElementById('controller').src.match("./images/config-11.png")){
	
///FOR TANK-1 LEVEL RESPONSE	
		document.getElementById('ov').readOnly=false;
		document.getElementById('ts').readOnly=false;
		document.getElementById('waterLevel1').readOnly=false;
		
///FOR TANK-1 LEVEL TRACKING
		document.getElementById('ovt').readOnly=false;
		document.getElementById('tst').readOnly=false;
		document.getElementById('ref1').readOnly=false;
		document.getElementById('reft1').readOnly=false;
		document.getElementById('ref2').readOnly=false;
		document.getElementById('reft2').readOnly=false;
		document.getElementById('ref3').readOnly=false;
		document.getElementById('reft3').readOnly=false;
		document.getElementById('respT1').readOnly=false;
			
		}
else if(document.getElementById('controller').src.match("./images/config-22.png")){
         
		 ///FOR TANK-2 LEVEL RESPONSE	
		document.getElementById('ov2').readOnly=false;
		document.getElementById('ts2').readOnly=false;
		document.getElementById('waterLevel2').readOnly=false;
		
///FOR TANK-2 LEVEL TRACKING
		document.getElementById('ovt2').readOnly=false;
		document.getElementById('tst2').readOnly=false;
		document.getElementById('refs1').readOnly=false;
		document.getElementById('refts1').readOnly=false;
		document.getElementById('refs2').readOnly=false;
		document.getElementById('refts2').readOnly=false;
		document.getElementById('refs3').readOnly=false;
		document.getElementById('refts3').readOnly=false;
		document.getElementById('respT2').readOnly=false;
			}
		
	   },40000); ///15   
	   
	  
}

///NEWLY ADDED CODE FOR TRACKING TANK-2 LEVEL
function flowTrack2(){
	
	document.getElementById('pumpoff').style.display="none";
	document.getElementById('pumpon').style.display="block";
	
	var refts1 = Number(document.getElementById('refts1').value);
	var refts2 = Number(document.getElementById('refts2').value);
	var refts3 = Number(document.getElementById('refts3').value);
	
	var Tfactor2 = math.divide(4,10);///in simulation desired tracking time of a water level 10 sec = in css class animation duration 3 sec verified with observation on screen
	
	var Tlimits1 = math.multiply(refts1,Tfactor2);
	var Tlimits2 = math.multiply(refts2,Tfactor2);
	var Tlimits3 = math.multiply(refts3,Tfactor2);
	
	uflow();
	
	setTimeout(function(){
	document.getElementById('pipe').classList.add("tank1flow");
	 },4000);
	
	
	setTimeout(function(){
		   document.getElementById('level1').classList.add("tank2fill12");
	   },6000);///6
	   
	  setTimeout(function(){
		   document.getElementById('pipe2').classList.add("smallflow");
	   },6000);///6
	   setTimeout(function(){
		   document.getElementById('pipe3').classList.add("tank2flow");
	   },8000);///8
	   
	
	setTimeout(function(){
		   document.getElementById('level2').classList.add("tank2fill1");
		   document.getElementById('level2').style.animationDuration = Tlimits1+'s';
		   //document.getElementById('level1').classList.add("tank2fill12");
	   },10000);///6
	   
	  setTimeout(function(){
		   document.getElementById('level2').classList.add("tank2fill2");
		   document.getElementById('level2').style.animationDuration = Tlimits2+'s';
		   document.getElementById('level1').classList.add("tank2fill22");
	   },13000);///6 
	   
	  setTimeout(function(){
		   document.getElementById('level2').classList.add("tank2fill3");
		   document.getElementById('level2').style.animationDuration = Tlimits3+'s';
		   document.getElementById('level1').classList.add("tank2fill32");
	   },15000);///6
	   
	   setTimeout(function(){
		   document.getElementById('pipe4').classList.add("basinflow1");
	   },10000); ///10
	   
	   setTimeout(function(){
		   document.getElementById('pipe5').classList.add("basinflow2");
	   },11000);///12 
	   
	   setTimeout(function(){
		   document.getElementById('pipe6').classList.add("basinflow3");
	   },12000);///14 
	   
	///new addition   
	setTimeout(function(){
		document.getElementById('upipe1').classList.remove("uflow1");
		document.getElementById('upipe2').classList.remove("uflow2");
		document.getElementById('upipe3').classList.remove("uflow3");
		document.getElementById('upipe4').classList.remove("uflow4");
		document.getElementById('upipe5').classList.remove("uflow5");	
		
		document.getElementById('pipe').classList.remove("tank1flow");
		
		document.getElementById('level1').classList.remove("tank2fill12");
		
		
		document.getElementById('pipe2').classList.remove("smallflow");
		document.getElementById('pipe3').classList.remove("tank2flow");
		
		
		document.getElementById('level2').classList.remove("tank2fill1");
		document.getElementById('level2').classList.remove("tank2fill2");
		document.getElementById('level2').classList.remove("tank2fill3");
		
		
		document.getElementById('level1').classList.remove("tank2fill22");
		document.getElementById('level1').classList.remove("tank2fill32");
		
		
		document.getElementById('pipe4').classList.remove("basinflow1");
		document.getElementById('pipe5').classList.remove("basinflow2");
		document.getElementById('pipe6').classList.remove("basinflow3");
		
		document.getElementById('pumpoff').style.display="block";
		document.getElementById('pumpon').style.display="none";
		
		document.getElementById('r1').src = "./images/run.png";
		document.getElementById('r1').style.display="none";
		
		document.getElementById('r2').src = "./images/run.png";
	    document.getElementById('r2').style.display="none";
		
		if(document.getElementById('controller').src.match("./images/config-11.png")){
	
///FOR TANK-1 LEVEL RESPONSE	
		document.getElementById('ov').readOnly=false;
		document.getElementById('ts').readOnly=false;
		document.getElementById('waterLevel1').readOnly=false;
		
///FOR TANK-1 LEVEL TRACKING
		document.getElementById('ovt').readOnly=false;
		document.getElementById('tst').readOnly=false;
		document.getElementById('ref1').readOnly=false;
		document.getElementById('reft1').readOnly=false;
		document.getElementById('ref2').readOnly=false;
		document.getElementById('reft2').readOnly=false;
		document.getElementById('ref3').readOnly=false;
		document.getElementById('reft3').readOnly=false;
		document.getElementById('respT1').readOnly=false;	
		}
else if(document.getElementById('controller').src.match("./images/config-22.png")){
         
		 ///FOR TANK-2 LEVEL RESPONSE	
		document.getElementById('ov2').readOnly=false;
		document.getElementById('ts2').readOnly=false;
		document.getElementById('waterLevel2').readOnly=false;
		
///FOR TANK-2 LEVEL TRACKING
		document.getElementById('ovt2').readOnly=false;
		document.getElementById('tst2').readOnly=false;
		document.getElementById('refs1').readOnly=false;
		document.getElementById('refts1').readOnly=false;
		document.getElementById('refs2').readOnly=false;
		document.getElementById('refts2').readOnly=false;
		document.getElementById('refs3').readOnly=false;
		document.getElementById('refts3').readOnly=false;
		document.getElementById('respT2').readOnly=false;
			}
		
	   },40000); ///15   
	   
	  
}

/////////////////////////////////////////////////////config-1 simulation design//////////////////////////////
var root = document.documentElement;
var root2 = document.documentElement;
function Tank1_Level(){
	
	var yip = new Array();
    var yop = new Array();
	
	var dataPoints=[];
	var dataOPPoints=[];

	var timeTank1 = document.getElementById('respT1').value;
	
	/////////////////////////Tank-1 parameters///////////////////////
	var At_1 = parseFloat(15.5179);//tank1 inner cross sectional area
	var Kp = parseFloat(3.30);//pump constant
	var A_01= parseFloat(0.1781);//tank1 outlet orifice cross sectional area	
	var g = 981;//gravitational const.
	var L_10= document.getElementById('waterLevel1').value;//10;//equilibrium level of tank1;	
	var Vp_ff = parseFloat(parseFloat(2.39)* parseFloat(Math.sqrt(math.number(L_10))));//feedforward gain k_ff =Ao1 * sqrt( 2 * g ) / Kp; = 2.39,root(L_10)=root(10)
	
	//////////////////////////Tank-2 parameters////////////////////////
	var A_02 = parseFloat(0.1781);//tank2 outlet orifice cross sectional area
	var L_20= 8;//equilibrium level of tank2;
	var At_2 = parseFloat(15.5179);//tank2 inner cross sectional area
	
	//////////////////////Tank 1 level control with PI+FF/////////////
	var ov = document.getElementById("ov").value;
	var ts = document.getElementById("ts").value;
	
	var A = parseFloat(Math.log(parseFloat(ov/100)));
	var A2 = parseFloat(Math.pow(A,2));
	
	var zeta = parseFloat(Math.sqrt(parseFloat(A2/(parseFloat(parseFloat(Math.pow(Math.PI,2))+ A2)))));
	
	var wn = parseFloat(4/(parseFloat(zeta*ts)));
	var wn2 = parseFloat(Math.pow(wn,2));
	
	var Ki_1 = parseFloat(parseFloat(wn2*At_1)/Kp);
	
	var B = parseFloat(parseFloat(A_01 / At_1)* parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_10)))));
	var zwn = parseFloat(2* zeta*wn);
	
	var Kp_1 = parseFloat(parseFloat(zwn - B)* parseFloat(At_1/Kp));
	
	///25 cm = 4.2 v, 1 cm = 4.2/25 v, 10 cm = (4.2/25)*10= 1.68v
	var voltlevel = parseFloat(parseFloat(4.15/25)*L_10);///cm to v for tank-1
	var  const1 = parseFloat(voltlevel*parseFloat((parseFloat(Kp_1 + (Vp_ff))/Ki_1)/25));
	
	for(var t=0;t<=timeTank1;t++){
	//var y1 =  parseFloat(const1*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	
	var y1=parseFloat(const1*(parseFloat(wn/parseFloat(Math.sqrt(1- parseFloat(Math.pow(zeta,2)))))*parseFloat(Math.exp(-parseFloat(zeta*wn*t)))*parseFloat(Math.sin(parseFloat(wn*Math.sqrt(parseFloat(1-parseFloat(Math.pow(zeta,2))))*t)))));
	
	var y2 =  parseFloat(voltlevel*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	var y = parseFloat(y1+y2);///output of tank-1 level in v
	yop[t] = parseFloat(y*parseFloat(25/4.15));
	yip[t] = math.number(L_10);///document.getElementById('waterLevel1').value;
	console.log("tank1 level="+yop[t]);
	
	/* dataIPPoints.push({x:(t), y:(yip[t])});///input reference of L_10 cm
	dataOPPoints.push({x:(t), y:(yop[t])});///level output in cm */
	
	dataPoints.push({x:(t), y:(yip[t])});
	dataOPPoints.push({x:(t), y:(yop[t])});
	///////////////Tank-2 openloop control//////////////////////
	
	/*var C = parseFloat(parseFloat(A_01/At_2)* parseFloat(Math.sqrt(parseFloat(g/(2*L_10)))));
	var D = parseFloat(parseFloat(A_02/At_2)* parseFloat(Math.sqrt(parseFloat(g/(2*L_20)))));
	var ytank2 = (parseFloat(parseFloat(C*y)/D)*(1- Math.pow(2.718281,(- parseFloat(D*t)))));
	
	console.log("tank2 level="+ytank2);*/
	var TL2 = math.multiply(0.5,L_10);
 
  root.style.setProperty('--change', (yop[t]*2) + "%"); ///level change with time acc to above model sensor design => 2% for 1cm(virtual sensor)
  
  root2.style.setProperty('--change2', (TL2*2) + "%"); ///level change for tank 2 which is having no control now ,so acc to lab test the level goes upto 5.3 cm approx for tank-1 level 10 cm
  
 
	

}

document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer').style.display  = "block"; 
var leveldiff = math.subtract(timeTank1,100);
var animDuration = math.subtract(38000,math.multiply(10,leveldiff));	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: animDuration, 
		          
	  title:{
      text: "Tank-1 Level Response (cm vs. sec) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#B2F9FA",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Level (cm)",
			
			
			//maximum:0.03,
        },
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		],
	data: [
      {
		showInLegend: true,
		legendText: "Output water level",
        type: "spline",
		color:"black",
        dataPoints:dataOPPoints
		
       },
       {
		showInLegend: true,
		legendText: "Desired water level",
        type: "spline",
		color:"red",
        dataPoints:dataPoints
		
       },
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	


}
///////////////////////////////////////////////////TANK 1 LEVELS TRACKING NEW ADDITION ON 10/1/2024//////////////////////////////////////
var rootTrk1 = document.documentElement;
var rootTrk2 = document.documentElement;
var rootTrk3 = document.documentElement;



function Tank1_Level_Track(){
	
	var yip = new Array();
    var yop = new Array();
	
	var dataPoints=[];
	var dataOPPoints=[];

	var timeTank1 = document.getElementById('respT1').value;
	
	/////////////////////////Tank-1 parameters///////////////////////
	var At_1 = parseFloat(15.5179);//tank1 inner cross sectional area
	var Kp = parseFloat(3.30);//pump constant
	var A_01= parseFloat(0.1781);//tank1 outlet orifice cross sectional area	
	var g = 981;//gravitational const.
	
	var L_10;//10;//equilibrium level of tank1;	
	
	//feedforward gain k_ff =Ao1 * sqrt( 2 * g ) / Kp; = 2.39,root(L_10)=root(10)
	
	//////////////////////////Tank-2 parameters////////////////////////
	var A_02 = parseFloat(0.1781);//tank2 outlet orifice cross sectional area
	var L_20= 8;//equilibrium level of tank2;
	var At_2 = parseFloat(15.5179);//tank2 inner cross sectional area
	
	var time1 = $('#reft1').val();
	var time2 = $('#reft2').val();
	var time3 = $('#reft3').val();
	
	
	
	if(math.add(time1,time2,time3)>timeTank1){
		alert('Keep total level tracking time less than'+ timeTank1 +'sec');
	}
	if(math.add(time1,time2,time3)<=timeTank1){
		
	var level1 = $('#ref1').val();
	var level2 = $('#ref2').val();
	var level3 = $('#ref3').val();
	
	//////////////////////Tank 1 level control with PI+FF/////////////
	var ov = document.getElementById("ovt").value;
	var ts = document.getElementById("tst").value;
	
	///NEW ADD
	//var WL1,WL2,WL3;///three successive water levels determined by users

	
	for(var t=0;t<=timeTank1;t++){
		
	for(var t=0;t<=time1;t++){
		
		L_10 = $('#ref1').val();
		
	var Vp_ff = parseFloat(parseFloat(2.39)* parseFloat(Math.sqrt(L_10)));
	var A = parseFloat(Math.log(parseFloat(ov/100)));
	var A2 = parseFloat(Math.pow(A,2));
	
	var zeta = parseFloat(Math.sqrt(parseFloat(A2/(parseFloat(parseFloat(Math.pow(Math.PI,2))+ A2)))));
	
	var wn = parseFloat(4/(parseFloat(zeta*ts)));
	var wn2 = parseFloat(Math.pow(wn,2));
	
	var Ki_1 = parseFloat(parseFloat(wn2*At_1)/Kp);
	
	var B = parseFloat(parseFloat(A_01 / At_1)* parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_10)))));
	var zwn = parseFloat(2* zeta*wn);
	
	var Kp_1 = parseFloat(parseFloat(zwn - B)* parseFloat(At_1/Kp));
	
	///25 cm = 4.2 v, 1 cm = 4.2/25 v, 10 cm = (4.2/25)*10= 1.68v
	var voltlevel = parseFloat(parseFloat(4.15/25)*L_10);///cm to v for tank-1
	var  const1 = parseFloat(voltlevel*parseFloat((parseFloat(Kp_1 + (Vp_ff))/Ki_1)/25));
	
	
	//var y1 =  parseFloat(const1*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	
	var y1=parseFloat(const1*(parseFloat(wn/parseFloat(Math.sqrt(1- parseFloat(Math.pow(zeta,2)))))*parseFloat(Math.exp(-parseFloat(zeta*wn*t)))*parseFloat(Math.sin(parseFloat(wn*Math.sqrt(parseFloat(1-parseFloat(Math.pow(zeta,2))))*t)))));
	
	var y2 =  parseFloat(voltlevel*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	var y = parseFloat(y1+y2);///output of tank-1 level in v
	yop[t] = parseFloat(y*parseFloat(25/4.15));
	yip[t] = math.number(L_10);///document.getElementById('waterLevel1').value;
	//console.log("tank1 level="+yop[t]);
	
	/* dataIPPoints.push({x:(t), y:(yip[t])});///input reference of L_10 cm
	dataOPPoints.push({x:(t), y:(yop[t])});///level output in cm */
	
	dataPoints.push({x:(t), y:(yip[t])});
	dataOPPoints.push({x:(t), y:(yop[t])});
	///////////////Tank-2 openloop control//////////////////////
	
	/*var C = parseFloat(parseFloat(A_01/At_2)* parseFloat(Math.sqrt(parseFloat(g/(2*L_10)))));
	var D = parseFloat(parseFloat(A_02/At_2)* parseFloat(Math.sqrt(parseFloat(g/(2*L_20)))));
	var ytank2 = (parseFloat(parseFloat(C*y)/D)*(1- Math.pow(2.718281,(- parseFloat(D*t)))));
	
	console.log("tank2 level="+ytank2);*/
	//WL1 = level1;
	var TL2 = math.multiply(0.5,L_10);
 rootTrk1.style.setProperty('--changeTrk1', (yop[t]*2) + "%"); ///level change with time acc to above model sensor design => 2% for 1cm(virtual sensor)
  
  root2.style.setProperty('--change2', (TL2*2) + "%"); ///level change for tank 2 which is having no control now ,so acc to lab test the level goes upto 6 approx
 
  
 }

for(var t= math.number($('#reft1').val());t<= math.add(time1,time2);t++){
		
		L_10 = $('#ref2').val();
		
	var Vp_ff = parseFloat(parseFloat(2.39)* parseFloat(Math.sqrt(L_10)));
	var A = parseFloat(Math.log(parseFloat(ov/100)));
	var A2 = parseFloat(Math.pow(A,2));
	
	var zeta = parseFloat(Math.sqrt(parseFloat(A2/(parseFloat(parseFloat(Math.pow(Math.PI,2))+ A2)))));
	
	var wn = parseFloat(4/(parseFloat(zeta*ts)));
	var wn2 = parseFloat(Math.pow(wn,2));
	
	var Ki_1 = parseFloat(parseFloat(wn2*At_1)/Kp);
	
	var B = parseFloat(parseFloat(A_01 / At_1)* parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_10)))));
	var zwn = parseFloat(2* zeta*wn);
	
	var Kp_1 = parseFloat(parseFloat(zwn - B)* parseFloat(At_1/Kp));
	
	///25 cm = 4.2 v, 1 cm = 4.2/25 v, 10 cm = (4.2/25)*10= 1.68v
	var voltlevel = parseFloat(parseFloat(4.15/25)*L_10);///cm to v for tank-1
	var  const1 = parseFloat(voltlevel*parseFloat((parseFloat(Kp_1 + (Vp_ff))/Ki_1)/25));
	
	
	//var y1 =  parseFloat(const1*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	
	var y1=parseFloat(const1*(parseFloat(wn/parseFloat(Math.sqrt(1- parseFloat(Math.pow(zeta,2)))))*parseFloat(Math.exp(-parseFloat(zeta*wn*t)))*parseFloat(Math.sin(parseFloat(wn*Math.sqrt(parseFloat(1-parseFloat(Math.pow(zeta,2))))*t)))));
	
	var y2 =  parseFloat(voltlevel*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	var y = parseFloat(y1+y2);///output of tank-1 level in v
	yop[t] = parseFloat(y*parseFloat(25/4.15));
	yip[t] = math.number(L_10);///document.getElementById('waterLevel1').value;
	//console.log("tank1 level="+yop[t]);
	
	/* dataIPPoints.push({x:(t), y:(yip[t])});///input reference of L_10 cm
	dataOPPoints.push({x:(t), y:(yop[t])});///level output in cm */
	
	dataPoints.push({x:(t), y:(yip[t])});
	dataOPPoints.push({x:(t), y:(yop[t])});
	///////////////Tank-2 openloop control//////////////////////
	
	/*var C = parseFloat(parseFloat(A_01/At_2)* parseFloat(Math.sqrt(parseFloat(g/(2*L_10)))));
	var D = parseFloat(parseFloat(A_02/At_2)* parseFloat(Math.sqrt(parseFloat(g/(2*L_20)))));
	var ytank2 = (parseFloat(parseFloat(C*y)/D)*(1- Math.pow(2.718281,(- parseFloat(D*t)))));
	
	console.log("tank2 level="+ytank2);*/
	//WL2 = level2;
	var TL2 = math.multiply(0.5,L_10);
 rootTrk2.style.setProperty('--changeTrk2', (yop[t]*2) + "%"); ///level change with time acc to above model sensor design => 2% for 1cm(virtual sensor)
  
  root2.style.setProperty('--change2', (TL2*2) + "%"); ///level change for tank 2 which is having no control now ,so acc to lab test the level goes upto 6 approx
 
  
 }

for(var t= math.add(time1,time2);t<=timeTank1;t++){
		
		L_10 = $('#ref3').val();
		
	var Vp_ff = parseFloat(parseFloat(2.39)* parseFloat(Math.sqrt(L_10)));	
	var A = parseFloat(Math.log(parseFloat(ov/100)));
	var A2 = parseFloat(Math.pow(A,2));
	
	var zeta = parseFloat(Math.sqrt(parseFloat(A2/(parseFloat(parseFloat(Math.pow(Math.PI,2))+ A2)))));
	
	var wn = parseFloat(4/(parseFloat(zeta*ts)));
	var wn2 = parseFloat(Math.pow(wn,2));
	
	var Ki_1 = parseFloat(parseFloat(wn2*At_1)/Kp);
	
	var B = parseFloat(parseFloat(A_01 / At_1)* parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_10)))));
	var zwn = parseFloat(2* zeta*wn);
	
	var Kp_1 = parseFloat(parseFloat(zwn - B)* parseFloat(At_1/Kp));
	
	///25 cm = 4.2 v, 1 cm = 4.2/25 v, 10 cm = (4.2/25)*10= 1.68v
	var voltlevel = parseFloat(parseFloat(4.15/25)*L_10);///cm to v for tank-1
	var  const1 = parseFloat(voltlevel*parseFloat((parseFloat(Kp_1 + (Vp_ff))/Ki_1)/25));
	
	
	//var y1 =  parseFloat(const1*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	
	var y1=parseFloat(const1*(parseFloat(wn/parseFloat(Math.sqrt(1- parseFloat(Math.pow(zeta,2)))))*parseFloat(Math.exp(-parseFloat(zeta*wn*t)))*parseFloat(Math.sin(parseFloat(wn*Math.sqrt(parseFloat(1-parseFloat(Math.pow(zeta,2))))*t)))));
	
	var y2 =  parseFloat(voltlevel*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	var y = parseFloat(y1+y2);///output of tank-1 level in v
	yop[t] = parseFloat(y*parseFloat(25/4.15));
	yip[t] = math.number(L_10);///document.getElementById('waterLevel1').value;
	//console.log("tank1 level="+yop[t]);
	
	/* dataIPPoints.push({x:(t), y:(yip[t])});///input reference of L_10 cm
	dataOPPoints.push({x:(t), y:(yop[t])});///level output in cm */
	
	dataPoints.push({x:(t), y:(yip[t])});
	dataOPPoints.push({x:(t), y:(yop[t])});
	///////////////Tank-2 openloop control//////////////////////
	
	/*var C = parseFloat(parseFloat(A_01/At_2)* parseFloat(Math.sqrt(parseFloat(g/(2*L_10)))));
	var D = parseFloat(parseFloat(A_02/At_2)* parseFloat(Math.sqrt(parseFloat(g/(2*L_20)))));
	var ytank2 = (parseFloat(parseFloat(C*y)/D)*(1- Math.pow(2.718281,(- parseFloat(D*t)))));
	
	console.log("tank2 level="+ytank2);*/
	//WL3 =level3;
	var TL2 = math.multiply(0.5,L_10);
 rootTrk3.style.setProperty('--changeTrk3', (yop[t]*2) + "%"); ///level change with time acc to above model sensor design => 2% for 1cm(virtual sensor)
  
  root2.style.setProperty('--change2', (TL2*2) + "%"); ///level change for tank 2 which is having no control now ,so acc to lab test the level goes upto 6 approx
 
  
 }

}
/* setTimeout(function(){
		root.style.setProperty('--change', (WL1*2) + "%");
			},2000);
			setTimeout(function(){
		root.style.setProperty('--change', (WL2*2) + "%");
			},4000);
			setTimeout(function(){
		root.style.setProperty('--change', (WL3*2) + "%");
			},6000); */

	}
document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer').style.display  = "block"; 
var leveldiff = math.subtract(timeTank1,100);
var animDuration = math.subtract(38000,math.multiply(10,leveldiff));	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: animDuration, 
		  zoomEnabled: true,
	  title:{
      text: "Tank-1 Level Tracking (cm vs. sec) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#B2F9FA",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Level (cm)",
			
			
			//maximum:0.03,
        },
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		],
	data: [
      {
		showInLegend: true,
		legendText: "Output water level",
        type: "spline",
		color:"black",
        dataPoints:dataOPPoints
		
       },
       {
		showInLegend: true,
		legendText: "Desired water level",
        type: "spline",
		color:"red",
        dataPoints:dataPoints
		
       },
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	

}





//////////////////////Tank 2 level control with PI+FF/////////////
function Tank2_Level(){
	
	var yip = new Array();
    var yop = new Array();	
	var dataIPPoints=[];
	var dataOPPoints=[];

	var timeTank2 = document.getElementById('respT2').value;
	
	//////////////////////////Tank-2 parameters////////////////////////
	var A_02 = parseFloat(0.1781);//tank2 outlet orifice cross sectional area
	var L_20= document.getElementById('waterLevel2').value;//8;//equilibrium level of tank2;
	var At_2 = parseFloat(15.5179);//tank2 inner cross sectional area
	var L_ff1 = (1*L_20);//k_ff2 * L_20; acc to formula level feedforward gain (cm/cm)Kff_2 = Ao2^2 / Ao1^2; % = 1 
	
	//////////////////////////Tank-1 parameters////////////////////////
	var L_10= L_20;//acc to formula in config-2 L_10 = ( Ao2 / Ao1 )^2 * L20;  == L20
	var At_1 = parseFloat(15.5179);//tank1 inner cross sectional area
	var Kp = parseFloat(3.30);//pump constant
	var A_01= parseFloat(0.1781);//tank1 outlet orifice cross sectional area	
	var g = 981;//gravitational const.		
	var Vp_ff = parseFloat(parseFloat(2.39)* parseFloat(Math.sqrt(L_10)));//feedforward gain k_ff1 =Ao1 * sqrt( 2 * g ) / Kp; = 2.39,root(L_10)=root(8)
	
	//////////////////////Tank 1 level control acc to PI+FF control of Tank-2 and simulation block diagram reduction i.e input to tank-1 now is L_20 basically or Lr_1 or L_10 = K_ff2 * L_r2/////////////
	var ov = document.getElementById("ov").value;
	var ts = document.getElementById("ts").value;
	
	var A = parseFloat(Math.log(parseFloat(ov/100)));
	var A2 = parseFloat(Math.pow(A,2));
	
	var zeta = parseFloat(Math.sqrt(parseFloat(A2/(parseFloat(parseFloat(Math.pow(Math.PI,2))+ A2)))));
	
	var wn = parseFloat(4/(parseFloat(zeta*ts)));
	var wn2 = parseFloat(Math.pow(wn,2));
	
	var Ki_1 = parseFloat(parseFloat(wn2*At_1)/Kp);
	
	var B = parseFloat(parseFloat(A_01 / At_1)* parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_10)))));
	var zwn = parseFloat(2* zeta*wn);
	
	var Kp_1 = parseFloat(parseFloat(zwn - B)* parseFloat(At_1/Kp));
	
	///25 cm = 4.2 v, 1 cm = 4.2/25 v, L_10 cm = (4.2/25)*L_10v
	var voltlevel = parseFloat(parseFloat(4.2/25)*L_10);///cm to v for tank-1
	
	var  const1 = parseFloat(voltlevel* parseFloat(parseFloat(Kp_1 + Vp_ff)/Ki_1));
	
	for(var t=0;t<=timeTank2;t++){
	//var y1 =  parseFloat(const1*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	
	var y1=parseFloat(const1*(parseFloat(wn/parseFloat(Math.sqrt(1- parseFloat(Math.pow(zeta,2)))))*parseFloat(Math.exp(-parseFloat(zeta*wn*t)))*parseFloat(Math.sin(parseFloat(wn*Math.sqrt(parseFloat(1-parseFloat(Math.pow(zeta,2))))*t)))));
	
	var y2 =  parseFloat(voltlevel*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	var y = parseFloat(y1+y2);///output of tank-1 level in v
	var yL = parseFloat(y*parseFloat(25/4.15));
	
	root.style.setProperty('--change', (yL*2) + "%"); ///level change with time acc to above model sensor design => 2% for 1cm(virtual sensor)
  
  
	
	//console.log("tank1 level="+yL);
	
	///////////////Tank-2 PI+FF control//////////////////////
	var ovT = document.getElementById("ov2").value;
	var tsT = document.getElementById("ts2").value;
	
	var AT = parseFloat(Math.log(parseFloat(ovT/100)));
	var A2T = parseFloat(Math.pow(AT,2));
	
	var zetaT =parseFloat(Math.sqrt(parseFloat(A2T/(parseFloat(parseFloat(Math.pow(3.14159,2))+ A2T)))));
	
	var wnT = parseFloat(4/(parseFloat(zetaT*tsT)));
	var wn2T = parseFloat(Math.pow(wnT,2));
	
	var kicoeff = parseFloat(parseFloat(A_01/At_2)*parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_10)))));
	
	var Ki_2 = parseFloat(wn2T/kicoeff);
	
	var zwnT = parseFloat(2* zetaT*wnT);
	var BT = parseFloat(parseFloat(A_02 / At_2)* parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_20)))));
	var kpcoeff = parseFloat(parseFloat(A_01/At_2)*parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_10)))));
	var Kp_2 =  parseFloat(parseFloat(zwnT-BT)/kpcoeff);
	
	///25 cm = 4.2 v, 1 cm = 4.2/25 v, L_20 cm = (4.2/25)*L_20 v
	var voltlevel2 = parseFloat(parseFloat(4.15/25)*L_20);///cm to v for tank-2
	
	var  const2 = parseFloat(voltlevel2* parseFloat((parseFloat(Kp_2 + 1)/Ki_2)/25));///kff2 =1
	
	//for(var t2=0;t2<=50;t2++){
	
	var y1T = parseFloat(const2*(parseFloat(wnT/parseFloat(Math.sqrt(1- parseFloat(Math.pow(zetaT,2)))))*parseFloat(Math.exp(-parseFloat(zetaT*wnT*t)))*parseFloat(Math.sin(parseFloat(wnT*Math.sqrt(parseFloat(1-parseFloat(Math.pow(zetaT,2))))*t)))));
	
	//var y1T = parseFloat(const2*(1-(parseFloat(parseFloat(Math.exp(-(parseFloat(zetaT*wnT*t))))/parseFloat(Math.sqrt(1-(parseFloat(Math.pow(zetaT,2))))))*Math.sin(parseFloat(Math.sqrt(parseFloat(1-parseFloat(Math.pow(zetaT,2))))*wnT*t)+parseFloat(Math.acos(zetaT))))));
	
	var y2T =  parseFloat(voltlevel2*(1-(parseFloat(parseFloat(Math.exp(-(parseFloat(zetaT*wnT*t))))/parseFloat(Math.sqrt(1-(parseFloat(Math.pow(zetaT,2))))))*Math.sin(parseFloat(Math.sqrt(parseFloat(1-parseFloat(Math.pow(zetaT,2))))*wnT*t)+parseFloat(Math.acos(zetaT))))));
	var yT = parseFloat(y1T+y2T);///output of tank-2 level is in volt
	yop[t] = parseFloat(yT *parseFloat(25/4.15));
	yip[t] = math.number(L_20);
	console.log("tank2 level="+yop[t]);
	
	dataIPPoints.push({x:(t), y:(yip[t])});///input reference of L_20 cm
	dataOPPoints.push({x:(t), y:(yop[t])});///level output in cm	
	
	root2.style.setProperty('--change2', (yop[t]*2) + "%"); ///level change for tank 2 
	
	
}


document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer').style.display  = "block"; 
var leveldiff = math.subtract(timeTank2,100);
var animDuration = math.subtract(38000,math.multiply(10,leveldiff));	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: animDuration, 
	  title:{
      text: "Tank-2 Level Response (cm vs. sec)"
	  
      },
	  
	  axisX:{
        interlacedColor: "#B2F9FA",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Level (cm)",
			
			//maximum:0.03,
        },
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		],
	data: [
      {
		showInLegend: true,
		legendText: "Output water level",
        type: "spline",
		color:"black",
        dataPoints:dataOPPoints
	
       },
       {
		showInLegend: true,
		legendText: "Desired water level",
        type: "spline",
		color:"red",
        dataPoints:dataIPPoints
	
       },
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});

}

///////////////////////////////////////TANK 2 LEVEL TRACK NEW ADDITION ON 10/1/2024////////////////////////////////////////////////////

var rootTrk4 = document.documentElement;
var rootTrk5 = document.documentElement;
var rootTrk6 = document.documentElement;

///to show tank1 level change 
var rootTrk7 = document.documentElement;
var rootTrk8 = document.documentElement;
var rootTrk9 = document.documentElement;

function Tank2_Level_Track(){
	
	var yip = new Array();
    var yop = new Array();	
	var dataIPPoints=[];
	var dataOPPoints=[];
	
	var timeTank2 = document.getElementById('respT2').value;

	var time1 = $('#refts1').val();
	var time2 = $('#refts2').val();
	var time3 = $('#refts3').val();
	
	if(math.add(time1,time2,time3)>timeTank2){
		alert('Keep total level tracking time less than'+ timeTank2 +'sec');
	}
	if(math.add(time1,time2,time3)<=timeTank2){
		
	
	var level1 = $('#refs1').val();
	var level2 = $('#refs2').val();
	var level3 = $('#refs3').val();	
	
	for(var t=0;t<=timeTank2;t++){
		
	for(var t=0;t<=time1;t++){
	//////////////////////////Tank-2 parameters////////////////////////
	var A_02 = parseFloat(0.1781);//tank2 outlet orifice cross sectional area
	var L_20=$('#refs1').val();//8;//equilibrium level of tank2;
	var At_2 = parseFloat(15.5179);//tank2 inner cross sectional area
	var L_ff1 = (1*L_20);//k_ff2 * L_20; acc to formula level feedforward gain (cm/cm)Kff_2 = Ao2^2 / Ao1^2; % = 1 
	
	//////////////////////////Tank-1 parameters////////////////////////
	var L_10= L_20;//acc to formula in config-2 L_10 = ( Ao2 / Ao1 )^2 * L20;  == L20
	var At_1 = parseFloat(15.5179);//tank1 inner cross sectional area
	var Kp = parseFloat(3.30);//pump constant
	var A_01= parseFloat(0.1781);//tank1 outlet orifice cross sectional area	
	var g = 981;//gravitational const.		
	var Vp_ff = parseFloat(parseFloat(2.39)* parseFloat(Math.sqrt(math.number(L_10))));//feedforward gain k_ff1 =Ao1 * sqrt( 2 * g ) / Kp; = 2.39,root(L_10)=root(8)
	
	//////////////////////Tank 1 level control acc to PI+FF control of Tank-2 and simulation block diagram reduction i.e input to tank-1 now is L_20 basically or Lr_1 or L_10 = K_ff2 * L_r2/////////////
	var ov = document.getElementById("ovt").value;
	var ts = document.getElementById("tst").value;
	
	var A = parseFloat(Math.log(parseFloat(ov/100)));
	var A2 = parseFloat(Math.pow(A,2));
	
	var zeta = parseFloat(Math.sqrt(parseFloat(A2/(parseFloat(parseFloat(Math.pow(Math.PI,2))+ A2)))));
	
	var wn = parseFloat(4/(parseFloat(zeta*ts)));
	var wn2 = parseFloat(Math.pow(wn,2));
	
	var Ki_1 = parseFloat(parseFloat(wn2*At_1)/Kp);
	
	var B = parseFloat(parseFloat(A_01 / At_1)* parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_10)))));
	var zwn = parseFloat(2* zeta*wn);
	
	var Kp_1 = parseFloat(parseFloat(zwn - B)* parseFloat(At_1/Kp));
	
	///25 cm = 4.2 v, 1 cm = 4.2/25 v, L_10 cm = (4.2/25)*L_10v
	var voltlevel = parseFloat(parseFloat(4.2/25)*L_10);///cm to v for tank-1
	
	var  const1 = parseFloat(voltlevel* parseFloat(parseFloat(Kp_1 + Vp_ff)/Ki_1));
	
	
	//var y1 =  parseFloat(const1*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	
	var y1=parseFloat(const1*(parseFloat(wn/parseFloat(Math.sqrt(1- parseFloat(Math.pow(zeta,2)))))*parseFloat(Math.exp(-parseFloat(zeta*wn*t)))*parseFloat(Math.sin(parseFloat(wn*Math.sqrt(parseFloat(1-parseFloat(Math.pow(zeta,2))))*t)))));
	
	var y2 =  parseFloat(voltlevel*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	var y = parseFloat(y1+y2);///output of tank-1 level in v
	var yL = parseFloat(y*parseFloat(25/4.15));
	
	///TANK-1 LEVEL  CHANGING due to tank-2 levels
	//root.style.setProperty('--change', (yL*2) + "%"); ///level change with time acc to above model sensor design => 2% for 1cm(virtual sensor)
   rootTrk7.style.setProperty('--changeTrk7', (yL*2) + "%");
  
	
	//console.log("tank1 level="+yL);
	
	///////////////Tank-2 PI+FF control//////////////////////
	var ovT = document.getElementById("ovt2").value;
	var tsT = document.getElementById("tst2").value;
	
	var AT = parseFloat(Math.log(parseFloat(ovT/100)));
	var A2T = parseFloat(Math.pow(AT,2));
	
	var zetaT =parseFloat(Math.sqrt(parseFloat(A2T/(parseFloat(parseFloat(Math.pow(3.14159,2))+ A2T)))));
	
	var wnT = parseFloat(4/(parseFloat(zetaT*tsT)));
	var wn2T = parseFloat(Math.pow(wnT,2));
	
	var kicoeff = parseFloat(parseFloat(A_01/At_2)*parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_10)))));
	
	var Ki_2 = parseFloat(wn2T/kicoeff);
	
	var zwnT = parseFloat(2* zetaT*wnT);
	var BT = parseFloat(parseFloat(A_02 / At_2)* parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_20)))));
	var kpcoeff = parseFloat(parseFloat(A_01/At_2)*parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_10)))));
	var Kp_2 =  parseFloat(parseFloat(zwnT-BT)/kpcoeff);
	
	///25 cm = 4.2 v, 1 cm = 4.2/25 v, L_20 cm = (4.2/25)*L_20 v
	var voltlevel2 = parseFloat(parseFloat(4.15/25)*L_20);///cm to v for tank-2
	
	var  const2 = parseFloat(voltlevel2* parseFloat((parseFloat(Kp_2 + 1)/Ki_2)/25));///kff2 =1
	
	//for(var t2=0;t2<=50;t2++){
	
	var y1T = parseFloat(const2*(parseFloat(wnT/parseFloat(Math.sqrt(1- parseFloat(Math.pow(zetaT,2)))))*parseFloat(Math.exp(-parseFloat(zetaT*wnT*t)))*parseFloat(Math.sin(parseFloat(wnT*Math.sqrt(parseFloat(1-parseFloat(Math.pow(zetaT,2))))*t)))));
	
	//var y1T = parseFloat(const2*(1-(parseFloat(parseFloat(Math.exp(-(parseFloat(zetaT*wnT*t))))/parseFloat(Math.sqrt(1-(parseFloat(Math.pow(zetaT,2))))))*Math.sin(parseFloat(Math.sqrt(parseFloat(1-parseFloat(Math.pow(zetaT,2))))*wnT*t)+parseFloat(Math.acos(zetaT))))));
	
	var y2T =  parseFloat(voltlevel2*(1-(parseFloat(parseFloat(Math.exp(-(parseFloat(zetaT*wnT*t))))/parseFloat(Math.sqrt(1-(parseFloat(Math.pow(zetaT,2))))))*Math.sin(parseFloat(Math.sqrt(parseFloat(1-parseFloat(Math.pow(zetaT,2))))*wnT*t)+parseFloat(Math.acos(zetaT))))));
	var yT = parseFloat(y1T+y2T);///output of tank-2 level is in volt
	yop[t] = parseFloat(yT *parseFloat(25/4.15));
	yip[t] = math.number(L_20);
	console.log("tank2 level="+yop[t]);
	
	dataIPPoints.push({x:(t), y:(yip[t])});///input reference of L_20 cm
	dataOPPoints.push({x:(t), y:(yop[t])});///level output in cm	
	
	rootTrk4.style.setProperty('--changeTrk4', (yop[t]*2) + "%"); ///level change for tank 2 
	
	
}
for(var t= math.number($('#refts1').val());t<= math.add(time1,time2);t++){
	//////////////////////////Tank-2 parameters////////////////////////
	var A_02 = parseFloat(0.1781);//tank2 outlet orifice cross sectional area
	var L_20=$('#refs2').val();//8;//equilibrium level of tank2;
	var At_2 = parseFloat(15.5179);//tank2 inner cross sectional area
	var L_ff1 = (1*L_20);//k_ff2 * L_20; acc to formula level feedforward gain (cm/cm)Kff_2 = Ao2^2 / Ao1^2; % = 1 
	
	//////////////////////////Tank-1 parameters////////////////////////
	var L_10= L_20;//acc to formula in config-2 L_10 = ( Ao2 / Ao1 )^2 * L20;  == L20
	var At_1 = parseFloat(15.5179);//tank1 inner cross sectional area
	var Kp = parseFloat(3.30);//pump constant
	var A_01= parseFloat(0.1781);//tank1 outlet orifice cross sectional area	
	var g = 981;//gravitational const.		
	var Vp_ff = parseFloat(parseFloat(2.39)* parseFloat(Math.sqrt(math.number(L_10))));//feedforward gain k_ff1 =Ao1 * sqrt( 2 * g ) / Kp; = 2.39,root(L_10)=root(8)
	
	//////////////////////Tank 1 level control acc to PI+FF control of Tank-2 and simulation block diagram reduction i.e input to tank-1 now is L_20 basically or Lr_1 or L_10 = K_ff2 * L_r2/////////////
	var ov = document.getElementById("ovt").value;
	var ts = document.getElementById("tst").value;
	
	var A = parseFloat(Math.log(parseFloat(ov/100)));
	var A2 = parseFloat(Math.pow(A,2));
	
	var zeta = parseFloat(Math.sqrt(parseFloat(A2/(parseFloat(parseFloat(Math.pow(Math.PI,2))+ A2)))));
	
	var wn = parseFloat(4/(parseFloat(zeta*ts)));
	var wn2 = parseFloat(Math.pow(wn,2));
	
	var Ki_1 = parseFloat(parseFloat(wn2*At_1)/Kp);
	
	var B = parseFloat(parseFloat(A_01 / At_1)* parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_10)))));
	var zwn = parseFloat(2* zeta*wn);
	
	var Kp_1 = parseFloat(parseFloat(zwn - B)* parseFloat(At_1/Kp));
	
	///25 cm = 4.2 v, 1 cm = 4.2/25 v, L_10 cm = (4.2/25)*L_10v
	var voltlevel = parseFloat(parseFloat(4.2/25)*L_10);///cm to v for tank-1
	
	var  const1 = parseFloat(voltlevel* parseFloat(parseFloat(Kp_1 + Vp_ff)/Ki_1));
	
	
	//var y1 =  parseFloat(const1*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	
	var y1=parseFloat(const1*(parseFloat(wn/parseFloat(Math.sqrt(1- parseFloat(Math.pow(zeta,2)))))*parseFloat(Math.exp(-parseFloat(zeta*wn*t)))*parseFloat(Math.sin(parseFloat(wn*Math.sqrt(parseFloat(1-parseFloat(Math.pow(zeta,2))))*t)))));
	
	var y2 =  parseFloat(voltlevel*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	var y = parseFloat(y1+y2);///output of tank-1 level in v
	var yL = parseFloat(y*parseFloat(25/4.15));
	
	///TANK-1 LEVEL CHANGING NOW 
	//root.style.setProperty('--change', (yL*2) + "%"); ///level change with time acc to above model sensor design => 2% for 1cm(virtual sensor)
  rootTrk8.style.setProperty('--changeTrk8', (yL*2) + "%");
  
	
	//console.log("tank1 level="+yL);
	
	///////////////Tank-2 PI+FF control//////////////////////
	var ovT = document.getElementById("ovt2").value;
	var tsT = document.getElementById("tst2").value;
	
	var AT = parseFloat(Math.log(parseFloat(ovT/100)));
	var A2T = parseFloat(Math.pow(AT,2));
	
	var zetaT =parseFloat(Math.sqrt(parseFloat(A2T/(parseFloat(parseFloat(Math.pow(3.14159,2))+ A2T)))));
	
	var wnT = parseFloat(4/(parseFloat(zetaT*tsT)));
	var wn2T = parseFloat(Math.pow(wnT,2));
	
	var kicoeff = parseFloat(parseFloat(A_01/At_2)*parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_10)))));
	
	var Ki_2 = parseFloat(wn2T/kicoeff);
	
	var zwnT = parseFloat(2* zetaT*wnT);
	var BT = parseFloat(parseFloat(A_02 / At_2)* parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_20)))));
	var kpcoeff = parseFloat(parseFloat(A_01/At_2)*parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_10)))));
	var Kp_2 =  parseFloat(parseFloat(zwnT-BT)/kpcoeff);
	
	///25 cm = 4.2 v, 1 cm = 4.2/25 v, L_20 cm = (4.2/25)*L_20 v
	var voltlevel2 = parseFloat(parseFloat(4.15/25)*L_20);///cm to v for tank-2
	
	var  const2 = parseFloat(voltlevel2* parseFloat((parseFloat(Kp_2 + 1)/Ki_2)/25));///kff2 =1
	
	//for(var t2=0;t2<=50;t2++){
	
	var y1T = parseFloat(const2*(parseFloat(wnT/parseFloat(Math.sqrt(1- parseFloat(Math.pow(zetaT,2)))))*parseFloat(Math.exp(-parseFloat(zetaT*wnT*t)))*parseFloat(Math.sin(parseFloat(wnT*Math.sqrt(parseFloat(1-parseFloat(Math.pow(zetaT,2))))*t)))));
	
	//var y1T = parseFloat(const2*(1-(parseFloat(parseFloat(Math.exp(-(parseFloat(zetaT*wnT*t))))/parseFloat(Math.sqrt(1-(parseFloat(Math.pow(zetaT,2))))))*Math.sin(parseFloat(Math.sqrt(parseFloat(1-parseFloat(Math.pow(zetaT,2))))*wnT*t)+parseFloat(Math.acos(zetaT))))));
	
	var y2T =  parseFloat(voltlevel2*(1-(parseFloat(parseFloat(Math.exp(-(parseFloat(zetaT*wnT*t))))/parseFloat(Math.sqrt(1-(parseFloat(Math.pow(zetaT,2))))))*Math.sin(parseFloat(Math.sqrt(parseFloat(1-parseFloat(Math.pow(zetaT,2))))*wnT*t)+parseFloat(Math.acos(zetaT))))));
	var yT = parseFloat(y1T+y2T);///output of tank-2 level is in volt
	yop[t] = parseFloat(yT *parseFloat(25/4.15));
	yip[t] = math.number(L_20);
	console.log("tank2 level="+yop[t]);
	
	dataIPPoints.push({x:(t), y:(yip[t])});///input reference of L_20 cm
	dataOPPoints.push({x:(t), y:(yop[t])});///level output in cm	
	
	rootTrk5.style.setProperty('--changeTrk5', (yop[t]*2) + "%"); ///level change for tank 2 
	
	
}
for(var t= math.add(time1,time2);t<=timeTank2;t++){
	//////////////////////////Tank-2 parameters////////////////////////
	var A_02 = parseFloat(0.1781);//tank2 outlet orifice cross sectional area
	var L_20=$('#refs3').val();//8;//equilibrium level of tank2;
	var At_2 = parseFloat(15.5179);//tank2 inner cross sectional area
	var L_ff1 = (1*L_20);//k_ff2 * L_20; acc to formula level feedforward gain (cm/cm)Kff_2 = Ao2^2 / Ao1^2; % = 1 
	
	//////////////////////////Tank-1 parameters////////////////////////
	var L_10= L_20;//acc to formula in config-2 L_10 = ( Ao2 / Ao1 )^2 * L20;  == L20
	var At_1 = parseFloat(15.5179);//tank1 inner cross sectional area
	var Kp = parseFloat(3.30);//pump constant
	var A_01= parseFloat(0.1781);//tank1 outlet orifice cross sectional area	
	var g = 981;//gravitational const.		
	var Vp_ff = parseFloat(parseFloat(2.39)* parseFloat(Math.sqrt(math.number(L_10))));//feedforward gain k_ff1 =Ao1 * sqrt( 2 * g ) / Kp; = 2.39,root(L_10)=root(8)
	
	//////////////////////Tank 1 level control acc to PI+FF control of Tank-2 and simulation block diagram reduction i.e input to tank-1 now is L_20 basically or Lr_1 or L_10 = K_ff2 * L_r2/////////////
	var ov = document.getElementById("ovt").value;
	var ts = document.getElementById("tst").value;
	
	var A = parseFloat(Math.log(parseFloat(ov/100)));
	var A2 = parseFloat(Math.pow(A,2));
	
	var zeta = parseFloat(Math.sqrt(parseFloat(A2/(parseFloat(parseFloat(Math.pow(Math.PI,2))+ A2)))));
	
	var wn = parseFloat(4/(parseFloat(zeta*ts)));
	var wn2 = parseFloat(Math.pow(wn,2));
	
	var Ki_1 = parseFloat(parseFloat(wn2*At_1)/Kp);
	
	var B = parseFloat(parseFloat(A_01 / At_1)* parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_10)))));
	var zwn = parseFloat(2* zeta*wn);
	
	var Kp_1 = parseFloat(parseFloat(zwn - B)* parseFloat(At_1/Kp));
	
	///25 cm = 4.2 v, 1 cm = 4.2/25 v, L_10 cm = (4.2/25)*L_10v
	var voltlevel = parseFloat(parseFloat(4.2/25)*L_10);///cm to v for tank-1
	
	var  const1 = parseFloat(voltlevel* parseFloat(parseFloat(Kp_1 + Vp_ff)/Ki_1));
	
	
	//var y1 =  parseFloat(const1*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	
	var y1=parseFloat(const1*(parseFloat(wn/parseFloat(Math.sqrt(1- parseFloat(Math.pow(zeta,2)))))*parseFloat(Math.exp(-parseFloat(zeta*wn*t)))*parseFloat(Math.sin(parseFloat(wn*Math.sqrt(parseFloat(1-parseFloat(Math.pow(zeta,2))))*t)))));
	
	var y2 =  parseFloat(voltlevel*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	var y = parseFloat(y1+y2);///output of tank-1 level in v
	var yL = parseFloat(y*parseFloat(25/4.15));
	
	///TANK-1 LEVEL  CHANGING NOW 
	//root.style.setProperty('--change', (yL*2) + "%"); ///level change with time acc to above model sensor design => 2% for 1cm(virtual sensor)
   rootTrk9.style.setProperty('--changeTrk9', (yL*2) + "%");
  
	
	//console.log("tank1 level="+yL);
	
	///////////////Tank-2 PI+FF control//////////////////////
	var ovT = document.getElementById("ovt2").value;
	var tsT = document.getElementById("tst2").value;
	
	var AT = parseFloat(Math.log(parseFloat(ovT/100)));
	var A2T = parseFloat(Math.pow(AT,2));
	
	var zetaT =parseFloat(Math.sqrt(parseFloat(A2T/(parseFloat(parseFloat(Math.pow(3.14159,2))+ A2T)))));
	
	var wnT = parseFloat(4/(parseFloat(zetaT*tsT)));
	var wn2T = parseFloat(Math.pow(wnT,2));
	
	var kicoeff = parseFloat(parseFloat(A_01/At_2)*parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_10)))));
	
	var Ki_2 = parseFloat(wn2T/kicoeff);
	
	var zwnT = parseFloat(2* zetaT*wnT);
	var BT = parseFloat(parseFloat(A_02 / At_2)* parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_20)))));
	var kpcoeff = parseFloat(parseFloat(A_01/At_2)*parseFloat(Math.sqrt(parseFloat(g/parseFloat(2*L_10)))));
	var Kp_2 =  parseFloat(parseFloat(zwnT-BT)/kpcoeff);
	
	///25 cm = 4.2 v, 1 cm = 4.2/25 v, L_20 cm = (4.2/25)*L_20 v
	var voltlevel2 = parseFloat(parseFloat(4.15/25)*L_20);///cm to v for tank-2
	
	var  const2 = parseFloat(voltlevel2* parseFloat((parseFloat(Kp_2 + 1)/Ki_2)/25));///kff2 =1
	
	//for(var t2=0;t2<=50;t2++){
	
	var y1T = parseFloat(const2*(parseFloat(wnT/parseFloat(Math.sqrt(1- parseFloat(Math.pow(zetaT,2)))))*parseFloat(Math.exp(-parseFloat(zetaT*wnT*t)))*parseFloat(Math.sin(parseFloat(wnT*Math.sqrt(parseFloat(1-parseFloat(Math.pow(zetaT,2))))*t)))));
	
	//var y1T = parseFloat(const2*(1-(parseFloat(parseFloat(Math.exp(-(parseFloat(zetaT*wnT*t))))/parseFloat(Math.sqrt(1-(parseFloat(Math.pow(zetaT,2))))))*Math.sin(parseFloat(Math.sqrt(parseFloat(1-parseFloat(Math.pow(zetaT,2))))*wnT*t)+parseFloat(Math.acos(zetaT))))));
	
	var y2T =  parseFloat(voltlevel2*(1-(parseFloat(parseFloat(Math.exp(-(parseFloat(zetaT*wnT*t))))/parseFloat(Math.sqrt(1-(parseFloat(Math.pow(zetaT,2))))))*Math.sin(parseFloat(Math.sqrt(parseFloat(1-parseFloat(Math.pow(zetaT,2))))*wnT*t)+parseFloat(Math.acos(zetaT))))));
	var yT = parseFloat(y1T+y2T);///output of tank-2 level is in volt
	yop[t] = parseFloat(yT *parseFloat(25/4.15));
	yip[t] = math.number(L_20);
	console.log("tank2 level="+yop[t]);
	
	dataIPPoints.push({x:(t), y:(yip[t])});///input reference of L_20 cm
	dataOPPoints.push({x:(t), y:(yop[t])});///level output in cm	
	
	rootTrk6.style.setProperty('--changeTrk6', (yop[t]*2) + "%"); ///level change for tank 2 
	
	
}

}
}

document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer').style.display  = "block"; 
var leveldiff = math.subtract(timeTank2,100);
var animDuration = math.subtract(38000,math.multiply(10,leveldiff));	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: animDuration, 
	  title:{
      text: "Tank-2 Level Tracking (cm vs. sec) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#B2F9FA",
        title: "Time (sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Level (cm)",
			
			//maximum:0.03,
        },
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";}
	  
		}
		],
	data: [
      {
		showInLegend: true,
		legendText: "Output water level",
        type: "spline",
		color:"black",
        dataPoints:dataOPPoints
	
       },
       {
		showInLegend: true,
		legendText: "Desired water level",
        type: "spline",
		color:"red",
        dataPoints:dataIPPoints
	
       },
      ]	
	});

	chart.render();	
	document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});
	}




function simu1(){
		var indexVal = $('#chkindex').val();
		//document.getElementById('r1').src ="./images/pause.png";
		var timeTank1 = document.getElementById('respT1').value;
		
		var time1 = $('#reft1').val();
		var time2 = $('#reft2').val();
		var time3 = $('#reft3').val();
		
		//if(math.add(time1,time2,time3)<=timeTank1){
		//flow();
		if(timeTank1>=100 && timeTank1<=200){
		if(indexVal == 1){
		if(document.getElementById('waterLevel1').value<=15 && document.getElementById('waterLevel1').value>=1 && document.getElementById('ov').value<=11 && document.getElementById('ov').value>=1 && document.getElementById('ts').value<=10 && document.getElementById('ts').value>=1){
			document.getElementById('r1').src ="./images/pause.png";
			flow();
			setTimeout(function(){
		Tank1_Level();
			},3500);
		}
		if(document.getElementById('waterLevel1').value>15 || document.getElementById('waterLevel1').value<1 || document.getElementById('ov').value>11 || document.getElementById('ov').value<1 || document.getElementById('ts').value>10 || document.getElementById('ts').value<1){
		alert('Enter water level value less or equal to 15 cm. Recheck the ranges of % overshoot and 2% settling time');
		//location.reload();
		}
		}
		if(indexVal == 2 && math.add(time1,time2,time3)<=timeTank1){
			if(document.getElementById('ref1').value<=15 && document.getElementById('ref1').value>=1 &&  document.getElementById('ref2').value<=15 && document.getElementById('ref2').value>=1 && document.getElementById('ref3').value<=15 && document.getElementById('ref3').value>=1 && document.getElementById('ovt').value<=11 && document.getElementById('ovt').value>=1&& document.getElementById('tst').value<=10 && document.getElementById('tst').value>=1){
				document.getElementById('r1').src ="./images/pause.png";
			flowTrack1();
			setTimeout(function(){
		Tank1_Level_Track();
		},3500);
			}
		if(document.getElementById('ref1').value>15 || document.getElementById('ref1').value<1 ||  document.getElementById('ref2').value>15 || document.getElementById('ref2').value<1 || document.getElementById('ref3').value>15 || document.getElementById('ref3').value<1 || document.getElementById('ovt').value>11 || document.getElementById('ovt').value<1 || document.getElementById('tst').value>10 || document.getElementById('tst').value<1){
			alert('Enter water level values less or equal to 15 cm. Recheck the ranges of % overshoot and 2% settling time');
			
		}
				
		}
		
	//}
	if(indexVal == 2 && math.add(time1,time2,time3)>timeTank1){
		alert('Keep total level tracking time less than'+ timeTank1 +'sec');
		//location.reload();
	}
		}
		if(timeTank1<100 && timeTank1>200){
			alert('Check the range of Time of simulation');
		}
		

}

function simu2(){
		var indexVal = $('#chkindex').val();
		//document.getElementById('r2').src ="./images/pause.png";
		var timeTank2 = document.getElementById('respT2').value;
		
		var time1 = $('#refts1').val();
		var time2 = $('#refts2').val();
		var time3 = $('#refts3').val();
		
		//if(math.add(time1,time2,time3)<=timeTank2){
		//flow();
		if(timeTank2>=100 && timeTank2<=200){
		if(indexVal == 3){
		if(document.getElementById('waterLevel2').value<=15 && document.getElementById('waterLevel2').value>=1 && document.getElementById('ov2').value<=10 && document.getElementById('ov2').value>=1 && document.getElementById('ts2').value<=20 && document.getElementById('ts2').value>=1){
		
			document.getElementById('r2').src ="./images/pause.png";
			flow();
			setTimeout(function(){
		Tank2_Level();
			},6000);
		}
		if(document.getElementById('waterLevel2').value>15 || document.getElementById('waterLevel2').value<1 || document.getElementById('ov2').value>10 || document.getElementById('ov2').value<1 || document.getElementById('ts2').value>20 || document.getElementById('ts2').value<1){
		
		alert('Enter water level value less or equal to 15 cm. Recheck the ranges of % overshoot and 2% settling time');
		//location.reload();
		}
		}
		if(indexVal == 4 && math.add(time1,time2,time3)<=timeTank2){
		if(document.getElementById('refs1').value<=15 && document.getElementById('refs1').value>=1 &&  document.getElementById('refs2').value<=15 && document.getElementById('refs2').value>=1 && document.getElementById('refs3').value<=15 && document.getElementById('refs3').value>=1 && document.getElementById('ovt2').value<=10 && document.getElementById('ovt2').value>=1 && document.getElementById('tst2').value<=20 && document.getElementById('tst2').value>=1){
				document.getElementById('r2').src ="./images/pause.png";
			flowTrack2();
			setTimeout(function(){
		Tank2_Level_Track();
		},6000);
		}
		if(document.getElementById('refs1').value>15 || document.getElementById('refs1').value<1 ||  document.getElementById('refs2').value>15 || document.getElementById('refs2').value<1 || document.getElementById('refs3').value>15 || document.getElementById('refs3').value<1 || document.getElementById('ovt2').value>10 || document.getElementById('ovt2').value<1 || document.getElementById('tst2').value>20 || document.getElementById('tst2').value<1){
			alert('Enter water level values less or equal to 15 cm. Recheck the ranges of % overshoot and 2% settling time');	
		}
		}
	//}
	if(indexVal == 4 && math.add(time1,time2,time3)>timeTank2){
		alert('Keep total level tracking time less than'+ timeTank2 +'sec');
		//location.reload();
	}
		}
		if(timeTank2<100 && timeTank2>200){
			alert('Check the range of Time of simulation');
		}
		
}

function plot(){
	
var indexVal = $('#chkindex').val();

if(indexVal == 1){
	Tank1_Level();
}	
else if(indexVal == 2){
	Tank1_Level_Track();
}	
	
else if(indexVal == 3){
	Tank2_Level();
}	
	
else if(indexVal == 4){
	Tank2_Level_Track();
}	
	
}



  

 function Refresh(){
	location.reload();
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 