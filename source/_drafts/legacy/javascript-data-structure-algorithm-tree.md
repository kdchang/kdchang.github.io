---
title: 用 JavaScript 學習資料結構和演算法：樹（Tree）篇
date: 2016-09-25 22:00:00
tags: JavaScript, ECMAScript2015, ES6, Data Structure, Algorithm, Tree, 資料結構, 演算法, 樹
author: kdchang
---

![用 JavaScript 學習資料結構和演算法：樹（Tree）篇篇](tree.png)

# 什麼是樹（Tree）？
樹（Tree）是一種無序的資料結構，方便快速尋找資料。在生活中也可以常看到樹資料結構的應用，例如：階層表、比賽對戰表、家譜等。

在開始介紹樹這個資料結構之前，我們先來認識一下相關的專有名詞：

1. 樹根節點（root）：沒有父節點的最初節點
2. 子樹（child tree）：由節點和其後代構成
3. 子節點（child node）：有父節點的節點
4. 葉節點或稱外部節點（leaf）：沒有子節點的節點
5. 節點深度（depth）：祖先節點數量
6. 樹的高度（height）：最大深度到第幾層

# 二元樹和二元搜尋樹初體驗

![用 JavaScript 學習資料結構和演算法：樹（Tree）篇篇](tree-detail.gif)

二元樹是電腦科學中常用的資料結構，其規定每個節點最多兩個子節點，一個是左子節點，一個是右子節點。透過嚴謹的定義有助於寫出高效的插入、尋找、刪除節點的演算法。其中二元搜尋樹（BinarySearchTree）是二元樹的其中一種，但它的定義比起二元樹右更加嚴謹，其只允許在左子節點放比父節點小的值，右子節點放比父節點大或等於的值。接下來我們將重點討論二元搜尋樹（BinarySearchTree）。

1. 建立二元搜尋樹（BinarySearchTree）類別

	```javascript
	function BinarySearchTree() {
		// 建立二元樹 Node 類別，有一個存放資料的 key 和兩個指標指向左右子節點（若有的話）
		cosnt Node = function(key) {
			this.key = key;
			this.left = null;
			this.right = null;
		}
		let root = null;
	
		// 在樹中插入新的鍵（在樹中我們不稱元素或節點，而是稱鍵）
		this.insert = function(key) {};
		// 在樹中尋找一個鍵，若存在於樹中則返回 true，若不存在返回 false
		this.search = function(key) {};
		// 透過中序遍歷所有節點
		inOrderTraverse = function() {};
		// 透過先序遍歷所有節點
		preOrderTraverse = function() {};
		// 透過後序遍歷所有節點
		postOrderTraverse = function() {};
		// 回傳樹中最小值/鍵
		min = function() {};
		// 回傳樹中最大值/鍵
		max = function() {};
		// 從樹中移除某個鍵
		remove = function(key) {};
	}
	```

2. 在樹中新增鍵（需要用到遞迴觀念） 
	
	```javascript
	// 若插入非根節點需使用 insertNode 判斷插入位置
	const insertNode = function(node, newNode) {
		// 根據二元搜尋樹，若新節點鍵值比根節點小，往左節點討論
		if(newNode.key < node.key) {
			if(node.left === null) {
				node.left = newNode;
			} else {
				// 當沒有空位時，持續遞迴呼叫自己去判斷
				insertNode(node.left, newNode);
			}
		// 若新節點鍵值比根節點大或等於，往右節點討論
		} else {
			if(node.right === null) {
				node.right = newNode;
			} else {
				insertNode(node.right, newNode);
			}
		}
	};

	this.insert = function(key) {
		// 首先建立表示新節點的 Node 類別實例
		let newNode = new Node(key);

		if(root === null) {
			// 插入即為根節點
			root = newNode;
		} else {
			// 使用 insertNode
			insertNode(root, newNode);
		}
	}
	```

	使用二元搜尋樹：

	```javascript
	let tree = new BinarySearchTree();
	tree.insert(7);
	tree.insert(2);
	tree.insert(4);
	tree.insert(5);
	tree.insert(12);
	tree.insert(1);
	tree.insert(97);
	```

