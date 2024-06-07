---
title: 用 JavaScript 學習資料結構和演算法：排序（Sort）與搜尋（Search）篇
date: 2016-09-27 11:00:00
tags: JavaScript, ECMAScript2015, ES6, Data Structure, Algorithm, Sort, Search, 資料結構, 演算法, 排序, 搜尋 
author: kdchang
---

![用 JavaScript 學習資料結構和演算法：排序（Sort）與搜尋（Search）篇](sort.png)

# 什麼是排序（Sort）？
想像一下如果你今天因為牙齒疼，想找住家附近的牙醫診所（假設你沒有網路和查號台可以使用），你必須得翻開電話黃頁一個個找。若是這本黃頁好死不死沒有做任何排序的話，你可能需要從頭到尾一個個查看，當然故事的結局很可能是等你找到電話時你已經疼死在家裡了。所以說選擇合適的排序方式讓資料更有組織和有效率地編排是排序演算法的目標。以下就介紹幾個經典的排序演算法，再介紹排序演算法之前，我們先建立一個陣列類別方便表示排序和搜尋的資料。

```javascript
function ArrayList() {
	let array = [];
	this.insert = function() {
		array.push(item);
	};
	// 方便輸出結果
	this.toString() = function() {
		return array.join();
	};
}
```

# 氣泡排序法（Bubble Sort）
![用 JavaScript 學習資料結構和演算法：排序（Sort）與搜尋（Search）篇](bubble-sort.png)

雖然氣泡排序法是所有排序演算法中效能最差的，但卻也是最簡單的演算法，所以我們首先來介紹氣泡排序法：

1. 實作氣泡排序法：氣泡排序法核心觀念為比較任兩個相鄰項目，如果第一個比第二個大，則交換兩個數字，重複進行比較到最後。元素會如同氣泡一樣從水裡往上浮至正確位置。

	```javascript
	this.bubbleSort = function() {
		let length = array.length;
		for(let i; i < length; i++) {
			// 比到後來最後一位已經排序好
			for(let j = 0; j < length - 1; j++) {
				if(array[j] > array[j + 1]) {
					swap(j, j + 1);
				}
			}
		}
	};

	const swap = function(index1, index2) {
		let tmp = array[index1];
		array[index1] = array[index2];
		array[index2] = tmp;
	}
	```

	測試程式碼：

	```javascript
	function createNonSortedArray(size) {
		let array = new ArrayList();
		for(let i = size; i > 0; i--) {
			array.insert(i);
		}
		return array;
	}

	let array = createNonSortedArray(5);
	array.bubbleSort();
	console.log(array.toString);
	```

2. 改進後的氣泡排序法：如果修改成內圈減外圈的輪數，可以避免不必要的比較。同時也加上 flag 記錄交換情形：

	```javascript
	this.bubbleSort = function(data){
	    var flag = true;
	    for(var i = 0; i < data.length - 1 && flag; i++){
	        flag = false;
	        for(var j = 0; j < data.length - i - 1; j++){
	            if(data[j+1] < data[j]){
	                swap(data, j+1, j);
	                flag = true;
	            }
	        }
	    }
	};  
	```

3. 時間複雜度（Time Complexity）
	- Best Case：Ο(n)
	當資料的順序恰好為由小到大時
	第一次執行後，未進行任何swap ⇒ 提前結束

	- Worst Case：Ο(n2)
	當資料的順序恰好為由大到小時
	每回合分別執行：n-1、n-2、...、1次
	(n-1) + (n-2) + ... + 1 = n(n-1)/2 ⇒ Ο(n2)

	- Average Case：Ο(n2)
	第n筆資料，平均比較 (n-1)/2 次
	
4. 空間複雜度（Space Complexity）：θ(1)

# 選擇排序法（Selection Sort）

![用 JavaScript 學習資料結構和演算法：排序（Sort）與搜尋（Search）篇](selection-sort.jpg)

1. 實作選擇排序法（Selection Sort）：選擇排序法的主要思路在於每次選擇資料結構中最小值放到第一位，再找第二小放到第二位，依此類推。
	```javascript
	this.selectionSort = function() {
		let length = array.length;
		let indexMin;
		for(let i = 0; i < length - 1; i++) {
			indexMin = i;
			for(let j = i; j = length; j++) {
				if(array[indexMin] > array[j]) {
					// 找未排序中最小值
					indexMin = j;
				}
			}
			if(i !== indexMin) {
				swap(i, indexMin);
			}
		}
	};
	```
