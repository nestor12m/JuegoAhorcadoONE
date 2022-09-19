
function dibujarCanvas(){
    pincel.lineWidth = 8;
    pincel.lineCap ="round";
    pincel.lineJoin ="round";
    pincel.fillStyle ="#cccccc";
    pincel.strokeStyle = "#cccccc80;";

    pincel.fillRect(0,0,320,320);
    pincel.beginPath();
    // pincel.moveTo(25,200);
    // pincel.lineTo(50,200);
    // pincel.stroke();
    // pincel.closePath();
    console.log("RELIZADO")
}



function dibujar(){
    pincel.lineWidth = 4;
    pincel.lineCap ="round";
    pincel.lineJoin ="round";
    pincel.fillStyle ="#f3f5f6";
    pincel.strokeStyle = "#8a3871";
    
let anchura = 290/palabraSecreta.length;
for(i = 0;i < palabraSecreta.length;i++){
    pincel.moveTo(20 + (anchura *i),280);
    pincel.lineTo(50 + (anchura *i),280);
}
pincel.stroke();
    pincel.closePath();
}

