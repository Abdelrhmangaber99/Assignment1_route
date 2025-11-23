console.log('1/Convert the string "123" to a number and add 7.')
console.log("=====================================================")
let str='123'
let number=parseInt(str)
number+=7
console.log(number)

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

function checkValue2(value) {
  if (values.includes(value) || Number.isNaN(value)) {
    return "Invalid";
  }
  return "Valid";
}
console.log(checkValue2(null));    
console.log(checkValue2("hello")); 

console.log("=====================================================")
console.log('3/Use for loop to print all numbers between 1 and 10, skipping even numbers using continue')
console.log("=====================================================")
for(i=1;i<=10;i++){
    if(i%2==0){
continue
    }
    console.log(i)
}

console.log("=====================================================")
console.log('4/Create an array of numbers and return only the even numbers using filter method.')
console.log("=====================================================")
let arr=[1,2,3,4,5]
let ans=arr.filter(function(num){
return num%2==0;
});
console.log(ans)

console.log("=====================================================")
console.log('5/Use the spread operator to merge two arrays, then return the merged array.')
console.log("=====================================================")
let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=[...arr1,...arr2]
console.log(arr3)

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
let arrStr=['a','ab','abc']
let len=arrStr.map(str=>str.length)
console.log(len)
//طريقه تانية
let lenStr=[]
for(i=0;i<arrStr.length;i++){
    lenStr.push(arrStr[i].length)
}
console.log(lenStr)

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
const user={
    name:"john",
    age:25
}
const{name,age}=user
console.log(name + " is " + age + " years old");
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
console.log('13/Write a function to find the largest number in an array.')
console.log("=====================================================")
let arr5=[1,2,3,4,5,6,-1]
let maxNumber=-Number.MIN_VALUE
for(i=0;i<arr5.length;i++){
if(maxNumber<arr5[i]){
    maxNumber=arr5[i]
}
}
console.log(maxNumber)
console.log("=====================================================")
console.log("14/Write a function that takes an object and returns an array containing only its keys.")
console.log("=====================================================")
let obj={
    name:"john",
    age:25
}
let objArr=[]
let ans2=[]
objArr.push(...Object.keys(obj))
console.log(objArr)
console.log("=====================================================")
console.log("15/Write a function that splits a string into an array of words based on spaces.")
console.log("=====================================================")
let s="The quick brown fox"
console.log(s.split(" "))
console.log("=====================================================")
console.log("15/Write a function that splits a string into an array of words based on spaces.")
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
