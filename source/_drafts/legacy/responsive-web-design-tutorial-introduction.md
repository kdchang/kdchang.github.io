---
title: Responsive Web Design 響應式網站設計簡明入門教學
date: 2016-10-11 09:54:49
tags: Responsive Web Design, Web, RWD, 響應式網站
author: kdchang
---

# 什麼是 Responsive Web Design？
隨著行動網路的普及，越來越多使用者使用不同的裝置來上網。然而由於不同裝置有不同的解析度和螢幕大小，若是開發者在設計網站時沒有預留一些彈性或是針對不同的裝置作支援很有可能在瀏覽網站時發生破版，閱讀不易等問題，降低了使用者體驗，更有可能的是讓原本願意消費的使用者放棄了整個使用流程。有許多的方案可以針對行動網站做設計，其中 [Responsive Web Design 響應式網站設計（又稱自適應網頁設計、回應式網頁設計）](https://en.wikipedia.org/wiki/Responsive_web_design)是成本相對低廉和支援性也不錯的方案，可以針對使用者裝置大小顯示適合的畫面。這篇文章當中，我們將帶大家走過 Responsive Web Design 響應式網站設計的一些重點。

響應式網站設計最早是由 A List Apart 的 Ethan Marcotte 所定義，這項設計可針對使用者的需求和其所使用的裝置做出回應。版面配置會隨著裝置的螢幕大小和功能變動。舉例來說，使用者在手機上會看到以一欄顯示的內容；在平板電腦上則會看到以兩欄顯示的相同內容。

一般而言，採用 Responsive Web Design 響應式網站設計有幾個重點需要把握：

1. 設定檢視區（Viewport）

2. 使用 CSS3 Media queries `@media` 針對不同寬度的瀏覽器提供適合的頁面樣式

3. 使用流動性/比例式網格系統

4. 使用相對比例的響應式大小圖片

5. 使用相對比例的響應式大小影片

6. 針對不同裝置，保持適合閱讀的文字大小

以下我們就針對 Responsive Web Design 響應式網站設計重點進行進一步討論：

# 設定檢視區（Viewport）
在網頁的 meta data 中，我們可以設定網頁的 `viewport`，指示瀏覽器如何控制網頁的大小和縮放，為了讓網頁可以適應不同的螢幕裝置大小，我們使用 `width=device-width` 配合裝置的寬度，使用 `initial-scale=1` 則可以在 CSS 像素和裝置獨立像素之間建立 1:1 的關係，當螢幕換方向時也可以讓網頁充分運用橫向寬度。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
# 使用 CSS3 Media queries `@media` 針對不同寬度的瀏覽器提供適合的頁面樣式
在 Responsive Web Design 中一大重點就是針對不同寬度的瀏覽器提供適合的頁面樣式，這時就需要善用 CSS3 Media queries `@media`，其基本格式如下，可以針對輸入的 query 對應不同的 CSS： 

```css
@media (query) {
  /* CSS Rules used when query matches */
}
```

以下是 CSS3 Media queries `@media` 範例，可以看到我們可以在引入 CSS 上使用 `media` 屬性來設定依照螢幕大小來載入對應 CSS：

```html
<link rel="stylesheet" media="(max-width: 640px)" href="max-640px.css">
<link rel="stylesheet" media="(min-width: 640px)" href="min-640px.css">
<link rel="stylesheet" media="(orientation: portrait)" href="portrait.css">
<link rel="stylesheet" media="(orientation: landscape)" href="landscape.css">
<style>
   <!-- 當螢幕大小在 400 - 500px 間時使用 --!>

  @media (min-width: 400px) and (max-width: 500px) {
    h1 {
      color: fuchsia;
    }

    .desc:after {
      content:" In fact, it's between 500px and 600px wide.";
    }
  }
</style>
```

盡量使用相對寬度，例如 `width: 100%`，盡量少用絕對單位，善用 `min-width` 和 `float` 屬性確保畫面顯示的正常。最常用的是 `min-width`、`max-width`、`min-height` 和 `max-height` 等屬性（不建議使用 `*-device-width` 因為在某些瀏覽器或裝置上會有問題）。

不建議使用絕對單位：

```css
div.fullWidth {
  width: 320px;
  margin-left: auto;
  margin-right: auto;
}
```

建議使用相對單位：

```css
div.fullWidth {
  width: 100%;
}
```

# 使用流動性/比例式網格系統
目前主流在 Responsive Web Design，有五大外觀設計模式：主體為流動 (mostly fluid)、欄內容下排 (column drop)、版面配置位移 (layout shifter)、微小調整 (tiny tweaks) 和畫布外空間利用 (off canvas)。

在實作這幾種設計模式時通常會使用到 CSS Flexible Boxes，並設計中斷點（wrap），詳細介紹可以參考 [Google 回應式網頁設計模式](https://developers.google.com/web/fundamentals/design-and-ui/responsive/patterns?hl=zh-tw) 的完整介紹。

先建立 HTML 架構：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>mostly fluid</title>
</head>
<body>
  <div class="container">
    <div class="c1">1</div>
    <div class="c2">2</div>
    <div class="c3">3</div>
    <div class="c4">4</div>
    <div class="c5">5</div>
  </div>
</body>
</html>
```

1. 主體為流動（mostly fluid）
	![Responsive Web Design 響應式網站設計簡明入門教學 ](mostly-fluid.png)

	CSS 設計：

	```css
	.container {
	  display: -webkit-flex;
	  display: flex;
	  -webkit-flex-flow: row wrap;
	  flex-flow: row wrap;
	}

	.c1, .c2, .c3, .c4, .c5 {
	  width: 100%;
	}

	@media (min-width: 600px) {
	  .c2, .c3, .c4, .c5 {
	    width: 50%;
	  }
	}

	@media (min-width: 800px) {
	  .c1 {
	    width: 60%;
	  }
	  .c2 {
	    width: 40%;
	  }
	  .c3, .c4, .c5 {
	    width: 33.33%;
	  }
	}

	@media (min-width: 800px) {
	  .container {
	    width: 800px;
	    margin-left: auto;
	    margin-right: auto;
	  }
	}
	```

2. 欄內容下排 (column drop)
	![Responsive Web Design 響應式網站設計簡明入門教學 ](column-drop.png)

	CSS 設計：

	```css
	.container {
	  display: -webkit-flex;
	  display: flex;
	  -webkit-flex-flow: row wrap;
	  flex-flow: row wrap;
	}

	.c1, .c2, .c3 {
	  width: 100%;
	}

	@media (min-width: 600px) {
	  .c1 {
	    width: 60%;
	    -webkit-order: 2;
	    order: 2;
	  }

	  .c2 {
	    width: 40%;
	    -webkit-order: 1;
	    order: 1;
	  }

	  .c3 {
	    width: 100%;
	    -webkit-order: 3;
	    order: 3;
	  }
	}


	@media (min-width: 800px) {
	  .c2 {
	    width: 20%;
	  }

	  .c3 {
	    width: 20%;
	  }
	}
	```

3. 版面配置位移 (layout shifter)
	![Responsive Web Design 響應式網站設計簡明入門教學 ](layout-shifter.png)

	```css
	.container {
	  display: -webkit-flex;
	  display: flex;
	  -webkit-flex-flow: row wrap;
	  flex-flow: row wrap;
	}

	.c1, .c2, .c3, .c4 {
	  width: 100%;
	}

	@media (min-width: 600px) {
	  .c1 {
	    width: 25%;
	  }

	  .c4 {
	    width: 75%;
	  }

	}

	@media (min-width: 800px) {
	  .container {
	    width: 800px;
	    margin-left: auto;
	    margin-right: auto;
	  }
	}
	```

4. 微小調整 (tiny tweaks)
	![Responsive Web Design 響應式網站設計簡明入門教學 ](tiny-tweaks.png)

	```css
	.c1 {
	  padding: 10px;
	  width: 100%;
	}

	@media (min-width: 500px) {
	  .c1 {
	    padding: 20px;
	    font-size: 1.5em;
	  }
	}

	@media (min-width: 800px) {
	  .c1 {
	    padding: 40px;
	    font-size: 2em;
	  }
	}
	```

5. 畫布外空間利用 (off canvas)
	![Responsive Web Design 響應式網站設計簡明入門教學 ](off-canvas.png)

	```css
	body {
	  overflow-x: hidden;
	}

	.container {
	  display: block;
	}

	.c1, .c3 {
	  position: absolute;
	  width: 250px;
	  height: 100%;

	  /*
	    This is a trick to improve performance on newer versions of Chrome
	    #perfmatters
	  */
	  -webkit-backface-visibility: hidden;
	  backface-visibility: hidden; 

	  -webkit-transition: -webkit-transform 0.4s ease-out;
	  transition: transform 0.4s ease-out;

	  z-index: 1;
	}

	.c1 {
	  /*
	  Using translate3d as a trick to improve performance on older versions of Chrome
	  See: http://aerotwist.com/blog/on-translate3d-and-layer-creation-hacks/
	  #perfmatters
	  */
	  -webkit-transform: translate(-250px,0);
	  transform: translate(-250px,0);
	}

	.c2 {
	  width: 100%;
	  position: absolute;
	}

	.c3 {
	  left: 100%;
	}

	.c1.open {
	  -webkit-transform: translate(0,0);
	  transform: translate(0,0);
	}

	.c3.open {
	  -webkit-transform: translate(-250px,0);
	  transform: translate(-250px,0);
	}

	@media (min-width: 500px) {
	  /* If the screen is wider then 500px, use Flexbox */
	  .container {
	    display: -webkit-flex;
	    display: flex;
	    -webkit-flex-flow: row nowrap;
	    flex-flow: row nowrap;
	  }
	  .c1 {
	    position: relative;
	    -webkit-transition: none 0s ease-out;
	    transition: none 0s ease-out;
	    -webkit-transform: translate(0,0);
	    transform: translate(0,0);
	  }
	  .c2 {
	    position: static;
	  }
	}

	@media (min-width: 800px) {
	  body {
	    overflow-x: auto;
	  }
	  .c3 {
	    position: relative;
	    left: auto;
	    -webkit-transition: none 0s ease-out;
	    transition: none 0s ease-out;
	    -webkit-transform: translate(0,0);
	    transform: translate(0,0);
	  }
	}
	```

# 使用相對比例的響應式大小圖片
為了能在不同裝置展示圖片，我們需要留意在高解析度 (2x)，需要顯示不同解析度的圖片。不同螢幕大小也盡量使用相對比例的響應式大小圖片，而少用絕對單位。

```css
.image {
	width: 50%;	
}
```

# 使用相對比例的響應式大小影片
為了能在不同裝置播放影片，我們需要在設計上注意：

1. 使用 video 元素來載入、播放影片
2. 使用多種格式的影片，以便在多種行動平台上播放
3. 正確設定影片大小，確保你的影片不會超出容器
4. 無障礙設計很重要：請為 video 元素新增 track 子元素

```html
<video controls>
  <source src="chrome.webm" type="video/webm">
  <source src="chrome.mp4" type="video/mp4">
  <p>Sorry, 您的瀏覽器並不支援 video 元素喔</p>
</video>
```

# 針對不同裝置，保持適合閱讀的文字大小
由於行動裝置通常螢幕相對狹小，所以針對行動裝置不應該使用和桌面版的網頁一樣字體。在內容安排上也可以針對螢幕大小去增減顯示的內容，讓使用者有更好的使用體驗。

# 總結
以上就是 Responsive Web Design 響應式網站設計簡明入門教學，我們學到了什麼是 Responsive Web Design 響應式網站設計，在設計需要把握的要點：

1. 設定檢視區（Viewport）

2. 使用 CSS3 Media queries `@media` 針對不同寬度的瀏覽器提供適合的頁面樣式

3. 使用流動性/比例式網格系統

4. 使用相對比例的響應式大小圖片

5. 使用相對比例的響應式大小影片

6. 針對不同裝置，保持適合閱讀的文字大小

網路上也有許多不錯的設計範例可以參考：[Responsive Web Design: 50 Examples and Best Practices](http://designmodo.com/responsive-design-examples/)。

# 延伸閱讀
1. [W3C School HTML Responsive Web Design](http://www.w3schools.com/html/html_responsive.asp)
2. [Responsive Web Design: 50 Examples and Best Practices](http://designmodo.com/responsive-design-examples/)
3. [RESPONSIVE WEB DESIGN EXAMPLES](https://responsivedesign.is/examples)
4. [Google Web 回應式網頁設計基礎](https://developers.google.com/web/fundamentals/design-and-ui/responsive/?hl=zh-tw)
5. [Responsive Web Design Fundamentals](https://www.udacity.com/course/responsive-web-design-fundamentals--ud893)
6. [學習 CSS 版面配置 - Flexbox](http://zh-tw.learnlayout.com/flexbox.html)
7. [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
8. [深入解析 CSS Flexbox](http://www.oxxostudio.tw/articles/201501/css-flexbox.html)
