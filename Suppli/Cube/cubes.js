function cubes(a){
    return a*a*a;
}
console.log(cubes); //this wont return the correct answer as this function cubes() requires a parameter. 
//the solution should look something like the below. Also the only thing that was incorrect about the question was the spelling of return

function cubes1(a){
return a**3 ;
}

cubes1(3);
console.log(cubes1(3));
