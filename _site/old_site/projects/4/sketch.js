/* Ben Duggan (dugganbens@gmail.com)
 * 6/17/2017
 * Chesterfield, MO
 */

var cnv;
var cnvX;
var cnvY;
var date = new Date();
var eTime = date.getTime();
var tTime = date.getTime();
var eTimeForm = "";
var tTimeForm = "";
var dT;
var dTForm;
var speedTime = 1;
var speedSlide;
var beta = 0;
var lorentz = 0;
var sliderInformation = "";
var eButton, tButton;
var isETnot = true;
var speeds, speedMS, speedMPH;
var cMS = 299792458;
var cMPH = 670616629;

function setup() {  
    //Set up canvas
    cnv = createCanvas(800, 600);
    cnvX = (windowWidth - width) / 2;
    cnvY = (windowHeight - height) / 2;
    cnv.position(cnvX, cnvY);
    background(150);
    
    speedSlide = createSlider(0,1000,0);
    //speedSlide.position(670, 560);
    speedSlide.position(((windowWidth - width)/2)+670, ((windowHeight - height) / 2)+560);
    speedSlide.style('width', '100px');
    
    eButton = createButton("Einstein's Perspective");
    eButton.position(((windowWidth - width)/2)+10, ((windowHeight - height) / 2)+510);
    eButton.mousePressed(eButtonPress);
    tButton = createButton("Clock Towers's Perspective");
    tButton.position(((windowWidth - width)/2)+10, ((windowHeight - height) / 2)+540);
    tButton.mousePressed(tButtonPress);
}

function draw() {
    backDrop();
    dataUpdate();
    timeUpdate();    
}

function windowResized() {
    //Set up canvas
    cnv = createCanvas(800, 600);
    cnvX = (windowWidth - width) / 2;
    cnvY = (windowHeight - height) / 2;
    cnv.position(cnvX, cnvY);
    background(150);
    
    eButton.position(((windowWidth - width)/2)+10, ((windowHeight - height) / 2)+510);
}

