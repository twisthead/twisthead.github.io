---
layout: bloglist
title: Writeups & Blogs
permalink: /writeups
---
<h1 style="text-align:center;">Blogs</h1>
_Here I will post some of my writeups, blogs and news regarding this site and my other projects. Hope you enjoy._
<div class="postlist">
  {% for post in site.posts %}

  {{ post.date | date: "%-d %b %Y" }}<br> <a href="{{ post.url }}"><p class="list">- {{ post.title }} </p></a>
  {% endfor %}
</div>
