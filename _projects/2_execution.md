---
layout: page
title: Execution-Aware Robotic Placement
description: Ranking grasp-conditioned placement candidates for downstream planning and execution, with xArm7 transfer.
img: assets/images/execution-poster.jpg
preview_video: assets/videos/execution-preview.mp4
preview_animation: assets/images/execution-preview-animated.webp
importance: 3
category: research
permalink: /projects/execution-aware-placement/
related_publications: true
---

<div class="research-case">
  <p class="research-kicker">PhD Research · Learning-Based Planning · Under Review</p>
  <p class="research-lead">A geometrically valid object placement is not necessarily easy to execute. The chosen grasp changes the robot's required wrist pose, collision geometry and transport motion. This research learns to <strong>rank grasp–placement candidates before planning</strong> according to how likely they are to survive the full execution pipeline.</p>

  <div class="research-links">
    <a href="https://arxiv.org/abs/2609.19946" target="_blank" rel="noopener noreferrer">Read paper (arXiv) ↗</a>
    <a href="#execution-video">Watch real-robot demonstration ↓</a>
  </div>
  <p class="research-authors">Tianyuan Liu, Rutherford Agbeshi Patamia, Benjamin Champion, Richard Dazeley, Akansel Cosgun</p>

  <div class="research-facts">
    <div><small>Decision</small><strong>Pre-execution candidate ranking</strong></div>
    <div><small>Inputs</small><strong>Target-conditioned point cloud + pose descriptors</strong></div>
    <div><small>Transfer</small><strong>Frozen model · xArm7 / MoveIt</strong></div>
  </div>

  <h2>The research question</h2>
  <p>When several grasp and target-pose combinations are available, which candidate should the robot attempt first? Conventional geometric filters can rule out impossible targets, but they do not necessarily capture whether the planner can find a trajectory, the transfer can be completed or the final placement will succeed.</p>

  <h2>How it works</h2>
  <div class="research-steps">
    <section><h3>1. Represent candidates</h3><p>Combine a typed, target-conditioned scene point cloud with pose descriptors encoding the grasp and proposed placement.</p></section>
    <section><h3>2. Predict downstream outcomes</h3><p>A learned model uses hierarchical prediction heads for planning success and execution success conditioned on planning.</p></section>
    <section><h3>3. Rank, plan and execute</h3><p>Score supplied candidates before running the planner. The frozen model is transferred to an xArm7 with MoveIt without xArm-specific retraining.</p></section>
  </div>

  <h2>Key results</h2>
  <div class="research-metrics">
    <div><span class="metric-value">85.63% ± 1.08%</span><span class="metric-label">Top-1 success for joint selection on covered, scene-held-out test groups, averaged over three seeds.</span></div>
    <div><span class="metric-value">13 / 16</span><span class="metric-label">Physical xArm7 cases successfully completed among cases that passed Top-5 preflight and began execution.</span></div>
  </div>
  <p>In the complete <strong>27-case locked physical test</strong>, 13 cases finished end to end (<strong>48.15%</strong>). The 13/16 figure (<strong>81.25%</strong>) is conditional on cases beginning execution; the other 11 cases did not pass preflight. Both denominators matter when interpreting real-world transfer.</p>
  <p class="research-note">The model <strong>ranks supplied candidates</strong>; it is not a generative placement model, nor does it replace motion planning.</p>

  <h2 id="execution-video">System and real-robot demonstration</h2>
  <figure class="research-demo">
    <video controls playsinline preload="metadata" poster="{{ '/assets/images/execution-poster.jpg' | relative_url }}" aria-label="Execution-aware robotic placement candidate ranking, robot planning and xArm7 deployment">
      <source src="{{ '/assets/videos/execution.mp4' | relative_url }}" type="video/mp4">
      <a href="{{ '/assets/videos/execution.mp4' | relative_url }}">Watch the placement demonstration</a>
    </video>
    <figcaption>Overview of candidate scoring, motion planning and robotic placement experiments on the physical xArm7 platform.</figcaption>
  </figure>

  <div class="research-footnote">
    <p><strong>Research takeaway:</strong> Selecting a candidate should account for what happens <em>after</em> choosing the target pose—not merely whether the final pose looks feasible.</p>
    <p class="research-note">Manuscript under review; for evaluation splits, preflight logic and full physical results, refer to the arXiv preprint.</p>
  </div>
</div>

{% include research_project_style.liquid %}