function backDrop() {
    line(width/2,0,width/2,height);
    line(0,32,width,32);
    fill(200);
    rect(0,500,width,height);
    
    //Einstein's Half
    fill(0);
    textSize(20);
    textAlign(CENTER);
    e = "Einstein in Cab";
    text(e,0,10,width/2,30);
    fill(200);
    rect(0,32,300,50);
    fill(112,70,2);
    rect(175,82,50,418);
    fill(150);
    ellipse(200,460,10);
    ellipse(200,440,10);
    ellipse(200,420,10);
    fill(255);
    ellipse(200,271,225);
    fill(0);
    ellipse(200,271,5);
    textSize(18);
    textAlign(CENTER);
    text('1',254,187);
    text('2',289,225);
    text('3',305,279);
    text('4',293,329);
    text('5',254,366);
    text('6',198,380);
    text('7',149,368);
    text('8',110,330);
    text('9',95,279);
    text('10',114,225);
    text('11',150,190);
    text('12',198,178);
        
    //Clock's Half
    fill(0);
    textSize(20);
    textAlign(CENTER);
    c = "Clock Tower";
    text(c,width/2,10,width/2,30);   
    fill(200);
    rect(500,32,300,50);
    fill(247, 229, 93);
    rect(475,147,250,353);
    triangle(490,147,600,82,710,147);
    fill(255);
    ellipse(600,271,225);
    fill(0);
    ellipse(600,271,5);
    textSize(18);
    textAlign(CENTER);
    text('1',654,187);
    text('2',689,225);
    text('3',705,279);
    text('4',693,329);
    text('5',654,366);
    text('6',598,380);
    text('7',549,368);
    text('8',510,330);
    text('9',495,279);
    text('10',514,225);
    text('11',550,190);
    text('12',598,178);
}
function dataUpdate() {    
    beta = speedSlide.value()/1000;
    lorentz = 1/Math.sqrt(1-Math.pow(beta,2));
    dT = Math.abs((eTime-tTime).toFixed(2));
    
    dTForm = "Delta Time= " + Math.floor((dT/3600000)) + ":" + Math.floor((dT/60000)%60) + ":" + Math.floor((dT/1000)%60) + ":" + Math.round(dT%1000);
    sliderInformation = "Beta=" + beta + " Lorentz=" + lorentz.toFixed(3);
    
    speedMS = (lorentz*cMS).toFixed(0);
    speedMPH = (lorentz*cMPH).toFixed(0);
    speeds = "Relative Speed: ";
    if(lorentz != Infinity) {
        for(var i=1; i<=speedMS.length; i++) {
            if(i%3 == 0) {
                speeds = speeds + speedMS.charAt(i) + ",";
            }
            else {
                speeds = speeds + speedMS.charAt(i);
            }
        }
        speeds = speeds + "m/s; ";
        for(var i=1; i<=speedMPH.length; i++) {
            if(i%3 == 0) {
                speeds = speeds + speedMPH.charAt(i) + ",";
            }
            else {
                speeds = speeds + speedMPH.charAt(i);
            }
        }
        speeds = speeds + "MPH";
    }
    else {
        speeds = "Relative Speed: " + speedMS + "m/s; " + speedMPH + "MPH";
    }
    
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text(sliderInformation,650,510,150,50);
    text(dTForm,325,510,150,50);
    text(speeds, 150, 570, 500, 50);
    
}
function timeUpdate() {
    if(lorentz != Infinity) {
        if(isETnot) {
            eTime = Math.round(millis()) * speedTime;
            tTime = eTime/lorentz;
        }
        else {
            tTime = Math.round(millis()) * speedTime;
            eTime = tTime/lorentz;
        }
    }
    else {
        if(isETnot) {
            eTime = Math.round(millis()) * speedTime;
        }
        else {
            tTime = Math.round(millis()) * speedTime;
        }
    }
    
    eTimeForm = Math.floor((eTime/3600000)) + ":" + Math.floor((eTime/60000)%60) + ":" + Math.floor((eTime/1000)%60) + ":" + Math.round(eTime%1000);
    tTimeForm = Math.floor((tTime/3600000)) + ":" + Math.floor((tTime/60000)%60) + ":" + Math.floor((tTime/1000)%60) + ":" + Math.round(tTime%1000);
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text(String(eTimeForm),0,32,300,50);
    text(String(tTimeForm),500,32,300,50);
    
    //Clock Hands
    //Einstein
    stroke(66, 134, 244);
    line(200,271,((105*Math.cos(((((eTime)%1000)/1000)*2*Math.PI)-((1/2)*Math.PI)))+200),((105*Math.sin(((((eTime)%1000)/1000)*2*Math.PI)-((1/2)*Math.PI))+271)));
    stroke(247, 34, 48);
    line(200,271,((105*Math.cos(((((eTime/1000)%60)/60)*2*Math.PI)-((1/2)*Math.PI)))+200),((105*Math.sin(((((eTime/1000)%60)/60)*2*Math.PI)-((1/2)*Math.PI))+271)));
    stroke(0,0,0);
    line(200,271,((80*Math.cos(((((eTime/1000)%3600)/3600)*2*Math.PI)-((1/2)*Math.PI)))+200),((80*Math.sin(((((eTime/1000)%3600)/3600)*2*Math.PI)-((1/2)*Math.PI))+271)));
    line(200,271,((60*Math.cos(((((eTime/1000)%86400)/86400)*2*Math.PI)-((1/2)*Math.PI)))+200),((60*Math.sin(((((eTime/1000)%86400)/86400)*2*Math.PI)-((1/2)*Math.PI))+271)));
    //Tower
    stroke(66, 134, 244);
    line(600,271,((105*Math.cos(((((tTime)%1000)/1000)*2*Math.PI)-((1/2)*Math.PI)))+600),((105*Math.sin(((((tTime)%1000)/1000)*2*Math.PI)-((1/2)*Math.PI))+271)));
    stroke(247, 34, 48);
    line(600,271,((105*Math.cos(((((tTime/1000)%60)/60)*2*Math.PI)-((1/2)*Math.PI)))+600),((105*Math.sin(((((tTime/1000)%60)/60)*2*Math.PI)-((1/2)*Math.PI))+271)));
    stroke(0,0,0);
    line(600,271,((80*Math.cos(((((tTime/1000)%3600)/3600)*2*Math.PI)-((1/2)*Math.PI)))+600),((80*Math.sin(((((tTime/1000)%3600)/3600)*2*Math.PI)-((1/2)*Math.PI))+271)));
    line(600,271,((60*Math.cos(((((tTime/1000)%86400)/86400)*2*Math.PI)-((1/2)*Math.PI)))+600),((60*Math.sin(((((tTime/1000)%86400)/86400)*2*Math.PI)-((1/2)*Math.PI))+271)));
}
function eButtonPress() {
    isETnot = true;
}
function tButtonPress() {
    isETnot = false;
}