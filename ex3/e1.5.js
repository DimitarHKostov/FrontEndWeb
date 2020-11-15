const A = [10, 5, 13, 18, 51];

function filter(A){
    let newArr = [];
    for(let i = 0; i < A.length; i++){
        if(A[i]%3===0){
            newArr.push(A[i]);
        }
    }
    return newArr;
}