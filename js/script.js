function mefun() {
 var gain1=document.getElementById("face1").value;
 var gain2=document.getElementById("face2").value;
 var gain3=document.getElementById("face3").value;

 var no1=parseFloat(gain1);
 var no2=parseFloat(gain2);
 var no3=parseFloat(gain3);

 if (no1<=0){
  alert("It can't be a triangle if face one is less than zero." )
}else if (no2<=0) {
  alert("It can't be a triangle if face two is less than zero.")
}else if(no3<=0) {
   alert("It can't be a triangle if face three is less than zero.")
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
