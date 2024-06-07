---
title: 如何打造自己的 jQuery Plugin 入門教學
date: 2016-04-01 09:54:49
tags: Plugin, jQuery, JavaScript, 外掛, 教學
author: kdchang
---

![如何打造自己的 jQuery Plugin ](jquery.jpg)

# 前言
當有一天你發現有一天你希望把功能切分開來不希望都寫在同一個檔案中，你會開始思考如何開發自己的 jQuery 外掛。事實上，撰寫 jQuery Plugin 相當容易，這個單元我們將帶領大家去感受一下如何開發一個屬於自己的 jQuery Plugin。

# jQuery Plugin 初體驗
在開發 jQuery Plugin 之前，我們先回顧一下確保我們還記得 jQuery 怎麼用。`$` 是選擇器選擇我們想選的元素，回傳 jQuery 物件，接著可以透過 `css()`、`.click()` 方法去針對選取元素產生效果。`$.fn` 則是包含了所有 jQuery 內建的方法。以下選取了超連結將顏色改為紅色。

```javascript
$( "a" ).css( "color", "red" );
```

我們更進一步把它客製化方法加入 `$.fn` （這是最初的外掛雛形）：

```javascript
$.fn.setColor = function() {
    this.css( "color", "green" );
};
 
$( "a" ).setColor(); // Makes all the links green.
```

整合到我們的 HTML 架構中，包含引入了 jQuery 函式庫：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <a href="#">Hello, jQuery</a>
  <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
  <script>
  $.fn.setColor = function() {
    this.css( "color", "green" );
  };
 
  $( "a" ).setColor(); // Makes all the links green.
  </script>
</body>
</html>
```

如果你需要鏈結方法（Chaining）的話可以這樣寫：

```javascript
$.fn.setColor = function() {
    this.css( "color", "green" );
    // 回傳選取元素 jQuery 物件
    return this;
}
 
$( "a" ).setColor().addClass( "greenified" );
```

為了避免 `$` 受到影響（全域變數污染），我們建立了立即函數（Immediately Invoked Function Expression）的作用域（scope），並將 jQuery 當作參數傳進去：

```javascript
(function ( $ ) {
    $.fn.setColor = function() {
    	// 私有變數
        var shade = "#556b2f";
        this.css( "color", shade );
        // 回傳選取元素 jQuery 物件
        return this;
    };
}( jQuery ));
```

另外，我們可以盡量減少新增新的方法，可以使用條件判斷去選擇執行區塊，避免方法覆蓋或是撞名：

```javascript
(function( $ ) {
    $.fn.popup = function( action ) { 
        if ( action === "open") {
            // Open popup code.
        }
        if ( action === "close" ) {
            // Close popup code.
        }
    };
}( jQuery ));
```

也可以使用 each 去迭代元素：

```javascript
$.fn.myNewPlugin = function() {
    return this.each(function() {
        // Do something to each element here.
    });
};
```

若需要參數擴展可以使用 `$.extend`：

```javascript
(function ( $ ) { 
    $.fn.greenify = function( options ) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            // 預設參數
            color: "#556b2f",
            backgroundColor: "white"
        }, options );
        // Greenify the collection based on the settings variable.
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
    };
}( jQuery ));
```

這樣一來就可以讓使用者使用參數：

```javascript
$( "div" ).greenify({
    color: "orange"
});
```

最後我用一個整合範例結束，把每個超連結文字接上超連結位址：

```javascript
(function( $ ) {
    $.fn.showLinkLocation = function() {
        this.filter( "a" ).each(function() {
            var link = $( this );
            link.append( " (" + link.attr( "href" ) + ")" );
        });
        return this;
    };
 
}( jQuery ));
 
// Usage example:
$( "a" ).showLinkLocation();
```

HTML 呼叫外掛變化：

```html
<!-- Before plugin is called: -->
<a href="page.html">Foo</a>
 
<!-- After plugin is called: -->
<a href="page.html">Foo (page.html)</a>

```

完整優化版外掛，讓使用者可以將超連結網址顯示出來：

```javascript
(function( $ ) {
    $.fn.showLinkLocation = function() {
        this.filter( "a" ).append(function() {
            return " (" + this.href + ")";
        });
        return this;
    };
 
}( jQuery ));
```

# 總結
以上我們快速感受了一下 jQuery Plugin 撰寫方式，主要要注意的就是作用域和 `$` 保護，以及 `this` 指定到哪個元素。好了，現在就開始你的第一個 jQuery Plugin 吧！

# 延伸閱讀
1. [How to Create a Basic Plugin](https://learn.jquery.com/plugins/basic-plugin-creation/)