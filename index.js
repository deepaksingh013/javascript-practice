// console.log("hello world")

// function welcome(){
//     console.log("welcome")
// }
// function login(){
//     console.log("please log in")
// }

// let auth = true;

// auth ? welcome() : login()

// spread operator

// const numberone = [1,2,3,4]
// const numbertwo = [5,6,7,8]

// const combinenumber=[...numberone,...numbertwo]

// console.log(combinenumber)

// template literals

// let firstname= "deepak"
// let secondname = "singh"

// console.log(`${firstname}${secondname}`) 


// array destructuring

// const arr = [1,2,3,4]
// console.log(arr[0])

// new array structuring

// const vehicle = ["mehicl","hja","avdkjh"]
// const [,,bike] = vehicle;

// console.log(bike)


// const color = ["red","blue","pink"]
// const[car] = color
// console.log(car)


// array method

// join method
// var str = ["name","class","roll"]
// var str1 = str.join()
// console.log(str1)

// // split method

// var str = "dhsg jhdgi dgsig nsmbkja, sgyga"
// var arrd = str.split()
// console.log(arrd)


// concat method

// var fruit1 = ["avjh0","vjds","gsfxduyqa"]
// var fruit2 = ["ah0","vs","fxduyqa"]
// var fruit3 = ["wbdf","whfg"]

// var newfruit = fruit1.concat(fruit2,fruit3)

// console.log(newfruit)

// indexof and lastindexof


// var indexarr = ["one","two","three"]
// var newindex = indexarr.indexOf("two")

// console.log(newindex)

// var lastindex = ["one", "two","three","one"]
// var lastnewindex = lastindex.lastIndexOf("one")
// console.log(lastnewindex)

// splice


// var split = ["sjvdj","wdf","vgfdjs","qeyr"]
// var newspli = split.slice(1, 4)
// console.log(newspli)

// slice

// var slice = ["fruit","mango","mngo"]

// var newslice = slice.slice(0,1)


// console.log(newslice)



// lat var and const

// var varname = "djw mdvcbhvd bkwbdck"
//  varname = "djbfckjbwv ldknw"
// document.write(`variable---${varname}`)


// let letname = "jhjhwef"
// letname = "dvhbjhwdvf"
// document.write(letname)

// const constname = "ahnschjqa"
// //  constname = "shkbdfkjhsw".0.0
// document.write(constname)

// let fil = [1,2,3,4,6]
// let newfil = fil.filter(x=>x%2)
// document.write(newfil)

// array and array method


// const arr = ["banana","apple","grapes","guave"]

// console.log(arr)
// console.log(arr.push("gua"))

// const newarr = arr.pop()
// console.log(newarr)
// console.log(arr.length)


33// const twoarr = arr.push("kiwi")
// console.log(twoarr)

// const arrr = ["drr","gsfa"]
// arrr.push("hsdk")
// arrr.pop()
// console.log(arrr)

//  shift method
// remove first element of an Array

// const array = ["ghsdfju","jdvf","hdfia"]
// array.shift()
// console.log(array)

// const array = ["jdcvk" ,"shvd"]
// array.unshift("davgfj")
// console.log(array)



// const student = [
//     {
//         name:"depak",
//         class:11
//     },
//     {
//         name:"dep",
//         class:12
//     },
//     {
//         name:"dek",
//         class:14
//     },
//     {
//         name:"pak",
//         class:16
//     },


// ]

// const newarr = student.map()
// console.log(newarr)



// const num = [2,4,6,8]
// const newwarr = num.map(multiple=>{
//     return multiple * 2
// })

// console.log(newwarr)

// const sweetArray = [2, 3, 4, 5, 35]
// const sweeterArray = sweetArray.map(sweetItem => {
//     return sweetItem * 2
// })

// console.log(sweeterArray)

// const arry = [2,2,3,4,5]
// const newarry = arry.reduce((acc,curr)=>{
//     return acc + curr;
// })
// console.log(newarry)

