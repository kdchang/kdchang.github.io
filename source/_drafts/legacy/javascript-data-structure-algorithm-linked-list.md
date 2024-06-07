---
title: 用 JavaScript 學習資料結構和演算法：鏈結串列（Linked List）篇
date: 2016-09-21 22:00:00
tags: JavaScript, ECMAScript2015, ES6, Data Structure, Algorithm, Linked List, 資料結構, 演算法, 鏈結串列 
author: kdchang
---

![用 JavaScript 學習資料結構和演算法：鏈結串列（Linked List）篇 ](linked-list.png)

# 什麼是鏈結串列（Linked List）？
在前面的章節我們已經學習了陣列（或可以稱為串列）這個資料結構，在 JavaScript 中陣列（Array）十分簡單且彈性，是一種存放資料序列的資料結構。而不同於陣列的循序串列型的資料結構，鏈結串列（Linked List）是種方便動態新增和刪除的資料結構，其存放有序的元素集合，但不同於陣列，鏈結串列中的元素在記憶體中並不是連續（Sequential）放置的，每個節點（Node）元素由一個存放元素本身資料（Data）和一個指向下一個元素的指標鏈結（Next Pointer）組成。鏈結串列（Linked List）常見的生活範例如：火車、

由於陣列（Array）和鏈結串列（Linked List）常常會拿來一起比較，以下列出兩者的優點和缺點：

陣列（Array）優點：

1. 可支援循序及隨機存取
2. 可靠度高，不會因為鏈結斷裂而遺失資料
3. 循序存取速度快

陣列（Array）缺點：

1. 因占用連續的記憶體空間可能會浪費不必要之記憶體
2. 刪除或插入新元素造成資料移動頻繁（在大多數程式語言中陣列大小是固定的）
3. 各元素型態皆相同
4. 不支援串列之共享

鏈結串列（Linked List）優點：

1. 元素在記憶體中可以非連續
2. 方便動態刪除或插入新元素
3. 各節點資料型態不必一定相同
4. 支援串列之共享

鏈結串列（Linked List）缺點：

1. 僅支援循序存取
2. 指標斷裂，資料就遺失
3. 循序存取速度慢，因需要先讀取指標

接下來我們將來介紹如何建立鏈結串列（Linked List）並動態新增、刪除資料。

# 鏈結串列初體驗

1. 建立鏈結串列

	首先我們先建立 LinkedList 的類別並建立需要使用的方法，其中最重要的是需要建立 Node 的資料結構。我們上面有提到過，鏈結串列是由一個個 Node 所連接而成，Node 內部包含了資料和指到下一個節點的指標：
	
	```javascript
	function LinkedList() {
		const Node = function(element) {
			this.element = element;
			this.next = null;
		}
		// 存放 LinkedList 長度
		let length = 0;
		// 第一個節點的指標
		let head = null;
		// 在尾部新增一個節點
		this.append = function(element) {};
		// 在特定位置新增一個元素節點
		this.insert = function(position, element) {};
		// 從串列中移除一個元素節點
		this.remove = function(element) {};
		// 從串列中移除一個特定的節點
		this.removeAt = function(position) {};
		// 回傳元素在串列的元素節點 index，若無則回傳 -1
		this.indexOf = function(element) {};
		// 判斷串列是否為空，是回傳 true，反之 false
		this.isEmpty = function() {};
		// 回傳串列元素個數
		this.size = function() {};
		// 由於 Node 是一個物件，所以運用 toString 方法將資料值輸出
		this.toString = function() {};
		// 列印出值
		this.print = function() {};
	}
	```

	接下來我們將一一實作這些方法。

2. 於尾部新增元素
在尾部新增元素通常會有兩種可能：
	
	- 串列本來為空，新增的是第一個元素：原本串列為空，將 head 指向 null 改為指向新的節點

	![用 JavaScript 學習資料結構和演算法：鏈結串列（Linked List）篇 ](append-list.bmp)

	- 串列不為空，新增元素進去：第二種情況：使用 current 當做輔助指標，先指到 head 指到的節點（我們前面說過鏈結串列只能循序存取）。使用 while 迴圈尋找到最後的節點（若 current.next 不為 null 代表後面還有節點，並將 current 指到下一個節點 current.next），當 current.next 等於 null 時我們知道已經到了最後節點，此時將 current.next 指到新增的 node 就算新增完畢囉！

	```javascript
	this.append = function(element) {
		// new 一個新的節點
		const node = new Node(element)
		let current;

		if(head === null) {
			// 第一種情況：原本串列為空，將 head 指向 null 改為指向新的節點
			head = node;
		} else {
			// 第二種情況：使用 current 當做輔助指標，先指到 head 指到的節點（我們前面說過鏈結串列只能循序存取）。使用 while 迴圈尋找到最後的節點（若 current.next 不為 null 代表後面還有節點，並將 current 指到下一個節點 current.next），當 current.next 等於 null 時我們知道已經到了最後節點，此時將 current.next 指到新增的 node 就算新增完畢囉
			
			current = head;
			while(current.next) {
				current = current.next;
			}
			current.next = node;
		}
		// 最後別忘了新增一下串列的長度！
		length++;
	};
	```

	實際使用新增方法：

	```javascript
	const linkdeList = new LinkedList();
	lsit.append('Mark');
	lsit.append('Jack');
	```

