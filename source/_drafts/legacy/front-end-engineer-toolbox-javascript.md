---
title: 前端軟體工程工具箱：JavaScript 篇
date: 2016-010-06 22:00:00
tags: JavaScript, HTML, CSS, Front End, Front End Development, F2E, Front End Engineer
author: kdchang
---

# 前言 
事實上，要成為一個好的前端軟體工程師除了必須對於前端工程（Web 效能、build 工具、CSS layout 引擎）的部份有所了解外，也必須對於電腦科學的基礎知識有著堅實的基礎知識（資料結構、演算法、設計模式等）。接下來我們將來探討 JavaScript。

# JavaScript 前世今身
Java 和 JavaScript 雖然名稱相似，但卻是熱狗和狗的差別。JavaScript 是由 Netscape 工程師 Brendan Eich 於 1995 年僅花 10 天所設計的程式語言。JavaScript 是一種直譯式、基於原型（prototype based）的物件導向程式語言，但又具有函數式程式設計（Functional programming）的特性。其具備簡單好上手、應用範圍廣泛，容易有成就感，但精通不易等特性。過去一段時間 JavaScript 一直被認為是玩具語言，難登大雅之堂。但隨著版本的演進，再加上 NodeJS 的出現，讓 JavaScript 由黑翻紅成為程式語言的當紅巨星，目前雄據在程式語言排行榜前幾名，除了網頁開發外，在許多的領域都可以看到 JavaScript 的身影。

ES6 又稱 ES2015、ECMAScript 2015，為近年來更新幅度較大的 JavaScript 版本規範，新增許多特性，從 ES7/ES2016 開始，每年 ECMA 國際組織都會有新版本的規範定義推出。由於一些瀏覽器或環境並沒有完全支援新版的特性，所以通常會需要翻譯機或是翻譯蒟篛來協助翻譯，而這就是 Babel 轉譯器進行轉譯的功能。

# JavaScript 核心概念

1. Prototypal inheritance
	JavaScript 中和一般物件導向的 class-based 繼承比較不同的是 JavaScript 是 prototype based inheritance 原型繼承。原型繼承相對彈性，若是屬性或是方法沒辦法在本身物件找到，會從 prototype chain 上去找，最上層是 Object.prototype。

	literal 物件（物件具有 `__proto__` 屬性）： 

	```javascript
	var a = {
	  x: 10,
	  calculate: function (z) {
	    return this.x + this.y + z
	  }
	};

	var b = {
	  y: 20,
	  __proto__: a
	};

	var c = {
	  y: 30,
	  __proto__: a
	};

	// call the inherited method
	b.calculate(70); // 100
	c.calculate(40); // 80
	```

	建構函數（使用 prototype 屬性繼承）：

	```
	// a constructor function
	function Foo(y) {
	  // which may create objects
	  // by specified pattern: they have after
	  // creation own "y" property
	  this.y = y;
	}

	// also "Foo.prototype" stores reference
	// to the prototype of newly created objects,
	// so we may use it to define shared/inherited
	// properties or methods, so the same as in
	// previous example we have:

	// inherited property "x"
	Foo.prototype.x = 20;

	// and inherited method "calculate"
	Foo.prototype.calculate = function (z) {
	  return this.x + this.y + z;
	};

	// now create our "b" and "c"
	// objects using "pattern" Foo
	var b = new Foo(20);
	var c = new Foo(30);

	// call the inherited method
	b.calculate(30); // 70
	c.calculate(40); // 80

	// let's show that we reference
	// properties we expect

	console.log(

	  b.__proto__ === Foo.prototype, // true
	  c.__proto__ === Foo.prototype, // true

	  // also "Foo.prototype" automatically creates
	  // a special property "constructor", which is a
	  // reference to the constructor function itself;
	  // instances "b" and "c" may found it via
	  // delegation and use to check their constructor

	  b.constructor === Foo, // true
	  c.constructor === Foo, // true
	  Foo.prototype.constructor === Foo // true

	  b.calculate === b.__proto__.calculate, // true
	  b.__proto__.calculate === Foo.prototype.calculate // true

	);
	```

	ES6 class 語法糖：

	```javascript
	// ES6
	class Foo {
	  constructor(name) {
	    this._name = name;
	  }

	  getName() {
	    return this._name;
	  }
	}

	class Bar extends Foo {
	  getName() {
	    return super.getName() + ' Macfee';
	  }
	}

	var bar = new Bar('John');
	console.log(bar.getName()); // John Macfee
	```

