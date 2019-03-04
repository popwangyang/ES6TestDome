// var [a, b, c] = [1,2,3,4];
// console.log(a,b,c)
/* 
  这种写法属于“模式匹配”，只要等号两边的模式相同， 左边的变量就会被赋予对应的值，
 */
// let [foo, [[bar], baz]] = [1, [[2], 3]]
// console.log(foo, bar, baz)

// let [ , , third] = ['foo', 'bar', 'baz'];
// console.log(third);
// 
// let [x, , y] = [1,2,3];
// 
// let [head, ...tail] = [1,23,4,5,65,,76,78,9,23];
// console.log(head, tail);

// let [x, y, ...z] = ['a'];
// console.log(x, y, z);

/* 
  不完全解构， 等号右边的值仅匹配一部分等号左边的值
 */

// let [x, y] = [1, 3, 4];
// console.log(x, y)
/* 
  事实上， 只有某种数据结构具有Iterator接口， 都可以采用数组形式的解构赋值。
 */

// function* fibs(){
// 	var a = 0;
// 	var b = 1;
// 	while(true){
// 		yield a;
// 		[a, b] = [b, a+b];
// 	}
// }
// 
// var [a, b, c, d, f, g, h, j, k] = fibs();
// 
// console.log(a, b, c, d, f, g, h, j, k)
/* 
上面代码中， fibs 是一个Generator函数，原生具有Iterator接口。解构赋值会依次从这个接口获取值 
*/

/* 
  解构赋值允许使用默认值；
 */
// var [woo = true] = [];
// console.log(woo);

/* 
 ES6内部使用严格相等运算符（===），来判断一个值是否有值，所以，一个数组成员不严格等于undefined, 默认值是不会生效的。
 */
// var [x = 1] = [undefined];
// 
// console.log(x);
// 
// var [x = 1 ] = [null];
// 
// console.log(x);

/* 
  如果默认值是一个表达式，那么这个表达式是惰性求值，即只有在用到时才会求值。 
 */

// function f(){
// 	console.log(";;;;;")
// 	return 0
// }
// 
// let [x = f() ] = [];
// 
// console.log(x)

/* 
  默认值可以引用解构赋值的其他变量， 但该变量必须已经声明。
 */

// let [x = 1, y = x] = [];
// let [x = y, y = 1] = [1, 2];


/* 
  对象的解构赋值 
 */
// var { foo, bar } = { foo:"aaaa", bar:"bbb"};
// console.log(foo, bar);

/* 
 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属
性没有次序，变量必须与属性同名，才能取到正确的值。
 */

// var {bar, foo} = { foo: 'aaa', bar: 'bbb'};
// console.log(bar, foo);
// 
// var { baz } = { foo:"aaa", bar:'llll'};
// console.log(baz);

/* 
 如果变量名与属性名不一致，必须写成下面这样
 */
// var { foo: baz } = { foo:"aaa", bar:"bbb"};
// console.log(baz);
// let { first:f, last:l } = {first:'hello', last:'world'};
// console.log(f, l)

/* 
 这实际上说明，对象的解构赋值是下面形式的简写
 */
// var {foo:foo, bar:bar} = {foo:'aaa', bar:'bbb'};
// console.log(foo, bar)

// var { foo: baz } = {foo: 'aaa', bar: 'bbb'};
// console.log(foo, baz)
/* 
 上面的代码中，真正被赋值的是baz，而不是foo;
 注意，采用这种写法时，变量的声明和赋值是一体的。对于let和const来说，变量不能重新声明，所以一旦赋值的变量以前声明过，就会报错。
 */
// let foo;
// let { foo } = { foo : 1}
/* 
上面代码中，解构赋值的变量都会重新声明，所以报错了。不过，因为 ??? 命令允许重新声明，所以这个错误
只会在使用 ??? 和 ????? 命令时出现。如果没有第二个let命令，上面的代码就不会报错 
 */

// let foo;
// ({foo} = {foo:1})

/* 
 和数组一样，解构也可以用于嵌套结构的对象
 */

// var obj = {
// 	p: [
// 		'Hellow',
// 		{ y: "World" }
// 	]
// }
// 
// var { p: [x, {y} ]} = obj;
// console.log(x, y);

