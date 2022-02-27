let arrodd = [1,2,3,4,5,6,7,8];
let c = (ary)=>{
    for (let i = 0; i < ary.length; i++) {
        if(ary[i]%2!==0){
            console.log(ary[i]);
        }
    }
}
c(arrodd);
((a)=>{
    for (let i = 0; i < a.length; i++) {
        if(a[i]%2!==0){
            console.log(a[i]);
        }
    }
})(arrodd);


let arrstr = ["raj", "cap", "ironman", "thor", "superman", "batman"];
let funstrup = (str)=>{
    str.map(e => {
       let b = e[0].toUpperCase()+e.substr(1).toLowerCase()
        console.log(b);
        }
        )
}
funstrup(arrstr);
((a)=>{
    a.map(e => {
        let b = e[0].toUpperCase()+e.substring(1).toLowerCase()
         console.log(b);
         }
         )
})(arrstr);


arrsum = [1,2,3,4,5,6];
let sumadd = (ad)=>{
    let a = ad.reduce((a,b) => a+b);
    console.log(a);
};
sumadd(arrsum);
((a)=>{
        let b = arrsum.reduce((a,b) => a+b);
        console.log(b);
})(arrsum);


let prime = (p)=>{
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
((a)=>{
    let b = a.filter((n) => {
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
          }
          return true;
    })
    console.log(b);
})(arrprm);


let paliarr = ["rotor","radar","madam","token","racecar","good"];
let palindrm = (p)=>{
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
((p)=>{
    let a = p.filter(el => {
        for(let i = 0 ; i < el.length/2 ; i++){
            if(el[i] !== el[el.length-1-i]){
                return false
            }
        }return true
    });
    console.log(a);
})(paliarr);
