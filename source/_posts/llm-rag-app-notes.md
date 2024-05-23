---
title: 擷取擴增產生（Retrieval-Augmented Generation, RAG）入門教學
date: 2024-05-23 11:33:41
author: kdchang
cover: https://www.kdchang.cc/img/posts/i-am-scrum-master.png
tags: 
    - 生成式 AI
    - GenAI
    - Large Language Model
    - LLMs
    - 大型語言模型
    - RAG
    - Retrieval-Augmented Generation
    - 擷取擴增產生
    - 檢索增強生成

---


擷取擴增產生/檢索增強生成（Retrieval-Augmented Generation, RAG）是一種結合檢索和生成技術的混合模型，用於改善文本生成任務的性能。這種方法能夠在生成文本時引入外部知識，從而生成更準確和上下文相關的內容。以下是對 RAG 的詳細介紹：

### RAG 的工作原理

1. **檢索階段**：
   - **查詢生成**：首先，根據輸入文本（例如用戶查詢或初始上下文），生成一個查詢。
   - **文件檢索**：使用查詢從大型文件庫或知識庫中檢索相關文件。這可以使用傳統的資訊檢索技術（如 TF-IDF、BM25）或先進的檢索模型（如 Dense Passage Retrieval, DPR）。

2. **生成階段**：
   - **資訊整合**：將檢索到的相關文件與原始輸入結合，作為生成模型的上下文。
   - **文本生成**：生成模型（如 GPT 或 BERT 變體）基於這些整合的上下文生成回應或文本。

### RAG 的優點

1. **上下文豐富性**：
   - 由於引入了外部文件，生成模型在生成回應時能夠參考更多的背景資訊，從而提高生成文本的品質和準確性。

2. **動態知識更新**：
   - 通過檢索最新的文件，模型能夠利用最新的資訊，而不需要重新訓練模型來更新知識。

3. **知識擴展**：
   - 模型不再僅僅依賴於訓練數據中的資訊，而是可以動態地檢索和使用更多外部知識，適應更廣泛的應用場景。

### RAG 的應用

1. **問答系統**：
   - 例如，對於複雜或需要最新資訊的問答，RAG 可以檢索相關資料並生成詳細回答。

2. **對話系統**：
   - 在聊天機器人中使用 RAG 可以提高對話的連貫性和資訊量，提供更有意義和上下文相關的回應。

3. **內容生成**：
   - 用於撰寫技術文文件、新聞報導或產品描述時，RAG 可以檢索相關背景資料並生成高品質的文本。

4. **文本摘要**：
   - 將長文件或多個文建的核心資訊檢索出來，並生成簡潔的摘要。

### RAG 的挑戰

1. **檢索品質**：
   - 檢索階段的品質直接影響生成結果，檢索到的文件需要高度相關且準確。
   
2. **整合策略**：
   - 如何有效地將檢索到的文件與原始上下文整合，是一個技術挑戰。

3. **計算資源**：
   - 檢索和生成過程需要大量的計算資源，尤其是在處理大規模文件庫時。

### 總結

擷取擴增產生/檢索增強生成（RAG）是一種創新的文本生成方法，結合了檢索和生成技術的優點，能夠在許多應用場景中提供更準確和上下文相關的文本生成。儘管面臨一些挑戰，但隨著技術的不斷發展，RAG 在自然語言處理領域展示了廣闊的應用前景。

# Doc
1. [什麼是 Retrieval-Augmented Generation (RAG)？](https://www.oracle.com/tw/artificial-intelligence/generative-ai/retrieval-augmented-generation-rag/)
2. [RAG 檢索增強生成— 讓大型語言模型更聰明的秘密武器](https://blog.infuseai.io/rag-retrieval-augmented-generation-introduction-a5854cb6393e)
3. [什麼是 RAG？](https://aws.amazon.com/tw/what-is/retrieval-augmented-generation/)
4. [什麼是檢索增強生成？](https://blogs.nvidia.com.tw/blog/what-is-retrieval-augmented-generation/)
5. [在 Azure AI 搜尋中擷取擴增產生 (RAG)](https://learn.microsoft.com/zh-tw/azure/search/retrieval-augmented-generation-overview)