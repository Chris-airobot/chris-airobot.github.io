---
layout: page
title: Grasp-Conditioned Placement Feasibility
description: Learning fast geometric IK and collision feasibility scores to prioritize pick-and-place candidates.
img: assets/images/grasp-poster.jpg
preview_animation: assets/images/grasp-preview-animated.webp
github: https://github.com/Chris-airobot/EndpointPQ
importance: 4
category: research
permalink: /projects/grasp-feasibility/
related_publications: true
---

<div class="research-case">
  <p class="research-kicker">PhD Research · ACRA 2025 Oral Presentation</p>
  <p class="research-lead">The grasp that can pick up an object is not always a grasp that can <strong>place it at a desired target pose</strong>. This work predicts grasp-dependent geometric feasibility and uses those scores to prioritize promising candidates when robot planning time is limited.</p>

  <div class="research-links">
    <a href="https://arxiv.org/abs/2512.18922" target="_blank" rel="noopener noreferrer">Read paper (arXiv) ↗</a>
    <a href="https://github.com/Chris-airobot/EndpointPQ" target="_blank" rel="noopener noreferrer">Research code (GitHub) ↗</a>
    <a href="#grasp-demo">View animated illustration ↓</a>
  </div>
  <p class="research-authors">Tianyuan Liu, Richard Dazeley, Benjamin Champion, Akan Cosgun</p>

  <div class="research-facts">
    <div><small>Robot model</small><strong>Franka Panda · 7 DoF</strong></div>
    <div><small>Learning</small><strong>Dual-output MLP · Geometric supervision</strong></div>
    <div><small>Decision</small><strong>Rank grasps for a specified place pose</strong></div>
  </div>

  <h2>The challenge</h2>
  <p>For the same object and destination, one grasp may bring the arm into a joint-limit singularity or collision during transfer, while another supports a reachable route. Running a full motion planner for every grasp is expensive, especially with a small planning budget.</p>

  <h2>Approach</h2>
  <div class="research-steps">
    <section><h3>1. Generate candidates</h3><p>Pair a known object's initial pose, a target object pose and precomputed object-relative grasps.</p></section>
    <section><h3>2. Learn cheap feasibility signals</h3><p>Construct path-aware labels using inverse kinematics at motion waypoints and geometric collision sweeps, without physics-based training rollouts.</p></section>
    <section><h3>3. Rank before planning</h3><p>A compact two-head network predicts IK and collision feasibility. The highest-ranked candidates are given to the same planner used by the baseline.</p></section>
  </div>

  <h2>Executed-simulation evaluation</h2>
  <div class="research-metrics">
    <div><span class="metric-value">47% → 53%</span><span class="metric-label">Success on the first planning attempt: rank-agnostic baseline vs learned candidate ranking.</span></div>
    <div><span class="metric-value">74% → 87%</span><span class="metric-label">Cumulative success within three planning attempts, under a matched planning budget.</span></div>
  </div>
  <p>These results come from <strong>100 budget-matched trials in physics-enabled executed simulation</strong>. By the second attempt, cumulative success improved from <strong>62% to 83%</strong>. The learned score helps find useful grasps sooner without changing the downstream motion planner.</p>
  <p class="research-note">Evaluation targets a single rigid cuboid, side-face grasps and a fixed waypoint template. These numbers are <strong>executed-simulation results</strong>, not physical Franka trials.</p>

  <h2 id="grasp-demo">Animated research illustration</h2>
  <figure class="research-demo">
    <img src="{{ '/assets/images/grasp-preview-animated.webp' | relative_url }}" loading="lazy" alt="Grasp-conditioned pick-and-place candidate pairing from the ACRA 2025 presentation">
    <figcaption>Illustration from the ACRA presentation showing grasp-conditioned pick-and-place geometry and candidate evaluation.</figcaption>
  </figure>

  <div class="research-footnote">
    <p><strong>Research takeaway:</strong> Fast, physics-free geometric supervision can be useful for learning candidate priorities, even when the final decision still relies on a conventional motion planner.</p>
    <p class="research-note">Published at the Australasian Conference on Robotics and Automation (ACRA 2025), oral presentation.</p>
  </div>
</div>

{% include research_project_style.liquid %}