3. 從鏈結串列中移除元素
接著讓我們看看如何在鏈結串列中移除元素。和新增元素一樣，刪除元素節點同樣有兩種情況：
![用 JavaScript 學習資料結構和演算法：鏈結串列（Linked List）篇 ](delete-list.bmp)

	- 移除第一個元素：讓 head 指向 current.next，就可以刪除第一個元素

	- 移除第一個以外的元素：透過 while 迴圈搭配 index 可以讓 previous 指到欲刪除的元素的前一個節點。當欲刪除的節點的前一個節點指到 current.next 也就是欲刪除節點的下一個節點（若是尾端則是 null），就會刪除掉 current 節點

	以上兩種情況都可以透過 JavaScript 的垃圾回收處理機制讓未被指到元素被資源回收掉

	```javascript
	this.removeAt = function(position) {
		// 先判斷要移除元素的位置是否有效，是否大於 -1 小於長度
		if(position > -1 && position < length) {
			// 定義目前指到的 node，
			let current = head;
			let previous;
			let index = 0;
			if(position === 0) {
				// 讓 head 指向 current.next，就可以刪除第一個元素
				head = current.next;
			} else {
				while(index++ < position) {
					// 透過增加 index 讓 previous 指到欲刪除的元素的前一個節點
					previous = current;
					// current 指到欲刪除的節點
					current = current.next;
				}
				// 當欲刪除的節點的前一個節點指到 current.next 也就是欲刪除節點的下一個節點（若是尾端則是 null），就會刪除掉 current 節點
				previous.next = current.next;
			}
			length--;
			return current.element;
		} else {
			return null;
		}
	}
	```

4. 在任意位置中插入元素

	```javascript
	this.insert = function(position, element) {
		if(position >= 0 && position <= length) {
			let node = new Node(element);
			let current = head;
			let previous;
			let index = 0;

			if(position === 0) {
				node.next = current;
				head = node;
			} else {
				while(index++ < position) {
					previous = current;
					current = current.next;
				}
				node.next = current;
				previous.next = node;
			}
			length++;
			return true;
		} else {
			return false;
		}
	}
	```

5. 完整鏈結串列類別及方法

	- toString()：toString 會透過 while 迴圈把 LinkedList 物件內容轉換成字串
	```javascript
	this.toString = function() {
		// 建立一個變數幫助迴圈
		let current = head;
		let string = '';
		// 循序檢查 current 指到的 node 是否存在，若存在則串接資料內容成字串
		while(current) {
			string += current.element;
			// 指到下一個元素
			current = current.next;
		}
		return string;
	}
	```
	- indexOf(element)：若傳入 element 在串列中則回傳其 index，若無則返回 -1

	```javascript
	this.indexOf = function(element) {
		var current = head;
		var index = -1;

		while(current) {
			// 循序尋找若找到則回傳 index
			if(element === current.element) {
				return index;
			}
			index++;
			current = current.next;
		}
		return -1;
	};
	```
	- remove(element)：透過整合 indexOf 和 removeAt，我們可以更彈性刪除我們想要刪除的元素

		```javascript
		this.remove = function(element) {
			let index = this.indexOf(element);
			return this.removeAt(index);
		}
		```
	- isEmpty()：確認串列是否為空，若空返回 true，反之傳回 false

		```javascript
		this.isEmpty = function() {
			return length === 0;
		}
		```
	- size()：回傳串列長度

		```javascript
		this.size = function() {
			return length;
		}
		```
	- getHead()：回傳 private 變數 head

		```javascript
		this.getHead = function() {
			return head;
		}
		```

# 雙向鏈結（Double Linked List）
上面我們介紹了一般的鏈結串列，但事實上鏈結串列中存在許多不同的變形，現在我們將介紹擁有雙向鏈結的雙向串列（next 連到下一個鏈結，prev 連到上一個鏈結）。

![用 JavaScript 學習資料結構和演算法：鏈結串列（Linked List）篇 ](linked-list-types.png)

1. 首先建立 DoublyLinkedList 類別

	在 DoublyLinkedList 類別中我們可以發現和一般 LinkedList 的差別在於 Node 類別多了 prev 可以指到上一個元素，tail 則是和 head 相反，存由尾部開始的指標。有了這兩個新增的屬性，我們可以避免一般 LinkedList 只能從前面循序存取，DoublyLinkedList 則可以存尾部開始存取。此外，透過 prev 屬性，我們也可以存取到上一個元素。

	```javascript
	function DoublyLinkedList() {
		var Node = function(element) {
			this.element = element;
			this.next = null;
			this.prev = null; // 可以存取上一個元素
		};
		var length = 0;
		var head = null;
		var tail = null; // 可以由尾部開始循序存取
	}
	```

