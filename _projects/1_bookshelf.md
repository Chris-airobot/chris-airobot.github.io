---
layout: page
title: Book Insertion with Residual Reinforcement Learning
description: Hybrid task-space control and residual PPO for contact-rich, real-world book insertion on xArm7.
img: assets/images/bookshelf-poster.jpg
preview_video: assets/videos/bookshelf-preview.mp4
importance: 2
category: research
permalink: /projects/bookshelf-insertion/
related_publications: true
---

<div class="research-case">

  <p class="research-kicker">PhD Research · Contact-Rich Manipulation · Under Review</p>
  <p class="research-lead">A book can reach the correct shelf opening and still jam when it touches neighbouring books. This work combines a <strong>geometry-guided nominal controller</strong> with a learned <strong>residual PPO policy</strong> to correct small contact errors during the final insertion phase.</p>

  <div class="research-links">
    <a href="https://arxiv.org/abs/2609.19962" target="_blank" rel="noopener noreferrer">Read paper (arXiv) ↗</a>
    <a href="#bookshelf-video">Watch real-robot demonstration ↓</a>
  </div>
  <p class="research-authors">Tianyuan Liu, Rutherford Agbeshi Patamia, Benjamin Champion, Akansel Cosgun, Richard Dazeley</p>

  <div class="research-facts">
    <div><small>Robot</small><strong>xArm7 · Physical insertion trials</strong></div>
    <div><small>Learning</small><strong>Residual PPO · Simulation-to-real</strong></div>
    <div><small>Task</small><strong>Narrow-clearance bookshelf insertion</strong></div>
  </div>

  <h2>Why this problem is difficult</h2>
  <p>Even after a successful grasp and collision-free approach, millimetre-scale position errors and uncertain contact can cause the book to catch on its neighbours, stop short of the target or fail during release. Purely nominal motion follows the intended geometry but cannot always recover from these local interactions.</p>

  <h2>Approach</h2>
  <div class="research-steps">
    <section><h3>1. Structured motion</h3><p>A nominal task-space controller provides the approach, insertion and seating trajectory, preserving known task geometry.</p></section>
    <section><h3>2. Learned contact correction</h3><p>A bounded residual PPO policy supplies local action corrections during insertion and learns when to release the grasped book.</p></section>
    <section><h3>3. Sim-to-real evaluation</h3><p>Train and evaluate the hybrid controller in simulation, then compare it against nominal control on matched physical xArm7 conditions.</p></section>
  </div>

  <h2>Experimental results</h2>
  <div class="research-metrics">
    <div><span class="metric-value">26.7% → 63.3%</span><span class="metric-label">Physical xArm7 insertion success: nominal control vs residual RL, across 60 trials in 30 matched conditions.</span></div>
    <div><span class="metric-value">37.89% → 98.50%</span><span class="metric-label">Deployment-matched simulation success: nominal control vs final residual policy, over fixed evaluation conditions.</span></div>
  </div>
  <p class="research-note">Simulation and physical results are reported separately because the physical setup includes sensing, contact and execution variability. This work addresses the <strong>final insertion stage</strong>, not an end-to-end autonomous bookshelf manipulation pipeline.</p>

  <h2 id="bookshelf-video">Real-robot demonstration</h2>
  <figure class="research-demo">
    <video controls playsinline preload="metadata" poster="{{ '/assets/images/bookshelf-poster.jpg' | relative_url }}" aria-label="Residual reinforcement learning for book insertion, simulation and physical xArm7 trials">
      <source src="{{ '/assets/videos/bookshelf.mp4' | relative_url }}" type="video/mp4">
      <a href="{{ '/assets/videos/bookshelf.mp4' | relative_url }}">Watch the experiment video</a>
    </video>
    <figcaption>Selected overview of the simulation setup and physical xArm7 experiments, including comparisons between nominal and residual control.</figcaption>
  </figure>

  <div class="research-footnote">
    <p><strong>Research takeaway:</strong> Keep the reliable geometric structure of the manipulation task, and use learning where contact uncertainty makes fixed control brittle.</p>
    <p class="research-note">Manuscript under review; the linked arXiv preprint describes the experimental protocol and limitations.</p>
  </div>
</div>

{% include research_project_style.liquid %}
