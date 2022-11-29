// var a = 10;
// function sum (b){
//     console.log(a+b)
// }
// sum(12);

var myObject = {
    foo: "bar",
    func: function() {
    var self = this;
    console.log("outer func: this.foo = " + this.foo);// 
    console.log("outer func: self.foo = " + self.foo);
    (function() {
    console.log("inner func: this.foo = " + this.foo);
    console.log("inner func: self.foo = " + self.foo);
    }());
    }
    };
    myObject.func();


// function close() {
//     var a = 10 ;
//     function sum(){
//         var b = 50;
//         function sub(){
//             console.log(a,b)
//         }
//     }
// }

// const arr = [1,2,3,4];
// arr.push(5);
// console.log(arr);
// arr = [10,20,30]
// console.log(arr)

// var promise = new Promise(reslove,reject){
    
// }
// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//     var a = 0
// setTimeout(function() {
    
// console.log('Index: ' + a + ', element: ' + arr[a]);
//   a++
// }, 3000);
// console.log(arr[i])
// }
// router.get('/book/:id', (req,res) => {console.log('a')}) 

// router.get('/book/author/:id', (req,res) => {console.log('b')})

// auth= app.use((req,res,next)=>{
//     try {
//         next()
//     } catch (error) {
        
//     }
// })

// .use("/user",auth,userController)
//Return an array including only prime numbers, from a given array.
//

// function prime(arr){
//     let arr_n = []
    
//     for(let b=0;b<arr.length;b++){
//         let count = 0;
//     for(let a=2;a<=arr[b];a++){
//         if(arr[b]%a==0){
//             count++
//         }
//     }
//     if(count<2){
//         //console.log(a,b)
//         arr_n.push(arr[b])

//     }
// }
// console.log(arr_n)
// }
// var arr = [1,2,3,4,5,6,7,8,9,10]
// prime(arr)

// let obj = {name : "shradha",age:24}

// let obj2 = {...obj, school: "masai"};
// // console.log(obj2)
// const a = {x: 1, y: 2, z: 3}
// let {x} = a;
// let b = x;
// console.log(b);
// let c = {[a...] x}


//b = 1, c = {y: 2, z: 3}

// let string = "abba";
// function pallindrome(string){
//     let start =0;
//     let end = string.length-1;
//     let mid = Math.floor(string.length/2)
//     while(mid>0){
//         if(string[start] === string[end]){
//             start++
//             end--
//         }
//         else{
//             return false
//         }
//         mid--
//     }
//     return true
// }

// let arr = [10, 3, 555, 23, 19, 42, 1000];
// let max = [];
// for(let i=0;i<arr.length;i++){
    
// }
// y = ['aa', 'ab', 'bb', 'ab', 'cc', 'ca', 'cc'];
// // for(let i=0;i<y.length;y++){
// //     for(let j=i+1;j<y.length;y++){
// //     if(y[i] === y[j]){
// //         console.log(y[i])
// //     }
// // }
// // }
// let newarr = []
// let start = 0;
// let end = 1;
// while(end<y.length){
//     if(y[start]== y[end]){
//         start++
       
//     }
//     else{
//         newarr.push(y[start])
//         newarr.push(y[end]);
//         start++;
//         end++;
//     }
// }

// console.log(newarr)




// setTimeout(()=>{
// console.log("SSS")
// },3000)
// let x =0;
// setInterval(()=>{
// if(x<5){
//     console.log("a")
// }
// x++
// },1000)