---
title: "IRC Whois Gallery"
permalink: /
layout: base.njk
---

A collection of `/whois` output themes from classic IRC clients, showcasing the elaborate ASCII art and creative text formatting that was characteristic of IRC customization culture in the late 1990s and early 2000s.

<div class="gallery">
  {% for item in gallery.items %}
  <div class="gallery-item">
    <h3>{{ item.name }}</h3>
    <img src="{{ '/assets/images/' + item.filename | url }}" alt="{{ item.name }} whois theme from {{ item.client }} + {{ item.addon }}">
    <p><strong>{{ item.client }} + {{ item.addon }}</strong></p>
  </div>
  {% endfor %}
</div>