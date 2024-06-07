---
title: 用 JavaScript 學習資料結構和演算法：圖形（Graph）篇
date: 2016-09-26 22:00:00
tags: JavaScript, ECMAScript2015, ES6, Data Structure, Algorithm, Graph, 資料結構, 演算法, 圖形 
author: kdchang
---

![用 JavaScript 學習資料結構和演算法：圖形（Graph）篇 ](graph.gif)
---
# 什麼是圖形（Graph）？
圖形是另外一種非線性由一組由邊連結節點的資料結構。社交網站的關係、道路航班等資訊都可以使用圖形表示。

在開始介紹圖形之前我們先來介紹一下關於圖形的基本概念：

1. 圖形：G = (V, E)，V（Vertex）：一組頂點，E（Edge）：一組邊，連接 V 中的頂點

	![用 JavaScript 學習資料結構和演算法：圖形（Graph）篇 ](direction-graph.gif)

2. 相鄰：當兩節點有用邊連在一起時稱相鄰，由上圖得知 A、B 相鄰，A、E 不相鄰

3. 度：決定於相鄰頂點數量，如上圖：A 為 1 度，B 為 3 度 

4. 路徑：相鄰頂點形成的序列，如上圖：A、B、D、E。簡單路徑則要求不能重複點

5. 環：第一個點和最後一個點為同一個點，如上圖：B、C、D、B

6. 若圖的邊有方向性稱有向圖，反之則稱無向圖

	![用 JavaScript 學習資料結構和演算法：圖形（Graph）篇 ](weight-graph.png)

7. 權重：若圖形的邊有權值則稱加權

以上是簡單介紹圖形的常見術語，事實上圖形在電腦科學領域應用甚廣，例如搜尋特定邊、點，尋找兩點最短路徑，檢測是否有環等。

# 圖形初體驗

1. 圖的表示方式
	
	- 相鄰矩陣：圖形中最常用的是相鄰矩陣。將各節點當做矩陣的行和列的 index，若頂點間有連接則 array[i][j] = 1，反之 array[i][j] = 0。這個方法的缺點在於若遇到稀疏矩陣將浪費許多空間給不存在邊，且頂點可能數量會改變，使用二維矩陣就相對不彈性

	- 相鄰串列：每個頂點對應一個存放相鄰頂點的相鄰陣列，可以用字典等資料結構表示，相對彈性，接下來我們將主要使用相鄰串列進行討論

	- 關聯矩陣：使用矩陣列表表示頂點，欄表示邊。使用二維陣列表示兩者相通性，例如：若頂點 v 是邊 e 的入射點，則 array[v][e] === 1，反之則等於 0。通常用於邊的數量比頂點的多的情況，可以節省記憶體和空間

2. 建立圖形類別
	
	```javascript
	function Graph() {
		// 建立兩個 private 屬性，vertices 存放所有頂點名字、adjList 存放頂點對應相鄰頂點的陣列
		let vertices = [];
		const adjList = new Dictionary();
		// 新增頂點，將頂點新增進入 vertices 陣列，同時新增頂點對應相鄰頂點陣列的字典元素
		this.addVertex = function(v) {
			vertices.push(v);
			adjList.set(v, []);
		};
		// 由於我們討論的是無向圖，所以我們在新增邊時，要把兩個頂點都要對應，放入對方的相鄰頂點陣列中
		this.addEdge = function(v, w) {
			adjList.get(v).push(w);
			adjList.get(w).push(v);
		};
		this.toString = function() {
			let s = '';
			for(let i = 0; i < vertices.length; i++) {
				s += vertices[i] + '->';
				let neighbors = adjList.get(vertices[i]);
				for(let j = 0; j < neighbors.length; j++) {
					s += neighbors[j] + ' ';
				}
				s += '\n';
			}
			return s;
		}
	}

	// 使用到的字典類別
	function Dictionary() {
		let items = {};
		this.set = function(key, value) {};
		this.remove = function(key) {};
		this.has = function(key) {};
		this.get = function(key) {};
		this.clear = function() {};
		this.size = function() {};
		this.keys = function() {};
		this.values = function() {};
	}
	```

	測試程式碼：

	```javascript
	const graph = new Graph();
	let vertices = [1, 2, ,3, 4, 5, 6, 7, 8];
	for(let i = 0; i < vertices.length; i++) {
		graph.addVertices(vertices[i]);
	}
	graph.addEdge(1, 2);
	graph.addEdge(1, 3);
	graph.addEdge(1, 4);
	graph.addEdge(3, 4);
	graph.addEdge(3, 7);
	graph.addEdge(4, 7);

	graph.toString();
	```

