const A = [10, 5, 13, 18, 51];

function existEven(Array){
    for(let i = 0; i < Array.length; i++){
        if(Array[i]%2===0){
            return true;
        }
        return false;
    }
}

console.log(existEven(A));

let B = [];

for(let i = 0; i < A.length; i++){
    B.push(2*A[i]);
}

console.log(existEven(B));