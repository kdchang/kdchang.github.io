---
title: Go Web 程式設計入門教學：Web 基礎
date: 2017-07-02 00:23:23
author: kdchang
tags: GO, GO lang, golang, web, go web, 自學程式, 自學程式設計, 程式設計, 線上自學, coding, coder, programming, computer, computer science, code, 電腦科學, 學寫程式, 學程式
---

![Go Web 程式設計入門教學](logo.png)

# 前言
前面幾個單元中我們介紹了許多 [Go 程式語言](https://en.wikipedia.org/wiki/Go_(programming_language) 的基本語法，讓我們了解了 Go 程式語言的用法。接下來我們將透過 Go 來架設簡單的 Web Server。

# Web 基本工作流程

![Go Web 程式設計入門教學](http-req-resp.jpg)

在我們平常透過瀏覽器（Browser）瀏覽網站時，其背後事實上進行了一連串 Client 客戶端和 Server 伺服器端的互動，以下介紹 Web Server 工作流程簡介：

1. 使用者在瀏覽器（Browser）網址列輸入 URL，瀏覽器會透過 DNS 伺服器進行解析，取得 Domain 對應伺服器（Server）的 IP 位置
2. 找到對應 Server IP 後，Client 透過 TCP/IP 協定建立到 Server 的 TCP 連接
3. Client 向 Server 發送 http 協定請求（request）封包，請求 server 資料
4. 若請求資源中有動態網站的內容，Server 端會先呼叫伺服器端的程式語言解譯引擎負責處理內容。Server 將組好的內容向 Client 發送 http 協定回應（response）封包
5. Client 和 Server 中斷 TCP 連線，等待下一次請求。由 Client 解析收到的回應（response）封包內容（body），在瀏覽器繪製 HTML/CSS/JavaScript 檔案內容

![Go Web 程式設計入門教學](http-req.png)

- URL 解析

一般 URL（Uniform Resource Locator）結構大概長這樣：
```
Scheme://host{:port#}/path/.../[?query-string][#anchor]
```

    1. scheme：底層使用的協定（例如：https、http 或 ftp 等）
    2. host：http 伺服器 ip 位置或 domain
    3. port：http 預設是 80 可以省略，如果是使用其他則需要填寫，可以想成是 ip 的名牌號碼
    4. path：資源路徑
    5. query-string：使用 get 傳送的參數
    6. anchor：記錄超連結錨點

- DNS（Domain Name System）解析路徑

    1. 輸入網址，查找本機的 host 檔案
    2. 若 host 沒有 domain/ip 對應，則查找本機的 DNS 解析器快取
    3. 若 host/本機 DNS 快取都沒有 domain 對應則解析 TCP/IP 參數中設定的第一個 DNS 伺服器或其快取回傳（不具權威性）
    4. 若都故障，則會由 domain 右往左查找對應 DNS 伺服器（轉發/非轉發模式），回傳給本機 DNS 伺服器

- HTTP request 請求解析
    接著我們聊聊在 HTTP 協定中有定義許多和伺服器互動的方式，最基本的有四種：`GET`、`POST`、`PUT`、`DELETE`，分別對應資源的查增更刪，最常見的舊是 `GET`、`POST`。

    其中 GET 會把傳送資料放在網址後面，資料為明碼且有長度限制，一般用於查找資料。而 POST 資料傳遞主要是放在 http request 的 body 中，所以新增資料或是傳遞較敏感資料通常會用 POST 傳送

- HTTP response 回應解析
    http response 封包組成由版本編號、狀態碼、狀態訊息組成

    HTTP 狀態碼是使用三位數字組成，在 HTTP/1.1 中定義五大類狀態碼：

    1XX 提示訊息
    2XX 成功
    3XX 重新導向
    4XX client 錯誤
    5XX server 錯誤


# 使用 Go 架設基本 Web Server 
在 Go 中可以使用 `net/http` 套件建立 Web 伺服器：

1. Request：使用者請求的資訊，包含 post, get, cookie 等
2. Response：伺服器需要回饋給使用者的資訊
3. Conn：使用者請求每次產生連結
4. Handler：處理請求和產生傳回資訊的處理邏輯

```
package main

import (
    "fmt"
    "net/http"
    "log"
)

// 處理函式
func helloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "hello world!")
}

func main() {
    // 網址對應處理函式
    http.HandleFunc("/", helloHandler)
    // 監聽通訊 port
    err := http.ListenAndServe(":7777", nil)
    if err != nil {
        log.Fatal("ListenAndServe", err)
    } else {
		log.Println("listen 7777")
	}
}
```

# 總結
以上就是關於 Go 程式語言的 Web 基礎和 http 協定簡介，接下來的文章我們將透過 Golang Web 程式設計來學習 Go 這個程式語言的方方面面。

# 參考文件
1. [A tour of go](https://tour.golang.org/welcome/1)
2. [Go Tutorial](https://www.tutorialspoint.com/go/)
3. [Go by Example](https://gobyexample.com/)
4. [Go Programming Language: An Introductory Tutorial](https://www.toptal.com/go/go-programming-a-step-by-step-introductory-tutorial)
5. [Go tour Exercise](https://github.com/davidhoo/go-tour)
6. [Ubuntu Go install](https://github.com/golang/go/wiki/Ubuntu)

（image via [slidesharecdn](https://image.slidesharecdn.com/rg-introductiontohtmlcssandjavascript-150206101801-conversion-gate01/95/rails-girls-introduction-to-html-css-11-638.jpg?cb=1423239531)、[websiteoptimization](http://www.websiteoptimization.com/secrets/metrics/10-21-http-request.png)）