// var node = {
// 	loc: {
// 		start: {
// 			line:1,
// 			column:5
// 		}
// 	}
// }
// var { loc: { start: {line, column}}} = node;
// 
// console.log(line, column);

/* 
  一个嵌套赋值的例子
 */
// let obj = {};
// let arr = [];
// ({foo:obj.prop, bar: arr[0]} = { foo:1, bar:true});
// console.log(obj, arr);

/* 
 对象的解构也可以指定默认值
 */
// var {x = 3} = {};
// console.log(x);
// 
// var {x, y = 5} = {x:1};
// console.log(x,y);
// 
// var { message: msg = "Somthing went wrong"} = {};

/* 
  默认值的生效条件是， 对象的属性值严格等于undefined；
  
 */
// var {x = 3} = {x:undefined}
// console.log(x);
// 
// var {x = 3} = {x:null};
// console.log(x);

/* 
 如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错
 */
//报错;
// var {foo: {bar}} = {baz: 'baz'},

/* 
 上面的代码将在解构赋值中报错，因为左边的foo模式没有匹配的到右边的值，所以其值为undefined，在取其子属性就会报错。
 */

// 错误写法;
// var x;
// {x} = {x:1};
/* 
上面的写法是错误的，因为js引擎把{x} 当成了一个代码块，而不是解构赋值，只要不将大括号写在首行，以避免js引擎将其解析成代码块。 
 */
// var x;
// ({x} = {x:1});
/* 
 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量
 */

// let { log, sin, cos } = Math;
// 
// console.log(log(1))

/* 
 字符串的解构赋值
 */
// const [a,b,c,d,e] = 'hello';
// let {length:len} = 'hello'
// console.log(a,b,c,d,e,len);
/* 
 数值和布尔值的解构赋值 
 */
// let {toString:s} = 123;
// 
// let {toString:f} = true;

/* 
上面代码中，数值和布尔值的包装对象都有 toString 属性，因此变量 ? 都能取到值 
 */
/* 
  函数参数的解构赋值 
 */
// function foo([x, y]){
// 	console.log(x, y)
// }
// 
// foo([1, 2]);
/* 
 上面代码中，函数foo的参数实际上部署一个数组，而是通过解构得到的变量x和y.
 */

// var arr = [[1, 2], [3, 4]].map(([a, b]) => a + b);
// console.log(arr);

// function move({x = 0, y = 0} = {}) {
// 	// return [x, y];
// 	console.log(x, y)
// }

// move({x:1, y:5});
// move({})
// move()
/* 
 注意，下面的写法会得到不一样的结果
 */
// function move({x, y} = {x:0, y:0}) {
// 	console.log(x, y)
// }
// 
// move({x:3, y:8})
// move()

// var arr = [1, undefined, 3].map((x = 'yes') => x);
// console.log(arr);

// var arr = [1,2,3,4,5,6,7].map((x) => x+1);
// console.log(arr)

// var arr = [1,2,3,4,5,6,7,8].map((x) => {	  
// 	return x+1
// })
// console.log(arr);

/* 
 箭头函数带大括号里必须要有return语句，不带大括号返回箭头后的表达式的值。
 */
/* 
 圆括号问题
 */
/* 
用途 
 */
/* 
（1）交换变量的值 
 */
// [x, y] = [y, x];
/* 
 （2）从函数返回多个值
 */
// function example() {
// 	return [1, 2, 3];
// }
// 
// var [a, b, c] = example();
// console.log(a,b, c);
// 
// function example1() {
// 	return {
// 		foo:1,
// 		bar:2
// 	}
// }
// 
// var { foo, bar } = example1()
/* 
 （3）函数参数的定义
 */
// function f([x, y, z]) {
// 	
// }
// f([1, 2, 3]);
// 
// function f1({x, y, z}){
// 	
// }
// f1({z:2, y:1, x:0})

/* 
（4）提取JSON数据 
 */
// var jsonData = {
// 	id: 42,
// 	status: 'ok',
// 	data: [897, 7890]
// }
// 
// let { id:pp, status:pps, data:number} = jsonData;
// console.log(pp, pps, number)
/* 
（5）函数参数的默认值 
 */
// var JQ.ajax = function(url, {
// 	async = true,
// 	beforeSend = function(){},
// 	cache = true,
// 	complete = function(){},
// 	global = true
// }){}