2. 使用選擇排序：
	```javascript
	array = createNonSortedArray(5);
	console.log(array.toString());
	array.selectionSort();
	console.log(array.toString());
	```

3. 時間複雜度（Time Complexity）

	- Best Case：Ο(n2)
	
	- Worst Case：Ο(n2)
	
	- Average Case：Ο(n2)
	
	說明：無論資料順序如何，都會執行兩個迴圈

4. 空間複雜度（Space Complexity）：θ(1)

# 插入排序法（Insertion Sort）

![用 JavaScript 學習資料結構和演算法：排序（Sort）與搜尋（Search）篇](insertion-sort.png)

1. 實作插入排序法（Insertion Sort）
	```javascript
	this.insertionSort = function() {
		let length = array.length;
		let j;
		let temp;
		for(let i = 1; i < length; i++) {
			j = i;
			temp = array[i];
			while(j > 0 && array[j - 1] > temp) {
				array[j] = array[j - 1];
				j--;
			}
			array[j] = temp;
		}
	};
	```

2. 使用插入排序法（Insertion Sort）

3. 時間複雜度(Time Complexity)
	- Best Case：Ο(1)
	當資料的順序恰好為由小到大時，每回合只需比較1次

	- Worst Case：Ο(n2)
	當資料的順序恰好為由大到小時，第i回合需比i次

	- Average Case：Ο(n2)
	第n筆資料，平均比較n/2次

4. 空間複雜度(Space Complexity)：θ(1)

# 合併排序法（Merge Sort）

![用 JavaScript 學習資料結構和演算法：排序（Sort）與搜尋（Search）篇](merge-sort.png)

前面三個介紹的演算法由於效能不佳比較少能實際使用在真實狀況，但合併排序法的效能不錯，在瀏覽器支援實作的 JavaScript 中就有使用到合併排序法（Merge Sort）。 

1. 實作合併排序法（Merge Sort）：合併演算法是一種分治型演算法，主要思想是將原始陣列切分成較小陣列，直到每個小陣列只有一個位置，接著將小陣列合併成較大陣列，直到最後只有一個排序完畢的大陣列，在合併排序法中我們必須使用遞迴的觀念。

	```javascript
	this.mergeSort = function() {
		array = mergeSortRec(array);
	}

	const mergeSortRec = function(array) {
		const length = array.length;
		if(length === 1) {
			return array;
		}
		const mid = Math.floor(length / 2);
		const left = array.slice(0, mid);
		const right = array.slice(mid, length);
		return merge(mergeSortRec(left), mergeSortRec(right));
	}
	```

2. 使用合併排序法（Merge Sort）

	```javascript
	const merge = function(left, right) {
		const result = [];
		let il = 0;
		let ir = 0;
		while(il < left.length && ir < right.length) {
			if(left[il] < right[ir]) {
				result.push(left[il++]);
			} else {
				result.push(right[ir++]);
			}
		}

		while(il < left.length) {
			result.push(left[il++]);
		}

		while(ir < right.length) {
			result.push(right[ir++]);
		}

		return result;
	};
	```

3. 時間複雜度（Time Complexity）
	- Best Case：Ο(n log n)
	
	- Worst Case：Ο(n log n)
	
	- Average Case：Ο(n log n)
	T(n) = MergeSort（左子數列） + MergeSort（右子數列）+ Merge 
    	= T(n/2) + T(n/2) + c×n = O(n log2n)
	
4. 空間複雜度（Space Complexity）：Ο(n)
	因為需要暫時性的暫列存放每回合合併後的結果

# 快速排序法（Quick Sort）

![用 JavaScript 學習資料結構和演算法：排序（Sort）與搜尋（Search）篇](quick-sort.png)

