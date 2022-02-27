let arrodd = [1,2,3,4,5,6,7,8];
let c = function(ary){
    for (let i = 0; i < ary.length; i++) {
        if(ary[i]%2!==0){
            console.log(ary[i]);
        }
    }
}
c(arrodd);
(function(a){
    for (let i = 0; i < a.length; i++) {
        if(a[i]%2!==0){
            console.log(a[i]);
        }
    }
})(arrodd);

let arrstr = ["raj", "cap", "ironman", "thor", "superman", "batman"];
let funstrup = function(str){
    str.map(e => {
       let b = e[0].toUpperCase()+e.substr(1).toLowerCase()
        console.log(b);
        }
        )
}
funstrup(arrstr);
(function(a){
    a.map(e => {
        let b = e[0].toUpperCase()+e.substring(1).toLowerCase()
         console.log(b);
         }
         )
})(arrstr);

arrsum = [1,2,3,4,5,6];
let sumadd = function(ad){
    let a = ad.reduce((a,b) => a+b);
    console.log(a);
};
sumadd(arrsum);
(function(a){
        let b = arrsum.reduce((a,b) => a+b);
        console.log(b);
})(arrsum);

let prime = function(p){
    let a = p.filter((n) => {
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
          }
          return true;
    })
    console.log(a);
}
let arrprm = [1,2,3,4,5,6,7,8,9];
prime(arrprm);
(function(a){
    let b = a.filter((n) => {
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
          }
          return true;
    })
    console.log(b);
})(arrprm);

let paliarr = ["rotor","radar","madam","token","racecar","good"];
let palindrm = function(p){
    let a = p.filter(el => {
        for(let i = 0 ; i < el.length/2 ; i++){
            if(el[i] !== el[el.length-1-i]){
                return false
            }
        }return true
    });
    console.log(a);
}
palindrm(paliarr);
(function(p){
    let a = p.filter(el => {
        for(let i = 0 ; i < el.length/2 ; i++){
            if(el[i] !== el[el.length-1-i]){
                return false
            }
        }return true
    });
    console.log(a);
})(paliarr);

let getMedian =function(ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
 
    
    for (count = 0; count <= n; count++)
    {
       
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
 
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log("Median is "+ getMedian(ar1, ar2, n1));
else
    console.log("Doesn't work for arrays of unequal size");
(function(ar1,ar2,n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
 
    
    for (count = 0; count <= n; count++)
    {
       
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
})(ar1, ar2, n1) ;


let duparr = [1,2,3,1,2,"a","b","c","a","b"];
function uniq(a) {
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
}
console.log(uniq(duparr));
(function(a){
    console.log( a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1]
     }));
})(duparr);


let rotate = function(a,n){
    let l;
    for(let i = 0; i<n ; i++){
        l = a[a.length-1];
        a.pop()
        a.unshift(l);
    }console.log(a);
}
let arrrot = [1,2,3,4,5,6]
let k = 2;
rotate(arrrot,k);
(function(a,n){
    let l;
    for(let i = 0; i<n ; i++){
        l = a[a.length-1];
        a.pop()
        a.unshift(l);        
    }console.log(a);
})(arrrot,k);

