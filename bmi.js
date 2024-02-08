var calculate = document.getElementById('cal');


calculate.addEventListener('click',cal_bmi);


function cal_bmi(bmi,hg,wg){
   
 hg= document.getElementById('hg').value;
wg= document.getElementById('wg').value;
    
   hg/=100;

   bmi = (wg / (hg * hg));
   
   
   //If Condition
   if(bmi < 18.5){
     
       alert(bmi +" Underweight");
   }
   
   if(bmi >= 18.5 && bmi < 25){
       
       alert(bmi +" Normal");
   }
   
   if(bmi >= 25 && bmi < 30){
       
       alert(bmi +" Overweight");
   }
   
   if(bmi >= 30){
       
       alert(bmi +" Obese");
   }
   
}
