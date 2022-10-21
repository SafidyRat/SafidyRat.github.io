

function line_cleanign(kh,khrepaire,kv,kvrepair,line_withd,perimetre){

  console.log("linnnnnnnnnnnnnnne: " + line_withd);

let mat = cv.imread(imgElement);
let original = cv.imread(imgElement);


cv.imshow('originale_image',original );

let src = mat;
let M = new cv.Mat();

let contours = new cv.MatVector();
let hierarchy = new cv.Mat();
let hierarchymodif = new cv.Mat();
let dst = new cv.Mat();

let contoursv = new cv.MatVector();

let hierarchyv = new cv.Mat();


  //gray conversion

  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);

/// BINARY INVERSION

let modif = new cv.Mat();

cv.adaptiveThreshold(src, dst, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY_INV, 21 ,25);


//save to modif for display result later
cv.adaptiveThreshold(src, modif, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY_INV, 21 ,25);


var checkboxkh = document.querySelector("input[name=Kh_active]");
var checkboxkv = document.querySelector("input[name=Kv_active]");


/////REMOVE HORIZONTAL LINE//////////////////////////////////

  if (checkboxkh.checked) {
    document.getElementById('imageSrc').style.display = 'none';

    let ksize = new cv.Size(kh, 1); //horizontale kernel
    let ksize2 = new cv.Size(khrepaire, 1);
    
    
    M = cv.getStructuringElement(cv.MORPH_RECT , ksize);
    
    
    //python: detected_lines = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, horizontal_kernel, iterations=2)
    let anchor = new cv.Point(-1, -1);
    
    cv.morphologyEx(dst, dst, cv.MORPH_OPEN, M, anchor, 1);
    
    
    // Repair  horizontal lines
    let repair_kernel = new cv.Mat();
    
    
    repair_kernel = cv.getStructuringElement(cv.MORPH_RECT, ksize2);
    cv.morphologyEx(dst,dst,cv.MORPH_CLOSE, repair_kernel, anchor, 1);
    
    cv.imshow('Horizontale_line', dst);
    
    
    cv.findContours(dst, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
    
        // draw contours with random Scalar
    for (let i = 0; i < contours.size();++i) {
        let color = new cv.Scalar(0,0,0);
        //cv.drawContours(modif, contours[0], i, color, 1, 8, hierarchy, 1);
        cv.drawContours(modif, contours, i, color,1.8,cv.LINE_8, hierarchy, 1);
    }
  


   
  } else {
   
  }


 


  ////VERTICAL CLEANING//////////////////////////////////////////////



  if (checkboxkv.checked) {

    
document.getElementById('imageSrc').style.display = 'none';

  

let polyv = new cv.MatVector();
let dstv = new cv.Mat();

cv.adaptiveThreshold(src, dstv, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY_INV, 21 ,25);



let ksizev = new cv.Size(1,kv ); 
let ksize2v= new cv.Size(1,kvrepair);


Mv = cv.getStructuringElement(cv.MORPH_RECT , ksizev);


let anchorv = new cv.Point(-1, -1);

cv.morphologyEx(dstv, dstv, cv.MORPH_OPEN, Mv, anchorv, 1);


// Repair  vertical lines
let repair_kernelv = new cv.Mat();
let dst2v = new cv.Mat();

repair_kernelv = cv.getStructuringElement(cv.MORPH_RECT, ksize2v);
cv.morphologyEx(dstv,dstv,cv.MORPH_CLOSE, repair_kernelv, anchorv, 1);

cv.imshow('verticale_line', dstv);


cv.findContours(dstv, contoursv, hierarchyv, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

    // draw contours with random Scalar
for (let i = 0; i < contoursv.size();++i) {
    let color = new cv.Scalar(0,0,0);
    //cv.drawContours(modif, contours[0], i, color, 1, 8, hierarchy, 1);
    /*cv.drawContours(modif, contoursv, i, color,1,cv.LINE_8, hierarchyv, 1);*/
    cv.drawContours(modif, contoursv, i, color,line_withd,cv.LINE_8, hierarchyv, 1);
  
}
    console.log("Checkbox is checked..");
  } else {
    console.log("Checkbox is not checked..");
  }




/////////////////////////////Finding all concour on modif/////////////////////////////////////////////////

if(checkboxkh.checked || checkboxkv.checked){

document.getElementById('imageSrc').style.display = 'none';
let contourmodif = new cv.MatVector();
let kernelmodif= new cv.Size(1,2);
let anchormodif = new cv.Point(-1, -1);
repair_kernelmodif = cv.getStructuringElement(cv.MORPH_RECT, kernelmodif);
cv.morphologyEx(modif,modif,cv.MORPH_CLOSE,repair_kernelmodif, anchormodif, 1);

cv.findContours(modif, contourmodif, hierarchymodif, cv.RETR_CCOMP, cv.CHAIN_APPROX_NONE);




var index=0;
var perimeter=[];

///black image

var black = new cv.Mat();

cv.adaptiveThreshold(src, black, 0, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY_INV, 21 ,25);

cv.cvtColor(black, black, cv.COLOR_GRAY2RGB);


var color2 = new cv.Scalar(0,0,0);
for (let i = 0; i < contourmodif.size();++i) { 
    
    let color = new cv.Scalar(Math.round(Math.random() * 255), Math.round(Math.random() * 255),
    Math.round(Math.random() * 255));
    //cv.drawContours(modif, contours[0], i, color, 1, 8, hierarchy, 1);
    /*cv.drawContours(modif, contoursv, i, color,1,cv.LINE_8, hierarchyv, 1);*/
    let bigest=Math.abs(parseFloat(cv.contourArea(contourmodif.get(i), true)));
    perimeter.push(bigest) ;
   

    if (i==contourmodif.size()-1){
       
        const max = Math.max(...perimeter);
        const index = perimeter.indexOf(max);
        console.log("perimetre maxxxx: " + max);

        //cv.drawContours(src, contourmodif, i, color2,2,cv.LINE_8, hierarchymodif, 100);
       
    }
if(perimeter[i]>perimetre){

    cv.drawContours(black, contourmodif, i, color,line_withd,cv.LINE_8, hierarchymodif, 1);

}
    
  
}






cv.cvtColor(black, black, cv.COLOR_RGBA2GRAY);

cv.adaptiveThreshold(black, black, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 5,-10);





cv.imshow('Extracted_curve', black);



let kernelblack= new cv.Size(1,2);
let anchorblack = new cv.Point(-1, -1);
repair_kernelblack = cv.getStructuringElement(cv.MORPH_RECT, kernelblack);
cv.morphologyEx(black,black,cv.MORPH_CLOSE,repair_kernelblack, anchorblack, 1);





/// dilate
let Mer = cv.Mat.ones(3, 1, cv.CV_8U);
let anchorer = new cv.Point(-1, -1);
cv.dilate(black, black, Mer, anchorer, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());

///erode 
let Mdil = cv.Mat.ones(3, 1, cv.CV_8U);
let anchordil = new cv.Point(-1, -1);
cv.erode(black, black, Mdil, anchordil, 1, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue());




}


// Update the current slider value (each time you drag the slider handle)


contours.delete(); hierarchy.delete();
contoursv.delete(); hierarchyv.delete();
src.delete(); M.delete();

modif.delete();

original.delete();

mat.delete(); dst.delete(); low.delete(); high.delete();
 dstv.delete(); low.delete(); high.delete();


}

