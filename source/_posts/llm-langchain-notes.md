---
title: LangChain：LLM 大型語言模型開源框架 Framework 入門教學
date: 2024-05-23 11:33:41
author: kdchang
cover: https://www.kdchang.cc/img/posts/i-am-scrum-master.png
tags: 
    - 生成式 AI
    - GenAI
    - Large Language Model
    - LLMs
    - 大型語言模型
    - LangChain

---

### LangChain：LLM 大型語言模型開源框架 Framework 入門教學

隨著大型語言模型（LLM）的廣泛應用，開發者們需要更靈活、更高效的工具來構建和管理這些模型。LangChain 是一個專為 LLM 設計的開源框架，旨在簡化 LLM 的整合、部署和應用。本文將介紹 LangChain 的基本概念、特性和使用方法，幫助您快速入門。

#### 1. LangChain 介紹

LangChain 是一個專為 LLM 設計的開源框架，提供了一系列工具和介面，使開發者能夠更輕鬆地使用 LLM 進行文本生成、問答系統、聊天機器人等應用。LangChain 支持多種 LLM，如 OpenAI 的 GPT 系列模型，並提供了豐富的功能來優化模型的性能和用戶體驗。

#### 2. 安裝 LangChain

在開始使用 LangChain 之前，首先需要安裝它。您可以使用以下命令通過 pip 來安裝：

```bash
pip install langchain
```

#### 3. 基本使用

LangChain 提供了一個簡單且一致的介面來使用各種 LLM。下面是如何使用 LangChain 進行基本文本生成的範例：

```python
from langchain import LanguageModel

# 初始化模型
model = LanguageModel(model_name="gpt-3.5-turbo")

# 文字生成
prompt = "Write a poem about the sea."
response = model.generate(prompt)

print(response)
```

在這個示例中，我們首先導入了 LangChain 的 `LanguageModel` 類，並使用 `model_name` 指定我們要使用的模型。接著，我們提供一個提示語 `prompt`，並使用 `generate` 方法來生成文本。

#### 4. 高級功能

LangChain 不僅支持基本的文本生成，還提供了許多高級功能，包括檢索增強生成（RAG）、上下文管理和自定義管道等。

##### 檢索增強生成（RAG）

RAG 是 LangChain 的一個強大功能，它結合了檢索和生成技術，提供更豐富和上下文相關的回應。以下是一個簡單的 RAG 示例：

```python
from langchain import RAG

# 初始化 RAG 模型
rag_model = RAG(model_name="gpt-3.5-turbo", retriever="dense")

# 提供查詢
query = "What are the latest advancements in AI?"

# 檢索並生成回應
response = rag_model.generate(query)

print(response)
```

在這個示例中，我們使用 RAG 類初始化了一個 RAG 模型，並指定了檢索器類型。然後，我們提供了一個查詢 `query`，並使用 `generate` 方法來檢索相關信息並生成回應。

##### 上下文管理

LangChain 支持上下文管理，使模型能夠在會話中保持上下文。這對於構建聊天機器人和問答系統非常有用。

```python
from langchain import Conversation

# 初始化會話
conversation = Conversation(model_name="gpt-3.5-turbo")

# 添加上下文
conversation.add_user_input("Hello, who won the World Series in 2020?")
response = conversation.get_response()

print(response)

# 添加更多上下文
conversation.add_user_input("Who was the MVP?")
response = conversation.get_response()

print(response)
```

在這個示例中，我們使用 `Conversation` 類初始化了一個會話，並逐步添加用戶輸入。模型能夠根據上下文生成更相關的回應。

#### 5. 自定義管道

LangChain 允許您創建自定義管道，以滿足特定應用需求。以下是一個自定義管道的簡單示例：

```python
from langchain import Pipeline

# 定義自定義步驟
def preprocess(text):
    return text.lower()

def postprocess(response):
    return response.capitalize()

# 創建管道
pipeline = Pipeline(steps=[preprocess, "gpt-3.5-turbo", postprocess])

# 使用管道生成文本
prompt = "Explain the significance of the moon landing."
response = pipeline.run(prompt)

print(response)
```

在這個示例中，我們定義了兩個自定義步驟 `preprocess` 和 `postprocess`，並將它們與模型集成到一個管道中。這允許我們在文本生成之前和之後對文本進行處理。

#### 6. 總結

LangChain 是一個強大且靈活的開源框架，專門為 LLM 的使用和管理設計。無論是簡單的文本生成還是複雜的檢索增強生成，LangChain 都提供了豐富的功能來滿足您的需求。希望這篇入門教學能幫助您快速上手 LangChain，開發出強大的應用。

# Doc
1. [【Day10】Langchain 教學的簡單中文化](https://ithelp.ithome.com.tw/articles/10318758)
2. [line 透過 LangChain 打造一個股價查詢 LINEBot - 股價小幫手](https://engineering.linecorp.com/zh-hant/blog/langchain-llm-linebot)
3. [Flowise - Build LLM Apps Easily](https://github.com/FlowiseAI/Flowise?tab=readme-ov-file)
4. [LangChain github](https://github.com/langchain-ai/langchain)
5. [LangChain’s flexible abstractions and AI-first toolkit make it the #1 choice for developers when building with GenAI.](https://www.langchain.com/langchain)
6. [langchain 教學](https://www.langchain.asia/)
7. [LangChain是什麼？AI開發者必須了解的LLM開源框架](https://tw.alphacamp.co/blog/langchain-intro)
8. [利用 LangChain 實作多模態模型的 RAG：除了讀文章也能看圖答題](https://edge.aif.tw/application-langchain-rag/)
9. [利用LangChain實作ChatPDF：問個問題，輕鬆找出文件重點](https://edge.aif.tw/express-langchain-chatpdf/)
10. [何謂 LangChain？](https://aws.amazon.com/tw/what-is/langchain/)
11. [全端 LLM 應用開發(向量資料庫, Hugging Face, OpenAI, Azure ML, LangChain, FastAPI and more) 系列](https://ithelp.ithome.com.tw/users/20120030/ironman/7039)