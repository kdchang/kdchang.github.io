---
title: 前端軟體工程工具箱：HTML & CSS 篇
date: 2016-010-05 22:00:00
tags: JavaScript, HTML, CSS, Front End, Front End Development, F2E, Front End Engineer
author: kdchang
---

# 前言 
事實上，要成為一個好的前端軟體工程師除了必須對於前端工程（Web 效能、build 工具、CSS layout 引擎）的部份有所了解外，也必須對於電腦科學的基礎知識有著堅實的基礎知識（資料結構、演算法、設計模式等）。在這系列的第一篇我們將來探討 HTML & CSS。

# HTML & CSS
HTML 和 CSS 並非程式語言卻是前端工程中重要的一環，HTML 主要負責內容結構和 CSS 主要負責外觀樣式。

1. 撰寫語意化（Sematic）的 HTML 
	撰寫語意化的 HTML 不但專業也易於團隊維護，更重要的是利於搜尋引擎的檢索，強化 SEO 效果。

2. CSS animations
	CSS3 所提供的動畫（animation）功能可以讓元素的 CSS 樣式（style）從一個設定值轉換到另一個，藉著這樣的方式產生動畫的效果。CSS 在設定動畫時包含兩個部份，一個是用來設定 CSS 動畫的樣式，另一個是指定動畫開始、結束或中途路徑的關鍵影格（keyframes）設定。以下是簡單換文字顏色的動畫，這邊可以[看效果](http://jsbin.com/ruqugok/edit?html,css,output)：

	HTML：

	```html
  	<h1>Hello, 我是 CSS3 動畫</h1>
	```

	CSS（主要由 `animation` 和 `keyframes` 設定）：

	```css
	h1 {
	  animation-duration: 3s;
	  animation-name: colorin;
	  animation-iteration-count: infinite;
	  animation-direction: alternate;
	}

	@keyframes colorin {
	  from {
	    color: red;
	  }

	  to {
	    color: blue;
	  }
	}

	@-webkit-keyframes colorin {
	  from {
	    color: red;
	  }

	  to {
	    color: blue;
	  }
	}

	@-moz-keyframes colorin {
	  from {
	    color: red;
	  }

	  to {
	    color: blue;
	  }
	}
	```

3. Grid Systems
	![一看就懂得的前端開發環境建置入門教學](grid-elements.png)

	雖然有許多 CSS 框架使用 Grid Systems，包含 Bootstrap。事實上最基本的 Grid 系統包含：
	1. a container
	2. rows
	3. columns
	4. gutters (the space between columns)

	```
    /*-- 最外層 container -- */ 	
    .grid-container{
        width: 100%; 
        max-width: 1200px;      
    }

    /*-- our cleafix hack -- */ 
    .row:before, 
    .row:after {
        content:"";
          display: table ;
        clear:both;
    }

    [class*='col-'] {
        float: left; 
        min-height: 1px; 
        width: 16.66%; 
        /*-- our gutter -- */
        padding: 12px; 
        background-color: #FFDCDC;
    }

    .col-1{ width: 16.66%; }
    .col-2{ width: 33.33%; }
    .col-3{ width: 50%;    }
    .col-4{ width: 66.66%; }
    .col-5{ width: 83.33%; }
    .col-6{ width: 100%;   }

    .outline, .outline *{
        outline: 1px solid #F6A1A1; 
    }

    /*-- some extra column content styling --*/
    [class*='col-'] > p {
     background-color: #FFC2C2; 
     padding: 0;
     margin: 0;
     text-align: center; 
     color: white; 
    }
	```

4. Pseudo classes
	虛擬類別選擇器（Pseudo-classes Selector）係指針對特定的狀態進行樣式指定，例如連結的狀態、滑鼠滑過的狀態等（link、active、visited、hover、focus、lang）

5. Sass/LESS
	CSS 是負責前端的外觀樣式，隨著技術演進，有些開發者會使用 CSS 預處理器（Preprocessor）進行開發，建構方便維護和高效率的 CSS 開發環境，例如：Sass/LESS。但記得真正使用要轉譯成 CSS。

6. OOCSS/SMACSS/BEM
	- OOCSS

		良好的 CSS 架構應該具備：1. Predictable 2. Reusable 3. Maintainable 4. Scalable 等特性
		要點：結構與外觀分離、容器與內容分離

	- SMACSS
		全名為：Scalable & Modular Architecture for CSS，其主要核心為：
		1. 將結構分類 
		分類：Base（reset/normalize）、Layout（Header、Sidebar、Footer）、Module（可重複使用的單獨元件，避免使用 id 命名，用 - 分隔子模組：Button、Tabs、List）、State（表示 Layout 和 Module 狀態變化，由 class 定義。命名規則是 `.is-*` 開頭，例如：`.is-active`）、Theme（定義網站主視覺，通常以 `.theme-*` 開頭）

		```
		<ul class="nav">
			<li class="nav-item is-active">點我點我</li>
			<li class="nav-item">選我選我</li>
		</ul>
		```

		```
		.nav {
			list-style: none;
		}

		.nav li {
			float: left;
		}
		```

		2. 命名規則 
		使用 class 優於 id，使用子選擇器（.tabs > button）

		3. CSS 和 HTML 分離

	- BEM
		BEM，即 Block（可重複利用的區塊），Element（構成 block 的元素），Modifier（狀態），為一種 class 的命名技巧，是由 Yandex 提出的前端開發理論。

		1. Block
		在頁面獨立存在並可重複使用的元件，就像是 SMACSS 的 Layout 和 Modular，每個 block 都可獨立存在

		```
		.button
		.menu
		.text-field
		```

		2. Element
		為 Block 一部分（子組件），無法獨立存在。有些 Block 可能沒有 Element

		```
		// Block 後面加 __ 當做 prefix
		.button__icon
		.menu__item
		.text-field__label
		```
		3. Modifier
		用來定義 Block、Element 的狀態或屬性，類似於 SMACSS 的 state。同一個 Block 或 Element 允許同時存在多個 Modifier 

		```
		// Block 或 Element 後面加 _ 當做 prefix，另外一種是用 -- 表示 Modifier
		.button_active
		.menu__item_promo
		```


	延伸閱讀：
	[CSS 筆記、建議與指導方針總整理](https://github.com/doggy8088/CSS-Guidelines#oocss)

7. PostCSS/CSS Modules
	- PostCSS
	搭配 PostCSS 外掛，可以方便設定瀏覽器 prefix。

	- CSS Modules
	CSS Modules 則可以簡單使用區域作用域解決全域污染和另外也提供使用模組載入功能。

	延伸閱讀：
	[PostCSS深入学习：Gulp设置](http://www.w3cplus.com/PostCSS/postcss-quickstart-guide-gulp-setup.html)
	[CSS Modules 用法教程](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)

# 總結
以上介紹了前端工程工具箱：HTML & CSS 篇，在接下來的章節中我們將為大家打開前端工程的工具箱，介紹那些必須掌握的前端軟體工程知識。

# 延伸閱讀
1. [Cracking the front-end interview](https://medium.freecodecamp.com/cracking-the-front-end-interview-9a34cd46237#.dljl9gj09)
2. [使用 CSS Animation 製作網頁上的動畫（只要 CSS3，不用 JavaScript！）](https://blog.gtwang.org/web-development/using-css3-animation/)
3. [Creating Your Own CSS Grid System](http://j4n.co/blog/Creating-your-own-css-grid-system)
4. [如何看待 CSS 中 BEM 的命名方式？](https://www.zhihu.com/question/21935157)
5. [BEM思想之彻底弄清BEM语法](http://www.w3cplus.com/css/mindbemding-getting-your-head-round-bem-syntax.html)
6. [BEM 介紹](http://getbem.com/introduction/)
7. [劣以為的 OOCSS 和 SMACSS 以及其他 CSS 規範](http://blog.chh.tw/posts/oocss-smacss-and-css-guidelines/)

（image via [j4n](http://j4n.co/blog/Creating-your-own-css-grid-system)）