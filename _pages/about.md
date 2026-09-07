---
layout: about
title: About
permalink: /
subtitle: PhD candidate · UIUC
nav: false

selected_papers: false
social: false

announcements:
  enabled: false

latest_posts:
  enabled: false
---

<div class="kx-shell">
  <aside class="kx-rail">
    <h1 class="kx-name">Jaewan Park</h1>
    <nav class="kx-rail-nav" aria-label="Site sections">
      <a href="{{ '/publications/' | relative_url }}">Research</a>
      <a href="{{ '/blog/' | relative_url }}">Blog</a>
      <a href="{{ '/photo/' | relative_url }}">Photo</a>
      <a href="{{ '/cv/' | relative_url }}">CV</a>
    </nav>
  </aside>

  <figure class="profile-flip kx-profile">
    <button class="profile-flip-button" type="button" aria-label="Show pumpkin photo" aria-pressed="false" aria-describedby="profile-flip-hint">
      <span class="profile-flip-inner">
        <img class="profile-front" src="{{ '/assets/photos/jaewan.jpeg' | relative_url }}" alt="Jaewan Park photo" width="320" height="320" fetchpriority="high">
        <img class="profile-back" src="{{ '/assets/photos/pumpkin.jpeg' | relative_url }}" alt="A pumpkin portrait" width="320" height="320" aria-hidden="true" hidden>
      </span>
    </button>
    <figcaption id="profile-flip-hint">Click or tap to see 🎃</figcaption>

    <nav class="kx-contacts" aria-label="Scholarly and professional profiles">
      <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}">Google Scholar</a>
      <span class="kx-sep" aria-hidden="true">/</span>
      <a href="https://github.com/{{ site.data.socials.github_username }}">GitHub</a>
      <span class="kx-sep" aria-hidden="true">/</span>
      <a href="https://www.linkedin.com/in/{{ site.data.socials.linkedin_username }}">LinkedIn</a>
      <span class="kx-sep" aria-hidden="true">/</span>
      <a href="mailto:{{ site.data.socials.email }}">E-mail</a>
    </nav>

  </figure>

  <div class="kx-intro">
    <p>
      Hi! I am Jaewan 🖐️ I am a PhD candidate at UIUC, fortunate to be advised by
      <a href="https://grainger.illinois.edu/about/directory/faculty/alams" target="_blank" rel="noopener noreferrer">Prof. Syed Bahauddin Alam</a>,
      <a href="https://grainger.illinois.edu/about/directory/faculty/ijasiuk" target="_blank" rel="noopener noreferrer">Prof. Iwona Jasiuk</a>, and
      <a href="https://grainger.illinois.edu/about/directory/faculty/koric" target="_blank" rel="noopener noreferrer">Prof. Seid Koric</a>. I am affiliated with the National Center for Supercomputing Applications (NCSA).
    </p>
    <p>
      I build general-purpose AI for the physical world — mechanics (solid, fluid, multiphysics), energy systems, and healthcare.
    </p>
    <!-- Questions to answer, once you settle on the wording:
    <p>Questions I am excited about:</p>
    <ul>
      <li>Can one model learn the structure shared by stress, flow, and transport — instead of one network per PDE?</li>
      <li>When a model predicts a physical field, when should it say <em>I don't know</em>?</li>
      <li>Do these models transfer from simulation to real measurements — sparse sensors, noisy images, messy data?</li>
    </ul>
    -->
  </div>

  <div class="kx-body">
    <section class="kx-section">
      <h2>What's new:</h2>
      <ul class="kx-timeline">
        <li><span class="kx-date">2026.09</span>Accepted to SC26 conference, AI4S workshop</li>
        <li><span class="kx-date">2025.09</span>We won the HPCWire award in Editor's Choice -- Best Use of HPC in Energy 🥳🥳</li>
      </ul>
    </section>
  </div>
</div>

<script src="{{ '/assets/js/profile-flip.js' | relative_url | bust_file_cache }}" defer></script>