2. 在任意位置中插入元素
	
	與一般鏈結串列插入元素類似，但由於 DoublyLinkedList 指標可以雙向使用，需要維護兩個變數：current 和 previous。DoublyLinkedList 插入元素有三種可能：頭部插入、串列中間插入、尾部插入

	```javascript
	this.insert = function(position, element) {
		// 檢查欲插入地點是否存在串列中
		if(position > -1 && position < length) {
			const node = new Node(element);
			let current = head;
			let previous;
			let index = 0;
			if(position === 0) {
				// 判斷串列是否為空
				if(!head) {
					// 若為空則 head 和 tail 指向 node
					head = node;
					tail = node;
				} else {
					// 若非空串列的頭部新增 node，將 node.next 指到 head 指到的 current。current.prev 指到 node，head 改指到 node
					node.next = current;
					current.prev = node;
					head = node;
				}
			// 若是於尾部新增則將 current 指到 tail，更新 current.next 指到新的 node，並將 node.prev 指到 current。最後讓 tail 指到 node
			} else if(position === length) {
				current = tail;
				current.next = node;
				node.prev = current;
				tail = node;
			// 若是串列中間插入情形，使用迴圈讓 current 到達目的地，接下來我們使用 previous、current 來協助新增元素
			} else {
				while(index++ < position) {
					previous = current;
					current = current.next;
				}
				// 注意要按照順序避免斷掉鏈結，node.next 指到 current，previous.next 指到 node，current.prev 指到 node
				node.next = current;
				previous.next = node;
				// current.prev 指到 node，node.prev 指到 current 前一個元素 previous
				current.prev = node;
				node.prev = previous;
			} 
			// 記得增加長度
			length++;

			return true;
		} else {
			return false; 
		}
	};
	```

3. 在任意位置刪除元素

	與一般鏈結串列刪除元素類似，但由於 DoublyLinkedList 指標可以雙向使用，需要維護兩個變數：current 和 previous。DoublyLinkedList 刪除元素有三種可能：頭部、串列中間、尾部刪除

	```javascript
	this.removeAt = function(position) {
		if(position > -1 && position < length) {
			let current = head;
			let previous;
			let index = 0;
			// 刪除頭部元素
			if(position === 0) {
				// 將 head 指到 current.next
				head = current.next;
				// 若串列只有一個元素則將 tail 指向 null
				if(length === 1) {
					tail = null;
				} else {
					// head 指到 current 下一個元素，所以 head.prev 也等於 current.next.prev
					head.prev = null;
				}
			// 刪除尾部元素，由於我們有 tail 指到尾端，所以就不用使用迴圈方式
			} else if (position === length - 1) {
				// 運用 current 和 tail 來協助刪除，將 current 指到 tail 指到位置
				current = tail;
				// 將 tail 指到倒數第二個元素
				tail = current.prev;
				// tail 指到 null
				tail.next = null;
			// 刪除中間元素，使用迴圈到達想要刪除的位置
			} else {
				while(index++ < position) {
					previous = current;
					current = current.next;
				}
				// 將 previous 跳過欲刪除元素
				previous.next = current.next;
				current.next.prev = previous;
			}

			length--;
			return current.element;
		} else {
			return null;
		}
	}
	```

# 環狀鏈結串列（Circular Linked List）

![用 JavaScript 學習資料結構和演算法：鏈結串列（Linked List）篇 ](circular-list.gif)

環狀鏈結是另外一種特殊鏈結，環狀鏈結可以是單向或是雙向，其和一般鏈結最大不同在於最後一個節點元素指針（tail.next）並非指到 null，而是指到首位（head）。

# 總結
以上就是關於 JavaScript 在實現這個經典資料結構的說明，從這個單元中我們可以學習到：

1. 介紹什麼是鏈結串列（Linked List）
2. 比較陣列和鏈結串列的差異
3. 介紹了一般鏈結串列、雙向串列和環狀鏈結串列

鏈結串列相對於陣列來說比較抽象，若是無法一次掌握建議可以多閱讀幾次和編寫程式碼來理解喔！

# 延伸閱讀
1. [陣列與鏈結串列](https://www.csie.ntu.edu.tw/~r95116/CA200/slide/C7_ArrayLinkedList.pdf)

（image via [java2novice](http://www.java2novice.com/images/linked_list.png)、[unsw](https://cgi.cse.unsw.edu.au/~cs1927/16s2/labs/week04/Pics/lists/linked-list-types-small.png)、[cmu](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/pix/delete.bmp)、[wisc](http://www.geeksforgeeks.org/wp-content/uploads/cll_orig.gif)）