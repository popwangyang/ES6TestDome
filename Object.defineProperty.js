// var obj = {};
// Object.defineProperty(obj, 'props', {	
// 	configurable:true, //是否可以被delete删除
// 	enumerable:true,  // 是否可以被for in 或者 Object.keys()枚举
// 	writable:true,// 是否可以重新赋值
//     value:'ppp'
// })
// var bValue;
// 
// Object.defineProperty(obj, 'b', {
// 	configurable:true, //是否可以被delete删除
// 	enumerable:true,  // 是否可以被for in 或者 Object.keys()枚举
// 	get: function(){
// 		return bValue;
// 	},
// 	set: function(newValue){
// 		bValue = newValue;
// 	}
// })
// obj.b = '34';
// 
// console.log(obj.b, bValue)
/* 
 当writable属性设置为false时，该属性被称为“不可写”。它不能被重新分配。
 */
// var o = {};
// Object.defineProperty(o, 'a',{
// 	value:'10',
// 	writable:false,
// 	configurable:true,
// 	enumerable:true
// })
// 
// console.log(o);
// o.a = "11";
// console.log(o);
// (function() {
//   'use strict'
//    var o = {};
//    Object.defineProperty(o, 'b', {
// 	   value:2,
// 	   writable:false
//    });
//    o.b = 3; //严格模式下如果writable的属性为false，强行写入会报错。
//    console.log(o.b)
// }())

/* 
  enumerable定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。
 */
// var o = {};
// 
// Object.defineProperty(o, "a", { value:'1', enumerable:true});
// Object.defineProperty(o, "b", { value:'2', enumerable:true});
// Object.defineProperty(o, "c", { value:'3', enumerable:false});
// Object.defineProperty(o, "c", { value:'3'});
// 
// for(var i in o){
// 	console.log(i)
// }
// 打印a, b;
// var arr = Object.keys(o);
// console.log(arr);

/* 
 propertyIsEnumerable  方法可以检测对象的属性是否可以枚举
 */

// console.log(o.propertyIsEnumerable('a')) // true

/* 
configurable特性表示对象的属性是否可以被删除，
以及除value和writable特性外的其他特性是否可以被修改。 
 */
var o = {};

Object.defineProperty(o, 'a', {
	get: function(){
		return 1;
	},
	configurable: false
})

Object.defineProperty(o, 'a', {
	configurable: true
})

// Object.defineProperty(o, "a", {
// 	enumerable: true
// })

// Object.defineProperty(o, 'a', {set: function() {}})

// Object.defineProperty(o, "a", { get: function() {
// 	return 1;
// }});

Object.defineProperty(o, "a", {value: 23})
