console.log('1/Convert the string "123" to a number and add 7.')
console.log("=====================================================")
function parseToInt(str){
let number=parseInt(str)
number+=7
return number
}
let str='123'
console.log(parseToInt(str))

console.log("=====================================================")
console.log('2/Check if the given variable is falsy and return "Invalid" if it is.')
console.log("=====================================================")
function checkValue(value) {
  if (!value) {
    return "Invalid";
  }
  return "Valid";
}
console.log(checkValue(null));    // Invalid
console.log(checkValue("hello")); 
//طريقة تانية
let values = [false, 0, "", null, undefined];
let x
function checkValue2(value) {
  if (values.includes(value) || Number.isNaN(value)) {
    return "Invalid";
  }
  return "Valid";
}
console.log(checkValue2(null));  
console.log(checkValue2(x))  
console.log(checkValue2("hello")); 

console.log("=====================================================")
console.log('3/Use for loop to print all numbers between 1 and 10, skipping even numbers using continue')
console.log("=====================================================")
function range(){
for(i=1;i<=10;i++){
    if(i%2==0){
continue
    }
    console.log(i)
}
}
range()

console.log("=====================================================")
console.log('4/Create an array of numbers and return only the even numbers using filter method.')
console.log("=====================================================")
function evenNum(arr){
let ans=arr.filter(num=>num%2==0);
return ans
}
let arr=[1,2,3,4,5]
console.log(evenNum(arr))

console.log("=====================================================")
console.log('5/Use the spread operator to merge two arrays, then return the merged array.')
console.log("=====================================================")
function mergeArr(arr1,arr2){
let arr3=[...arr1,...arr2]
return arr3
}
let arr1=[1,2,3]
let arr2=[4,5,6]
console.log(mergeArr(arr1,arr2))

console.log("=====================================================")
console.log('6/Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday).')
console.log("=====================================================")
function getDay(num) {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day number";
  }
}
console.log(getDay(1)); 
console.log(getDay(5)); 
console.log(getDay(0)); 

console.log("=====================================================")
console.log('7/Create an array of strings and return their lengths using map method')
console.log("=====================================================")
function lenStr(arrStr){
let len=arrStr.map(str=>str.length)
return len
}
let arrStr=['a','ab','abc']
console.log(lenStr(arrStr))
//طريقه تانية
function lenStr2(arr){
let listStr=[]
for(i=0;i<arr.length;i++){
    listStr.push(arr[i].length)
}
return listStr
}
console.log(lenStr2(arrStr))

console.log("=====================================================")
console.log('8/Write a function that checks if a number is divisible by 3 and 5.')
console.log("=====================================================")
function check(num){
if(num%3==0&&num%5==0){
    return('Divisible by both')
}
else{
    return("not Divisible by both")
}
}
console.log(check(15))
console.log(check(20))
console.log("=====================================================")
console.log('9/Write a function using arrow syntax to return the square of a number')
console.log("=====================================================")
const square=(num)=>{
    return num*num
}
console.log(square(5))
console.log(square(20))
console.log("=====================================================")
console.log('10/Write a function that destructures an object to extract values and returns a formatted string.')
console.log("=====================================================")
function dest(obj){
const{name,age}=obj
console.log(name + " is " + age + " years old");
}
const user={
    name:"john",
    age:25
}
dest(user)
console.log("=====================================================")
console.log("11/Write a function that accepts multiple parameters (two or more) and returns their sum.")
console.log("=====================================================")
function sum(...numbers){
        let sumOfNumbers=0
for (let num of numbers){
    sumOfNumbers+=num;
}
    return sumOfNumbers
}
console.log(sum(1,2,3,4))

console.log("=====================================================")
console.log("12/Write a function that splits a string into an array of words based on spaces.")
console.log("=====================================================")
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
async function createDelayedMessage() {
  await delay(3000); 
  return 'Success';
}
createDelayedMessage().then(message => console.log(message));
console.log("=====================================================")
console.log('13/Write a function to find the largest number in an array.')
console.log("=====================================================")
let arr5=[1,2,3,4,5,6,-1]
function maximunNum(arr){
  let maxNumber=-Number.MIN_VALUE
for(i=0;i<arr.length;i++){
if(maxNumber<arr[i]){
    maxNumber=arr[i]
}
}
return maxNumber
}
console.log(maximunNum(arr5))

console.log("=====================================================")
console.log("14/Write a function that takes an object and returns an array containing only its keys.")
console.log("=====================================================")
function objKey(obj){
let objArr=[]
objArr.push(...Object.keys(obj))
return objArr
}
let obj={
    name:"john",
    age:25
}
console.log(objKey(obj))

console.log("=====================================================")
console.log("15/Write a function that splits a string into an array of words based on spaces.")
console.log("=====================================================")
function splitStr(str){
return str.split(" ")
}
let s="The quick brown fox"
console.log(splitStr(s))
console.log("=====================================================")

