---
title: 關於 LLMs 大型語言模型微調（Fine-tuning）入門教學
date: 2024-05-26 11:33:41
author: kdchang
tags: 
    - 生成式 AI
    - GenAI
    - Large Language Model
    - LLMs
    - LLM
    - 大型語言模型
    - fine-tuning
    - 微調

---

# 重點摘要
大語言模型（LLM）微調（fine-tuning）是一個讓現有的 AI 模型更符合特定領域需求的過程。我們這裡用簡單的例子來說明這個概念：

1. **原始模型**：假設你有一個已經訓練好的 AI 模型，這個模型可以理解和生成很多不同主題的文本，就像一個知識廣博但通用型的助手，對於領域知識就容易瞎掰或是有幻覺的產生。

2. **特定任務需求**：你希望這個模型能夠在特定領域（例如：教育、醫療、法律或客服）更精通。此時，你需要讓模型「學習」這個領域的專門知識。

3. **收集資料**：你收集了一些這個領域的專門資料，例如：考試題目、醫療報告、法律文件或客服對話記錄。這些資料是模型需要學習的內容。

4. **微調過程**：你用收集到的專門資料對模型進行再訓練。這個過程叫做「微調（fine-tuning）」。模型會根據新的數據進一步調整自己的內部參數，從而在特定領域上變得更加精通。

5. **結果**：經過微調後，模型現在不僅能夠處理一般的文本，還能在特定領域內提供更準確、更有幫助的回應。例如：一個微調過的醫療模型可以更準確地回答健康問題。

# 參考文件
1. [Getting started with LLM fine-tuning](https://learn.microsoft.com/en-us/ai/playbook/technology-guidance/generative-ai/working-with-llms/fine-tuning)
2. [An Introductory Guide to Fine-Tuning LLMs](https://www.datacamp.com/tutorial/fine-tuning-large-language-models)
3. [【LLM 10大觀念-3】快速建造自己個instruction tuning dataset](https://etax.nat.gov.tw/etwmain/etw103w)
4. [Fine-tuning large language models (LLMs) in 2024](https://www.superannotate.com/blog/llm-fine-tuning)
5. [AI / ML領域相關學習筆記入口頁面](https://hackmd.io/@YungHuiHsu/HJ6AT8XG6)
6. [LLM Note Day 24 - 語言模型微調 LLM Finetuning](https://ithelp.ithome.com.tw/articles/10336323)
7. [2024 Generative AI年會活動筆記](https://hackmd.io/@ejc/2024gaiconf)

# 總結
LLM 微調（fine-tuning）就是將一個通用的 AI模型進一步訓練，使其在某個特定領域表現得更好，更有可以應用性。 