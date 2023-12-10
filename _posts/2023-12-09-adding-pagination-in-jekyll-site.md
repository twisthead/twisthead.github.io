---
layout: blogpost
title: "Easiest way to add pagination in Jekyll"
date: 2023-12-09 10:37 AM 
author: Nazm Us Saqib
comments: true
render-with-liquid: false
---
Recently I was thinking of adding pagination to my site, and it turned out to be a nighmare. <!--more--> I had to google so many things and waste so much time. After spending considerable amount of time researching, I got it working finally. 

The pagination in Jekyll is difficult and it is incomprehensively documented on Jekyll Docs, which makes it pretty difficult to add pagination to the site. Here I am aiming to sum up numerous tutorials which helped me add pagination to my site. 

Follow along and do exactly what's stated and you'll have the pagination.

**1. Install required gems**

You need to install the plugin `"jekyll-pagination"`.

**Edit "config.yml" & "gemfile" file**

Add the follwing lines in config.yml

{% highlight yaml %}
plugins:
    - jekyll-paginate

paginate: 5
paginate-path: "/blog/page:num/"
{% endhighlight %}

It should look something like this

> ![code](/assets/ss-for-blog/plugin.png)

Add the following line to "gemfile" located in the root directory.

{% highlight yaml %}
# place it just below the line "group :jekyll_plugins do"

gem "jekyll-paginate"
{% endhighlight %}

It should look something like this.

> ![gemfile](/assets/ss-for-blog/gemfile.png)

- Open a terminal, navigate to your directory and run the command. 

{% highlight bash %}
# run in terminal

bundle install
{% endhighlight %}

Now you are done with half of the work. 

**2. Making a page where you list your blogs.**
    
- Make a folder called "blog" in project's root directory.
- Inside the folder make a file called "index.html".

**3. Put the below code to generate list of posts with pagination.**

{% highlight liquid %}
{% raw %}
---
layout: default
title: My Blog
---

<!-- This loops through the paginated posts -->
{% for post in paginator.posts %}
  <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
  <p class="author">
    <span class="date">{{ post.date }}</span>
  </p>
  <div class="content">
    {{ post.content }}
  </div>
{% endfor %}

<!-- Pagination links -->
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="previous">
      Previous
    </a>
  {% else %}
    <span class="previous">Previous</span>
  {% endif %}
  <span class="page_number ">
    Page: {{ paginator.page }} of {{ paginator.total_pages }}
  </span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="next">Next</a>
  {% else %}
    <span class="next ">Next</span>
  {% endif %}
</div>
{% endraw %}
{% endhighlight %}

**Now you have your paginated post.**

- Not successfull?
    1. Make sure there's no typo in any of the  entries.
    2. Make sure you executed every command.
    3. Comment your issue. 
