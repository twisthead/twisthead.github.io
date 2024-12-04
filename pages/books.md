---
layout: page
title: Books and Readings
permalink: /books
---
<h1 style="text-align: center;">Books</h1>

In this section I will list what books I am reading or have read earlier and books which have massive impact on me. Enjoy!

**// Books I think everybody should read! //**

_**These are in no particular order and are specifically chosen on my personal taste._

1.  Crime and Punishment by Fyodor Dostoyevsky
2.  One Hundred Years of Solitude by Gabriel García Marquez
3.  Hamlet by William Shakespeare
4.  Thousand Splendid Suns by Khaled Hosseini
5.  The Mayor of Casterbridge by Thomas Hardy


**// My Latest Reads//**
<ol>
{% for book in site.data.books limit:5 %}

<li>{{ book.author }} - {{ book.title }}</li>

{% endfor %}
</ol>

**// Books I have read //**

[**Complete List**]({% link pages/books-read.md %})  

---

You can see my [GoodReads profile](https://www.goodreads.com/user/show/100734663-nazm-us-saqib).