1. 實作快速排序法（Quick Sort）：快速排序法是最常用的排序法之一，其複雜度為 O(nlogn)，且效能也比其他複雜度相同的排序法好。快速排序法主要採取分割與征服（Divide and Conquer）的策略，其主要思路也是將原始陣列分為較小陣列來處理。在實作上，首先我們先從陣列中選擇中間一項作為基準值（pivot）。接下來建立兩個指位器一個指到開頭，若數值小於基準值則指標往前，另外一個指到結尾，當值大於基準值時指針往左移動。接著演算法對劃分後的小陣列重複之前的兩步驟，直到陣列完全排列。

	```javascript
	this.quickSort = function() {
		quick(array, 0, array.length - 1);
	};

	const quick = function(array, left, right) {
		let index;
		if(array.length > 1) {
			index = partition(array, left, right);
		}	
	};

	// 實作劃分過程
	const partition = function(array, left, right) {
		const pivot = array[Math.floor((right + left) / 2)];
		const i = left;
		const j = right;
		while(i <= j) {
			while(array[i] < pivot) {
				i++;
			}
			while(array[j] > pivot) {
				j++;
			}
			if(i <= j) {
				swapQuickSort(array, i, j);
				i++;
				j--;
			}
		}
		return i;
	}

	const swapQuickSort = function(array, index1, index2) {
		const tmp = array[index1];
		array[index1] = array[index2];
		array[index2] = tmp;
	}
	```

2. 使用快速排序法（Quick Sort）

	```javascript
	array = createNonSortedArray(5);
	array.quickSort();
	```

3. 時間複雜度(Time Complexity)
	- Best Case：Ο(n log n)
	第一個基準值的位置剛好是中位數，將資料均分成二等份
	
	- Worst Case：Ο(n2)　
	當資料的順序恰好為由大到小或由小到大時，此時有分割跟沒分割一樣
	
	- Average Case：Ο(n log n)

4. 空間複雜度(Space Complexity)：Ο(log n) ~ Ο(n)
	快速排序法的空間複雜度會依實作方式而有所不同
	因為遞迴呼叫需要額外的堆疊空間 ⇒ 複雜度會因遞迴的深度而異
	- Best Case： Ο(log n)
	遞迴呼叫的深度為 log n
	
	- Worst Case： Ο(n)
	遞迴呼叫的深度為 n-1

# 什麼是搜尋（Search）？
搜尋是為了要在資料結構中找到想要的元素。

# 循序搜尋（Sequential Search）

```javascript
this.sequentialSearch = function(item) {
	for(let i = 0; i < array.legth; i++) {
		if(item === array[i]) {
			return i;
		}
	}
	return -1;
};
```

# 二分搜尋（Binary Search）

0. 先做排序，我們這邊使用快速排序
1. 選擇中間值
2. 如果選取值是要搜尋值則結束搜尋
3. 如果待搜尋值比選取值小，則返回步驟一在選取值左邊子陣列中尋找
4. 如果待搜尋值比選取值大，則返回步驟一在選取值右邊子陣列中尋找

```javascript
this.binarySearch = function() {
	this.quickSort();
	let low = 0;
	let high = array.length;
	let mid;
	let element;
	while(low <= high) {
		mid = Math.floor((low + high) / 2);
		element = array[mid];
		if(element < item) {
			low = mid + 1;
		} else if (element > item) {
			high = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
};
```

# 總結
在這個單元中我們學習了演算法中幾種經典的排序：

1. 氣泡排序法（Bubble Sort）
2. 選擇排序法（Selection Sort）
3. 插入排序法（Insertion Sort）
4. 合併排序法（Merge Sort）
5. 快速排序法（Quick Sort）

以及搜尋方法：

1. 循序搜尋（Sequential Search）
2. 二分搜尋（Binary Search）

# 延伸閱讀
1. [演算法的應用](https://market.cloud.edu.tw/content/senior/computer/ks_ks/book/algodata/algorithm/algo4.htm)
2. [[演算法] 氣泡排序法(Bubble Sort)](http://notepad.yehyeh.net/Content/Algorithm/Sort/Bubble/1.php)

（image via [vchensubeswogfpjoq](http://st1.vchensubeswogfpjoq.netdna-cdn.com/wp-content/uploads/2014/05/Insertion-Sort.png)、
[studytonight](http://www.studytonight.com/data-structures/images/bubble-sort.png)、[studytonight](http://www.studytonight.com/data-structures/images/merge-sort.png)、[stackoverflow](http://i.stack.imgur.com/1SKb2.jpg)、[interactivepython](http://interactivepython.org/runestone/static/pythonds/_images/insertionsort.png)）	