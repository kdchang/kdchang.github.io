---
title: 用 JavaScript 學習資料結構和演算法：演算法進階補充篇
date: 2016-09-27 22:00:00
tags: JavaScript, ECMAScript2015, ES6, Data Structure, Algorithm, 資料結構, 遞迴, recursive, dynamic programming, greedy, 貪婪演算法, big-o, 時間複雜度, 空間複雜度, 動態規劃 
author: kdchang
---

# 前言
在最後這個單元，我們會討論一些演算法的補充知識包括：遞迴、動態規劃、貪婪演算法、Big-O 表示法、空間複雜度等。

# 遞迴
遞迴是一種解決問題的辦法，它解決問題的每個小部分，直到解決最大的問題，同常會使用到函數的呼叫自己本身。不過要注意的是每個遞迴函數要有基本狀況（base case），也就是說不再遞迴呼叫的條件，以防止無窮遞迴造成程式當掉。

呼叫自己：

```javascript
const recursive = function() {
	recursive(parms);
}
```

間接方式呼叫也是一種遞迴：

```javascript
const recursiveA = function() {
	recursiveB(parms);	
}

const recursiveB = function() {
	recursiveA(parms);
}
```

以下是經典費氏數列（1 和 2 的費氏數列是 1， n > 2 的費氏數列是 n - 1 的費氏數列加上 n - 2 的費氏數列），使用遞迴實作：

```javascript
function fibonacci(num) {
	// 1 和 2 的費氏數列是 1
	if(num === 1 || num === 2) {
		return 1;
	}
	// n > 2 的費氏數列是 n - 1 的費氏數列加上 n - 2 的費氏數列
	return fibonacci(num - 1) + fibonacci(num - 2);
}
```

另外，也可以使用非遞迴方式實作費式數列。遞迴方式的優勢在於簡潔好理解，但效能通常較慢。

```javascript
function fib() {
	let n1 = 1;
	let n2 = 1;
	let n = 1;
	for(let i = 3; i <= num; i++) {
		n = n1 + n2;
		n1 = n2;
		n2 = n;
	}
	return n;
}
```

# 分治法（Divide and Conquer）
分治法（Divide and Conquer）是將問題先切分成小問題後再解決，再將結果合併求出原始問題的答案。

# 動態規劃（Dynamic Programming, DP）
動態規劃（Dynamic Programming, DP）是一種將複雜問題分解成更小的子問題來解決的最佳化技術。特別注意的是動態規劃（例如：深度優先搜尋）和分治法（在合併排序和快速排序中使用）是不同的方法。分治法是把問題分解成相互獨立的子問題，然後組合它們的答案，而動態規劃則是把問題分解成相互依賴的子問題。

使用動態規劃解決問題時必須遵守三步驟：
1. 定義子問題
2. 實作要反覆執行而解決的子問題部分
3. 識別並求解基本狀況

動態規劃經典案例：

1. 背包問題
2. 最常公共子序列
3. 矩陣鏈相乘
4. 圖形的全點對最短路徑
5. 最少硬幣找零問題

```javascript
function MinCoinChange(coins) {
	let coins = conins;
	let cache = {};
	this.makeChange = function(amount) {
		let self = this;
		if(!amount) {
			return [];
		}
		if(cache[amount]) {
			return cache[amount];
		}
		let min = [];
		let newMin;
		let newAmount;
		for(let i = 0; i < coins.length; i++) {
			let coin = coins[i];
			newAmount = amount - coin;
			if(newAmount >= 0) {
				newMin = self.makeChange(newAmount);
			}
			if(
				newAmount >= 0 &&
				(newMin.length < min.length - 1; !min.length) &&
				(newMin.length || !newAmount)
			) {
				min = [coin].concat(newMin);
				console.log('new Min' + min + 'for' + amount);
			}
		}
		return (cache[amount] = min);
	};
}
```

# 貪婪演算法（Greedy）
貪婪演算法遵循一種尋找近似解決問題的技術，希望透過每個階段的局部最佳選擇，進而達到全域最佳解答，相對之下動態規劃思考的是更大範圍和格局的計算。

經典案例：再解最少硬幣找零問題
事實上，最少硬幣找零問題也可以使用貪婪方式來求解，相對簡單快速，大致上可以取得最佳解，但有些情況不會是最佳。

```javascript
function MinCoinChange(coins) {
	let coins = coins;
	this.makeChange = function(amount) {
		let change = [];
		let total = 0;
		for(let i = coins.length; i >= 0; i++) {
			let coin = coins[i];
			while(total + coin <= amount) {
				change.push(coin);
				total += coin;
			} 
			return change;
		};
	}
}
```

實際使用：

```javascript
const minCoinChange = new MinCoinChange([1, 5, 10, 25]);
console.log(minCoinChange,makeChange(38));
```

# Big-O 表示法
我們在討論演算法效率時會關注的是資源的使用，例如：CPU 佔用時間、記憶體佔用、磁碟佔用和網路佔用。一般我們在討論 CPU 佔用時間。以下是常見分析演算法時會遇到的函數：

1. O(1)：常數
	```javascript
	function increment(num) {
		return ++num;
	}
	```
2. O(log(n))：對數

3. O((log(n))c)：對數多項式

4. O(n)：線性
	```javascript
	function sequentialSearch(array, item) {
		for(let i = 0; i < array.length; i++) {
			if(item === array[i]) {
				return i;
			}
		}
		return -1;
	}
	```
5. O(n^2)：二次

6. O(n^c)：多項式
	
	```javascript
	// 氣泡排序法是 O(n^2)
	function swap(array, index1, index2) {
		let tmp = array[index1];
		array[index1] = array[index2];
		array[index2] = tmp;
	}
	function bubbleSort(array) {
		let length = array.length;
		for(let i = 0; i < length; i++) {
			for(let j = 0; j < length - 1; j++) {
				if(array[j] > array[j+1]) {
					swap(array, j, j+1);
				}
			}
		}
	}
	```

7. O(c^n)：指數


# 空間複雜度
空間複雜度係指執行一段程式要花的記憶體空間，愈多表示愈複雜。一般而言，對於一個演算法，其時間複雜度和空間複雜度往往是相互影響的。當追求一個較好的時間複雜度時，可能會使空間複雜度的性能變差，即有可能導致占用較多的存儲空間，而使的空間複雜度上升。

# 總結
歷經許多挑戰，我們總算完成了用 JavaScript 學習資料結構和演算法之旅，是不是要給自己一個掌聲呢？在這章中我們討論了許多演算法進階的觀念：

1. 遞迴
2. 動態規劃
3. 貪婪演算法
4. Big-O 表示法
5. 空間複雜度

# 延伸閱讀
1. [空間複雜度](http://localhost:4000/2016/09/27/javascript-data-structure-algorithm-advance/)

