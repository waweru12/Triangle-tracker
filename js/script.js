function mefun() {
 var gain1=document.getElementById("face1").value;
 var gain2=document.getElementById("face2").value;
 var gain3=document.getElementById("face3").value;

 var no1=parseFloat(gain1);
 var no2=parseFloat(gain2);
 var no3=parseFloat(gain3);

 if (no1<=0){
  alert("Side one cannot be less than zero.Can't be a triangle")
}else if (no2<=0) {
  alert("Side two cannot be less than zero.Can't be a triangle")
}else if(no3<=0) {
   alert("side three cannot be less than zero.Can't be a triangle")
 }else if(no1===no2 && no1===no3) {
alert("Equilateral")
} else if(no1===no2||no2===no3){
alert("isoscelles")
} else if(no1===no3){
alert("Isoscelles")
} else{
alert("scalene")
 }
}
