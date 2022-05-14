// var a=2;
// var b=7;
// document.write(a+b*a-b);
// 
function add(){
    let a=6; 
    let b=3;
    let z=a+b;
    console.log(z);
}
function sub(){
    let a=6;
    let b=8;
    let z=a+b-a;
    document.write(z);
}
// 
const f = "Hello javascript";
let g = 34
let c = true
let d = ["(hello , yes)"];
let e = {
    firstname: ("Demo"),
}
document.write(d);
document.write(typeof d);
console.log(d);
console.log(typeof c);
// 
let q=3
let w=3
if(q==0){
    alert('true');
}else if(w==5){
    alert('ok');
}else {
    alert('false');
}
// 

    function add(){
        var x=3;
        var y=5;
        var z=x+y;
        document.write(z);
    }
    function sub(){
        var x=4;
        var y=6;
        var z=x-y;
        document.write(z);
    }
    function mul(){
        var x=1;
        var y=8;
        var z=x*y;
        document.write(z);
    }
    function divide(){
        var x=3;
        var y=5;
        var z=x/y;
        document.write(z);
    }
    function mode(){
        let x=3;
        let y=5;
        let z=x%y;
        document.write(z);
        
    }
    function pow(){
        let x=3;
        
        let z=Math.pow(x,2);
        document.write(z);
    }
    function exponent(){
        let x=3;
        
        let z=x**2;
        document.write(z);
    }
// 
let m=prompt("Enter Your Total Number");
let n=prompt("Enter Your Total Number");
m=parseInt(m);
n=parseInt(n);
let result=n/m*100;
if (result>33){
    document.write("pass")
}else{
    document.write("fail")
}
document.write(n/m*100);
document.write(typeof m);
document.write(typeof n);
let day = prompt("ENTER DAY NUMBER");
    day = parseInt(day);
    switch (day) {
        case 1:
            document.write("Monday");
            break;
        case 2:
            document.write("Tuesday");
            break;
    }
    // 