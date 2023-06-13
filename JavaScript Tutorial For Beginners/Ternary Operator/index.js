let adult = checkAge(21);
console.log(adult);

/*
function checkAge(age){
   if (age >= 18) {
      return true;
   }
   else{
      return false;
   }
}
*/
function checkAge(age){
   return age >= 18 ? true : false;
}