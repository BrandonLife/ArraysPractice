function main(inputArray){
let numberArray=[]
let letterArray=[]
for(let i=0; i<inputArray.length; i++){
    if(typeof inputArray[i] === "number"){
        numberArray.push(inputArray[i])
    }else{
        letterArray.push(inputArray[i])
    }
}
console.log(numberArray)
console.log(letterArray)

}

main([1, "2", 3, "4", 5, "6"])