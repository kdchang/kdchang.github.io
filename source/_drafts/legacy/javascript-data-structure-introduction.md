---
title: 用 JavaScript 學習資料結構和演算法：JavaScript 快速入門
date: 2016-06-20 22:00:00
tags: JavaScript, ECMAScript2015, ES6, Data Structure, Algorithm, Stack, 資料結構, 演算法 
author: kdchang
---

![用 JavaScript 學習資料結構和演算法：JavaScript 快速入門](javascript.png)

# 前言
在 CS 江湖上曾傳言：`程式設計 = 資料結構 + 演算法`。在一般的大專院校裡，資料結構（Data Structure）與演算法（Algorithm）幾乎都是電腦科學（Computer Science）和資訊相關科系的基礎必修課，在這些課堂中多半是使用 C/C++ 或是 Java 進行教學，許多初學學生也因為對於這些語言的掌握度不夠，反而迷失在資料結構和演算法的世界裡，然而本系列文章將透過 JavaScript 去學習一些經典的資料結構和演算法。作為一個早期限於瀏覽器端開發的程式語言，現在的 JavaScript 早已不能同日而語，不管是前後端開發、行動端、桌面端、硬體開發等都可以看到它的身影，而 JavaScript 輕量和搭配便利的瀏覽器簡易開發環境工具特性也讓學習資料結構和演算法更為有趣！接下來我們將使用一系列文章介紹 JavaScript 如何實作經典資料結構和演算法。

# 環境建置
JavaScript 的檔案只要使用一般的文字編輯器即可編輯，我們這邊使用 Sublime Text3 進行開發，[JSBin](https://jsbin.com/) 這個線上工具進行測試（當然你也可以使用 Chrome、Firefox 等瀏覽器的開發者工具）。

# 使用 JavaScript 

1. 內嵌於 `<head></head>` (因 JS 為直譯式程式語言，讀到即會執行)

```html
<head> //一般函數或事件處理會放置於此
	<script>
		alert(Hello JavaScript);
	</script>
</head>
```

2. 內嵌於 `<body></body>` 之中 (可以讓 HTML 優先載入)

```html
 <body> //一般呼叫函式或更動HTML結構(DOM)程式放置
	<script>
		alert(Hello JavaScript);
	</script>
 </body>
```

3. 外部引入檔案置於 `<head>` 或 `<body>` 內 (推薦使用)

```html
 <script src="js/main.js"></script>
```

外部引入的 `<script></script>` 中不可再寫 JS。

# 變數
在程式語言中變數是一個暫時儲存資料的地方，賦值給變數的值都會有對應的資料型態，然而 JavaScript 是弱型別（Weak type）所以會有自動轉型的情形。在 JavaScript 中，全域變數將使用 `var`，而在 ES6 中為了解決變數污染或誤用情形將 `block-scope` 的變數使用 `let`，若你需要固定不變的常數則是使用 `const`。 其中變數型別又分為：Primitive Data Type：String、Number、Boolean、undefinded、null，Reference Data Types：Object 兩種。

```javascript
var num = 12;
const str = 'Mark';

function checkLike() {
	let isActived = true;
}

console.log(num);
console.log(str);
console.log(isActived);
```

# 運算子
在程式語言中都需要運算子，在 JavaScript 中有賦值運算子、算數運算子、比較運算子、邏輯運算子等不同運算子。

```javascript
let sum = 1 + 2;
let isActived = 20 > 5;
```

# 流程控制
在 JavaScript 中同樣有 `if...else`、`switch` 條件判斷以及在處理陣列上很常使用的迴圈（當有明確次數時使用 `for`，當沒有明確數字時使用 `while`）。另外要注意的是 falsey 值：`undefined`、`null`、`NaN`、`0`、`""`（空字串）和 `false`，以上幾種情況在邏輯判斷時會轉換成 false。

if 條件判斷：

```javascript
if(age > 20) {
	console.log('you can vote!');
} else {
	console.log('sorry, you can't vote);
}
```

當條件很多時可以考慮使用 switch 判斷：

```javascript
switch(city) {
	case 'Taipei':
		alert('Yo');
		break;
	default:
}
```

當迴圈次數明確時，可以使用 for loop：

```javascript
let sum = 0;
for(let i = 0; i < 10; i++) {
	sum += i;
}

```

當迴圈次數不明確時，可以使用 while，而 do while 會至少執行一次：

```javascript
let x = 0;
while(x < 10) {
	console.log(x);
	x++;
}

let y = 0;
do {
	console.log(y);
	y++;	
} while(i < 10);
```

# 函數
在 JavaScript 中函數屬於一級物件（first class object），其扮演非常重要的角色，也讓 JavaScript 在函數式程式設計（functional programming）上更容易發揮。

```javascript
function sum(x, y) {
	return x + y;
}

sum(12, 20);
```

# 物件
一般而言 JavaScript 有兩種建立物件的方式：

1. 使用 `new Object`：

	```javascript
	var obj = new Object();
	```

2. 使用 `{}`：

	```javascript
	var obj = {
		name: 'Mark',
		age: 23
	}
	``` 

雖然 JavaScript 並非是 class-based 的物件導向程式語言，而是 prototype-based 的物件導向程式語言，但在 JavaScript 可以透過 function 建立類別的宣告函數（在 ES6 中已有 class 可以使用，但只是個語法糖）：

```javascript
function Dog(name, age) {
	this.name = name;
	this.age = age;
	// 每個實例都會有一份方法副本
	this.wow = function() {
		console.log('wow!wow');
	}
}

// 多個實例共用，可以減少記憶體等資源運用
Dog.prototype.cry = function() {
	console.log('QQQ');
}

const dog = new Dog('lucky', 2);
dog.wow();
```

# 總結
以上快速介紹了 JavaScript 快速入門，我們學習了：

1. 如何使用 JavaScript？
2. 變數
3. 運算子
4. 流程控制
5. 函數
6. 物件

接下來我們將使用一系列文章介紹 JavaScript 如何實作經典資料結構和演算法！

# 延伸閱讀
1. [用十分鐘瞭解 陳鍾誠的程式設計課 (採用JavaScript + C的原因)](http://www.slideshare.net/ccckmit/javascript-c)
2. [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)
3. [JavaScript與前端程式設計入門自學參考](https://tw.twincl.com/javascript/*6731)
4. [JavaScript Garden  ](http://bonsaiden.github.io/JavaScript-Garden/zhtw/)
5. [JavaScript核心](http://weizhifeng.net/javascript-the-core.html)
6. [[稀土掘金日报] JavaScript 开发者必备的资源合集](https://segmentfault.com/a/1190000004253577)
7. [專為中學生寫的 JavaScript 程式書](https://www.gitbook.com/book/ccckmit/javascript/details) 
8. [nzakas/computer-science-in-javascript](https://github.com/nzakas/computer-science-in-javascript)

（iamge via [wikimedia](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png)）
