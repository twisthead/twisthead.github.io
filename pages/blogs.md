---
layout: bloglist
title: Blogs
permalink: /news
---
# Blogs
<div class="postlist">
  {% for post in site.posts %}
   
   <a style="text-decoration: none;" href="{{ post.url }}"><h2>- {{ post.title }} </h2></a>
   {{ post.excerpt }}
  {% endfor %}
</div>