// const divide = newarry/2

// console.log(divide)


// const product = [1,2,3,4,5,6]
// const newproduct = product.reduce((acc,sum)=>{
//     let avg = acc + sum
//     return avg / 2
// })

// console.log(newproduct)


// const arr = [1,2,3,4,5]
// const newarr = arr.length
// console.log(newarr)


// const indexarr = [1,2,3,4,5]
// const newindex = indexarr.lastIndexOf(4)
// console.log(newindex)

// const arr1 = ["avdk","avdja","jdgfjuq"]
// const arr2 = ["kdgkeiu","jagcdvj","qkjasbdkj"]
// const arr3 = ["kdeiu","jagcvj","qkjaskj"]

// const mergearr = arr1.concat(arr2,arr3)

// console.log(mergearr)



// const arry = ["ghgh","avjhv"]

// const newarr = arry.indexOf("ghgh",0)

// console.log(newarr)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const newfruit = fruits.pop();

// const newfruit = fruits.unshift("hds")
// console.log(fruits)

// let sum = 20
// const arry = [10,20,30]
// function myfunction(data){
//     sum += data
// }

// arry.forEach(myfunction)

// console.log(sum)

// let sum = 10;
// const arry = [10,20,30,40]

// arry.forEach((data)=>{
//     sum += data
// })

// console.log(sum)

// const numbers = [10,20,30,40]
// function myfunc(item,index,arr){
//     arr[index] = item*10
// }

// numbers.forEach(myfunc)


// console.log(numbers)
// let i = 0


// while(i<10){
//     console.log("helloworld")
//     i++;
// }


// let  i = 0
// do{
//     console.log("hello world")
//     i++;
// }while(i<5)

// oops in javascript


// object literals


// const book1 ={
//     title:"power of money",
//     author:"deepak singh",
//     year:2016,
//     getsummary: function(){
//         return `${book1.title} is written by ${book1.author} in ${book1.year}`
//     }
// }

// console.log(book1.getsummary())

// const book2 ={
//     title:"power of money",
//     author:"deepak singh",
//     year:2016,
//     getsummary: function(){
//         return `${book1.title} is written by ${book1.author} in ${book1.year}`
//     }
// }

// console.log(book2.getsummary())

// console.log(Object.values(book1))

// ------------------------------------


// const mystr = "hola amigo! [@[#blockchain](61) in @[#meta] (62)"

// const str1 = mystr.replace("[@[","")
// const str2 = str1.replace("](61)","")
// const str3 = str2.replace("@[","")
// const str4 = str3.replace("] (62)","")

// console.log("output:", str4)

// ------------------------

// const mystr = "hola amigo! [@[#blockchain](61) in @[#meta] (62)"
// const newstr = mystr.replace(/[^a-zA-Z0-9 ]/g, '')
// console.log(newstr)

// -----------------------------------------------------


// const mystr = "hola amigo! [@[#blockchain](61) in @[#meta] (62)"

// const newstr = mystr.split("[@[").join("").split("](61)").join("").split("@[").join("").split("] (62)").join("")
// console.log(newstr)

// ------------------------------------------------------

// const mystr = "hola amigo! [@[#blockchain](61) in @[#meta] (62)"

// let result = ""


// for(i=0;i<mystr.length;i++){
//     if(mystr[i] !== '@' ){
//         result += mystr
//     }
// }

// console.log(result)

// switch and break statement

// --------------------------------------
  

// const array = [1,2,3,[4,[5,6,7],8],9,10,11,12]


// const flatarray = array.flat(Infinity)
// console.log(flatarray)

// // length of an array

// const lenflatarray = flatarray.length/2


// console.log(lenflatarray)

// // adding slice in flat array

// const arr1 = flatarray.slice(0,lenflatarray)
// console.log(arr1)
// const arr2 = flatarray.slice(lenflatarray ,flatarray.length)
// console.log(arr2)

