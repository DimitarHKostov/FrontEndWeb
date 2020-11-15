const A = [10, 5, 13, 18, 51];

function filter(A){
    var res = [];

    for(let i = 0; i < A.length; i++){
        if(A[i] % 2 === 0){
            res.push(A[i]);
        }
    }

    return res;
}

arr = filter(A);

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}