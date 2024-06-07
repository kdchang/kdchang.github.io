---
title: 前端軟體工程工具箱：Design Pattern 篇
date: 2016-10-07 22:00:00
tags: JavaScript, HTML, CSS, Front End, Front End Development, F2E, Front End Engineer, Design Pattern, 設計模式
author: kdchang
---

# 前言
事實上，要成為一個好的前端軟體工程師除了必須對於前端工程（Web 效能、build 工具、CSS layout 引擎）的部份有所了解外，也必須對於電腦科學的基礎知識有著堅實的基礎知識（資料結構、演算法、設計模式等）。接下來我們將來探討 JavaScript 常見設計模式。

# JavaScript 常見設計模式

1. Decorator
	在 JavaScript 使用上相對彈性，所以可以在執行期間動態地新增方法給物件，客製化自己的物件功能。
	
	```javascript
	Function.prototype.after = function(afterfn) {
		let _self = this;
		return function() {
			let ret = _self.apply(this, arguments);
			afterfn.apply(this, arguments);
			return ret;
		}
	}
	```

	```javascript
	Function.prototype.before = function(beforefn) {
		let _self = this;
		return function() {
			beforefn.apply(this, arguments);
			return _self.apply(this, arguments);
		}
	}
	```

2. Factory
	Factory 目標是建立物件，通常實作為一個 class，或是 class 的一個靜態方法。

	```javascript
	function CarMaker() {};
	CarMaker.prototype.drive = function() {
		return 'hi' + this.doors + "doors";
	}
	CarMaker.factory = function(type) {
		let constr = type;
		if (typeof CarMaker[constr] !== 'function') {
			throw {
				name: 'Error',
				message: cpmstr + "doesn't exist"
			};
		}

		if (typeof CarMaker[constr].prototype.drive !== 'function') {
			CarMaker[constr].prototype = new CarMaker();
		}

		newcar = new CarMaker[constr];
		return newcar;
	};

	CarMaker.Compact = function() {
		this.doors = 4;
	}
	CarMaker.Convertible = function() {
		this.doors = 2;
	}
	CarMaker.SUV = function() {
		this.doors = 2;
	}

	let corolla = CarMaker.factory('Compact');
	let soltice = CarMaker.factory('Convertible');
	let cherokee = CarMaker.factory('SUV');

	console.log(corolla.drive()); //hi, I have 4 doors
	console.log(soltice.drive()); //hi, I have 2 doors
	console.log(cherokee.drive()); //hi, I have 2 doors
	```

	內建物件的 Factory 範例：

	```javascript
	let o = new Object();
	let n = new Object(1);
	let s = new Object('1');
	let b = new Object(true);

	o.constructor === Object; // true
	n.constructor === Number;
	s.constructor === String;
	b.constructor === Boolean;
	```

3. Singleton
	Singleton 的概念是讓特定 class 只有唯一實體。當你第二次使用同一個 class 建立新物件，你會得到和第一次建立時同一個物件。

	實作方式：1. 靜態方法（會遇到私有變數問題） 2. closure / 建構函數 3. 立即函數
	
	建構函數方法：

	```javascript
	function Universe() {
		let instance;
		Universe = function Universe() {
			return instance;
		};

		Universe.prototype = this;
		instance = new Universe();

		instance.start_time = 0;
		instance.bang = 'Big';
		return instance;
	}
	```

	立即函數方法：

	```javascript
	(function() {
		let instance;

		Universe = function Universe() {
			if(instance) {
				return instance;
			}

			instance = this;

			this.start_time = 0;
			this.bang = 'big';
		};
	}());
	```
4. Revealing Module 
	可以透過揭示模組模式封裝私有變數和方法。

	```javascript
	// 立即函數
	const revealed = function() {
	   // private 變數
	   let a = [1,2,3];
	   // 私有方法
	   function abc() {
	     return (a[0] * a[1]) + a[2];
	   }

	   return {
	      name: 'hello module',
	      fn: abc
	   }
	}();
	```

	```javascript
	console.log(revealed.name);    //=> 'hello module'
	console.log(revealed.fn()); //=> 5 (1*2+3)
	```

