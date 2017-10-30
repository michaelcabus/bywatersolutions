---
layout: page
title: Koha Education
permalink: /education/
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/style.css">
<script src="https://use.typekit.net/sco1mxn.js"></script>
<script>try{Typekit.load({ async: true });}catch(e){}</script>


<div class="home">

  <h1 class="page-heading">Recent Posts</h1>



  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
        <span class="post-meta">{{ post.date | date: date_format }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | relative_url }}">via RSS</a></p>

</div>
