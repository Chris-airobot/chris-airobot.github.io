---
layout: page
title: Master's Thesis — Human-in-the-Loop Adversarial Reinforcement Learning
permalink: /research/master-thesis-adversarial-rl/
description: Master's research on human-guided adversarial reinforcement learning and procedural content generation.
nav: false
---

<div class="masters-thesis">
  <p class="masters-thesis-kicker">UNIVERSITY OF MELBOURNE · MASTER'S THESIS · 2023</p>
  <h2>Applying Human-in-the-Loop in Adversarial Reinforcement Learning</h2>
  <p class="masters-thesis-lead">Exploratory research into whether human-guided changes in environment difficulty can improve reinforcement-learning performance in procedurally generated tasks.</p>
  <p><a href="https://github.com/Chris-airobot/Adversarial-RL-HIL" target="_blank" rel="noopener noreferrer"><strong>View research code on GitHub ↗</strong></a></p>

  <h3>Research question</h3>
  <p>Can a human influence the generator in an adversarial reinforcement-learning environment to provide more useful training scenarios for the solver?</p>

  <div class="masters-thesis-flow" aria-label="A human adjusts generator difficulty; the generator creates a training map; the solver learns with PPO.">
    <div><strong>Human feedback</strong><small>Auxiliary difficulty input</small></div>
    <span aria-hidden="true">→</span>
    <div><strong>Generator</strong><small>Adapts a 7 × 7 grid map</small></div>
    <span aria-hidden="true">↔</span>
    <div><strong>Solver</strong><small>PPO-based learning</small></div>
  </div>

  <h3>Approach</h3>
  <ul>
    <li>Developed a discrete grid-world with a <strong>generator</strong> that creates traversable cells and a <strong>solver</strong> tasked with reaching a goal.</li>
    <li>Compared fixed-map RL, procedural content generation (PCG), adversarial RL for PCG (ARLPCG), and human-guided ARLPCG using PPO.</li>
    <li>Introduced human-adjustable auxiliary input during training, allowing environment difficulty to change without restarting learning.</li>
    <li>Outlined six possible forms of interaction; <strong>only auxiliary-input control was experimentally evaluated</strong>.</li>
  </ul>

  <h3>Results in the custom benchmark</h3>
  <p>Mean solver success on the thesis's 7 × 7 evaluation environment; 10 evaluation runs of 300 episodes each:</p>
  <table class="masters-thesis-results">
    <thead><tr><th>Training setup</th><th>Solver success</th></tr></thead>
    <tbody>
      <tr><td>Fixed map</td><td>9.3%</td></tr>
      <tr><td>PCG</td><td>11.4%</td></tr>
      <tr><td>ARLPCG</td><td>4.6%</td></tr>
      <tr><td><strong>ARLPCG + human interaction</strong></td><td><strong>17.0%</strong></td></tr>
    </tbody>
  </table>
  <p class="masters-thesis-note">A secondary pretrained-generator experiment achieved 17.7% solver success. These figures describe the specific experimental setup, not performance in physical robotics tasks or evidence of broad generalization.</p>

  <h3>Limitations and learning</h3>
  <p>Absolute success rates remained modest, the environment was small and discrete, and the method required human monitoring and judgment. Nevertheless, the thesis gave practical experience in custom environments, multi-agent training, reward design, PPO, baseline comparisons and human feedback in learning systems.</p>
  <p class="masters-thesis-note">University of Melbourne Master's thesis research. This overview is not presented as a peer-reviewed conference paper.</p>
  <p><a href="{{ '/experience/#experience-melbourne-master' | relative_url }}">← Back to Experience</a></p>
</div>

<style>
.masters-thesis { max-width: 780px; margin: auto; }
.masters-thesis-kicker { color: var(--global-theme-color, #8062a7); font-size: .78rem; font-weight: 700; letter-spacing: .07em; }
.masters-thesis h2 { font-size: clamp(1.5rem, 3vw, 2.05rem); line-height: 1.23; margin: .5rem 0 .8rem; }
.masters-thesis h3 { font-size: 1.19rem; margin: 2rem 0 .7rem; }
.masters-thesis p, .masters-thesis li { line-height: 1.65; }
.masters-thesis li { margin: 0 0 .42rem; }
.masters-thesis-lead { font-size: 1.03rem; }
.masters-thesis-flow { display: flex; align-items: stretch; gap: .42rem; margin: 1.45rem 0; }
.masters-thesis-flow > div { flex: 1; text-align: center; min-width: 0; padding: .85rem .6rem; border: 1px solid var(--global-divider-color, #ddd); background: var(--global-card-bg-color, #f5f6f8); border-radius: 8px; }
.masters-thesis-flow strong, .masters-thesis-flow small { display: block; }
.masters-thesis-flow small { margin-top: .3rem; font-size: .76rem; color: var(--global-text-color-light, #667); }
.masters-thesis-flow > span { display: flex; align-items: center; color: var(--global-theme-color, #8062a7); }
.masters-thesis-results { width: 100%; border-collapse: collapse; }
.masters-thesis-results td, .masters-thesis-results th { padding: .65rem .75rem; border-bottom: 1px solid var(--global-divider-color, #ddd); text-align: left; }
.masters-thesis-results td:last-child, .masters-thesis-results th:last-child { text-align: right; white-space: nowrap; }
.masters-thesis-note { color: var(--global-text-color-light, #667); font-size: .87rem; }
@media (max-width: 650px) { .masters-thesis-flow { flex-direction: column; } .masters-thesis-flow > span { justify-content: center; transform: rotate(90deg); } }
</style>
