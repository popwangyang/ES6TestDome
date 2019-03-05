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
// var o = {};
// 
// Object.defineProperty(o, 'a', {
// 	get: function(){
// 		return 1;
// 	},
// 	configurable: false
// })

// Object.defineProperty(o, 'a', {
// 	configurable: true
// })

// Object.defineProperty(o, "a", {
// 	enumerable: true
// })

// Object.defineProperty(o, 'a', {set: function() {}})

// Object.defineProperty(o, "a", { get: function() {
// 	return 1;
// }});

// Object.defineProperty(o, "a", {value: 23})

/* 
	考虑特性被赋予的默认特性值非常重要，通常，
	使用点运算符和Object.defineProperty()为对象的属性赋值时，
	数据描述符中的属性默认值是不同的，如下例所示。 
 */
// var o = {};
// 
// o.a = 1;
// Object.defineProperty(o, "a", {
// 	value:1,
// 	writable:true,
// 	configurable:true,
// 	enumerable:true
// });
// 
// 
// Object.defineProperty(o, "b", {
// 	value:1
// });
// o.b = 2;
// delete o.b;
// 
// console.log(o.b)

/* 
通过getter和setter实现一个自动存档； 
 */
// function Archiver() {
// 	var value = null;
// 	var saveArr = [];
// 	
// 	Object.defineProperty(this, "value", {
// 		get: function() {
// 			return this.value;
// 		},
// 		set: function(newValue) {
// 			value = newValue;
// 			saveArr.push({key: newValue});
// 		}
// 	})
// 	
// 	this.getArr = function() {
// 		return saveArr;
// 	}
// }
// 
// var a = new Archiver();
//     a.value = 1;
// 	a.value = 2;
// 	a.value = 3;
// 	console.log(a.getArr())

/* 
 或者是：
 */
// var patten = {
// 	get: function() {
// 		return "I alway return this string,whatever you have assigned"
// 	},
// 	set: function() {
// 		this.myname = "this is my name string"
// 	}
// }
// 
// function TestDefineSetAndGet() {
// 	Object.defineProperty(this, 'myproperty', patten);
// }
// 
// var instance = new TestDefineSetAndGet();
// instance.myproperty = 'test';
// 
// console.log(instance.myproperty);
// 
// console.log(instance.myname);

// function myclass() {
// 	
// }
// 
// var value;
// Object.defineProperty(myclass.prototype, 'x', {
// 	get() {
// 		return value;
// 	},
// 	set(x) {
// 		value = x;
// 	}
// });
// 
// var a = new myclass();
// var b = new myclass();
// 
// a.x = 1;
// console.log(b.x)
/* 
 如果访问的属性是被继承的，它的get和set方法会在子对象的属性被访问或修改时被调用，如果该对象用一个变量存值，则改值会被所有子对象共享。
 */

/* 
可以将值存储在被访问对象的另一个属性中解决，在get和set方法中，this指向某个被访问和修改属性的对象。 
 */
// function myclass(){
// 	
// }
// 
// Object.defineProperty(myclass.prototype, "x", {
// 	get(){
// 		return this.store_x;
// 	},
// 	set(x){
// 		this.store_x = x;
// 	}
// });
// 
// 
// var a = new myclass();
// var b = new myclass();
// 
// a.x = 1;
// console.log(b.x)

// function myclass(){
// 	
// };
// 
// myclass.prototype.x = 1;
// Object.defineProperty(myclass.prototype, "y", {
// 	writable:false,
// 	value:1
// })
// 
// var a = new myclass();
// var b = new myclass();
// a.y= 2;
// console.log(a.y)
/* 
 不像访问者属性，值属性始终在对象自身上设置，而不是一个原型。然而，
 如果一个不可写的属性被继承，它仍然可以防止修改对象的属性
 */
