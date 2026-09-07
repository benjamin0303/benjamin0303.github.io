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

<figure class="profile-flip">
  <button class="profile-flip-button" type="button" aria-label="Show pumpkin photo" aria-pressed="false" aria-describedby="profile-flip-hint">
    <span class="profile-flip-inner">
      <img class="profile-front" src="{{ '/assets/photos/jaewan.jpeg' | relative_url }}" alt="Jaewan Park carving a pumpkin" width="220" height="220" fetchpriority="high">
      <img class="profile-back" src="{{ '/assets/photos/pumpkin.jpeg' | relative_url }}" alt="A glowing pumpkin carved with a smiling ghost" width="220" height="220" aria-hidden="true" hidden>
    </span>
  </button>
  <figcaption id="profile-flip-hint">Click or tap to see 🎃</figcaption>
</figure>

<div class="academic-intro" markdown="1">

Hello and welcome! :wave:
{: .greeting }

I do research in AI, with a current focus on **agentic systems for science**.
{: .research-lead }

My experience spans domain-specific foundation models, generative models, and neural operators.

</div>

<nav class="contact-links" aria-label="Contact and academic profiles">
  <a class="email-link" href="mailto:{{ site.data.socials.email }}"><i class="fa-solid fa-envelope" aria-hidden="true"></i> Email</a>
  <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}"><i class="ai ai-google-scholar" aria-hidden="true"></i> Google Scholar</a>
  <a href="https://github.com/{{ site.data.socials.github_username }}"><i class="fa-brands fa-github" aria-hidden="true"></i> GitHub</a>
  <a href="https://www.linkedin.com/in/{{ site.data.socials.linkedin_username }}"><i class="fa-brands fa-linkedin" aria-hidden="true"></i> LinkedIn</a>
  <a href="{{ site.data.socials.cv_pdf | relative_url }}" target="_blank" rel="noopener noreferrer" aria-label="CV (PDF, opens in a new tab)"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> CV</a>
</nav>

<section class="research-areas" aria-labelledby="research-heading">
  <h2 id="research-heading">Research experience</h2>
  <ul>
    <li>Domain-specific<br> foundation models</li>
    <li>Generative<br> models</li>
    <li>Neural<br> operators</li>
  </ul>
</section>

<script src="{{ '/assets/js/profile-flip.js' | relative_url | bust_file_cache }}" defer></script>
