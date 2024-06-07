---
title: 用 Python 自學程式設計：變數（variable）與資料型別（type）
date: 2017-08-11 22:00:00
tags: Python, Django, MVC, Web, MTV, Web Backend, Web Framework, 教學, Flask, 框架, coding, code, 程式設計, 自學程式設計, CS, Computer, Computer Science
author: kdchang
---

![Python 自學程式設計：程式設計思維入門](coding.jpg) 

# 前言
在前一單元中我們了解了程式設計思維的概念和建立了 Python 的開發環境，在這一單元中我們將了解 Python 變數與資料型別以及如何操作字串。

# 電腦最初的用途就是一台超大台計算機
資料的儲存以及操作在程式設計中扮演非常重要的角色，因為最早的電腦程式就是一種大型的計算機（最早的電腦就稱為計算機），即便現在學校教授電腦科學概論往往都會把課程稱為計算機概論呢！在操作資料的過程中如何儲存資料就是非常重要的事情，一般而言資料儲存有分為暫時儲存的揮發性資料（儲存在記憶體中的變數資料）和持久性儲存的資料（例如：資料庫、檔案等），在這邊我們討論的是變數的資料。

# 在 Python 世界，所有東西都是物件
在 Python 世界中，所有東西都是物件，物件可以視為透明的箱子，裡面存了一些資料。物件會有自己的資料型別，決定它做什麼樣的操作。另外，又依據箱子內的值可否改變而分為`不可變物件`和`可變物件`。

在前面我們有提到資料可以儲存在記憶體中的變數，在 Python 中變數只是一種名稱，當給定值時不會將值複製，而是將名稱貼到給定的物件上（注意 Python 程式語言中的 `=` 是給定值，`==` 才是相等的意思）

談到資料，就不得不談一下資料型別（type），雖然在 Python 不用像 C 語言之類程式語言需要在變數前面定義資料型別（在 Python 中 class 類別和 type 類型幾乎代表同一件事情，class 類別則是定義物件的基礎），但物件的資料型別會影響資料操作，所以值得我們好好認識。在 Python 世界裡，可以分為以下幾種`簡單`資料型別（可以想像成化學課中的原子）：

1. `bool` 布林，分為 `True`、`False` 通常用於條件判斷
2. `int` 整數，例如： `10`、`999999` 
3. `float` 浮點數，係指有小數點的整數：`1.222`、`1.0e7` 等同於 10 的 7 次方
4. `string` 字串，一串文字字元

我們可以透過 `type(物件)` 去確認該物件的型別：

```
print(True)
print(101)
print(3.14)
print('happy coding')
```

另外一種是`複雜`資料型別（可以想像成是化學課中的分子），這個我們會在下一個單元做討論：

1. `list` 串列，用於儲存一系列序列資料（可以儲存不同資料型別），類似於其他程式語言的陣列但更為強大
2. `tuple` 元組，類似於 list 串列，但不同的是 tuple 給定元素後不能改變
3. `dict` 字典，和串列很像但不在乎元素順序，而且不會使用 0,1,...等的序列 index 來選擇項目，反之我們必須宣告唯一的 key 鍵值來對應想儲存的 value 值
4. `set` 集合，集合就像是被移除 value 值的字典，只有保留 key 鍵值，也就是說 set 的內容元素都必須是獨一無二的

# 物件又分可變和不可變物件

1. 不可變物件（int, string, float, tuple），亦即若資料改變，會複製一份資料到新的記憶體空間然後資料更新，下面是一個簡單範例：

    ```
    i = 101 # 宣告一個變數將 i 便條紙貼到 101 物件
    j = 101 # 宣告一個變數將 j 便條紙貼到 101 物件
    print(id(101)) # 印出 101 物件 id，可以想成是記憶體位置        
    print('i id:' + str(id(i))) # 印出 i 指向的 id，和 101 物件值相同
    print('j id:' + str(id(j))) # 印出 j 指向的 id，和 101 物件值相同
    print(i is j) # 因為兩者會貼到同一個物件所以會顯示相等，True
    j = j + 1 # 若資料改變，會複製一份資料到新的記憶體空間然後資料更新
    print('new i id:' + str(id(i))) # 印出一樣的 id
    print('new j id:' + str(id(j))) # 印出新的 id
    print(i is j) # 兩者指到不同的記憶體位置，False
    ```

    執行結果：

    ```
    140181136769920
    i id:140181136769920
    j id:140181136769920
    True
    new i id:140181136769920
    new j id:140181136769952
    False
    ```

