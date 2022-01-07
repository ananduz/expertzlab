function greetings(msg,date){
    alert("hello all"+msg+"dated"+date)
}
//greetings("welcome","2022-01-01")
//greetings("gd mrng","2022-01-01")
let x1=100;let x2=50
function add(a,b){
    let sum=a+b
    console.log("sum=",sum);
    return sum
}
function avg(a,b,c){
    
    let av=(a+b+c)/3
    console.log("avg=",av);
    return av

}
avg(5,2,3)

Num=prompt("enter a number")
function isEven(){
    if (Num%2==0){
        document.write("true");

    }else{
        document.write("false");
    }
}
isEven()
 function setalert(){
     alert("click the button")
 }