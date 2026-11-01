---
layout: page
title: Projects
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

<script>
  (function () {
    function setupProjectVideoPreviews() {
      const videos = document.querySelectorAll("video.project-card-video");
      if (!videos.length) return;
      const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        videos.forEach((video) => {
          video.pause();
          video.removeAttribute("autoplay");
        });
        return;
      }
      if (!("IntersectionObserver" in window)) {
        videos.forEach((video) => video.play().catch(() => {}));
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }),
        { threshold: 0.15 }
      );
      videos.forEach((video) => observer.observe(video));
    }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", setupProjectVideoPreviews);
    } else {
      setupProjectVideoPreviews();
    }
  })();
</script>