# 圖形遍歷
為了訪問所有節點，圖形遍歷主要有廣度優先搜尋（Breadth-First Search, BFS）和深度優先搜尋（Depth-First Search, DFS）方式。圖形遍歷可以用來尋找特定的頂點或是尋找兩頂點間的路徑並檢查圖形是否有環或連通。

在圖形遍歷中有一個核心思想：追蹤每個第一次訪問的節點，並且追蹤有哪些節點還沒被訪問。為了提昇演算法效率，訪問每個節點最多兩次。

基本上廣度優先搜尋（Breadth-First Search, BFS）在演算法上是相通，最大的差別在於等待訪問的頂點串列資料結構，一個是堆疊，一個是佇列。在這邊我們使用顏色來標示訪問情形：白色代表頂點尚未訪問，灰色表示訪問過但未被探索過，黑色表示訪問過，且完全探索過。

1. 廣度優先搜尋（Breadth-First Search, BFS）：使用先進先出的佇列資料結構，藉由將節點存入佇列，最先存入佇列者先探索

```javascript
	const initializeColor = function() {
		let color = [];
		for(let i; i vertices.length; i++) {
			color[vertices[i]] = 'whilte';
		}
		return colors;
	}
	this.bfs = function(v, callback) {
		let color = initializeColor();
		let queue = new Queue();
		queue.enqueue(v);
		while(!queue.isEmpty()) {
			let u = queue.dequeue();
			let neighbors = adjList.get(u);
			color[u] = 'grey';
			for(let i = 0; i < neighbors.length; i++) {
				let w = neighbors[i];
				if(color[w] === 'white') {
					color[w] = 'grey';
					queue.enqueue(w);
				}
			}
		}
		color[u] = 'black';
		if(callback) {
			callback(u);
		}
	}
```

使用 BFS 尋找最短路徑

深入學習最短路徑演算法


2. 深度優先搜尋（Depth-First Search, DFS）：使用資料結構為後進先出的堆疊，藉由將頂點存入堆疊中，若有存在新的頂點就沿著路徑去探索

	```javascript
	this.dfs = function(callback) {
		let color = initializeColor();
		for(let i; i < vertices.length; i++) {
			if(color[vertices[i]] === 'white') {
				dfsVisit(vertices[i], color, callback);
			}
		}
	};

	const dfsVisit = function(u, color, callback) {
		color[u] = 'grey';
		if(callback) {
			callback(u);
		}
		let neighbors = adjList.get(u);
		for(let i = 0; i < neighbors.length; i++) {
			let w = neighbors[i];
			if(color[w] === 'white') {
				dfsVisit(w, color, callback);
			}
		}
		color[u] = 'black';
	};	
	```

	```javascript
	let time = 0;
	this.DFS = function() {
		let color = initializeColor();
		let d = [];
		let f = [];
		let p = [];
		let time = 0;

		for(let i = 0; i < vertices.length; i++) {
			f[vertices[i]] = 0;
			d[vertices[i]] = 0;
			p[vertices[i]] = null;
		}

		for(let i = 0; i < vertices.length; i++) {
			if(color[vertices[i]] === 'white') {
				DFSVist(vertices[i], color, d, f, p);
			}
		}

		return {
			discovery: d,
			finished: f,
			predecessors: p
		}
	};

	const DFSVist = function(u, color, d, f, p) {
		color[u] = 'grey';
		d[u] = ++time;
		let neighbors = adjList.get(u);
		for(let i = 0; i < neighbors.length; i++) {
			let w = neighbors[i];
			if(color[w] === 'white') {
				p[w] = u;
				DFSVist(w, color, d, f, p);
			}
		}
		color[u] = 'black';
		f[u] = ++time;
	}
	```

	使用深度優先搜尋：

	```javascript
	const graph = new Graph();
	let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
	for(let i = 0; i < vertices.length' i++) {
		graph.addVertex(vertices[i]);
	}
	graph.addEdge('A', 'C');
	graph.addEdge('A', 'D');
	graph.addEdge('B', 'D');
	graph.addEdge('B', 'E');
	graph.addEdge('C', 'F');
	graph.addEdge('F', 'E');
	const result = graph.DFS();
	```

# 總結
以上介紹了圖形這個無序資料結構，我們學到了：

1. 什麼是圖形（Graph）？
2. 圖形的建立與操作
3. 圖形遍歷
4. 廣度優先搜尋（Breadth-First Search, BFS）和深度優先搜尋（Depth-First Search, DFS）方式

# 延伸閱讀
1. [Graph](http://www.csie.ntnu.edu.tw/~u91029/Graph.html)

（iamge via [vt](http://courses.cs.vt.edu/csonline/DataStructures/Lessons/Graphs/graph.gif)、[codediesel](http://www.codediesel.com/wp-content/uploads/2012/02/d-graph1.gif)、[dab1nmslvvntp](https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2013/07/dg-graphs04.png)）
	