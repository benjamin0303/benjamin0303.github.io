---
layout: page
permalink: /blog/
title: Blog
description: Notes on research and scientific machine learning.
nav: true
nav_order: 3
---

<div class="kx-shell kx-page">
  {% include kx-rail.liquid %}

  <div class="kx-col">
    <h1 class="kx-page-title">Blog</h1>
    <p class="kx-page-desc">Notes on research and scientific machine learning.</p>

    {% if site.posts.size > 0 %}
      <ol class="kx-pubs">
        {% for post in site.posts %}
          <li class="kx-pub">
            <p class="kx-pub-title">
              <span class="kx-venue">{{ post.date | date: '%Y.%m.%d' }}</span>
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </p>
            {% if post.description %}<p class="kx-pub-authors">{{ post.description }}</p>{% endif %}
          </li>
        {% endfor %}
      </ol>
    {% else %}
      <p class="kx-page-desc">No posts yet. Add one at <code>_posts/YYYY-MM-DD-title.md</code> and it shows up here.</p>
    {% endif %}

  </div>
</div>
