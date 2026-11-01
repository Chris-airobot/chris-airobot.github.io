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

<div class="projects portfolio-projects">
{% assign sorted_projects = site.projects | sort: "importance" %}
{% for project in sorted_projects %}
  {% include projects_horizontal.liquid %}
{% endfor %}
</div>

<style>
  /* Scoped portfolio layout: no dependency on Bootstrap's col-md-* classes. */
  .portfolio-projects {
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 100%;
  }
  .portfolio-project-entry {
    width: 100%;
    min-width: 0;
  }
  .portfolio-project-card {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 8px;
  }
  .portfolio-projects .portfolio-project-main {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    width: 100%;
    min-width: 0;
    align-items: stretch;
    color: inherit;
    text-decoration: none !important;
  }
  .portfolio-projects .portfolio-project-main:hover {
    color: inherit;
  }
  .portfolio-projects .portfolio-project-media {
    position: relative;
    width: 100%;
    min-width: 0;
    min-height: 210px;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: #111;
  }
  .portfolio-projects .portfolio-project-visual {
    display: block;
    position: absolute;
    inset: 0;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
  .portfolio-projects .portfolio-project-contain {
    object-fit: contain;
  }
  .portfolio-projects .portfolio-project-copy {
    min-width: 0;
    align-self: center;
    padding: 22px 24px 46px;
  }
  .portfolio-projects .portfolio-project-copy h3 {
    margin: 0 0 12px;
    font-size: clamp(1.15rem, 2.5vw, 1.55rem);
    line-height: 1.22;
  }
  .portfolio-projects .portfolio-project-copy p {
    margin: 0;
    font-size: 0.94rem;
    line-height: 1.55;
  }
  .portfolio-projects .portfolio-project-code {
    position: absolute;
    right: 24px;
    bottom: 16px;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 0.86rem;
    text-decoration: none;
  }
  .portfolio-projects .portfolio-project-placeholder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    padding: 32px;
    background: linear-gradient(135deg, #26313b, #495562);
    color: #f7f7f7;
  }
  .portfolio-projects .portfolio-project-placeholder-label {
    font-size: 0.8rem;
    letter-spacing: 0.13em;
    opacity: 0.8;
  }
  .portfolio-projects .portfolio-project-placeholder-mark {
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 0.04em;
  }
  @media (max-width: 680px) {
    .portfolio-projects {
      gap: 18px;
    }
    .portfolio-projects .portfolio-project-main {
      grid-template-columns: minmax(0, 1fr);
    }
    .portfolio-projects .portfolio-project-media {
      min-height: 0;
    }
    .portfolio-projects .portfolio-project-copy {
      padding: 18px 20px 48px;
    }
    .portfolio-projects .portfolio-project-code {
      right: 20px;
      bottom: 16px;
    }
  }
</style>

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
