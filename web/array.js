let arr=[]
console.log(arr,typeof arr);
let arr1=new Array()
console.log(arr1,typeof arr1);
let names=["anandu","nandu","egfr"]
console.table(names);
console.log(names.length);
for(let name of names){
    console.log(names);
}
console.log(names[0]);
console.log("***********************");
for(let index in names){
    console.log(index);
    console.log(names[index]);
}
names.push("anandu")
console.log(names);
let d=names.pop()
console.log(d);
console.log(names);
names.unshift("djuh")
console.log(names);
names.shift()
console.log(names);
let names_new=names.concat(["uqad","sydh","sdwd","ewef"])
console.log(names_new);
 names_new.splice(3,2)
console.log(names_new);
names_new.splice(4,1,"dufe")
console.log(names_new);
names_new[6]="ben"
names_new[3]="chotta"
console.log(names_new)
console.log(names_new.indexOf("juggu"))
console.log(names_new.includes("uqad"));
names_new.sort()
console.log(names_new);
names_new.reverse()
console.log(names_new);
