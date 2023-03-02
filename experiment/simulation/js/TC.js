 
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
	
document.getElementById('controller').src = "./images/config-1.png";	
	document.getElementById('ov').removeAttribute('readonly');
	document.getElementById('ts').removeAttribute('readonly');
	document.getElementById('ov2').readOnly=true;
	document.getElementById('ts2').readOnly=true;
	
	document.getElementById('b1').style.display="block";
	document.getElementById('c1').style.display="block";
	document.getElementById('r1').style.display="none";
	document.getElementById('sc1').style.display="block";
	
	document.getElementById('b2').style.display="none";
	document.getElementById('c2').style.display="none";
	document.getElementById('r2').style.display="none";
	document.getElementById('sc2').style.display="none";
	
}
function config2control(){
	
document.getElementById('controller').src = "./images/config-2.png";	
	document.getElementById('ov2').removeAttribute('readonly');
	document.getElementById('ts2').removeAttribute('readonly');
	document.getElementById('ov').readOnly=true;
	document.getElementById('ts').readOnly=true;
	
	document.getElementById('b1').style.display="none";
	document.getElementById('c1').style.display="none";
	document.getElementById('r1').style.display="none";
	document.getElementById('sc1').style.display="none";
	
	document.getElementById('b2').style.display="block";
	document.getElementById('c2').style.display="block";
	document.getElementById('r2').style.display="none";
	document.getElementById('sc2').style.display="block";
	
}


