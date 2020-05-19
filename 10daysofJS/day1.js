'use strict';

Process.stdin.resume();
Process.stdin.setEncoding('utf-8');

let inputString = '';
let curretnLine = 0;

process.stdin.on('data', inputStdin =>{
    inputString += inputStdin; 
});

process.stdin.on('end', _ =>{
    inputString = inputString.trim().split('\n').map(string=>{
        return string.trim();
    });
    main();
});

function readLine(){
    return inputString[currentLine++];
}

function performOperation(secondInteger, secondDecimal, secondString){
    const firstInteger = 4;

    cont firstDecimal = 4.0;

    const firstString = 'HackerRank ';

    //console.log(seocndDecimal + Number(firstDecimal));
    //console.log(firstString + secondString)'

    var intSum = firstInteger +Number(secondInteger); 
    var decSum = firstDecimal + Number(secondDecimal); 
    var strSum = firstString.concat(secondString); 

    console.log(intSum);
    console.log(decSum);
    console.log(strSum)

}
function main(){
    const secondInteger = readLine();
    const secondDecimal = readLine();
    const secondString = readLine();

    performOperation(secondInteger, secondDecimal, secondString);
    
}