---
layout: page
title: In-Hand Pivoting with Vision, Force and Touch
description: IROS 2023 · Multimodal feedback control for in-hand object pivoting on a physical UR5 and Robotiq gripper.
img: assets/images/monash-pivoting-poster.jpg
preview_animation: assets/images/monash-pivoting-animated.webp
importance: 5
category: research
permalink: /projects/in-hand-pivoting/
related_publications: true
---

<div class="research-case">
  <p class="research-kicker">Monash University · Research Assistant · IROS 2023 · Second Author</p>
  <p class="research-lead">Rotating a grasped object does not always require lifting it off the table. We studied <strong>in-hand pivoting</strong>: deliberately allowing the object to rotate inside a gripper while controlling the contact forces that keep it supported and prevent unintended slip.</p>

  <div class="research-links">
    <a href="https://arxiv.org/abs/2303.10865" target="_blank" rel="noopener noreferrer">Read paper (arXiv) ↗</a>
    <a href="https://doi.org/10.1109/IROS55552.2023.10341505" target="_blank" rel="noopener noreferrer">Published IROS paper (DOI) ↗</a>
    <a href="#pivoting-video">Watch real-robot demonstration ↓</a>
  </div>
  <p class="research-authors">Shiyu Xu, <strong>Tianyuan Liu</strong>, Michael Wong, Dana Kulić, Akansel Cosgun</p>

  <div class="research-facts">
    <div><small>Robot</small><strong>UR5 + Robotiq gripper</strong></div>
    <div><small>Sensing</small><strong>Vision · Wrist force / torque · Touch</strong></div>
    <div><small>Control</small><strong>Two simultaneous feedback loops</strong></div>
  </div>

  <h2>The manipulation challenge</h2>
  <p>The goal is to rotate a cuboid around the gripper contact region while it remains supported by the surface. Too much grip force stops the desired rotational slip; too little grip force permits uncontrolled translation. Simultaneously, the arm must maintain a suitable force against the support surface.</p>

  <h2>How the closed-loop system works</h2>
  <div class="research-steps">
    <section><h3>1. Estimate motion</h3><p>Visual pose tracking estimates object orientation and supports feedback as the pivot progresses.</p></section>
    <section><h3>2. Regulate support contact</h3><p>The robot end-effector is adjusted using wrist force feedback to track a desired force profile.</p></section>
    <section><h3>3. Control gripper slip</h3><p>Tactile sensing adjusts gripper width: permit rotational slip but tighten the grip if unwanted translational slip is detected.</p></section>
  </div>

  <h2>Physical robot experiments</h2>
  <div class="research-metrics">
    <div><span class="metric-value">90°</span><span class="metric-label">Target cuboid rotation demonstrated in physical UR5 pivoting experiments.</span></div>
    <div><span class="metric-value">Vision + Force + Touch</span><span class="metric-label">Combined feedback enabled controlled pivoting without unwanted object lift or translation in the reported setup.</span></div>
  </div>
  <p>The published experiments compare multimodal pivoting with reduced-sensing alternatives and pick-and-place manipulation, reporting improved energy efficiency in the tested task.</p>

  <h2 id="pivoting-video">Real-robot demonstration</h2>
  <figure class="research-demo">
    <video controls playsinline preload="metadata" poster="{{ '/assets/images/monash-pivoting-poster.jpg' | relative_url }}" aria-label="UR5 and Robotiq in-hand object pivoting using vision, force and tactile feedback">
      <source src="{{ '/assets/videos/monash-pivoting-demo.mp4' | relative_url }}" type="video/mp4">
      <a href="{{ '/assets/videos/monash-pivoting-demo.mp4' | relative_url }}">Watch the in-hand pivoting demo</a>
    </video>
    <figcaption>Physical UR5 and Robotiq experiment showing controlled object rotation through contact and gripper-force regulation.</figcaption>
  </figure>

  <div class="research-footnote">
    <p><strong>My role:</strong> As a Monash University research assistant, I co-developed and tested the multimodal, closed-loop robotic pivoting system.</p>
    <p class="research-note">This was a collaborative IROS 2023 project. Results are for supported cuboid pivoting, not arbitrary object reorientation.</p>
  </div>
</div>

{% include research_project_style.liquid %}
