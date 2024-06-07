---
title: 後端軟體工程工具箱：網路通訊協定篇
date: 2016-11-01 23:00:00
tags: Pytho, PHP, Back End, Back End Development, Back End Engineer, Web, TCP, HTTP, UDP
author: kdchang
---
# 前言
事實上，要成為一個好的後端軟體工程師除了必須對於後端工程的程式語言的部份有所了解外，也需要了解系統設計的原理和伺服器規劃（Server 規劃、Load Balance、Memory Cache、DB Scaling、Cloud Server、後端框架、TCP/IP/UDP 網路通訊協定、HTTP 超文字傳輸協定、設計模式、資料庫操作、SQL/ORM、資訊安全、性能優化等）。接下來我們將來探討資料庫/SQL/ORM 相關議題。

![後端軟體工程工具箱： 網路通訊協定篇 ](tcp-ip.png) 

# OSI Model
由於 TCP/IP 可以應用在不同網路，所以需要統一規範方便溝通。OSI Model 是由 International Standardization Organisation (ISO) 於 1978 年開始開發的一套標準架構﹕Reference Model for Open System Interconnection (OSI) 模型。OSI 常被引用來說明數據通訊協定的結構及功能﹐成為討論通訊時代共同依據﹐已經被通訊界廣泛實用且有一致的認知了。

![後端軟體工程工具箱： 網路通訊協定篇 ](osi-tcp-ip-model.gif) 

OSI 把數據通訊的各種功能分為七個層級，各司其職，但有相互依存合作。功能上又可以被劃分為兩組：

網路群組﹕由實體層、資料連接層和網路層所組成
使用者群組﹕由傳送層、會談層、表現層和應用層所組成

1. 實體層（Physical Layer）
於實體層裡您必須作出一些機械和電子方面的決定﹐也就是要定義出在終端和網絡之間要使用的設備

2. 資料連接層（Data Link Layer）
資料連接層指定了要採用的資訊單元 (message unit﹐通常在 LAN 上面的信息單元被稱為 frame﹐翻譯為訊框或框包)﹐還有它們的格式﹑以及如何通過網路等。每一個 frame 都會被賦予一個 MAC 位址碼和偵錯監測值（checksum）

3. 網路層（Network Layer）
網路層就好比是一個中間人界乎於網絡功能和使用者功能之間。它會定義出封包在網路中移動的路由和其處理過程，這層還決定了網路是如何進行管理功能的。例如：發送狀態訊息給接點和規範封包的流動等

4. 傳送層（Transport Layer）
傳送層將會設定如何控制節點之間的資料傳遞，還有錯誤檢測和修正的方法。TCP/IP 的傳送層協定主要分為 TCP 與 UDP 兩種，前者為可靠性傳輸、後者為非可靠性傳輸

5. 會談層（Session Layer）
會談層定義了如何連接和掛斷連接，以及在網路上面的數據如何交換

6. 表現層（Presentation Layer）
表現層定義了數據的語法（syntax）變更和格式。當應用程式的語法和格式都不相同的時候﹐表現層將定義了如何翻譯

7. 應用層（Application Layer）
應用層只轉換應用程式相關的檔案格式。表現層的轉換與應用層的轉換之間﹐最大的分別是﹕表現層是針對特定的主機的 CPU 類型﹐而應用層則針對特定應用程式

![後端軟體工程工具箱： 網路通訊協定篇 ](frame-data.png) 

# TCP Model
TCP/IP 提供點對點的連結機制，將資料應該如何封裝、定址、傳輸、路由以及在目的地如何接收，都加以標準化。其將軟體通訊過程抽象化為四個抽象層，採取協定堆疊的方式，分別實作出不同通訊協定。協定套組下的各種協定，依其功能不同，被分別歸屬到這四個階層之中：Network Access、Internet、Transport、Application，常被視為是簡化的七層OSI模型

![後端軟體工程工具箱： 網路通訊協定篇 ](osi-tcp-ip-model.gif) 

# TCP/UDP

