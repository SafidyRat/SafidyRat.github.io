

function line_cleanign(kh,khrepaire,kv,kvrepair,line_withd){

    let mat = cv.imread(imgElement);
    let original = cv.imread(imgElement);

let src = mat;
let M = new cv.Mat();

let contours = new cv.MatVector();
let hierarchy = new cv.Mat();
let hierarchymodif = new cv.Mat();
let poly = new cv.MatVector();
let dst = new cv.Mat();

  //gray conversion

  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY);

/// BINARY INVERSION

let modif = new cv.Mat();

cv.adaptiveThreshold(src, dst, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY_INV, 21 ,25);


//save to modif for display result later
cv.adaptiveThreshold(src, modif, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY_INV, 21 ,25);

    //python: horizontal_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (50,1))
/*let ksize = new cv.Size(20, 1); //horizontale kernel
let ksize2 = new cv.Size(1000, 1);// repare breaking horizontal line*/

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

cv.imshow('canvasOutput2', dst);


cv.findContours(dst, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

    // draw contours with random Scalar
for (let i = 0; i < contours.size();++i) {
    let color = new cv.Scalar(0,0,0);
    //cv.drawContours(modif, contours[0], i, color, 1, 8, hierarchy, 1);
    cv.drawContours(modif, contours, i, color,1.8,cv.LINE_8, hierarchy, 1);
}


/////VERTICAL CLEANING
let contoursv = new cv.MatVector();
let contourmodif = new cv.MatVector();
let hierarchyv = new cv.Mat();
let polyv = new cv.MatVector();
let dstv = new cv.Mat();

cv.adaptiveThreshold(src, dstv, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY_INV, 21 ,25);

//python: horizontal_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (50,1))
/*let ksizev = new cv.Size(1,20 ); //horizontale kernel
let ksize2v= new cv.Size(1,1000);// repare breaking horizontal line**/

let ksizev = new cv.Size(1,kv ); //horizontale kernel
let ksize2v= new cv.Size(1,kvrepair);


Mv = cv.getStructuringElement(cv.MORPH_RECT , ksizev);


//python: detected_lines = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, horizontal_kernel, iterations=2)
let anchorv = new cv.Point(-1, -1);

cv.morphologyEx(dstv, dstv, cv.MORPH_OPEN, Mv, anchorv, 1);


// Repair  vertical lines
let repair_kernelv = new cv.Mat();
let dst2v = new cv.Mat();

repair_kernelv = cv.getStructuringElement(cv.MORPH_RECT, ksize2v);
cv.morphologyEx(dstv,dstv,cv.MORPH_CLOSE, repair_kernelv, anchorv, 1);

cv.imshow('canvasOutput3', dstv);


cv.findContours(dstv, contoursv, hierarchyv, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

    // draw contours with random Scalar
for (let i = 0; i < contoursv.size();++i) {
    let color = new cv.Scalar(0,0,0);
    //cv.drawContours(modif, contours[0], i, color, 1, 8, hierarchy, 1);
    /*cv.drawContours(modif, contoursv, i, color,1,cv.LINE_8, hierarchyv, 1);*/
    cv.drawContours(modif, contoursv, i, color,line_withd,cv.LINE_8, hierarchyv, 1);
}

/////////////////////////////Finding all concour on modif
let kernelmodif= new cv.Size(2,2);
let anchormodif = new cv.Point(-1, -1);
repair_kernelmodif = cv.getStructuringElement(cv.MORPH_RECT, kernelmodif);
cv.morphologyEx(modif,modif,cv.MORPH_CLOSE,repair_kernelmodif, anchormodif, 1);

cv.findContours(modif, contourmodif, hierarchymodif, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

console.log("contourmodif: "+contourmodif.size());
console.log("contourv: "+contoursv.size());

cv.cvtColor(src, src, cv.COLOR_GRAY2RGB);
var index=0;
var perimeter=[];

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
if(bigest>=1000)
    cv.drawContours(src, contourmodif, i, color2,1,cv.LINE_8, hierarchymodif, 100);
  
}

console.log("perimetre max: " + perimeter);

cv.imshow('canvasOutput', src);




// Update the current slider value (each time you drag the slider handle)



contours.delete(); hierarchy.delete();
contoursv.delete(); hierarchyv.delete();

src.delete(); M.delete();

modif.delete();

original.delete();

mat.delete(); dst.delete(); low.delete(); high.delete();
 dstv.delete(); low.delete(); high.delete();


}