2. 可變物件（list, dict, set），亦即若資料改變則直接在指向的記憶體空間改變資料，下面是一個簡單範例：

    ```
    a = {} # 宣告一個變數指到一個空字典 dict
    b = a # 將 b 變數指到 a 同樣記憶體位置
    print(id(a)) # 印出 a 的 id 
    print(a is b) # 兩者指到相同的記憶體位置，True
    a['a'] = 'python' # 改變 a 的鍵值
    print('id a:' + str(id(a))) # 印出 a id 
    print('a:' + str(a)) # 印出內容值
    print('id b:' + str(id(b))) # 印出 b id，dict 為可變物件，印出 id 會和 a 一樣
    print('b:' + str(b)) # dict 為可變物件，印出內容值會和 a 一樣
    print(a is b) # 兩者指到相同的記憶體位置，True
    ```

    執行結果：

    ```
    140181112792336
    id a:140181112792336
    a:{'a': 'python'}
    True
    id b:140181112792336
    b:{'a': 'python'}
    True
    ```

另外，Python 支援強制轉換資料型別：
可以透過 int()、float()、str() 進行資料型別轉換

```
int(1.2)
float('1.3')
str('1')
```

# 字串操作好好玩
在程式設計的世界中，操作字串基本上是家常便飯，接著我們來談談在 Python 中如何進行字串的操作：

在 Python 中若要宣告字串，可以使用單引號或雙引號，會有兩種方式是因為讓開發者可以產生有 `'` 或 `"` 內容的字串。

```
my_str = 'This is a "good" language!'
```

但要特別留意的是在 Python3 和 Python2 對於字串的支援不盡相同，在 Python 中支援 Unicode 標準。與其他程式語言不同的是 Python 字元是不可變的，不能直接改變字串，但可以將一部分字串複製到其他字串。

以下是常見字串操作方式：
1. 宣告字串

    ```
    language = 'python'
    ```

2. 串連字串 +

    ```
    language = 'python'
    word = 'I love'
    word + language 
    ```

3. 複製字串 *

    ```
    language = 'python'
    language * 3
    ```

4. 選取字串 [開始:結束:間隔]

    ```
    language = 'python'
    language[0:1] # p
    language[0:-1] # pytho
    language[0:4:2] # ph
    ```

5. len、split、join、replace 字串操作

    ```
    language = 'python'
    print(len(language)) # 印出字串長度 6
    print(language.split(3)) # 切割字串長度
    print(language.join(3)) # 切割字串長度
    print(language.replace(3)) # 切割字串長度
    ```

# 總結
以上我們介紹了在 Python 世界中物件是基本元素，也介紹了變數以及字串的操作，接下來我們將透過 Python 介紹程式設計的內涵和不同的應用情境以及`複雜`資料型別的使用。

（image via [mshcdn](https://i.amz.mshcdn.com/rRxXhoIhNucutinAio8YRF4TvzE=/1200x630/2017%2F06%2F15%2F71%2Fc1a206081efd44d1b61f5c0f86dcda6c.c222e.jpg)）

# 延伸閱讀
1. [Python 官網](https://www.python.org/)
2. [JavaScript 程式設計新手村](https://pics.ee/1HC~)
3. [Python Web 程式設計入門實戰](http://pics.ee/c34g)
4. [非本科生，我想半路出家學寫程式，該如何開始？](https://cofounderinc.com/2015/03/15/lerning-how-to-write-code/)
5. [自學程式設計學習資源懶人包](http://happycoder.org/2017/01/27/learning-coding-programming-tutorial-and-resource/)
6. [python可变和不可变对象](http://www.jianshu.com/p/c5582e23b26c)