- TCP
	
	1. TCP 歷史起源：
		早期電腦間連接主要是中央集權，主要透過 Mainframe 去連結其他輸入輸出裝置。後來 1960 年代冷戰時期因為軍事需要發展出連接離散式網路系統：ARPANET，發展到後來 ARPANET 的實驗非常成功，從而奠定了今日的網際網路的運作模式。ARPANET 包括了一組電腦通訊細節的網路標準，以及一組用來連接網路和選擇網路交通路徑的協定，也就是大名鼎鼎的 TCP/IP 網際網路協定。TCP/IP 的全稱是 Transmission Control Protocol / Internet Protocol (TCP/IP)﹐最早是用來配合 ARPANET 來處理不同硬體之間的連接問題，例如：Sun 系統和 Mainframe 以及 Mainframe 和個人電腦之間的連接。隨著研究需求和對於 UNIX 友善的相容性，在大學校園裡 TCP/IP 開始流行並拓展到其他組織，隨著網際網路的發展，目前是非常重要的一個網路通訊協定。

		Internet Protocol（IP）工作於網路階層中的網路層﹐它提供了一套標準讓不同的網路有規則可循，IP 在設計上是用來在 LAN 和 LAN 及 PC 和 PC 之間進行傳輸，每一台 PC 或每一個 LAN 都會有 IP 位址來表示其位置。IP 位址是用四個小數點來分隔開的十進位數字，每個數字介於 0 - 255。 

		事實上，我們可以把 IP 解釋成是遊戲規則﹐而 TCP 則用來詮釋這些規則的，更精確來說，TCP 建立於 IP 的基礎之上，解釋了參與通訊的雙方是如何透過 IP 進行資料傳送的。TCP 提供了一套協定，能夠將電腦之間使用的資料透過網路相互傳送，同時也提供一套機制來確保資料傳送的準確性和連續性。

	2. TCP/IP 特色：
		1. Connectionless Packet Delivery Service：是其它網路服務的基礎﹐幾乎所有封包交換網路都提供這種服務。TCP/IP 是根據訊息中所含的位址資料來進行資料傳送﹐不能確保每個獨立路由的封包是可靠和依序的送達目的地。在每一個連線過程中﹐線路都不是被獨佔，而是直接對應到硬體位址上，因此效果很好。更重要的是，此種封包交換方式的傳送，使得 TCP/IP 能適應各種不同的網路硬體
		2. Reliable Stream Transport Service：切割封包然後編號傳送，並透過 acknowledgement 進行確認資料完整性
		3. Network Technology Independent：TCP/IP 有自己一套資料包規則和定義，獨立於硬體之上可以應用於不同網路
		4. Universal Interconnection：只要用 TCP/IP 連接網路都會獲得獨一無二獨立位置。資料傳輸以位置為主，不管路由路徑如何選擇，都能到指定位置
		5. End-to-End Acknowledgements：無需理會過程，端到端的結果才是我們重視的
		6. Application Protocol Standards：除了提供基礎傳輸外，也提供一般應用標準

		![後端軟體工程工具箱： 網路通訊協定篇 ](tcp-3wh.gif)
	
	3. TCP Header

		![後端軟體工程工具箱： 網路通訊協定篇 ](tcp-header.jpg) 

	4. 三向交握（TCP/IP Three-Way Handshake）
		TCP 三向交握為每個使用 TCP 傳輸協議建立連線的基礎，當用戶端試著與伺服器間建立 TCP 連線時，正常情況下用戶端與伺服器端交換一系列的資訊如下：

		1. 用戶端透過傳送 `SYN` 同步（synchronize）資訊到伺服器要求建立連線
		2. 伺服器透過響應用戶端 `SYN-ACK` 以抄收（acknowledge）請求
		3. 用戶端答應 `ACK`，連線建立

- UDP

![後端軟體工程工具箱： 網路通訊協定篇 ](udp-header.jpg) 

UDP 只提供不可靠資料傳遞，它一旦把應用程式發給網路層的資料傳送出去，就不保留資料備份（所以 UDP 有時候也被認為是不可靠的資料報協定）。UDP 在 IP 資料包的頭部僅僅加入了復用和資料校驗（欄位），一般而言，Streaming（串流技術）、即時多媒體遊戲和 IP 電話（VoIP）就是典型的 UDP 應用

# TCP/UDP 兩者主要差異

TCP 和 UDP 有以下幾點差異和其使用上的優缺點：

1. Connection oriented vs Connection less
2. Reliability
3. Ordering
4. Data Boundary
5. Speed
6. Heavy weight vs Light weight
7. Header size
8. Congestion or Flow control
9. Usage and application
10. TCP and UDP based Protocols

- TCP 
	優點：傳送可靠，程式可省略可靠機制
	缺點：速度比較慢

- UDP 
	優點：傳輸量大，迅速
	缺點：不可靠，程式或需自行提供可靠機制

# 總結
以上介紹了後端軟體工程工具箱：網路通訊協定相關議題篇，在接下來的章節中我們將為大家打開後端工程的工具箱，介紹那些必須掌握的後端軟體工程知識。

# 延伸閱讀
1. [9 Difference between TCP and UDP Protocol](http://javarevisited.blogspot.tw/2014/07/9-difference-between-tcp-and-udp-protocol.html)
2. [TCP 與 UDP](http://www.pcnet.idv.tw/pcnet/network/network_ip_tcp.htm)

（image via [biglobe](http://www5e.biglobe.ne.jp/%257eaji/3min/img/connect3a.gif)、[csshieh](http://bit.kuas.edu.tw/~csshieh/teach/np/tcpip/)、[wiki](https://zh.wikipedia.org/zh-tw/TCP/IP%E5%8D%8F%E8%AE%AE%E6%97%8F)、[systemstechblog](https://systemstechblog.files.wordpress.com/2011/02/tcpheader.jpg)、[staticworld](http://core0.staticworld.net/images/idge/imported/article/nww/2008/05/01fig46-100279132-orig.jpg)）
