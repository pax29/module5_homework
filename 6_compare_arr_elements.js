let arr= [1,1,1,2,1];
let allthesame=true;

for (let i=0; i<arr.length-1; i++) {
    if (arr[i] != arr[i+1]) {
        allthesame = false;
        break
    }
}

console.log (allthesame);