2. Scoping
	在 JavaScript 中是使用 function scope 決定變數生存域，所以盡量避免使用全域變數。ES6 後可以多善用 `let` 和 `const` 等避免一些問題。

	在 ES6 後新增 let 區域變數可以使用，參考了 C 語言為區塊 `{}` 生存空間。不允許重複宣告、宣告前使用

	```javascript
	function func() {
	  let x = 1;
	  console.log(x);
	  for(let x = 0; x < 10; x++) {
	   console.log(x); 
	  }
	  let x = 1;
	  console.log(x);
	}

	func();
	```

3. Closures
	> Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope). In other words, these functions 'remember' the environment in which they were created.

	```javascript
	function makeFunc() {
	  var name = "Mozilla";
	  function displayName() {
	    alert(name);
	  }
	  return displayName;
	}

	var myFunc = makeFunc();
	myFunc();
	```

	closure 創建於 free variable（既非參數也非區域變數，但是被捕捉使用的變數）和 function 一起被保留下來。

4. The event loop
	在 JavaScript 是單線程，非同步處理

	延伸閱讀：
	[什么是 Event Loop？](http://www.ruanyifeng.com/blog/2013/10/event_loop.html)
	[进程与线程的一个简单解释](http://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html)

5. Event bubbling
	事件捕捉、氣泡捕捉

6. this, Apply, call and bind
	大原則：誰呼叫的就指到誰

7. Callbacks and Promises
	過去我們在執行非同步的處理時很容易就掉入了回調地獄過多嵌套函數的窘境，而 ES6 提供原生的 Promise 的出現很大程度就能解決這個問題

	```javascript
	// executor 是一個帶有 resolve, reject 回調函數參數的函數
	new Promise(executor);
	new Promise(function(resolve, reject) { ... });
	```

	- pending：初始狀態，不是 fulfilled 也不是 rejected
	- fulfilled：成功的操作
	- rejected：失敗的操作

	建立 Promise：

	```javascript
	const comments = [
	  { title: 'Comment 1', content: 'content1'},
	  { title: 'Comment 2', content: ' content2'},
	];

	function getComments() {
	  return new Promise(function(resolve, reject) {
	    setTimeout(function() {
	      resolve(comments);
	    } , 1000);
	  });
	}
	```


	使用 Promise：

	```
	// 狀態 fulfilled 時做 then，可鏈結
	function printCommentsToConsole() {
	  getComments()
	    .then(comments => console.log(comments))
	    .catch(err => console.log(err));
	} 

	printCommentsToConsole();
	```

	ES7（ES2016）更提供了 Async/Await 來處理非同步問題

	```javascript
	async function printPostsToConsole() {
	  const posts = await getPosts();
	  console.log(posts);
	};

	printPostsToConsole();
	```

8. Variable and function hoisting
	JavaScript 是 function scope ，無論你在函數內那裏宣告變數 `var`，都會提升到最前面宣告，稱為變數的拉升(Variable Hoisting)。

	建議把變數的宣告放在函數的最頂端。否則可能導致混亂的情況，或是使用 `let` 可避免這種狀況。

	```javascript
	function func() {
	    console.log(a); // 儘管還沒定義但會回傳 undefinded
		var a = 1;    
	}

	func();
	```

9. Curring

	```javascript
	var add = function(x) {
	  return function(y) {
	    return x + y;
	  };
	};

	var increment = add(1);
	var addTen = add(10);

	increment(2);
	// 3

	addTen(10);
	// 20
	```

	延伸閱讀：

	[Curry 的重要性](https://jigsawye.gitbooks.io/mostly-adequate-guide/content/ch4.html)

# 總結
以上介紹了前端工程工具箱：JavaScript 篇，在接下來的章節中我們將為大家打開前端工程的工具箱，介紹那些必須掌握的前端軟體工程知識。

# 延伸閱讀
1. [JavaScript核心](http://weizhifeng.net/javascript-the-core.html)