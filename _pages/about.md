---
layout: about
title: About
permalink: /
subtitle: PhD candidate · University of Illinois Urbana-Champaign
nav: false

selected_papers: false
social: false

announcements:
  enabled: false

latest_posts:
  enabled: false
---

<figure class="profile-flip kx-profile">
  <button class="profile-flip-button" type="button" aria-label="Show pumpkin photo" aria-pressed="false" aria-describedby="profile-flip-hint">
    <span class="profile-flip-inner">
      <img class="profile-front" src="{{ '/assets/photos/jaewan.jpeg' | relative_url }}" alt="Jaewan Park photo" width="320" height="320" fetchpriority="high">
      <img class="profile-back" src="{{ '/assets/photos/pumpkin.jpeg' | relative_url }}" alt="A pumpkin portrait" width="320" height="320" aria-hidden="true" hidden>
    </span>
  </button>
  <figcaption id="profile-flip-hint">Click or tap to see 🎃</figcaption>
</figure>

<article class="kx-about">
  <header class="kx-hero">
    <p class="kx-kicker">Hello and Welcome 🖐️ I am Jaewan,</p>
    <p class="kx-subtitle">PhD candidate at the University of Illinois Urbana-Champaign, fortunate to be advised by 
      <a href="https://sbahauddin.tech/" target="_blank" rel="noopener noreferrer">Prof. Syed Bahauddin Alam</a>, 
      <a href="https://bioengineering.illinois.edu/people/ijasiuk" target="_blank" rel="noopener noreferrer">Prof. Iwona Jasiuk, 
      <a href="https://www.ncsa.illinois.edu/directory/profile/koric/" target="_blank" rel="noopener noreferrer">Prof. Seid Koric,
      and affiliated with National Center for Supercomputing Applications.
    </p>
  </header>

  <p class="kx-bio">
    I am interested in building AI systems that support scientific discovery.
    My focus is on <strong>agentic systems for science</strong>, with an emphasis on reliable hypothesis generation and domain-adapted modeling.
  </p>

  <nav class="contact-links kx-contacts" aria-label="Contact and academic profiles">
    <a class="email-link" href="mailto:{{ site.data.socials.email }}"><i class="fa-solid fa-envelope" aria-hidden="true"></i> Email</a>
    <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}"><i class="ai ai-google-scholar" aria-hidden="true"></i> Google Scholar</a>
    <a href="https://github.com/{{ site.data.socials.github_username }}"><i class="fa-brands fa-github" aria-hidden="true"></i> GitHub</a>
    <a href="https://www.linkedin.com/in/{{ site.data.socials.linkedin_username }}"><i class="fa-brands fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
    <a href="{{ site.data.socials.cv_pdf | relative_url }}" target="_blank" rel="noopener noreferrer" aria-label="CV (PDF, opens in a new tab)"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> CV</a>
  </nav>

  <section class="kx-section">
    <h2>Questions I’m exploring</h2>
    <ul>
      <li>How can agentic systems run robust scientific experiments and planning loops?</li>
      <li>How do we make foundation models for science more reliable in narrow domains?</li>
      <li>How can uncertainty and interpretability be embedded in AI-assisted discovery?</li>
    </ul>
  </section>

  <section class="kx-section">
    <h2>What’s new</h2>
    <ul class="kx-timeline">
      <li><span class="kx-date">2026</span> Personal website refreshed into a cleaner single-column research-first layout.</li>
      <li><span class="kx-date">2026</span> Added split-view profile photo interaction.</li>
      <li><span class="kx-date">2026</span> Launched new publication + blog + CV navigation.</li>
    </ul>
  </section>
</article>

<script src="{{ '/assets/js/profile-flip.js' | relative_url | bust_file_cache }}" defer></script>
