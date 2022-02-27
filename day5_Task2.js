
function addFive(num){
    return num+5; 
}
var result = addFive(5);
console.log(result);

function getOpposite(num) {
    if(num === Number(num) && num%1==0 && num >= 0){
        return (-num);
    }else if(num === Number(num) && num < 0 && ((num%1 === 0 && num === Number(num)))){
        return (-num);
    }else if(num === String || (num%1 !== 0 && num === Number(num))){
        return -1
    }
}
var result = getOpposite(-5.5)
console.log(result);


var min = 5;
function toSeconds(min) {
    return min*60
}
var secs = toSeconds(min)
console.log(secs);


var mystr = "5";
function toInteger(mystr) {
    return Number(mystr)
}
var myint = toInteger(mystr)
console.log(myint);


var myint1 = 0;
function nextNumber(myint) {
    return myint + 1
}
var myNextint = nextNumber(myint1)
console.log(myNextint);


var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0]
}
var data = getFirstElement(arr)
console.log(data);


var h2s = 10;
function hourToSeconds(arr) {
    return arr * 60 * 60
}
var hour = hourToSeconds(h2s)
console.log(hour);


function findPerimeter(num1,num2) {
    return ((num1 * num2)/2)
}
var peri = findPerimeter(6,7)
console.log(peri);


function lessThan100(num1,num2) {
    return (num1+num2) < 100
}
var res = lessThan100(22,15)
console.log(res);


function remainder(num1,num2) {
    return num1 % num2
}
var rem = remainder(1,3)
console.log(rem);


function CountAnimals(tur,horse,pigs) {
    return ((tur*2)+(horse*4)+(pigs*4))
}
var legs = CountAnimals(2,3,5)
console.log(legs);


function frames(num1,num2) {
    return (num1*60)*num2
}
var fps = frames(1,2)
console.log(fps);


function divisibleByFive(num1) {
    return num1 % 5 == 0
}
var divisible = divisibleByFive(5)
console.log(divisible);


function isEven(num){
    
    if(num !== Number(num)){
        return false
    }
    return num%2==0    
   }
   var even = isEven(4)
   console.log(even);


   function areBothOdd(num1, num2){
    return num1%2!=0 && num2%2!=0
   }
   var bothOdd = areBothOdd(1,5)
   console.log(bothOdd);


   function getFullName(firstName, lastName){
       if((firstName === String(firstName) && lastName === String(lastName)) && firstName != "" && lastName != ""){
            return firstName + ` ` + lastName
       }else if(firstName === String(firstName) && lastName === "" ){
           return firstName
       }else if(firstName === "" && lastName === String(lastName)){
           return lastName
       }else if(firstName === "" && lastName === ""){
           return `""`
       }
    }
    
   var fullName = getFullName("Guvi","Geek")
   console.log(fullName);


   function getLengthOfWord(word1){
    if(word1 === String(word1)){
        return word1.length
    }else if(word1 === ""){
        return 0
    }else if(word1 === undefined || word1 === +word1){
        return -1
    } 
   }
   var getLen = getLengthOfWord("Guvi")
   console.log(getLen);


   function isSameLength(word1, word2){
    return word1.length === word2.length
   }
   var isLengt = isSameLength("guvi","geek")
   console.log(isLengt);


console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
 var a = x1 - x2;
 var b = y1 - y2;
 return Math.sqrt(a*a + b*b)
}


function getNthElement(array,n){
    return array[n]
}
console.log(getNthElement([1,3,5],1));


function getLastElement(array){
return array.length === 0 ? -1 : array.length
}
console.log(getLastElement([]));


var obj = {
mykey: "value"
};
function getProperty(obj, key) {
console.log(obj[key]);
}
getProperty(obj,'dummykey')


var obj1 = {
mykey: "value"
};
function addProperty(obj, key){
console.log(obj[key]=true);
}
addProperty(obj1,"mykey")


var obj2 = {
name: "value"
};
function removeProperty(obj, key){
return delete obj[key] ? undefined:obj[key]
}
console.log(removeProperty(obj2, "name"));



var arrpos = [-5,10,-3,12,-9,5,90,0,1];
let ar2 = function countPostivesSumNegatives(arr){
    let a = []
    let b = []
    let c = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>0){
            a.push(arr[i])
        }else{
            b.push(arr[i])
        }
    }
    c.push(a.length)
    c.push(b.reduce((a,b) => a+b))
    
    return c
}
console.log(ar2(arrpos));


function getPositives(ar)
{
    let a = []; 
    for(let i = 0; i < ar.length; i++){
        if(ar[i]>0){
            a.push(ar[i])
        }
    }
    return a
}
var aronpos = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var aronpos2 = getPositives(aronpos);
console.log(aronpos2);


function powersOfTwo(n){
    let res = [];
    for(let i = 0 ; i<=n ; i++){
        res.push(2**i)
    }
    return res.join(",");
}
let c = powersOfTwo(2)
console.log(c);


function findMax(ar)
{
    return Math.max(...(ar))
}
var armax = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(armax);
console.log("Max: ", max);



printPrimes(100);
function printPrimes(nPrimes)
{
 var n = 0;
 var i = 2;
 
 while(n < nPrimes)
 {
 if (isPrime(i))
 {
 console.log(n, " → ", i);
 n++;
 }
 
 i++;
 }
}

getPrimes(10, 100)
function getPrimes(nPrimes, startAt)
{
    let a =[];
for(let i = 0 ; i < nPrimes ; i++){
if(isPrime(startAt)==false){
    i--
}else{
    a.push(startAt)
}
startAt += 1;
}
console.log(a);
}
function isPrime(n)
{
    for(let i = 2 ; i < n/2 ; i++){
        if(n%i===0){
            return false
        }
    }
    return n>1
}


var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   return s.split("").reverse().join("")
}


var armer1 = [1, 2, 3];
var armer2 = [4, 5, 6];
var armerge = mergeArrays(armer1, armer2);
console.log(armerge);
function mergeArrays(ar1, ar2)
{
 var result = [];

for(let el of ar1)
 {
 result.push(el);
 }
 for(let i in ar2){
     result.push(ar2[i])
 }
 return result;
}



console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
  return s.split(",").map(Number).reduce((a,b)=> a+b)
}