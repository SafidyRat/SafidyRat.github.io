<!DOCTYPE html>
<html>
<head>
  <style>

.slidecontainer {
  width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider {
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 25%; /* Full-width */
  height: 25px; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #04AA6D; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #04AA6D; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.button2 {background-color: #008CBA;} /* Blue */

  </style>
<meta charset="utf-8">
<title>Pre-process IMAGE</title>
<script src="js/Vert_Hort_line_clean.js"></script>

</head>
<body>
<h2>Pre-process IMAGE</h2>
<p id="status">OpenCV.js is loading...</p>
<div>
  <div class="inputoutput">
    <img id="imageSrc" alt="No Image" />
    <div class="caption">imageSrc <input type="file" id="fileInput" name="file" /></div>
  </div>
  <div class="slidecontainer">
    <input type="checkbox" id="vehicle1" name="Kh_active" >
    <input type="range" min="5" max="100" value="50" class="slider" id="Kh">Kernel Window for Horitontal line detection
  </div>

  <div class="slidecontainer">
    <input type="range" min="25" max="1000" value="300" class="slider" id="Khrepaire">Repaire Detected Horizontal lines
  </div>

  <div class="slidecontainer">
    <input type="checkbox" id="vehicle1" name="Kv_active" >
    <input type="range" min="5" max="100" value="50" class="slider" id="Kv">Kernel Window for Vertical line detection
  </div>

  <div class="slidecontainer">
    <input type="range" min="25" max="1000" value="300" class="slider" id="Kvrepaire">Repaire Detected Vertical lines
  </div>

  <div class="slidecontainer">
    <input type="range" min="0" max="1500" value="10" class="slider" id="perimetre">Selected Detected curve based on its perimetre
  </div>

  <div class="slidecontainer">
    <input type="range" min="0.05" max="2" value="1" class="slider" id="line_withd">Contours Withd
  </div>
 
  <div>
    <button onclick="download()" class="button button2">DIGITIZE</button>
  </div>

  <div class="inputoutput">
    <canvas id="originale_image" ></canvas>
    <canvas id="Horizontale_line" ></canvas>
    <canvas id="verticale_line" ></canvas>
    <canvas id="Extracted_curve" ></canvas>
    <div class="caption"></div>
  </div>
</div>
<script type="text/javascript" >

  function  download (){

 var canvass=document.getElementById("Extracted_curve");
localStorage.setItem("canvasOutput", canvass.toDataURL());


  var link = document.createElement('a');
  link.download = 'D:\2022\chart\testdownload\filename.png';
  link.href = document.getElementById('Extracted_curve').toDataURL();
  link.click();

  window.location = 'dev.html';
}

let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
  imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);
imgElement.onload = function() {
  
  

///line lceaning funcition
/////////////////////
var sliderKh = document.getElementById("Kh");
var sliderKhrepaire = document.getElementById("Khrepaire");
var sliderKv = document.getElementById("Kv");
var sliderKvrepaire = document.getElementById("Kvrepaire");
var slider_line_withd = document.getElementById("line_withd");
var slider_Perimetre = document.getElementById("perimetre");



sliderKh.oninput = function() {

 var v=parseInt(this.value);
console.log("Kh:  "+ sliderKvrepaire.value );
  line_cleanign(v,parseInt(sliderKhrepaire.value),parseInt(sliderKv.value),parseInt(sliderKvrepaire.value),parseFloat(slider_line_withd.value),parseInt(slider_Perimetre.value));
  cv.imshow('canvasOutput', modif);
  
}

sliderKhrepaire.oninput = function() {

 var v=parseInt(this.value);
console.log("value Khrepaire:  "+v);
  line_cleanign(parseInt(sliderKh.value),v,parseInt(sliderKv.value),parseInt(sliderKvrepaire.value),parseFloat(slider_line_withd.value),parseInt(slider_Perimetre.value));

  
}

sliderKv.oninput = function() {

 var v=parseInt(this.value);
console.log("value Kv:  "+v);
  line_cleanign(parseInt(sliderKh.value),parseInt(sliderKv.value),v,parseInt(sliderKvrepaire.value),parseFloat(slider_line_withd.value),parseInt(slider_Perimetre.value));

  
}

sliderKvrepaire.oninput = function() {
 var v=parseInt(this.value);
console.log("value Kv:  "+v);
  line_cleanign(parseInt(sliderKh.value),parseInt(sliderKhrepaire.value),parseInt(sliderKv.value),v,parseFloat(slider_line_withd.value),parseInt(slider_Perimetre.value));
 

  
}

slider_line_withd.oninput = function() {
 var v=parseFloat(this.value);
console.log("Line Withd:  "+v);
  line_cleanign(parseInt(sliderKh.value),parseInt(sliderKhrepaire.value),parseInt(sliderKv.value),parseInt(sliderKvrepaire.value),v,parseInt(slider_Perimetre.value));

  
}

slider_Perimetre.oninput = function() {
 var v=parseInt(this.value);
console.log("Line Withd:  "+v);
  line_cleanign(parseInt(sliderKh.value),parseInt(sliderKhrepaire.value),parseInt(sliderKv.value),parseInt(sliderKvrepaire.value),parseFloat(slider_line_withd.value),v);

  
}




};
function onOpenCvReady() {
  document.getElementById('status').innerHTML = 'Ready';
}


</script>
<script async src="./javascript/opencv.js" onload="onOpenCvReady();" type="text/javascript"></script>
</body>
</html>
