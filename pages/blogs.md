---
layout: bloglist
title: Blogs
permalink: /news
---
# Blogs
<div class="postlist">
  {% for post in site.posts %}
   
   <a style="text-decoration: none;" href="{{ post.url }}"><h3>- {{ post.title }} </h3></a>
  {% endfor %}
</div>