// const firstoutput = arr1.reduce((acc,curr)=>{
//     return acc + curr;
// })
// console.log(firstoutput)
// const secondoutput = arr2.reduce((acc,curr)=>{
//     return acc * curr
// })
// console.log(secondoutput)

// const answer = secondoutput / firstoutput

// console.log(answer)

// -----------------------------

// const array = [-1,2,-3,4,-5,6,-7,-8]
// const positivearray = array.filter((data)=>{
//     return data > 0
// })

// console.log(positivearray)

// const negativearray = array.filter((data)=>{
//     return data < 0 
// })

// console.log(negativearray)

// const firstouput = positivearray.reduce((acc,curr)=>{
//     return acc + curr
// })
// console.log(firstouput)

// const secondouput = negativearray.reduce((acc,curr)=>{
//     return acc + curr
// })

// console.log(secondouput)

// const answer = firstouput + secondouput

// console.log(answer)


//  question odd


// const array = [1,2,3,4,[5,[6,7],8],9,10,11,12,13,14,15]

// const flatarray = array.flat(Infinity)

// console.log(flatarray)

// const newlength = flatarray.length/2
// const roundlength = Math.round(newlength)
// console.log(roundlength)

// const arr1 = flatarray.slice(0, roundlength)
// console.log(arr1)

// const arr2 = flatarray.slice(roundlength,flatarray.length)
// console.log(arr2)

// const firstoutput = arr1.reduce((acc,curr)=>{
//     return acc + curr
// })

// console.log(firstoutput)

// const secondouput = arr2.reduce((acc,curr)=>{
//     return acc*curr
// })
// console.log(secondouput)

// const answer = secondouput / firstoutput
// console.log(answer)


//     ----------------------------------       coding problem
    
// for(i=1;i<=10;i++){
//     console.log(i)
// }

// for(i=0;i<100;i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }

// for(let i=1;i<=70;i++){
//     if(i%7==0){
//         console.log(i)
//     }
// }


//  for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         total = i * j
//         console.log(total)
//     }
//  }



// let sum = 0;
// for(i=1;i<=10;i++){
//     sum+=i
   
// }
// console.log(sum)


// let sum = 1;
// for(i=1;i<=10;i++){
//     sum*=i
   
// }
// console.log(sum)
// let sum = 0
// for(i=10;i<30;i++){
//     if(i%2==0){
//         console.log(i)
//         sum +=i;
       
//     }
  
// }
// console.log(sum)


// function myfunc(celcius){
//     let fetrinhite = (celcius * 1.8 )+32
 
//   console.log(fetrinhite)

// }
// myfunc(10)

// function myfunc(ferin){
//     let celcius = (ferin * 1.8) - 32
//     console.log(celcius)
// }
// myfunc(40)

// const array = [1,2,3,4,5,6,7,8,9,10]

// const newarray = array.reduce((acc,curr)=>{
//     return acc + curr
// })
// console.log(newarray)

// const array = [1,2,3,4,5,6,7,8,9,10]
// console.log(array.length)


// const newarray = array.reduce((acc,curr)=>{
//     return (acc + curr)
    
// })
// console.log(newarray/array.length)


// let fect = 5
// let start = 1
// for(let i=1;i<=fect;i++)
// {
//     start *= i
   
// }
// console.log(start)


// const array = [1,2,3,4,5]
// const newarray = Math.max(...array)
// console.log(newarray)

// prime no question

// for(i=0;i<100;i++){
//      if(i%i ==0 ){

//      }
// }

// question 1

// str = "enter a string count a string"
// arr = str.split("")
// // newarr = [...new Set(arr)]
// // document.write(newarr.length)
// console.log(arr)



// const val = document.querySelector("input").value;
// const newval = Math.max(val)
// function myfunc(){
//     var ans =document.getElementById("box").value
//     var newans = ans.length
//     document.getElementById("demo").innerHTML = newans

// }