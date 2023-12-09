---
layout: default
title: Books Read
permalink: /books/read/
---
<div style="margin: 30px; text-align: center;">
<h2>Booklist</h2>

<a href="/books" style="text-decoration: none">&larr; Back</a>
</div>
<div id="centerpara">
<ol>
{% for book in site.data.books %}

<li>{{ book.author }} - {{ book.title }}</li>

{% endfor %}
</ol>
</div>
