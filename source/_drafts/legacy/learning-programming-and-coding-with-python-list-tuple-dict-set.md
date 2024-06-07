---
title: 用 Python 自學程式設計：list、tuple、dict and set
date: 2017-08-15 22:00:00
tags: Python, Django, MVC, Web, MTV, Web Backend, Web Framework, 教學, Flask, 框架, coding, code, 程式設計, 自學程式設計, CS, Computer, Computer Science
author: kdchang
---

![Python 自學程式設計：程式設計思維入門](coding.jpg) 

# 前言
在前一單元中我們了解了變數和 Python 世界物件的重要性，也介紹了簡單的資料型別，我們也有提到簡單資料型別（布林、整數、浮點數和字串）就像是原子一樣，而複雜資料型別就像是分子一樣，在這一單元中我們將更進一步了解 Python 複雜的資料型別以及如何操作它們。

# 串列 list 與元組 tuple
在程式語言中通常可以利用序列式方式去記錄資料，在 Python 中，我們使用 list 串列和 tuple 元組來儲存序列式資料。兩者最大的不同在於 tuple 是不可以改變的。

1. 串列 list
    串列是一連串順序性的元素組成，我們可以新增、讀取、刪除和修改串列，串列中可以有重複的元素。

    - 建立串列

    串列可以透過中括號或是使用 list 關鍵字來創建，裡面元素由逗號分隔

    ```
    my_list0 = []
    my_list1 = list()
    my_list2 = ['python', 'js', 'SQL']

    list('js')
    # ['j', 's']
    ```

    - 使用 index offset 和範圍來取得元素

    在電腦科學世界，index 通常是從 0 開始，-1 從結尾數回來：

    ```
    languages = ['python', 'js', 'go']
    languages[0] # python
    languages[1] # js
    languages[-1] # go
    ```

    範圍取值 [開始:結束（不含）:間隔（default 1）]：

    ```
    languages = ['python', 'js', 'go']
    my_list2[0:1] # ['python']
    ```

    - append 元素到串列最後

    ```
    languages = ['python', 'js', 'go']
    languages.append('java')
    ```

    - extend 串連串列

    ```
    languages = ['python', 'js', 'go']

    languages.extend('c++') # ['python', 'js', 'go', 'c++']

    languages += ['ruby', 'c'] # ['python', 'js', 'go', 'c++', 'ruby', 'c']
    ```

    - insert 插入元素到位置上

    ```
    languages = ['python', 'js', 'go']
    languages.insert(0, 'java') # ['java', 'python', 'js', 'go']
    ```

    - del 刪除特定 index 值

    ```
    languages = ['python', 'js', 'go']

    del languages[-1] # ['python', 'js']

    ```

    - len() 元素長度

    ```
    len(['python', 'js', 'go']) # 3
    ```

    - in 檢查元素是否在串列

    ```
    'java' in ['python', 'js', 'go'] # False
    ```

    還有更多好用的方法，讀者可以進一步查詢使用：
    `remove()`、`index()`、`count()`、`join()、sort()、copy()`

2. 元組 tuple
    元組可以視為不可改變的串列，使用方式如下：

    ```
    languages = python', 'js', 'go' # (python', 'js', 'go')
    tuple(['python', 'js', 'go'])
    ```

    元組比起串列好處：
    - 佔用空間較少
    - 可以當做字典的 key（因不可變）
    - 具名 tuple 可當做物件替代
    - 當做函式引數

# 字典 dict 和集合 set

1. dict
    在其他程式語言可能稱 `{'key':'value'}` 字典為關聯式陣列或是雜湊表，其用獨一無二不可變的鍵（布林、整數、浮點數、字串和串列）去對應值，字典通常是可變的，可以新增刪除、修改鍵值。

    - 創建 dict
    ```
    languages = {
        'name': 'python',
        'version': '3.5'
    }

    dict([('name', 'python'), ('version', '3.5')])
    ```

    - 新增和取值

    ```
    languages = {}

    languages['name'] = 'python'

    print(languages['name']) # python
    ```

    - 合併

    ```
    languages = {
        'name': 'python',
        'version': '3.5'
    }

    languages2 = {
        'name': 'js',
        'version': '6'
    }

    languages.update(languages2)
    ```

    - keys() 取得所有鍵、values() 取得所有值、items() 取得所有鍵值對

    ```
    languages = {
        'name': 'python',
        'version': '3.5'
    }

    languages.keys() # ['name', 'version']
    languages.values() # ['python', '3.5']
    languages.items() # [('name', 'python'), ('version', '3.5')]
    ```

    - 使用 in 判斷 key 是否存在 dict

    ```
    languages = {
        'name': 'python',
        'version': '3.5'
    }

    'name' in languages # True
    ```

2. set
    類似小學時候學習的數學集合，可以想成就是留下鍵值的 dict。由於 set 存不重複值。當你只想知道值是否存在就是使用 set 的時機，例如使用 in 來判斷值是否存在。

    - 建立 set

    ```
    languages = set()

    languages = {'python', 'js', 'python', 'go'}
    # {'python', 'js', 'go'}
    ```

    - 轉換成 set

    ```
    set('python') # {'p', 'y', 't', 'h', 'o', 'n'}
    set(['python', 'js']) # {'python', 'js'}
    set(('python', 'js')) # {'python', 'js'}
    ```

    - 使用 intersection 取交集，union 取聯集，difference 取差集

    ```
    languages1 = {'js', 'python', 'go'}
    languages2 = {'python', 'go', 'java'}
    languages1.intersection(languages2) # {'python', 'go'}
    languages1.union(languages2) # {'js', 'python', 'java', 'go'}
    languages1.difference(languages2) # {'js'}
    ```

# 整合在一起
回想一下，我們可以使用 [] 建立 list 串列，用 , 來創立 tuple 元組，使用 {} 來建立字典。雖然建立方式不盡相同，但相同的是你都可以透過中括號來存取內容值：

```
languages0 = ['python', 'js'] # languages0[0]
languages1 = ('python', 'js') # languages1[0]
languages2 = {
    'name': 'python',
    'version': '3.5'
} # languages2['name']
```

# 總結
以上就是程式設計思維入門簡介，透過了解什麼是程式設計思維和不同語言的特性，我們將對於自學程式設計有更正確的認識。接下來我們將透過 Python 介紹程式設計的內涵和不同的應用情境。當然，網路上也有[許多學習資源](http://happycoder.org/2017/01/27/learning-coding-programming-tutorial-and-resource/)可以當做參考。

（image via [mshcdn](https://i.amz.mshcdn.com/rRxXhoIhNucutinAio8YRF4TvzE=/1200x630/2017%2F06%2F15%2F71%2Fc1a206081efd44d1b61f5c0f86dcda6c.c222e.jpg)）

# 延伸閱讀
1. [Python 官網](https://www.python.org/)
2. [JavaScript 程式設計新手村](https://pics.ee/1HC~)
3. [Python Web 程式設計入門實戰](http://pics.ee/c34g)
4. [非本科生，我想半路出家學寫程式，該如何開始？](https://cofounderinc.com/2015/03/15/lerning-how-to-write-code/)
5. [自學程式設計學習資源懶人包](http://happycoder.org/2017/01/27/learning-coding-programming-tutorial-and-resource/)