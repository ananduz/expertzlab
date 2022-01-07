let s=new String("javascript")
let x=s.valueOf()
console.log(typeof x,x)
console.log(typeof (s));
let i=new Number(123)
let i1=i.valueOf()
console.log(i1,typeof(i1));
let str="hello"
str.toUpperCase()
let s1="       javascript is interpreted    "
console.log(s1.length);
S2=s1.trim()
console.log(S2.length);
let word="hello world"
for(let letter of word){
    console.log(letter);
}
for(let index in word ){
    console.log(index);
}
let sub_str=word.substring(0,8)
console.log(sub_str);
console.log(word.charAt(6));
console.log(word[5]);
console.log(word.indexOf("l"));
console.log(word.lastIndexOf("l"));
console.log(word.indexOf("l",3));
sub_str=word.slice(2, 8)
console.log(sub_str)
function check1A(){
    let stmt=document.getElementById("stmt").value
   let letter=document.getElementById("letter").value
    let  start=stmt.indexOf(letter)
    let last=stmt.lastIndexOf(letter)
        if (start !=last){
            let str ="the letter ${leter} is present at index Number ${start},"
            let index;
            for(leti=start+1;i<last-1;i++){
                index=stmt.indexOf(letter,i)
                console.log(index);
                if(index != -1){
                    str+= index+ ',$(last),'
                }
            }
            document.getElementById("p1").innerText=str
        }else{
            document.getElementById("p1").innerText='the letter ${letter} is a present at index number ${start}'

        }
}