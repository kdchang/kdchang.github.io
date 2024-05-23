---
title: Hugging Face 開源 AI 模型平台入門教學
date: 2024-05-22 11:33:41
author: kdchang
cover: https://www.kdchang.cc/img/posts/i-am-scrum-master.png
tags: 
    - 生成式 AI
    - GenAI
    - Large Language Model
    - LLMs
    - 大型語言模型
    - Hugging Face

---

### Hugging Face 開源 AI 模型平台入門教學

Hugging Face 是當前最流行的開源 AI 模型平台之一，專注於自然語言處理（NLP）和生成模型。其 Transformers 庫和 Model Hub 為開發者提供了便捷的工具和預訓練模型，使其能夠輕鬆地構建和部署 AI 應用。本文將介紹 Hugging Face 平台的基本概念、特性以及如何開始使用它。

#### 1. Hugging Face 介紹

Hugging Face 是一家專注於自然語言處理技術的公司，其開源平台提供了大量預訓練的深度學習模型。最著名的是 Transformers 庫，支持 BERT、GPT-3、T5 等多種模型。Hugging Face Model Hub 則是一個模型存儲庫，允許用戶上傳和共享模型。

#### 2. 安裝 Hugging Face Transformers

要開始使用 Hugging Face，首先需要安裝 Transformers 庫。您可以使用 pip 來安裝：

```bash
pip install transformers
```

此外，還需要安裝 PyTorch 或 TensorFlow 作為後端。這裡以 PyTorch 為例：

```bash
pip install torch
```

#### 3. 快速入門：使用預訓練模型

Hugging Face 提供了許多預訓練模型，您可以快速載入並使用它們。以下是如何使用預訓練模型進行文本生成的範例：

```python
from transformers import pipeline

# 使用 GPT-2 進行文本生成
generator = pipeline('text-generation', model='gpt2')

# 生成文本
prompt = "Once upon a time"
response = generator(prompt, max_length=50, num_return_sequences=1)

print(response)
```

這段代碼中，我們使用 `pipeline` 工具來載入 GPT-2 模型，並生成文本。這是 Hugging Face 提供的高層次接口，非常適合快速實驗。

#### 4. 自然語言處理任務

Hugging Face 支持多種 NLP 任務，如文本分類、問答系統、文本摘要等。以下是一些常見任務的範例：

##### 文本分類

```python
from transformers import pipeline

# 使用 BERT 進行文本分類
classifier = pipeline('sentiment-analysis')

# 分析文本情感
result = classifier("I love using Hugging Face's transformers library!")

print(result)
```

##### 問答系統

```python
from transformers import pipeline

# 使用 BERT 進行問答
qa = pipeline('question-answering', model='distilbert-base-uncased-distilled-squad')

# 提出問題
context = "Hugging Face Inc. is a company based in New York City."
question = "Where is Hugging Face based?"
result = qa(question=question, context=context)

print(result)
```

##### 文本摘要

```python
from transformers import pipeline

# 使用 BART 進行文本摘要
summarizer = pipeline('summarization')

# 提供需要摘要的文本
text = """
Hugging Face is creating a new way for AI technology to be more accessible. 
They provide state-of-the-art machine learning models that anyone can use.
"""
summary = summarizer(text, max_length=50, min_length=25, do_sample=False)

print(summary)
```

#### 5. 自定義模型

除了使用預訓練模型，您還可以自定義和微調模型。以下是一個簡單的範例，展示如何微調一個 BERT 模型來進行文本分類：

```python
from transformers import BertForSequenceClassification, Trainer, TrainingArguments
from datasets import load_dataset

# 載入數據集
dataset = load_dataset('glue', 'mrpc')

# 載入預訓練的 BERT 模型
model = BertForSequenceClassification.from_pretrained('bert-base-uncased')

# 設定訓練參數
training_args = TrainingArguments(
    output_dir='./results',          # 儲存結果的目錄
    num_train_epochs=3,              # 訓練輪數
    per_device_train_batch_size=8,   # 每個設備的訓練批次大小
    per_device_eval_batch_size=16,   # 每個設備的評估批次大小
    warmup_steps=500,                # 學習率預熱步數
    weight_decay=0.01,               # 權重衰減
    logging_dir='./logs',            # 日誌目錄
)

# 使用 Trainer 進行訓練
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=dataset['train'],
    eval_dataset=dataset['validation']
)

trainer.train()
```

在這個範例中，我們使用 Hugging Face 的 `Trainer` 類來簡化模型的訓練過程。`TrainingArguments` 允許我們配置訓練過程的各種參數。

#### 6. Hugging Face Model Hub

Hugging Face Model Hub 是一個模型存儲庫，用戶可以在這裡上傳、分享和下載模型。要使用 Model Hub，首先需要創建一個 Hugging Face 賬號並獲取 API token。

##### 上傳模型到 Model Hub

```python
from transformers import BertForSequenceClassification, Trainer, TrainingArguments, AutoModelForSequenceClassification

# 假設我們已經訓練了一個模型
model = BertForSequenceClassification.from_pretrained('./results')

# 保存模型
model.save_pretrained('./my-model')
tokenizer.save_pretrained('./my-model')

# 上傳到 Model Hub
model.push_to_hub('my-bert-model')
tokenizer.push_to_hub('my-bert-model')
```

在這個範例中，我們首先保存了訓練好的模型，然後使用 `push_to_hub` 方法將模型上傳到 Hugging Face Model Hub。

#### 7. 總結

Hugging Face 提供了一個強大且靈活的平台，讓開發者能夠輕鬆地使用和微調各種大型語言模型。無論是進行簡單的文本生成還是構建複雜的 NLP 應用，Hugging Face 的工具和資源都能夠滿足您的需求。希望這篇入門教學能幫助您快速上手 Hugging Face 平台，開發出強大的 AI 應用。

# Doc
1. [Hugging Face – The AI community building the future.](https://huggingface.co/)
2. [全端 LLM 應用開發-Day07-Hugging Face 介紹](https://ithelp.ithome.com.tw/articles/10325132)
3. [什麼是 Hugging Face？開源 AI 平台介紹 4 點加速 AI 開發](https://tw.alphacamp.co/blog/hugging-face)