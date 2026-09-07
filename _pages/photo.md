---
layout: page
permalink: /photo/
title: Photo
description: Photos from outside the lab.
nav: true
nav_order: 4
---

{% assign photos = site.static_files | where_exp: "file", "file.path contains '/assets/photos/'" %}

<div class="kx-shell kx-page">
  {% include kx-rail.liquid %}

  <div class="kx-col">
    <h1 class="kx-page-title">Photo</h1>
    <p class="kx-page-desc">Drop images into <code>assets/photos/</code> and they show up here.</p>

    <div class="kx-gallery">
      {%- for file in photos -%}
        {%- unless file.name == "jaewan.jpeg" -%}
          {%- if file.extname == ".jpg" or file.extname == ".jpeg" or file.extname == ".png" -%}
            <figure><img src="{{ file.path | relative_url }}" alt="" loading="lazy"></figure>
          {%- endif -%}
        {%- endunless -%}
      {%- endfor -%}
    </div>

  </div>
</div>
