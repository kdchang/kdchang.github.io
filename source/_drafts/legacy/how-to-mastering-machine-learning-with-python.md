---
title: 如何使用 Python 學習機器學習（Machine Learning）
date: 2017-06-25 09:54:49
tags: Python, Machine Learning, 機器學習, AI, Artificial Intelligence, NLP, Data Mining, 人工智慧, 監督式學習, Supervised learning
author: kdchang
---

![ 如何使用 Python 學習機器學習（Machine Learning）](machine_learning.jpg)

隨著資料科學（Data Science）技術的興起，[人工智慧（Artificial Intelligence）](https://en.wikipedia.org/wiki/Artificial_intelligence)、[機器學習（Machine Learning）](https://en.wikipedia.org/wiki/Machine_learning) 成為近幾年來電腦科學界十分熱門的研究領域，如今在實體和線上的學習機器學習的資源有很多，本文整理了一些好用學習資源希望幫助初學者能更容易使用 Python 入門機器學習的領域中，從零開始學習機器學習。若是對於資料科學不熟悉的讀者可以先參考[適用於初學者的資料科學影片](https://azure.microsoft.com/zh-tw/documentation/articles/machine-learning-data-science-for-beginners-the-5-questions-data-science-answers/) ，讓自己對於資料科學有初步的認識。

![ 如何使用 Python 學習機器學習（Machine Learning）](ai-history.png)

# 人工智慧的發展
[「人工智慧」（Artificial Intelligence）](https://en.wikipedia.org/wiki/Artificial_intelligence)這專有名稱正式出現在西元 1956 年，在美國達特茅斯學院 (Dartmouth College）召開的第一次人工智慧會議。根據維基百科的定義，人工智慧係指由機器所展現的智慧，一般而言人工智慧又分為「強人工智慧」（Strong AI）和「弱人工智慧」（Weak AI） 兩種不同的主張。所謂的強人工智慧指的是有自我意識、有知覺可以自己推理和解決問題的機器智慧，而「弱人工智慧」只能模擬人類的思維與行為表現，但缺乏真正的推理與解決問題的能力，也不具有自主意識。人工智慧在歷史上經歷了幾次熱潮和寒冬，從最早的邏輯推理到後來的專家系統，再到目前的機器學習/深度學習，機器學習可以視為人工智慧的一個實現方式或是發展的一個歷程。

事實上，人工智慧或是機器學習都是一門跨領域的學門，牽涉了電腦科學、數學、神經學、心理學、經濟學、統計學等層面，也有許多相關的學門：

![ 如何使用 Python 學習機器學習（Machine Learning）](ai-ml-dm.png)

隨著運算資源（雲端運算、GPU 等）、海量資料（目前還有許多資料還沒被創造，等待我們去發掘呢）以及機器學習/深度學習的發展，生活上許多產品已經可以看到人工智慧的應用。但人工智慧最美好的境界莫過於人機之間的互動以及相輔相成，以 AlphaGO 為例，雖然人類在圍棋領域輸給人機器，但也從機器的思考方式去重新思考了圍棋的真諦和有別於人類的思考方式。

>>「就因為某樣東西思考的方式跟你不一樣，就代表它沒在思考嗎？」 "Just because something thinks differently from you, does it mean it’s not thinking?" ---《模仿遊戲》《Imitation Game》(2015)

![ 如何使用 Python 學習機器學習（Machine Learning）](ai-plus.png)

# 什麼是機器學習（Machine Learning）？
機器學習是一種資料科學的技術也是一種實現人工智慧的一種方式，協助電腦從現有的資料學習，以便預測未來的行為、結果和趨勢。根據學習的方式又可以分為需要解答的[監督式學習（Supervised learning）](https://en.wikipedia.org/wiki/Supervised_learning)、[非監督式學習（Unsupervised learning）](https://en.wikipedia.org/wiki/Unsupervised_learning)和[增強學習（Reinforcement learning）](https://en.wikipedia.org/wiki/Reinforcement_learning)等（還有一種混合式的半監督式學習）等子類別。機器學習技術可以應用的範圍十分廣泛，總的來說機器學習可以解決以下幾種問題：

1. 分類問題：這是 A 類 或 B 類嗎？

2. 異常值判斷：這很奇怪嗎？

3. 預測性分析：有多少？

4. 分群問題：這是如何組織的？

5. 增強學習協助決策：我接下來該怎麼辦？

當我們蒐集到相關、精確、連貫、足夠資料就可以挑選合適的演算法進行模型的的建置。

# 為什麼選擇 Python？
在資料科學和機器學習領域最重要的兩大程式語言就是 Python 和 R，Python 簡潔易學、應用範圍廣（不限於數據分析）且學習曲線平緩，適合作為第一個入門的程式語言，透過 pandas、SciPy/NumPy、sckikit-learn、matplotlib 和 statsmodels 可以進行數據分析的工作，適合工程任務和需要和網路應用程式整合的專案。至於 R 由於是統計學家開發的程式語言，則是擅長於統計分析、圖表繪製，常用於學術研究領域，建議也要有一定程度的掌握。一般情況下 Python 和 R 並非互斥，而是互補，許多資料工程師、科學家往往是在 Python 和 R 兩個語言中轉換，小量模型驗證、統計分析和圖表繪製使用 R，當要撰寫演算法和資料庫、網路服務互動等情況時在移轉到 Python。為了降低學習成本。

此外 Python 本身是一種通用語言，除了資料科學外也可以廣泛使用在網路開發、網站建置、遊戲開發、網路爬蟲等領域，當你需要整合系統產品服務時，可以擔任一站式的開發語言，更重要的是 Python 也可以當成膠水語言非常輕易和 C/C++ 等效能較佳的語言整合。簡而言之，Python 是一種簡潔易學但功能強大，值得投資的程式語言，所以我們這邊先使用 Python 進行介紹。

若對於 Python 和 R 比較，這邊有兩篇文章可以參考 [数据科学界华山论剑：R与Python巅峰对决](http://bi.dataguru.cn/article-7257-1.html)、[Which is better for data analysis: R or Python?](https://www.quora.com/Which-is-better-for-data-analysis-R-or-Python)。

# 如何開始入門機器學習？
事實上，資料科學是個跨領域學門，在學習如何使用 Python 進行機器學習過程中通常必須掌握以下知識：

- 機器學習演算法
- Python 程式語言和資料分析函式庫
- 線性代數/統計學等相關學門
- 專業領域的領域知識（Domain Knowledge）

為了掌握以上三大領域知識（我們先把焦點放在機器學習核心技法，暫時忽略資料科學中對於領域知識的掌握），具體來說我們可以有以下步驟可以參考：

1. 掌握基礎 Python 程式語言知識

	線上學習資源：

	- [Codecademy](https://www.codecademy.com/learn/python)
	- [DataCamp](https://www.datacamp.com/) （也可以學 R）
	- [Learn X in Y Minutes (X = Python)](https://learnxinyminutes.com/docs/python/)
	- [Learn Python the Hard Way](https://learnpythonthehardway.org/book/)

2. 了解基礎數學/統計學和機器學習基礎知識

	- [可汗學院線性代數](https://www.khanacademy.org/math/algebra)

	- [Intro to Descriptive Statistics](https://www.udacity.com/course/intro-to-descriptive-statistics--ud827)
	- [Intro to Inferential Statistics](https://www.udacity.com/course/intro-to-inferential-statistics--ud201)	

	- [Andrew Ng 機器學習課程](https://www.coursera.org/learn/machine-learning)
	- [Andrew Ng 機器學習筆記](http://www.holehouse.org/mlclass/)
	- [Carnegie Mellon University Machine Learning](http://www.cs.cmu.edu/~ninamf/courses/601sp15/lectures.shtml)
	- [Machine Learning Foundations (機器學習基石)](https://www.youtube.com/playlist?list=PLXVfgk9fNX2I7tB6oIINGBmW50rrmFTqf)

3. 知道如何使用 Python 科學計算函式庫和套件
	
	推薦安裝 [Anaconda](https://docs.continuum.io/anaconda/install)，支援跨平台多種版本 Python，預設將數據分析、科學計算的套件裝好，自帶 spyder 編輯器、Jupyter Notebook（IPython Notebook），可以提供一個網頁版介面，讓使用者可以透過瀏覽器進行 Julia、Python 或 R 程式的開發與維護。

	- numpy：科學分析，[Scipy Lecture Notes 教學文件](http://www.scipy-lectures.org/)
	- pandas：資料分析
	- matplotlib：會製圖瞟
	- scikit-learn：機器學習工具

4. 使用 scikit-learn 學習 Python 機器學習應用

	- [Machine Learning: Python 機器學習：使­用Pytho­n](https://www.gitbook.com/book/htygithub/machine-learning-python)

5. 運用 Python 實作機器學習演算法

	- 感知器
	- 決策樹
	- 線性迴歸
	- k-means 分群

6. 實作進階機器學習演算法

	- SVM
	- KNN
	- Random Forests
	- 降低維度
	- 驗證模型

7. 了解深度學習（Deep Learning）在 Python 的實作和應用
	
	- [NTU Applied Deep Learning](https://www.csie.ntu.edu.tw/~yvchen/f105-adl/index.html)
	- [Stanford Deep Learning](http://deeplearning.stanford.edu/tutorial/)
	- [深度學習(Deep Learning)自學素材推薦](https://dt42.github.io/2016/04/27/deep-learning-material-recommendations/)
	- [深度學習 Deep Learning：中文學習資源整理](http://www.jerrynest.com/deep-learning-resource/)

# 總結
以上整理了一些機器學習網路學習資源，若你累積一些小小經驗後，不妨挑戰一下 [Kaggle](https://www.kaggle.com/) 或是 [KDD](http://www.kdd.org/kdd2017/) 測試一下自己的實力並累積更多數據分析的經驗。

# 延伸閱讀
1. [7 Steps to Mastering Machine Learning With Python](http://www.kdnuggets.com/2015/11/seven-steps-machine-learning-python.html)
2. [人人都可成為資料科學大師！一整年的網路自學清單就在這了](https://buzzorange.com/techorange/2016/02/02/plan-to-be-a-data-scientist-in-new-year/)
3. [Analytics Vidhya](https://www.analyticsvidhya.com/)
4. [台灣資料科學年會](http://datasci.tw/)
5. [「2016 台灣資料科學愛好者年會」精彩資料總整理(持續更新中)](http://dataology.blogspot.tw/)
6. [大數據會消失，資料科學不會！你該知道的資料科學第一堂課](http://www.bnext.com.tw/article/view/id/40220)
7. [如何選擇 Microsoft Azure Machine Learning 的演算法](https://azure.microsoft.com/zh-tw/documentation/articles/machine-learning-algorithm-choice/)
8. [Microsoft Azure Machine Learning 機器學習服務文件](https://azure.microsoft.com/zh-tw/documentation/services/machine-learning/)
9. [Kdnuggets](http://www.kdnuggets.com/)
10. [Bigdatafinance](http://www.bigdatafinance.tw/)
11. [Using Python and R together: 3 main approaches](http://www.kdnuggets.com/2015/12/using-python-r-together.html)
12. [机器学习最佳入门学习资源](http://blog.csdn.net/shadow_mi/article/details/51829389)
13. [机器学习(Machine Learning)&深度学习(Deep Learning)资料(Chapter 1)](https://github.com/ty4z2008/Qix/blob/master/dl.md)
14. [SIRAJ RAVAL'S DEEP LEARNING](https://www.udacity.com/course/deep-learning-nanodegree-foundation--nd101)

（image via [respondr](http://respondr.io/wp-content/uploads/2016/03/machine_learning-1024x724.jpg)）
