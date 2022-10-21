function roundslider(){

var sliderKh = document.getElementById("Kh");
var sliderKhrepaire = document.getElementById("Khrepaire");
var sliderKv = document.getElementById("Kv");
var sliderKvrepaire = document.getElementById("Kvrepaire");
var slider_line_withd = document.getElementById("line_withd");
var slider_Perimetre = document.getElementById("perimetre");


var sliders = document.getElementsByClassName("round-slider");
console.log("Sliders:", sliders);
for (let i = 0; i < sliders.length; i++) {
	sliders[i].addEventListener("click", round_slider_tune, false);
    sliders[i].addEventListener("mouseup", detecte, false);
	sliders[i].addEventListener("mousedown", function(event) {
		sliders[i].onmousemove = function(event) {
			if (event.buttons == 1 || event.buttons == 3) {
				round_slider_tune(event);
                var txt= document.getElementsByClassName("holder").innerHTML;
                //console.log("Slider[0]:", this.outerText);
               
			}
		}
	});
}

function round_slider_tune(event) {


	let eventDoc = (event.target && event.target.ownerDocument) || document,
		doc = eventDoc.documentElement,
		body = eventDoc.body;
	event.pageX = event.clientX +
		  (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
		  (doc && doc.clientLeft || body && body.clientLeft || 0);
	event.pageY = event.clientY +
		  (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
		  (doc && doc.clientTop  || body && body.clientTop  || 0 );
	let output = event.target.getElementsByClassName("selection")[0],
		text = event.target.getElementsByClassName("holder")[0],
		styleafter = document.head.appendChild(document.createElement("style")),
		elpos = event.target.getBoundingClientRect(),
		cX = elpos.width / 2,
		cY = elpos.height / 2,
		eX = event.pageX - elpos.left,
		eY = event.pageY - elpos.top,
		dX = 0,
		dY = 0,
		angle = Math.atan2(cX - eX, cY - eY) * (180 / Math.PI),
		value = 100;
	//console.log(cX, cY, eX, eY, angle);

	if (Math.abs(eX - cX) >= Math.abs(eY - cY)) { // 110 90
		dX = 150 / 2 + Math.sign(eX - cX) * 150 / 2;
		dY = 150 / 2 + (eY - cY) / Math.abs(eX - cX) * 150 / 2;
	} else {
		dX = 150 / 2 + (eX - cX) / Math.abs(eY - cY) * 150 / 2;
		dY = 150 / 2 + Math.sign(eY - cY) * 150 / 2;
	}
	dX = Math.round(dX / 150 * 100)
	dY = Math.round(dY / 150 * 100)
	//console.log(dX + "%", dY + "%");
	/*if (0 < angle && angle <= 45) {
	} else if (45 < angle && angle <= 120) {
	} else if ((120 < angle && angle <= 180) || (-180 < angle && angle <= -120)) {
	} else if (-120 < angle && angle <= -45) {
	} else if (-45 < angle && angle <= 0) {}*/
	if (0 <= dX && dX < 50 && dY == 0) {
		output.style = "clip-path: polygon(" + dX + "% " + dY + "%, 50% 0%, 50% 50%);";
		value = Math.round((50 - dX) / 50 * 12.5);
	} else if (dX == 0 && 0 <= dY && dY <= 100) {
		output.style = "clip-path: polygon(" + dX + "% " + dY + "%, 0% 0%, 50% 0%, 50% 50%);";
		value = Math.round(12.5 + dY / 100 * 25);
	} else if (0 <= dX && dX <= 100 && dY == 100) {
		output.style = "clip-path: polygon(" + dX + "% " + dY + "%, 0% 100%, 0% 0%, 50% 0%, 50% 50%);";
		value = Math.round(37.5 + dX / 100 * 25);
	} else if (dX == 100 && 0 <= dY && dY <= 100) {
		output.style = "clip-path: polygon(" + dX + "% " + dY + "%, 100% 100%, 0% 100%, 0% 0%, 50% 0%, 50% 50%);";
		value = Math.round(62.5 + (100 - dY) / 100 * 25);
	} else if (50 <= dX && dX <= 100 && dY == 0) {
		output.style = "clip-path: polygon(" + dX + "% " + dY + "%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%, 50% 50%);";
		value = Math.round(87.5 + (100 - dX) / 50 * 12.5);
	}
	styleafter.innerHTML = ".round-slider .selection:after {transform: rotate(" + -angle + "deg);}";
	let hue = Math.floor(value / 100 * 120),
		saturation = Math.abs(value - 50);

       // console.log(value);
       
	//text.innerHTML = value + "%";
    text.innerHTML = value;
	text.style = "color: hsl(" + hue + ", 100%, " + saturation + "%);";

    
}

function detecte(){
    var ext=String(this.outerHTML).split('00');


    var v=[25,500,25,500,1,10];

    if(String(ext[1])=='Kh'||String(ext[1])=='Kv' ){
        v[0]=((500-25)/100) * parseInt(this.outerText) + 25;
        //v[2]=((500-25)/100) * parseInt(this.outerText) + 25;
       console.log("eeeeeeeeee"+v);
    }

    if(String(ext[1])=='Khrepaire'){
        v[1]=((1000-25)/100) * parseInt(this.outerText) + 25;
       console.log("eeeeeeeeee"+v);
    }


    if(String(ext[1])=='Kv' ){
        v[2]=((500-25)/100) * parseInt(this.outerText) + 25;
       console.log("eeeeeeeeee"+v);
    }

    if(String(ext[1])=='Kvrepaire' ){
         v[3]=((1000-25)/100) * parseInt(this.outerText) + 25;
        console.log("eeeeeeeeee"+v);
     }

     if(String(ext[1])=='perimetre'){
         v[4]=((500-25)/100) * parseInt(this.outerText) + 25;
        console.log("eeeeeeeeee"+v);
     }

     if(String(ext[1])=='line_withd'){
         v[5]=((2-1)/100) * parseInt(this.outerText) + 1;
        console.log("eeeeeeeeee"+v);
     }


    //var realvalue= value
  line_cleanign(v[0],v[1],v[2],v[3],v[4],v[5]);
    } 
    //end detectin
}