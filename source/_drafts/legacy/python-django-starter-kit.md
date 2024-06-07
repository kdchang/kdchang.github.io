---
title: Python Django 快速入門教學：打造食譜分享社群網站
date: 2016-06-11 22:00:00
tags: Python, Django, MVC, Web, MTV, Web Backend, Web Framework, 教學, Flask, 框架 
author: kdchang
---

# 什麼是 Python？
[Python](https://zh.wikipedia.org/wiki/Python) 是一種物件導向、直譯式的跨平台電腦程式語言，它包含了一組功能完備的標準庫和豐富套件生態系，可以輕鬆完成很多常見的任務（例如：檔案管理、自然語言處理、網路爬蟲、網站開發、機器學習和遊戲開發等工作），因為它可以很輕易整合其他程式語言（例如：C/C++），所以又稱為膠水語言。它的語法簡單，與其它大多數程式設計語言使用大括弧不一樣，它使用縮進來定義語句塊。由於具備簡潔易學等特性，許多開發者推薦 Python 為初學者第一個學習的程式語言。由於版本更迭，我們接下來討論的主要是以 Python3 為主，若電腦沒有安裝的話，你可以在在[Anaconda 官方網站下載](https://www.continuum.io/downloads)對應版本和作業系統，Anaconda 包含了許多重要的資料分析的套件。

# 什麼是 Django？
[Django](https://www.djangoproject.com/) 是一個使用 Python 開發 Web 的應用程式框架（Frameowork），相對於 [Flask](http://flask.pocoo.org/) 這種 micro-framework，Django 屬於一種大而全的 MVC 框架（實際上是 MTV），讓開發 Web 應用程式可以快速打造網路應用程式，而不用重複造輪子。簡單來說像 Django 這類的 Web Frameowork，就是幫你把大部分的程式架構都建構好，等你填你需要的應用邏輯進去。Framework 會負責在合適的時機呼叫你寫的程式，而不是讓你自行呼叫合適的函式（function），以搭建程式本身。
 
# 環境建置與設定

1. 安裝 Python 開發環境，使用 [Anaconda 官方網站下載](https://www.continuum.io/downloads) Python3 版本

```
$ conda create -n pyvenv35 python=3.5 anaconda
```

```
$ source activate pyvenv35
```

```
(pyvenv35)$~/
```

```
$ source deactivate
```

```
$ conda install django
```

# 開始 Django 專案

1. 初始化專案

	```shell
	$ django-admin.py startproject opencook
	$ cd opencook
	$ python manage.py migrate

	Operations to perform:
	  Apply all migrations: admin, auth, contenttypes, sessions
	Running migrations:
	  Applying contenttypes.0001_initial... OK
	  Applying auth.0001_initial... OK
	  Applying admin.0001_initial... OK
	  Applying admin.0002_logentry_remove_auto_add... OK
	  Applying contenttypes.0002_remove_content_type_name... OK
	  Applying auth.0002_alter_permission_name_max_length... OK
	  Applying auth.0003_alter_user_email_max_length... OK
	  Applying auth.0004_alter_user_username_opts... OK
	  Applying auth.0005_alter_user_last_login_null... OK
	  Applying auth.0006_require_contenttypes_0002... OK
	  Applying auth.0007_alter_validators_add_error_messages... OK
	  Applying auth.0008_alter_user_username_max_length... OK
	  Applying sessions.0001_initial... OK
	```

	資料夾結構：

	```
	opencook/
	├── manage.py
	└── mysite
	    ├── __init__.py
	    ├── settings.py
	    ├── urls.py
	    └── wsgi.py
	```

	```
	$ python manage.py runserver

	Starting development server at http://127.0.0.1:8000/
	Quit the server with CONTROL-C.
	```

	![Python Django 快速入門教學：打造食譜分享社群網站 ](hello-world.png)

2. Django 的 Management commands

	- django-admin.py startproject <project_name>：建立初始化 Django 專案
	- python manage.py -h <command_name>：查看 Django commands 的使用方法
	- python manage.py runserver：啟動開發用伺服器
	- python manage.py startapp <app_name>：新增 Django app

3. 建立 Django application（app）
	
	```
	python manage.py startapp recipes
	```

4. 將新增的 Django app 加入設定檔

	```python
	# mysite/settings.py

	...

	# Application definition

	INSTALLED_APPS = (
	    'django.contrib.admin',
	    'django.contrib.auth',
	    'django.contrib.contenttypes',
	    'django.contrib.sessions',
	    'django.contrib.messages',
	    'django.contrib.staticfiles',
	    'recipes',
	)
	```

# 是 MVC？ 還是 MTV？
現在許多的 Web 框架多半標榜是 MVC 框架，由 Model 負責資料層，View 負責視覺，Controller 負責商業邏輯的部份。雖然 Django 也是類似於 MVC 大而全的框架，但嚴格來說我們會把 Django 視為 MTV，也就是 Model、View、Template，在 Django 中 View 類似於 Controller 功能，而 Template 則處理 View 視覺部分。

# Views and URLconfs
在 Django 中會透過正規表達式來處理 URL Match Routing 的部份，並透過 Views 載入對應的處理函數。

# Templates
在 Django 中 Templates 類似於 MVC 中的 View，主要負責使用者介面。

# Models
與大部分 MVC 框架差不多，在 Django 中 Model 主要是處理資料層的資料。

# Admin
Django 有一個比較方便的功能就是內建的 Admin，可以讓你簡單就建立一個可以管理後台的系統，在一般情況下通常堪用了。

# Django ORM
ORM 的全名是 Object-Relational Mapping，係指將關聯式資料庫映射至物件導向的資料抽象化技術，可以讓你比較方便的去操作資料庫，當然如果是複雜關聯式資料庫操作還是要使用到 SQL 語法。

# 表單互動

1. 用 HTML 刻個 form 表單
2. 處理 HTTP POST request
3. 驗證表單欄位內容是否正確
4. 把確認過的資料存進 database 之中

```python
def signup(request):
    if request.user.is_authenticated(): 
        return HttpResponseRedirect('/')

    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            return HttpResponseRedirect('/accounts/login')

        return render(request, 'accounts/signup.html', locals())
    else:
    	form = UserCreationForm()
    	return render(request, 'accounts/signup.html', locals())
```

```html
{% extends 'extends/base.html' %}

{% block content %}
<br>
<br>
<br>
<br>
<div class="container">
	<h1>註冊新帳號</h1>
	<form action="/contact/" method="post">
	    {% for field in form %}
	        <div class="fieldWrapper">
	            {{ field.errors }}
	            {{ field.label_tag }} {{ field }}
	        </div>
	    {% endfor %}
	    {% csrf_token %}
	    <button class="btn btn-primary" type="submit">註冊</button>
	</form>
</div>
{% endblock content %}
```

# 進階 Templates / Template Filters 使用

# 動態 URL

# 成果展示

# Deploy 部屬到 Digital Ocean

1. adduser
2. chmod

安裝相關套件：

```
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get install python3-pip python3-dev libpq-dev postgresql postgresql-contrib nginx gunicorn
```

設定 postgresql：

```
$ sudo su - postgres
$ psql
$ CREATE DATABASE myproject;
$ CREATE USER myprojectuser WITH PASSWORD 'password';
$ GRANT ALL PRIVILEGES ON DATABASE myproject TO myprojectuser;
$ \q
$ exit
```

設定資料庫：

```
CREATE DATABASE myproject;

CREATE USER myprojectuser WITH PASSWORD 'password';

ALTER ROLE techbridge SET client_encoding TO 'utf8';
ALTER ROLE techbridge SET default_transaction_isolation TO 'read committed';
ALTER ROLE techbridge SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE myprojectuser TO myproject;

```

1. [How to Deploy a Django Application on DigitalOcean](https://www.codementor.io/python/tutorial/how-to-deploy-a-django-application-on-digitalocean) 
2. [How To Use the Django One-Click Install Image](https://www.digitalocean.com/community/tutorials/how-to-use-the-django-one-click-install-image)
3. [Django Tutorials](https://www.digitalocean.com/community/tags/django?type=tutorials)
4. [How To Set Up Django with Postgres, Nginx, and Gunicorn on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-16-04)
5. [How To Install the Django Web Framework on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-the-django-web-framework-on-ubuntu-16-04)
6. [How To Deploy a Local Django App to a VPS](https://www.digitalocean.com/community/tutorials/how-to-deploy-a-local-django-app-to-a-vps)
7. [Initial Server Setup with Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-16-04)
8. [[Django|Python] 在Ubuntu上部署Django網站至nginx (2) – 透過 Gunicorn 與nginx](http://koko.ntex.tw/wordpress/djangopython-deploy-django-on-ubuntu-install-gunicorn-nginx/)
9. [Django的部署:Nginx+Gunicorn+virtualenv+supervisor+PostgreSQL](http://www.jianshu.com/p/288ebe5396a0)

# 總結
1. [Securely Manage Remote PostgreSQL Servers with pgAdmin on Mac OS X](https://www.linode.com/docs/databases/postgresql/securely-manage-remote-postgresql-servers-with-pgadmin-on-macos-x)

# 延伸閱讀
1. [Django 官網](https://www.djangoproject.com/)
2. [Django Girls Taipei](https://djangogirls.org/taipei/)
3. [Django Girls 學習指南](https://www.gitbook.com/book/djangogirlstaipei/django-girls-taipei-tutorial/details)
4. [良葛葛 Python Gossip](http://openhome.cc/Gossip/Python/)
5. [Django 1.8.x staticfile ，静态文件配置](http://blog.mymusise.com/?p=170)
6. [Django Girls Tutorial](https://www.gitbook.com/book/djangogirls/djangogirls-tutorial/details)
7. [在django項目中加入像bootstrap這样的css，js等靜態文件](http://fanli7.net/a/bianchengyuyan/C__/20140216/470245.html)
8. [What is the naming convention in Python for variable and function names?](http://stackoverflow.com/questions/159720/what-is-the-naming-convention-in-python-for-variable-and-function-names)
9. [how to use the href attribute in django templates](http://stackoverflow.com/questions/17200389/how-to-use-the-href-attribute-in-django-templates)
10. [django rest framework 小小心得](http://sillygod-blog.logdown.com/posts/663369)
11. [Beginner's Guide to the Django Rest Framework](https://code.tutsplus.com/tutorials/beginners-guide-to-the-django-rest-framework--cms-19786)
12. [How To Use PostgreSQL with your Django Application on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-django-application-on-ubuntu-14-04)
13. [使用Django內建的帳號管理系統](https://yichen0831.wordpress.com/2013/02/17/%E4%BD%BF%E7%94%A8django%E5%85%A7%E5%BB%BA%E7%9A%84%E5%B8%B3%E8%99%9F%E7%AE%A1%E7%90%86%E7%B3%BB%E7%B5%B1/comment-page-1/)
14. [uranusjr/django-tutorial-for-programmers 教學](https://github.com/uranusjr/django-tutorial-for-programmers)
15. [dokelung/Python-QA](https://github.com/dokelung/Python-QA)
16. [Django筆記(10) - 用戶的登入與登出](http://dokelung-blog.logdown.com/posts/234437-django-notes-10-users-login-and-logout)
17. [Django Tutorial](http://daikeren.github.io/django_tutorial/)
18. [Django Packages](https://djangopackages.org/)
19. [在 Django 中实现用 email 登录](http://guoqiao.me/post/2014/0904-login-by-email-in-django)
20. [Django Tutorial: Making Your Own Template Filters](http://www.pfinn.net/custom-django-filter-tutorial.html)
21. [Django: 'current_tags' is not a valid tag library](http://stackoverflow.com/questions/5493776/django-current-tags-is-not-a-valid-tag-library)
22. [Custom template tags and filters¶](https://docs.djangoproject.com/en/dev/howto/custom-template-tags/#assignment-tags)
23. [how to use custom django templatetag with django template if statement?](http://stackoverflow.com/questions/14767516/how-to-use-custom-django-templatetag-with-django-template-if-statement)
24. [Recommended Django Project Layout](http://www.revsys.com/blog/2014/nov/21/recommended-django-project-layout/)
25. [How to validate Google reCAPTCHA v2 in django](http://stackoverflow.com/questions/29548574/how-to-validate-google-recaptcha-v2-in-django)
26. [django——如何解决500 - Internal server error.](http://hustpawpaw.blog.163.com/blog/static/184228324201210610331329/)

