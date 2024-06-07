---
title: 一看就懂的前端開發環境建置入門教學
date: 2016-11-05 22:00:00
tags: JavaScript, ECMAScript2015, ES6, Front End, Front End Development Environment
author: kdchang
---

![一看就懂得的前端開發環境建置入門教學](front-end-kids.png)

# 前言
隨著前端工程技術的快速發展，前端開發工具開始百花齊放，諸子百家各門各派各有各的思想和實作方式，總是讓初學者眼花撩亂，望之卻步。本文將去蕪存菁彙整常用的前端開發工具介紹和學習資源，協助讀者打造自己的前端開發環境，那就讓我們開始吧！

# 常用前端開發工具介紹
俗話說：工欲善其事，必先利其器，挑選好的開發工具不僅可以讓自己開發專案時開心，也可以提高效率早點下班！

![一看就懂得的前端開發環境建置入門教學](front-end-tools.png)

0. 編輯器（Editor）/ 終端機（Terminal）/ 瀏覽器（Browser）
	- 編輯器（Editor）
	在開始建置前端開發環境之前我們需要先準備一下我們的編輯器、終端機、瀏覽器。雖然前端工程的核心技術：`HTML`、`CSS`、`JavaScript` 可以使用一般筆記本就可以編輯，不過我們通常會使用專門的編輯器來提高自己的開發效率。在市面上有很多可以使用的編輯器（例如：Sublime Text、Atom、Vim、Emacs、NodePad++，甚至更為完整的整合開發環境 WebStorm），沒有最好的編輯器，主要還是以個人習慣為主。本文將以 Sublime Text 當做範例（Sublime Text 優勢在於輕量和具備多元外掛生態系）。

	延伸閱讀：
	[Sublime Text 3 新手上路：必要的安裝、設定與基本使用教學](http://blog.miniasp.com/post/2014/01/06/Useful-tool-Sublime-Text-3-Quick-Start.aspx)
	[《Sublime Text外掛》Emmet&HTML Boilerplate二隻外掛，讓你快速產生HTML5網頁範本](https://www.minwt.com/webdesign-dev/html/10493.html)

	- 終端機（Terminal）
	由於在安裝開發工具、管理測試用 server、版本控制甚至是套件管理等情境我們會需要在終端機進行指令列操作（command line）。在 Mac OS 和 Linux 當中都有內建的好用終端機，而且又與 Unix-like 的作業系統相容，很多指令都可以共用，比起 Windows 的命令提示字元 ( Command Prompt ) 或 PowerShell 來的方便許多，建議若有意往程式設計發展的讀者可以準備好這兩種開發環境。若讀者使用的是 Windows 系統則可以下載 [Cmder](http://cmder.net/) 或 [Cygwin](https://www.cygwin.com/) 工具，就可以讓 Windows 也可以使用 Linux 終端機指令（參考文章：[介紹好用工具：Cmder ( 具有 Linux 溫度的 Windows 命令提示字元工具 )](http://blog.miniasp.com/post/2015/09/27/Useful-tool-Cmder.aspx) 和 [[分享] Cygwin 入門 - BASH on Windows [論壇 - Ubuntu 程式設計]](https://www.ubuntu-tw.org/modules/newbb/viewtopic.php?topic_id=47282) ）。 

	- 瀏覽器（Browser）
	瀏覽器是前端工程技術很重要的宿主（host），也是程式運行和使用者互動的地方。隨著瀏覽器技術發展，前端工程師必須面對跨平台、跨瀏覽器的議題，其中Firefox、Chrome、Opera、Safari、IE 是最常見的主流瀏覽器。在開發上我們通常會使用 Chrome 瀏覽器中的開發者工具或是 Firefox 搭配 Firebug 進行測試，所以善用開發者工具可以幫助開發者除錯。在 Mac 系統使用 `Alt + Command + i`，在 Windows 則是使用 `F12` 開啟開發者工具。

1. JavaScript/ES6/Babel/TypeScript
	- JavaScript
	Java 和 JavaScript 雖然名稱相似，但卻是熱狗和狗的差別。JavaScript 是由 Netscape 工程師 Brendan Eich 於 1995 年僅花 10 天所設計的程式語言。JavaScript 是一種直譯式、基於原型（prototype based）的物件導向程式語言，但又具有函數式程式設計（Functional programming）的特性。其具備簡單好上手、應用範圍廣泛，容易有成就感，但精通不易等特性。過去一段時間 JavaScript 一直被認為是玩具語言，難登大雅之堂。但隨著版本的演進，再加上 NodeJS 的出現，讓 JavaScript 由黑翻紅成為程式語言的當紅巨星，目前雄據在程式語言排行榜前幾名，除了網頁開發外，在許多的領域都可以看到 JavaScript 的身影。

	- ES6 / Babel
	又稱 ES2015、ECMAScript 2015，為近年來更新幅度較大的 JavaScript 版本規範，新增許多特性，從 ES7/ES2016 開始，每年 ECMA 國際組織都會有新版本的規範定義推出。由於一些瀏覽器或環境並沒有完全支援新版的特性，所以通常會需要翻譯機或是翻譯蒟篛來協助翻譯，而這就是 [Babel](https://babeljs.io/) 轉譯器進行轉譯的功能。

	延伸閱讀：
	[如何更好的了解ECMAScript](http://naturefeng.github.io/2016/09/22/%E5%A6%82%E4%BD%95%E6%9B%B4%E5%A5%BD%E7%9A%84%E4%BA%86%E8%A7%A3ECMAScript/)
	[ECMA 每年更新規範](http://www.weibo.com/5723867786/DbHAMv7Us?type=comment#_rnd1478494248307)
	[ECMAScript 6入门](http://es6.ruanyifeng.com/)

	- TypeScript
	由微軟推出的 JavaScript 超集合，意思是你也可以寫 JavaScript 語法。其主要是為了讓 JavaScript 更容易撰寫及維護，同時也加入了靜態型別的特性。安裝方法如下：

	```
	$ npm install -g typescript
	```

	轉譯成 JavaScript：

	```
	tsc helloworld.ts
	```

	延伸閱讀：

	[快速瞭解 TypeScript 是什麼東西](https://blogs.msdn.microsoft.com/ericsk/2012/10/01/typescript/)

2. NodeJS/NPM
	- NodeJS
	[NodeJS](https://nodejs.org/en/) 是一個開放原始碼、跨平台的、可用於伺服器端和網路應用的執行環境。透過 NodeJS 可以將 JavaScript 從瀏覽器宿主（host）中解放出來，讓更多環境可以使用 JavaScript 進行開發，包括伺服器端、嵌入式系統等。NodeJS 採用 Google 的 V8 引擎來執行代碼。NodeJS 的大部分基本模組都是用 JavaScript 撰寫。 NodeJS 內含有一系列內建模組，使得程式可以作為獨立伺服器執行，從而脫離 Apache HTTP Server、Nginx 或 IIS 執行。

	- NPM
	NPM 是前端技術快速發展中蠻重要的一個工具，它的全名是 Node Package Manager，是 NodeJS 預設的套件管理工具，其採用 CommonJS 的模組化規範，每一個文件都是一個模組，作用域僅限於該文件，透過 `module.exports` 和 `require('模組名稱')` 當做模組使用方式，且為模組使用上為同步執行。
	
	使用指令建立 `package.json` 設定檔（在 Sublime 手動建立也可以）：

	```
	$ npm init 
	```
	安裝套件於專案中（若是 Mac 可能需要 sudo 權限）：
	```
	// --save 會將套件名稱存入 package.json 中方便下次使用，若是 --save-dev 則表示套件為開發環境使用
	$ npm install --save 套件名稱
	```
	若是全域安裝（整台電腦不僅是這個專案）：
	```
	$ npm install -g 套件名稱
	```
	若你拿到其他人專案或是從 Github 下載下來專案，記得使用以下指令安裝 `package.json` 中存的套件：
	```
	$ npm install
	```

	延伸閱讀：
	[NVM for Windows 安裝與指令](http://trunk-studio.com/blog/nvm-for-windows/)

3. Bower
	常用於前端套件管理，功能和 NPM 類似，但由於它不會像 NPM 一樣重複引入不同版本的依賴套件，所以相對輕量，所以常使用於前端套件管理中。

	使用指令建立 `bower.json` 設定檔（在 Sublime 手動建立也可以）：

	```
	$ bower init 
	```
	安裝套件於專案中（若是 Mac 可能需要 sudo 權限），可以設定 `.bowerrc` 檔案更改 `bower_components` 的資料夾安裝位置：
	```
	// --save 會將套件名稱存入 bower.json 中方便下次使用，若是 --save-dev 則表示套件為開發環境使用
	$ bower install --save 套件名稱
	```
	若是全域安裝（整台電腦不僅是這個專案）：
	```
	$ bower install -g 套件名稱
	```
	若你拿到其他人專案或是從 Github 下載下來專案，記得使用以下指令安裝套件 `bower.json` 中存的套件：
	```
	$ bower install
	```

4. Sass/LESS
	CSS 是負責前端的外觀樣式，隨著技術演進，有些開發者會使用 CSS 預處理器（Preprocessor）進行開發，建構方便維護和高效率的 CSS 開發環境，例如：Sass/LESS。但記得真正使用要轉譯成 CSS。

	延伸閱讀：
	[Sass/SCSS 簡明入門教學](http://blog.kdchang.cc/2016/10/11/sass-scss-tutorial-introduction/)

5. Gulp/Grunt
	`Gulp` 是一個前端任務工具自動化管理工具（Task Runner）。隨著前端工程的發展，我們在開發前端應用程式時有許多工作是必須重複進行，例如：打包文件、uglify、將 LESS 轉譯成一般的 CSS 的檔案，轉譯 ES6 語法等工作。若是使用一般手動的方式，往往會造成效率的低下，所以透過像是 [Grunt](http://gruntjs.com/)、Gulp 這類的 Task Runner 不但可以提昇效率，也可以更方便管理這些任務。由於 Gulp 是透過 pipeline 方式來處理檔案，在使用上比起 Grunt 的方式直觀許多，所以這邊我們主要討論的是 Gulp。

	執行預設任務（default）：
	```
	$ gulp
	```

	執行 build 任務：

	```
	$ gulp build
	```

6. Webpack
	隨著網頁應用程式開發的複雜性提昇，現在的網頁往往不單只是單純的網頁，而是一個網頁應用程式（WebApp）。為了管理複雜的應用程式開發，此時模組化開發方法便顯得日益重要，而理想上的模組化開發工具一直是前端工程的很大的議題。Webpack 和 Browserify + Gulp 則是進行 React 應用程式開發常用的開發工具，可以協助進行自動化程式碼打包、轉譯等重複性工作，提昇開發效率。

	[Webpack](https://webpack.github.io/) 是一個模組打包工具（module bundler），以下列出 Webpack 的幾項主要功能：
	- 將 CSS、圖片與其他資源打包
	- 打包之前預處理（Less、CoffeeScript、JSX、ES6 等）的檔案
	- 依 entry 文件不同，把 .js 分拆為多個 .js 檔案
	- 整合豐富的 Loader 可以使用（Webpack 本身僅能處理 JavaScript 模組，其餘檔案如：CSS、Image 需要載入不同 Loader 進行處理）

7. Browserify
	如同官網上說明的：`Browserify lets you require('modules') in the browser by bundling up all of your dependencies.
	`，Browserify 是一個可以讓你在瀏覽器端也能使用像 Node 用的 [CommonJS](https://en.wikipedia.org/wiki/CommonJS) 規範一樣，用輸出（export）和引用（require）來管理模組。此外，也能讓前端使用許多在 NPM 中的模組。

8. Yeoman
	Yeoman 是一個專案架構產生器，裡面有許多 Generator 方便開發者針對專案需求快速產生一個專案資料夾和所需的開發工具套件。

9. ESLint
	[ESLint](http://eslint.org/) 是一個提供 JavaScript 和 JSX 的程式碼檢查工具，可以確保團隊的程式碼品質。其支援可插拔的特性，可以根據需求在 `.eslintrc` 設定檢查規則。目前主流的檢查規則會使用 Airbnb 所釋出的 [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)，在使用上需先安裝 [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) 等套件。

10. Git
	Git 是版本控管工具（Version Control），方便協同合作和也方便記錄專案的開發過程。目前全世界最大的程式庫則是 Github，讀者可以透過下 Git 指令，也可以使用 GUI 圖形化介面工具進行操作，例如：[SourceTree](https://www.sourcetreeapp.com/)。 

	延伸閱讀：
	[猴子都能懂的Git入門指南](https://backlogtool.com/git-guide/tw/intro/intro2_1.html)

# 打造自己的前端開發環境
在認識完一輪常用前端開發工具後，我們接下來將帶領讀者打造自己的前端開發環境，我們主要會使用到的有以下工具：

1. NodeJS/NPM
2. Bower
3. Gulp
4. Sass
5. Browserify
6. Babel/Babelify
7. Git

好的，就讓我們開始吧！

1. 準備好編輯器（Editor）/ 終端機（Terminal）/ 瀏覽器（Browser）
	我們這邊使用 Sublime Text 3 進行講解，可以到[官方網站](https://www.sublimetext.com/3)上進行安裝適合作業系統的檔案。瀏覽器使用 [Chrome](https://www.google.com.tw/intl/zh-TW/chrome/browser/desktop/)，至於終端機，若讀者使用的是 Windows 系統則可以下載 [Cmder](http://cmder.net/) 或 [Cygwin](https://www.cygwin.com/) 工具，就可以讓 Windows 也可以使用 Linux 終端機指令（參考文章：[介紹好用工具：Cmder ( 具有 Linux 溫度的 Windows 命令提示字元工具 )](http://blog.miniasp.com/post/2015/09/27/Useful-tool-Cmder.aspx) 和 [[分享] Cygwin 入門 - BASH on Windows [論壇 - Ubuntu 程式設計]](https://www.ubuntu-tw.org/modules/newbb/viewtopic.php?topic_id=47282) ），若是 Mac 或 Linux 則有內建的終端機工具。 
	
	延伸閱讀：
	[Sublime Text3 開發環境快速建置](http://yanlong4869.blogspot.tw/2015/08/sublime-text3.html)

2. 安裝 NodeJS/NPM
	我們可以在[官方網站](https://nodejs.org/en/)上選擇左邊穩定版本下載安裝適合自己作業系統的安裝檔，按照指示步驟即可以完成安裝 Node/NPM。若是安裝完成，我們可以打開終端機輸入以下指令（注意指令從 $ 後開始，$ 表示提示字元），檢查是否安裝成功（會因為版本不同顯示不同數字）：

	```
	$ node -v
	// 顯示 v6.9.1
	```

	檢查 NPM：

	```
	$ npm -v
	// 顯示 3.10.8
	```

3.　安裝 Bower、Gulp 工具
	上面提過 Bower 和 Gulp 分別是前端套件管理工具和自動化流程的工具，為了使用方便我將使用全域安裝，也就是說會安裝在整台電腦中（Mac 系統有可能需要 sudo 權限）：
	```
	$ npm install -g gulp bower
	```

4. 建立專案資料夾和設定檔
	接著我們可以使用手動或是在終端機下指令建立我們的專案資料夾：

	```
	// 建立資料夾指令
	$ mkdir frontend-starter-kit
	```

	移動到資料夾：
	```
	$ cd frontend-starter-kit
	```

	建立 NPM 設定檔 `package.json`（也可以在 Sublime 手動建立）：

	```
	$ npm init
	```

	根據指示操作，最後會生成 `package.json` 檔案：

	![一看就懂得的前端開發環境建置入門教學](npm-init.png)

	生成 `package.json` 檔案：

	```
	{
	  "name": "frontend-starter-kit",
	  "version": "1.0.0",
	  "description": "",
	  "main": "index.js",
	  "scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1"
	  },
	  "repository": {
	    "type": "git",
	    "url": "git+https://github.com/kdchang/frontend-starter-kit.git"
	  },
	  "author": "kdchang",
	  "license": "MIT",
	  "bugs": {
	    "url": "https://github.com/kdchang/frontend-starter-kit/issues"
	  },
	  "homepage": "https://github.com/kdchang/frontend-starter-kit#readme"
	}
	```

	建立 Bower 設定檔案 `bower.json`（也可以手動在 Sublime 開新檔案建立）：

	```
	$ bower init
	```

	根據指示操作（選 ES6），最後會生成 `bower.json` 檔案：

	![一看就懂得的前端開發環境建置入門教學](bower-init.png)

	生成 `bower.json` 檔案：

	```
	{
	  "name": "frontend-starter-kit",
	  "description": "",
	  "main": "index.js",
	  "authors": [
	    "kdchang"
	  ],
	  "license": "MIT",
	  "homepage": "https://github.com/kdchang/frontend-starter-kit",
	  "moduleType": [],
	  "ignore": [
	    "**/.*",
	    "node_modules",
	    "bower_components",
	    "test",
	    "tests"
	  ]
	}
	```

	在 Sublime 手動建立 `.bowerrc`，這樣套件會裝在 `dist/bower_components/`：

	```
	{
	  // 這邊設定想安裝的位置，若沒設定 .bowerrc 則會安裝在 root 資料夾下
	  "directory": "dist/bower_components/",
	  "timeout": 120000,
	  "registry": {
	    "search": [
	      "https://bower.herokuapp.com"
	    ]
	  }
	}
	```

5. 安裝套件於專案中
	接下來我們將使用 bower 和 npm 進行套件的安裝，由於 bower 使用上較為輕量所以我們會將 bower 放到 `dist` 正式產品的資料夾中的 `bower_components` 資料夾中。

	```
	// 由於 bootstrap 會依賴 jquery 所以會自動安裝進來
	$ bower install --save bootstrap
	```

	使用 npm 安裝開發用工具套件（僅在開發時使用所以使用 `--save-dev` ），安裝了 babel 轉譯器核心、可以將 gulp 設定檔轉譯的 register、Babel ES2015 工具、搭配 gulp 使用的 babelify、browserify，以及 gulp 相關前置處理工具：

	```
	$ npm install --save-dev babel-core babel-preset-es2015 babel-register babelify browserify gulp gulp-connect gulp-image gulp-sass gulp-uglify vinyl-source-stream vinyl-buffer gulp-sourcemaps gulp-util
	```

	當安裝完成後會出現 `node_modules` 資料夾，裡面就是所安裝的套件了！

	最後我們建立一個 `.babelrc` 的檔案，告訴 babel 我們要轉譯的是 ES2015/ES6 語法：

	```
	{
	  "presets": ["es2015"]
	}
	```

6. 建立第一個 HTML / CSS / JavaScript 文件
	經過一番努力，我們終於要開始動手寫我們的代碼了！首先在 `frontend-starter-kit` 資料夾下建立 `src` 資料夾，之後我們所有編輯的 HTML、CSS、JavaScript 還有圖片會放置在裡面（`styles`、`scripts`、`images`），並透過 gulp 處理後送到 `dist`，其中 `dist` 才是我們最後的成果。

7. 建立 Gulp 自動化流程工具，啟動測試用伺服器，看成果！

	建立 HTML 檔案（`src/index.html`）：

	```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>My Front End Starter Kit</title>
		<link rel="stylesheet" type="text/css" href="./bower_components/bootstrap/dist/css/bootstrap.css">
		<link rel="stylesheet" type="text/css" href="./css/main.css">
	</head>
	<body>
		<h1>My Front End Starter Kit</h1>
		<img src="./img/front-end-kids.png">
		<script type="text/javascript" src="./js/bundle.js"></script>
	</body>
	</html>
	```

	建立 SCSS 檔案，之後會轉譯成 CSS（`src/styles/main.scss`）：

	```css
	h1 {
		color: red;
	}
	```

	建立 JavaScript 檔案（`src/scripts/main.js`）：
	
	```javascript
	console.log('hello front end starter kit!!');
	```

	建立 `gulpfile.babel.js` 檔案：

	```javascript
	// 引入欲使用的套件模組
	import gulp from 'gulp';
	import sass from 'gulp-sass';
	import uglify from 'gulp-uglify';
	import connect from 'gulp-connect';
	import browserify from 'browserify';
	import babelify from 'babelify';
	// 轉成 gulp 讀取的 vinyl（黑膠）流
	import source from 'vinyl-source-stream';
	import buffer from 'vinyl-buffer';
	import sourcemaps from 'gulp-sourcemaps';
	import gutil from 'gulp-util';
	import image from 'gulp-image';


	const dirs = {
	  src: 'src',
	  dest: 'dist'
	};

	const stylesPaths = {
	  src: `${dirs.src}/styles/*.scss`,
	  dest: `${dirs.dest}/css`
	};

	const scriptsPaths = {
	  src: `${dirs.src}/scripts/*.js`,
	  dest: `${dirs.dest}/js`
	};

	const imagesPaths = {
	  src: `${dirs.src}/images/*`,
	  dest: `${dirs.dest}/img`
	};

	// 編譯 Scss 任務，完成後送到 dist/css/main.css
	gulp.task('styles', () => {
	  gulp.src(stylesPaths.src)
	    .pipe(sass())         // 編譯 Scss
	    .pipe(gulp.dest(stylesPaths.dest))  
	    .pipe(connect.reload());
	});

	// 編譯 JavaScript 轉譯、合併、壓縮任務，完成後送到 dist/js/bundle.js
	gulp.task('scripts', function(){
	    return browserify({
	        entries: ['./src/scripts/main.js']
	    })
	    .transform(babelify) // 轉譯
	    .bundle()
	    .pipe(source('bundle.js'))
	    .pipe(buffer()) // 從 streaming 轉回 buffered vinyl 檔案
	    .pipe(sourcemaps.init({loadMaps: true})) // 由於我們壓縮了檔案，要用 sourcemaps 來對應原始文件方便除錯
	        .pipe(uglify()) // 壓縮檔案
	        .on('error', gutil.log)
	    .pipe(sourcemaps.write('./')) 
	    .pipe(gulp.dest(scriptsPaths.dest));
	});

	// 複製 images 任務，完成後送到 dist/images
	gulp.task('images', function() {
	  gulp.src(imagesPaths.src)
	    .pipe(image())
	    .pipe(gulp.dest(imagesPaths.dest));
	});
	
	// 啟動測試用 server，root 為 index.html 放置位置
	gulp.task('server', function () {
	  connect.server({
	    root: ['./'],
	    livereload: true,
	    port: 7777,
	  });
	});

	// 監聽是否有檔案更新
	gulp.task('watch', function () {
	  gulp.watch(stylesPaths.src, ['styles']);
	  gulp.watch(scriptsPaths.src, ['scripts']);
	  gulp.watch(imagesPaths.src, ['images']);
	});

	// 兩種任務類型，第一種會啟動 server
	gulp.task('default', ['scripts', 'styles', 'images', 'server', 'watch']);
	gulp.task('build', ['scripts', 'styles', 'images']);

	```

	使用 gulp 指令（後面沒有接任務名稱會執行 default 任務）：

	```
	$ gulp
	```

	打開瀏覽器輸入網址 `localhost:7777` 若正確的話會看到以下成果（終端機不能關掉，若要關掉 Server，使用 ctrl + c）！

	![一看就懂得的前端開發環境建置入門教學](demo.png)

# 總結
以上就是前端開發環境建置入門教學，建議讀者可以跟著以上步驟自己實際動手建置前端開發環境。[原始碼放置](https://github.com/kdchang/frontend-starter-kit)在 Github 上，若您尚未安裝 Git，可以[參考 Git 教學](https://git-scm.com/book/zh-tw/v1/%E9%96%8B%E5%A7%8B-%E5%AE%89%E8%A3%9DGit) 安裝（或是直接在綠色按鈕上點選下載 .zip 檔案，移動到該資料夾進行操作）。

安裝成功後可以透過 git 指令到 Github 下載：

```
$ git clone https://github.com/kdchang/frontend-starter-kit
```

移動到資料夾：

```
$ cd frontend-starter-kit
```

安裝套件：

```
$ npm install & bower install
```

啟動 gulp 任務的測試伺服器，	打開瀏覽器輸入網址 `localhost:7777` 若正確的話會看到成果！

```
$ gulp
```

當然你也可以在 `package.json` 設定指令快捷鍵：

```
{ 
	"scripts": {
		"start": "gulp", 
		"build": "gulp build" 
	}
}
```

之後使用 $ npm start 就可以對應到 $ gulp 指令


# 延伸閱讀
1. [React 生態系（Ecosystem）入門簡介](https://github.com/kdchang/reactjs101/blob/master/Ch01/react-ecosystem-introduction.md)
2. [JavaScript 模块化七日谈](https://huangxuan.me/2015/07/09/js-module-7day/)
3. [前端工程師必須學會的現代化前端開發工具](http://blog.miniasp.com/post/2015/08/13/essential-frontend-tools-2015.aspx)
4. [我要成為前端工程師！給 JavaScript 新手的建議與學習資源整理](http://blog.miniasp.com/post/2016/02/02/JavaScript-novice-advice-and-learning-resources.aspx)
5. [Browserify + Uglify2 和 sourcemaps](http://www.gulpjs.com.cn/docs/recipes/browserify-uglify-sourcemap/)

（image via [mpr](https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAY4AAAAJDNmOTRkMTk2LTljNDEtNDAwOS05YTJlLTFmMTg2M2YzYzBiMQ.png)、[mahmoudzalt](http://www.blog.mahmoudzalt.com/wp-content/uploads/2014/07/tools.png)）
