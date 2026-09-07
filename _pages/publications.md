---
layout: page
permalink: /publications/
title: publications
description: Research publications.
nav: true
nav_order: 2
---

{% include bib_search.liquid %}

<div class="publications-list">
  <p class="publications-intro">
    Research articles, preprints, and conference papers.
    Add BibTeX entries in <code>_bibliography/papers.bib</code> to populate this page.
  </p>

{% bibliography %}

</div>
