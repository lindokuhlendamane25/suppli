// function TriangleArea(){

/*const base = prompt("enter base");
const height = prompt("enter height");

const area = (base * height )/2;


console.log(`The area of the triangle is ${area}`); */


function triarea(side1,side2,side3){
  
   var parameters = (side1+side2+side3)
   var area = Math.sqrt(parameters*(parameters-side1)*(parameters-side2)*(parameters-side3));
      return area;
}
console.log(triarea(11,9,9));