5. Facade
	Facade 是一種簡單模式，主要是為其他物件提供一種替代介面。

	把常用的 stopPropgation() 和 preventDefault() 封裝在一起。

	```javascript
	var myevent = {
		stop: function(e) {
			e.preventDefault();
			e.stopPropgation();
		}
	}
	```

6. Observer（Pub/Sub）
	在 JavaScript 中廣泛運用 Observer 模式，舉例來說所有的瀏覽器事件處理機制都是使用 Observer 模式。此模式主要目的在於降低耦合性，讓物件可以訂閱其他物件的特定活動，當有更新或是變動時會得到通知。

	```javascript
	//Observer class
	function Observer() {
	  var topics = [];
	   
	   return{
		Subscribe: function( topic, func ) {
		    if(!topics[topic]) {
		    	topics[topic]=[]; 
		    }
		    topics[topic].push(func);
		},

		Publish: function( topic, args ) {
		    if ( !topics[topic] ) {
		        console.log('no such topic');
		        return false;
		    }
		    var subscribers = topics[topic];
		    for(var i in subscribers)
		     subscribers[i](topic,args);
		},

		UnSubscribe: function( topic ) {
		    if ( !topics[topic] ) {
		        return false;
		    }
		    topics[topic]=null;
		}
	   }
	};

	//How to use
	var observ = new  Observer();
 
	//call back signature (topic,data)
	var testHandler = function (topics, data) {
		console.log("1:" + topics + ": " + data);
	};
	var testHandler2 = function (topics, data) {
		console.log("2:" + topics + ": " + data);
	};

	observ.Subscribe('cal1', testHandler);
	observ.Subscribe('cal1', testHandler2);
	observ.Publish('cal1', 'hello js!');
	observ.Publish('cal1', ['hi', 'a1', 'b1', 'c1']);

	observ.UnSubscribe('example1');

	observ.Publish('example1', 'hello js!');
	```

7. MVC/MVP/MVVM
	- MVC
		包含 Model（資料層）、View（使用者介面）、Controller（業務邏輯） 部分
		傳遞方向為單向：`View -> Controller -> Model -> View`

		其中 BackboneJS 為厚 View，業務邏輯都由 View 負責，並直接和 Model 互動。至於 Controller 部分簡化剩下 route 功能負責頁面轉換。

	- MVP
		MVP 模式將 Controller 更名為 Presenter，同時資料互動傳遞方向也有所不同。
		1. 每個部分的溝通為書像溝通
		2. View 和 Model 溝通都需要透過 Presenter 當中介
		3. View 基本上責任很少，業務邏輯都寫在 Presenter

	- MVVM
		MVVM 模式將 Presenter 改名為 ViewModel，基本上與 MVP 模式一致，主要差別在於 MVVM 採取雙向綁定（data-binding），當 View 變動會反應在 ViewModel，Angular、Ember、Vue 都算是這種模式。

	延伸閱讀：
	[MVC，MVP 和 MVVM 的图示](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)

# 總結

常見設計模式回顧：

1. Singleton
	建立唯一的 class 實體，實作上可以使用 class、建構函數等方式

2. Factory
	用字串指定型別定建立物件的一種方法

3. Iterator
	提供一組 API 來走訪自定義複雜資料結構

4. Decorator
	在執行期間動態調整物件，添增新功能	

5. Strategy
	從一整套可用演算法中選擇最適合的策略來處理特定任務，同時可以保有相同介面

6. Facade
	將普通一群方法包裝成一組 API 

7. Proxy
	包裝成一個物件以控制存取權，藉由將操作組合在一起，或是真正有需要時才執行，降低資源浪費

8. Mediator
	促進降低耦合性，方法是讓你的物件不和其他物件直接對話，而統一透過一個 mediator 物件溝通

9. Observer
	降低耦合性，方法是建立可以觀察的物件，當特定事件發生時會發送事件給觀察者

以上介紹了前端工程工具箱：JavaScript 常見設計模式，在接下來的章節中我們將為大家打開前端工程的工具箱，介紹那些必須掌握的前端軟體工程知識。

# 延伸閱讀
1. [從實例學設計模式](http://slides.com/jaceju/design-patterns-by-examples/#/)
