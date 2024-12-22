// *********************** task1 **************

console.log("**********Task 1 *********")
function except_2_parameters(a,b){
     if(arguments.length !== 2){
          console.log('you should pass 2 argument only ;')
     }else{
     console.log(`accept arguments ${a} , ${b} `)
     }
}

except_2_parameters(1);
except_2_parameters(4,5);
except_2_parameters(4,7,9,8);
console.log("**********Task 2 *********")

// *********************** task2 **************



function  add_n_values(...n){
    let sum=0;
    for(let i=0; i< n.length; i++){
        if(isNaN(n[i])){
            console.log("You should Enter Numeric Values");
            break;
        }else{
             sum += n[i];
        } 
    }
   
    console.log(sum)
} 

add_n_values(7,5,8);
add_n_values('k',2,7);
console.log("**********Task 3 *********")



// *********************** task3 **************

function inputReverse(...input){
    return input.reverse();
}

console.log(inputReverse(2,4,7,9))
console.log(inputReverse("A","b","c","d"));
console.log("**********Task 4 *********")


// *********************** task4 **************

function isPrime(num){
    if(num <= 1){return false;};
    if(num == 2){return true};
    if(num % 2 == 0){return false}; 
    for(let i=3 ; i <= Math.sqrt(num) ; i += 2){
        if(num % i === 0){
            return false;
        }
    }  
    return true;
}

console.log(isPrime(5));
console.log(isPrime(3));
console.log(isPrime(1));
console.log(isPrime(17));