function Build(){
		setTimeout(function(){
		alert('Model Built');	
		},2000)
		
	}
	function CT(){		
		setTimeout(function() {
			alert('Model loaded and ready');
			if(document.getElementById('controller').src.match("./images/config-1.png")){
         document.getElementById('r1').style.display  = "block";
			}
         	
		else if(document.getElementById('controller').src.match("./images/config-2.png")){
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

function flow(){
	
	document.getElementById('pumpoff').style.display="none";
	document.getElementById('pumpon').style.display="block";
	
	uflow();
	
	setTimeout(function(){
	document.getElementById('pipe').classList.add("tank1flow");
	 },4000);
	
	
	setTimeout(function(){
		   document.getElementById('level1').classList.add("tankfill");
	   },6000);
	   
	   
	   
	   setTimeout(function(){
		   document.getElementById('pipe2').classList.add("smallflow");
	   },6000);
	   setTimeout(function(){
		   document.getElementById('pipe3').classList.add("tank2flow");
	   },8000);
	   
	
	setTimeout(function(){
		   document.getElementById('level2').classList.add("tank2fill");
	   },10000);
	   
	   setTimeout(function(){
		   document.getElementById('pipe4').classList.add("basinflow1");
	   },10000); 
	   
	   setTimeout(function(){
		   document.getElementById('pipe5').classList.add("basinflow2");
	   },12000); 
	   
	   setTimeout(function(){
		   document.getElementById('pipe6').classList.add("basinflow3");
	   },14000); 
	   
	    
}

/////////////////////////////////////////////////////config-1 simulation design//////////////////////////////
var root = document.documentElement;
var root2 = document.documentElement;
function Tank1_Level(){
	
	var yip = new Array();
    var yop = new Array();	
	var dataIPPoints=[];
	var dataOPPoints=[];	
	
	/////////////////////////Tank-1 parameters///////////////////////
	var At_1 = parseFloat(15.5179);//tank1 inner cross sectional area
	var Kp = parseFloat(3.30);//pump constant
	var A_01= parseFloat(0.1781);//tank1 outlet orifice cross sectional area	
	var g = 981;//gravitational const.
	var L_10= 10;//equilibrium level of tank1;	
	var Vp_ff = parseFloat(parseFloat(2.39)* parseFloat(Math.sqrt(10)));//feedforward gain k_ff =Ao1 * sqrt( 2 * g ) / Kp; = 2.39,root(L_10)=root(10)
	
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
	
	for(var t=0;t<=50;t++){
	//var y1 =  parseFloat(const1*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	
	var y1=parseFloat(const1*(parseFloat(wn/parseFloat(Math.sqrt(1- parseFloat(Math.pow(zeta,2)))))*parseFloat(Math.exp(-parseFloat(zeta*wn*t)))*parseFloat(Math.sin(parseFloat(wn*Math.sqrt(parseFloat(1-parseFloat(Math.pow(zeta,2))))*t)))));
	
	var y2 =  parseFloat(voltlevel*(1-(((Math.exp(-(parseFloat(zeta*wn*t))))/(Math.sqrt(1-(parseFloat(Math.pow(zeta,2))))))*Math.sin(parseFloat(Math.sqrt(1-parseFloat(Math.pow(zeta,2)))*wn*t)+Math.acos(zeta)))));
	var y = parseFloat(y1+y2);///output of tank-1 level in v
	yop[t] = parseFloat(y*parseFloat(25/4.15));
	yip[t] = L_10;
	console.log("tank1 level="+yop[t]);
	
	dataIPPoints.push({x:(t), y:(yip[t])});///input reference of L_10 cm
	dataOPPoints.push({x:(t), y:(yop[t])});///level output in cm
	///////////////Tank-2 openloop control//////////////////////
	
	/*var C = parseFloat(parseFloat(A_01/At_2)* parseFloat(Math.sqrt(parseFloat(g/(2*L_10)))));
	var D = parseFloat(parseFloat(A_02/At_2)* parseFloat(Math.sqrt(parseFloat(g/(2*L_20)))));
	var ytank2 = (parseFloat(parseFloat(C*y)/D)*(1- Math.pow(2.718281,(- parseFloat(D*t)))));
	
	console.log("tank2 level="+ytank2);*/
 
  root.style.setProperty('--change', (yop[t]*2) + "%"); ///level change with time acc to above model sensor design => 2% for 1cm(virtual sensor)
  
  root2.style.setProperty('--change2', (5.3*2) + "%"); ///level change for tank 2 which is having no control now ,so acc to lab test the level goes upto 6 approx
  
 
	

}

document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Tank-1 Level Response (cm vs. sec) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#B2F9FA",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Level(cm)",
			
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
        type: "spline",
		color:"109DB6",
        dataPoints:dataOPPoints
	
       },
       {        
        type: "spline",
		color:"#F9CC1D",
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

//////////////////////Tank 2 level control with PI+FF/////////////
function Tank2_Level(){
	
	var yip = new Array();
    var yop = new Array();	
	var dataIPPoints=[];
	var dataOPPoints=[];	
	
	//////////////////////////Tank-2 parameters////////////////////////
	var A_02 = parseFloat(0.1781);//tank2 outlet orifice cross sectional area
	var L_20= 8;//equilibrium level of tank2;
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
	
	for(var t=0;t<=50;t++){
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
	yip[t] = L_20;
	console.log("tank2 level="+yop[t]);
	
	dataIPPoints.push({x:(t), y:(yip[t])});///input reference of L_20 cm
	dataOPPoints.push({x:(t), y:(yop[t])});///level output in cm	
	
	root2.style.setProperty('--change2', (yop[t]*2) + "%"); ///level change for tank 2 
	
	
}


document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer').style.display  = "block"; 	
	var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
		  animationDuration: 10000, 
	  title:{
      text: "Tank-2 Level Response (cm vs. sec) "
	  
      },
	  
	  axisX:{
        interlacedColor: "#B2F9FA",
        title: "Time(Sec)"
      },
    axisY: [
	      {/////output Y axis
            title: "Level(cm)",
			
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
        type: "spline",
		color:"109DB6",
        dataPoints:dataOPPoints
	
       },
       {        
        type: "spline",
		color:"#F9CC1D",
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
		
		document.getElementById('r1').src ="./images/pause.png";
		flow();
		Tank1_Level();
		
	}


function simu2(){
		
		document.getElementById('r2').src ="./images/pause.png";
		flow();
		Tank2_Level();
		
	}






  
/////////////////////////////////////////////////////////////////////Plot creation Torque vs. Speed////////////////////////////////////////////////////////////////////////// 



	var y = new Array();
    var dataPoints1=[];
	
	
	function plot(){
	 document.getElementById('plotbucket').style.display  = "block"; 
	 document.getElementById('chartContainer').style.display  = "block";
	 document.getElementById('result').style.display  = "block";
 
    var table1 = document.getElementById('myTable');
    for (var tabrowindex1 = 1; tabrowindex1 < table1.rows.length; tabrowindex1++) {
        var rwe1 = table1.rows[tabrowindex1].cells;

        dataPoints1.push({x: parseFloat((rwe1[1].innerHTML)), y: parseFloat(rwe1[2].innerHTML)});
    }
 
	
 
	var chart = new CanvasJS.Chart("chartContainer",
    {
      //animationEnabled: true,
		  //animationDuration: 10000, 
	  title:{
      text: "Temperature Vs. Time Plot "
	  
      },
	  
	  axisX:
	  
	  {
        interlacedColor: "#B2F9FA",
        title: "Time(sec)"
      },
	  
	  
	  
	  
	  
    axisY: 
	      {// Y axis
            title: "Temperature",
			
			//maximum:28,
        },
		
		
	data: [
      {        
        type: "spline",
		color:"109DB6",
        dataPoints:dataPoints1
	
       },
       
      ]	
	});

	chart.render();
	
	document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});	
	}
 
 
 
 function Refresh(){
	location.reload();
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 