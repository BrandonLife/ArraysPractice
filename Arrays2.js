function main(inputArray){

let nextSeq = undefined
while(nextSeq!=="Hello"){
nextSeq = inputArray.shift()

console.log(nextSeq)
}


}

main([1,2,3,4,5,6,7,8, "Hello"])