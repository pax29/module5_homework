let arr=[true, 'string', 123, false, null];

for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
}

arr.forEach(function(item, index, array) {

    console.log(item)

});
