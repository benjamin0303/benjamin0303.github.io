---
layout: page
permalink: /photo/
title: Photo
description: Photos from outside the lab.
nav: true
nav_order: 4
---

{% assign photos = site.static_files | where_exp: "file", "file.path contains '/assets/photos/'" %}

<div class="kx-gallery">
  {%- for file in photos -%}
    {%- unless file.name == "jaewan.jpeg" -%}
      {%- if file.extname == ".jpg" or file.extname == ".jpeg" or file.extname == ".png" -%}
        <figure><img src="{{ file.path | relative_url }}" alt="" loading="lazy"></figure>
      {%- endif -%}
    {%- endunless -%}
  {%- endfor -%}
</div>

Drop more images into `assets/photos/` and they show up here.
