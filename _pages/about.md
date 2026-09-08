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
  {% include kx-rail.liquid %}

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
      Hello and Welcome 🐳 I am Jaewan, a PhD candidate at UIUC, fortunate to be advised by
      <a href="https://grainger.illinois.edu/about/directory/faculty/alams" target="_blank" rel="noopener noreferrer">Prof. Syed Bahauddin Alam</a>,
      <a href="https://grainger.illinois.edu/about/directory/faculty/ijasiuk" target="_blank" rel="noopener noreferrer">Prof. Iwona Jasiuk</a>, and
      <a href="https://grainger.illinois.edu/about/directory/faculty/koric" target="_blank" rel="noopener noreferrer">Prof. Seid Koric</a>. I am affiliated with the National Center for Supercomputing Applications (NCSA).
    </p>
    <p>
      I work toward general-purpose AI for the physical world, with applications in mechanics, nuclear energy systems, and healthcare.
      My work began with neural operators for multiphysics surrogate modeling. This led me into generative AI for inverse design and
      reconstruction from sparse observations&mdash;and to the broader questions that now drive my research:
    </p>
    <ul class="kx-questions">
      <li>How far can AI agents help scientists and engineers automate everyday tasks in mechanics research?</li>
      <li>How can we build models that generalize across diverse physical systems, and where can they be most useful?</li>
    </ul>
    <p>
      These questions now guide my work on agentic AI and foundation models: I train LLM agents to automate PDE solver coding, and I
      develop modules to improve the long-horizon stability of PDE foundation models.
    </p>
    <p>
      Before Illinois, I did my undergrad in mechanical engineering at POSTECH in South Korea, and spent a summer at Stanford.
    </p>
    <p>
      Outside the lab, I do HIIT and play cyberpunk games &mdash; you can see where this site&rsquo;s dark mode came from.
    </p>
  </div>

  <div class="kx-body">
    <section class="kx-section">
      <h2>Lately:</h2>
      <ul class="kx-timeline">
        <li><span class="kx-date">2026.09</span>Accepted to SC26 conference, AI4S workshop</li>
        <li><span class="kx-date">2025.09</span>We won the HPCWire award in Editor's Choice -- Best Use of HPC in Energy 🥳🥳</li>
      </ul>
    </section>
  </div>
</div>

<script src="{{ '/assets/js/profile-flip.js' | relative_url | bust_file_cache }}" defer></script>
