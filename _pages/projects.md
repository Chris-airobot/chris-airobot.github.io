---
layout: page
title: research
permalink: /projects/
description: Robotic manipulation, learning-based planning, and real-world deployment.
nav: true
nav_order: 2
display_categories: [research, industry]
horizontal: true
---

<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" %}
<div class="row">
  {% for project in sorted_projects %}
  <div class="col-12 mb-3">
    {% include projects_horizontal.liquid %}
  </div>
  {% endfor %}
</div>
</div>
