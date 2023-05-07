"use strict"

// Q.1 
function max(a,b){
    if( a> b){
        return a;
    }
    else{
        return b;
    }

}

// calling max function

console.log("Max: "+max(6,1));


function mycomparator(a,b){
    return a-b;
}

// Q.2
function maxofThree(...args){
    return args.sort(mycomparator).reverse()[0];

}

// Q.3
function isVowel(c){
    // convert the character uppercase or lowercase to reduce number of comparison
    switch(c.toLowerCase()){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
            break;
        default:
            return false;
    }
}

console.log("maxOfThree: "+ maxofThree(10,2,3));
console.log( "isVowel: " + isVowel('i'))

// Q.4 
function sum(args){
    sum=0;
    for(let i = 0; i< args.length; i++){
        sum+=args[i];
    }
    return sum;
}
function multiply(args){
    let mul = 1;
    for(let i = 0; i< args.length; i++){
        mul*=args[i];
    }
    return mul;
    }

console.log("sum: " + sum([1,2,3,4]))

console.log("multiply: " + multiply([5,2,3,4]))

// Q5.

// reversing using recusion
function reverseStr(s){
    if (s == "") return "";
    else return reverseStr(s.substr(1))+ s.charAt(0);
}

console.log("Reverse: " + reverseStr("jag testar"))

// Q.6
function findLongestWord(...args){

    return args.sort((a,b) => a.length - b.length).reverse()[0].length;
}


console.log("Longest Wold: " + findLongestWord('longest','word','in','array'));
// Q.7

function filterLongWords(args, i){
    return args.filter(x => x.length > i );
}

console.log("Filter LongestWord: " + filterLongWords(['longest','word','in','array'],4));


// Q.8
// const computeSumOfSquares = (...args) => args.reduce((a,b) => a + b**2,0);
function computeSumOfSquares(args){
    return args.reduce((a,b) => a + b**2,0);
}
console.log("SumofSquares: " + computeSumOfSquares([1,2,3]));


// Q.9 
function printOddNumbersOnly(...args){
    return args.filter(num => num % 2 !== 0);
    //oddNumbers.forEach(num => console.log(num));
}

console.log("OddNumbersOnly: " + printOddNumbersOnly(1,2,3,4,5,6,8).join(','));

// Q.10

function computeSumOfSquaresOfEvensOnly(numbers){
                
    // filter the evenNumbers
    const evenNumbers = numbers.filter(num => num % 2 == 0);

    // We can use the function computeSumOfSquares in Q.8

    return computeSumOfSquares(evenNumbers);
}

console.log("sumofSquaresOfEven" + computeSumOfSquaresOfEvensOnly([1,2,3,4]));



// Q.11
function sum1(...args){
    return args.reduce((a,b) => a+b);
    }

function multiply1(...args){
    return args.reduce((a,b) => a*b);
    }

   
console.log("sum: " + sum1(1,2,3));
console.log("multiply: " + multiply1(1,2,3));



function printFibo(n, a, b) {
    let fiboSequence = [];
  
    // Add the first two numbers to the sequence
    fiboSequence.push(a);
    fiboSequence.push(b);
  
    // Generate the rest of the sequence
    for (let i = 2; i < n; i++) {
      let nextNumber = fiboSequence[i - 1] + fiboSequence[i - 2];
      fiboSequence.push(nextNumber);
    }

    return fiboSequence.join(',');
  }
  console.log("printFibo(10,0,1): "+ printFibo(10,0,1));
  

