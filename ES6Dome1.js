// 暂时性死区;
// function bar(x = y, y = 2) {
// 	return [x, y]
// }
// 
// bar()
// 暂时性死区的本质是: 只要进入当前作用域，则所有的使用变量就已存在,但是不可获取,只有等到申明变量的那一行代码出现,才可以获取和使用变量.

  /* *
     let不允许在相同作用域内，重复声名同一个变量。
  */
  
  /* 
    块级作用域
  */
//  var tmp = new Date();
//  
//  function f(){
// 	 console.log(tmp);
// 	 if(false){
// 		 var tmp = 'ppppp'
// 	 }
//  }
 
 // f()
 
 /* 
   let实际上为js新增了块级作用域。
 */
function f1() {
	let n = 5;
	if(true){
		let n = 10;
	}
	console.log(n);
}

// f1()

/* 
   ES6允许块级作用域的任意嵌套。
 */
// {{
	
// 	{let insane = 'Hellow World'}
// 	console.log(insane); 

// }}

/* 
  块级作用域的出现， 实际上使得广泛应用的立即执行匿名函数不在必要了。 
 */
// (function () {
// 	var tmp = 1;
// 	console.log(tmp);
// }())
// 
// {
// 	let tmp = 1;
// 	console.log(tmp);
// }

/* 
  ES6规定，函数本身的作用域，在其所在的块级作用域之内。
 */

// function f() {
// 	console.log("I am outside!")
// }
// (function() {
// 	if(false) {
// 		function f() {
// 			console.log("I am inside!")
// 		}
// 	}
//   f();
// }())

// {
// 	let a = 'secret';
// 	if(true) {
// 		function f() {
// 				console.log(a);
// 		    }
// 	}		
// }	
// f();

/* 
   Object.freeze方法， 冻结对象。
 */
// const foo = Object.freeze({key:{}});
// foo.key.props = 123;
// console.log(foo);

/* 
  除了将对象本身冻结，对象的属性也可以冻结。
 */

// var dongjie = (obj) => {
// 	Object.freeze(obj);
// 	Object.keys(obj).forEach((value, index, arr) => {
// 		if(typeof obj[value] === 'object'){
// 			dongjie(obj[value] )
// 		}	
// 	})	
// }
// 
// const goo = {key:{}};
// dongjie(goo);
// goo.key.props = 123;
// console.log(goo);

/* 
  跨模块常量
 */
// import * as constants from './constants.js'
// 
// console.log(constants)
// 
// import { A, B, C} from './constants.js'
// 
// console.log(A, B, C);