# 樹的遍歷走訪
樹的遍歷意思是走訪每個節點並對它們進行某種操作，其中透過走訪規則更分為中序遍歷、先序遍歷、後序遍歷：

1. 中序遍歷：是一種由 `小到大` 的升冪順序訪問節點方式，事實上也是一種排序

	```javascript
	this.inOrderTraverse = function(callback) {
		// 從 root 出發
		inOrderTraverseNode(root, callback);
	}
	const inOrderTraverseNode = function(node, callback) {
		if(node !== null) {
			inOrderTraverseNode(node.left, callback);
			callback(node.key);
			inOrderTraverseNode(node.right, callback);		
		}
	}
	```

	設定 printNode callback：

	```javascript
	function printNode(value) {
		// 列印出節點鍵值
		console.log(value);
	}
	three.inOrderTraverse(printNode);
	```

2. 先序遍歷：先以優於後代節點的順序訪問每個節點

	```javascript
	this.preOrderTraverse = function(callback) {
		preOrderTraverseNode(root, callback);
	};
	const preOrderTraverseNode = function(node, callback) {
		if(node !== null) {
			callback(node.key);
		} else {
			callback(node.key);
			preOrderTraverseNode(node.left, callback);
			preOrderTraverseNode(node.right, callback);
		}
	};
	```

3. 後序遍歷：訪問節點的後代節點，再訪問節點本身

	```javascript
	this.postOrderTraverse = function(callback) {
		postOrderTraverseNode(root, callback);
	};
	const postOrderTraverseNode = function(node, callback) {
		if(node !== null) {
			postOrderTraverseNode(node.left, callback);
			postOrderTraverseNode(node.right, callback);
			callback(node.key);
		}
	};
	```

# 樹的搜尋

1. 搜尋最大值

	```javascript
	this.max = function() {
		return maxNode(root);
	};

	const maxNode = function() {
		if(node) {
			while(node && node.right !== null) {
				node = node.right;
			}
			return node.key;
		}
		return null;
	};
	```

2. 搜尋最小值

	```javascript
	this.min = function() {
		return minNode(root);
	};

	const minNode = function(node) {
		if(node) {
			while(node && node.left !== null) {
				node = node.left;
			}
			return node.key;
		}
		return null;
	};
	```

3. 搜尋特定值

	```javascript
	this.search = function() {
		return searchNode(root, key);
	}

	const searchNode = function(node, key) {
		if(node === null) {
			return false;
		}
		if(key < node.key) {
			return searchNode(node.left, key);
		} else if (key > node.key) {
			return true;
		}
	}
	```

# 移除樹的節點

```javascript
const removeAt = function(node, key) {
	if(node === null) {
		node.left = removeAt(node.left, key);
		return node;
	} else if(key > node.key) {
		node.right = removeNode(node.right, key);
	} else {
		if(node.left === null) {
			node = node.right;
			return node;
		} 
		if(node.left === null) {
			node = node.right;
			return node;
		} else if(node.right === null) {
			node = node.left;
			return node;
		}
		const aux = findMinNode(node.right);
		node.key = removeNode(node.right, aux.key);
		return node;
	}
}
```

1. 移除一個葉節點

2. 移除有兩個葉節點的節點

# 其它二元樹

1. AVL 樹

2. 紅黑樹

3. 堆積樹

# 延伸閱讀

（image via [key-to-programming](http://key-to-programming.blogspot.tw/2015/02/binary-tree-data-structure-binary-tree.html)、[amankrjha](http://2.bp.blogspot.com/-CApCcTOe1A0/TwppaUWiQsI/AAAAAAAABX4/sJv92_ZJzhE/s1600/Tree+Term.gif)）