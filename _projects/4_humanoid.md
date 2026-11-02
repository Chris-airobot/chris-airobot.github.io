---
layout: page
title: Unitree G1 — Real-World Humanoid Deployment
description: Samsung Research · Whole-body box handling, perception, VIVE localization and real-robot policy integration.
img: assets/images/samsung/g1-real-deployment.jpg
preview_video: assets/videos/g1-box-handling-demo.mp4
preview_video_fit: contain
importance: 1
category: industry
permalink: /projects/humanoid-integration/
---

<div id="g1-case-study">
  <p class="g1-kicker">SAMSUNG RESEARCH CHINA · ROBOTICS RESEARCH INTERN · AUG–NOV 2026</p>

  <p class="g1-lead">Integrating learned whole-body control with perception, localization and real-world robot interfaces for a <strong>Unitree G1 humanoid box-handling system</strong>.</p>

  <div class="g1-facts">
    <div><span>Robot</span><strong>Unitree G1 humanoid</strong></div>
    <div><span>Task</span><strong>Object pickup, carrying and placement</strong></div>
    <div><span>My focus</span><strong>Deployment, perception, localization and integration</strong></div>
  </div>

  <h2>Real-robot demonstration</h2>
  <p>This selected clip shows the physical G1 carrying out part of the box-handling task. The robot-side deployment involved linking learned motion policies to state estimation and perception outputs.</p>

  <figure class="g1-video-figure">
    <video controls playsinline preload="metadata" poster="{{ '/assets/images/samsung/g1-real-deployment.jpg' | relative_url }}" aria-label="Physical Unitree G1 box-handling demonstration">
      <source src="{{ '/assets/videos/g1-box-handling-demo.mp4' | relative_url }}" type="video/mp4">
      <a href="{{ '/assets/videos/g1-box-handling-demo.mp4' | relative_url }}">Watch the real-robot demo</a>
    </video>
    <figcaption>Selected 23-second real-world G1 demonstration. The clip represents a portion of the overall box-handling workflow, not a benchmark of end-to-end task success.</figcaption>
  </figure>

  <h2>Localization and coordinate-frame alignment</h2>
  <p>A central integration challenge was placing robot state, camera measurements and the target object in a consistent world frame. I worked with <strong>VIVE Ultimate Tracker</strong> root-pose measurements, <strong>ChArUco-based calibration</strong>, robot joint states and kinematics, and camera-to-world alignment to make these signals usable together.</p>

  <div class="g1-pipeline" aria-label="Localization pipeline: Tracker localization and ChArUco calibration align robot and camera measurements into a world frame, which supports downstream policy integration.">
    <div><strong>VIVE + robot state</strong><small>Root pose · Joint states / FK</small></div>
    <span aria-hidden="true">+</span>
    <div><strong>ChArUco calibration</strong><small>Camera / board extrinsics</small></div>
    <span aria-hidden="true">→</span>
    <div><strong>Aligned world frame</strong><small>Robot and object coordinates</small></div>
  </div>

  {% assign g1_localization_video = site.static_files | where: "path", "/assets/videos/g1-localization-demo.mp4" | first %}
  {% if g1_localization_video %}
  <figure class="g1-video-figure">
    <video controls playsinline preload="none" poster="{{ '/assets/images/samsung/g1-localization-poster.jpg' | relative_url }}" aria-label="VIVE-based G1 localization and coordinate-frame alignment visualization">
      <source src="{{ '/assets/videos/g1-localization-demo.mp4' | relative_url }}" type="video/mp4">
      <a href="{{ '/assets/videos/g1-localization-demo.mp4' | relative_url }}">Watch the localization video</a>
    </video>
    <figcaption>Recorded localization / root-frame alignment visualization; a diagnostic of the tracking system, not a separate whole-body control result.</figcaption>
  </figure>
  {% endif %}

  <h2>My technical contributions</h2>
  <div class="g1-work-grid">
    <section>
      <h3>Physical policy deployment</h3>
      <p>Supported deployment and integration of learned G1 box-handling control with robot state and real-world execution, including end-to-end system debugging.</p>
    </section>
    <section>
      <h3>Object perception</h3>
      <p>Integrated RGB-D perception, segmentation and <strong>FoundationPose</strong> 6D object-pose tracking into the manipulation workflow.</p>
    </section>
    <section>
      <h3>VIVE localization</h3>
      <p>Worked on tracker-based robot root localization, ChArUco extrinsic calibration and consistent transformations between sensor, robot and world frames.</p>
    </section>
    <section>
      <h3>Integration and diagnostics</h3>
      <p>Connected sensor observations and robot-side interfaces, inspected timing and pose consistency, and debugged failures during real-hardware tests.</p>
    </section>
  </div>

  <h2>Perception and calibration diagnostics</h2>
  <p>Two examples from the supporting vision work. These are <strong>debugging visualizations</strong>, not images of a complete G1 policy execution.</p>

  <div class="g1-diagnostic-grid">
    <figure>
      <a href="{{ '/assets/images/samsung/object-detection.png' | relative_url }}" target="_blank" rel="noopener noreferrer" aria-label="Open object-perception diagnostic at original resolution">
        <img src="{{ '/assets/images/samsung/object-detection.png' | relative_url }}" loading="lazy" alt="Object-perception diagnostic from the robot vision pipeline">
      </a>
      <figcaption><strong>Object perception</strong><span>Vision-system debugging and object detection.</span></figcaption>
    </figure>
    <figure>
      <a href="{{ '/assets/images/samsung/gemini-plane.png' | relative_url }}" target="_blank" rel="noopener noreferrer" aria-label="Open RGB-D diagnostic at original resolution">
        <img src="{{ '/assets/images/samsung/gemini-plane.png' | relative_url }}" loading="lazy" alt="RGB-D depth and plane diagnostic from an Orbbec Gemini camera">
      </a>
      <figcaption><strong>RGB-D geometry</strong><span>Depth / plane inspection during camera-system validation.</span></figcaption>
    </figure>
  </div>

  <p class="g1-disclaimer">This page summarizes my individual deployment and integration responsibilities within a collaborative Samsung Research project; it does not claim sole authorship of the underlying learned policies.</p>
</div>

<style>
#g1-case-study { max-width: 950px; margin: 0 auto; }
#g1-case-study .g1-kicker { font-size: .75rem; letter-spacing: .065em; font-weight: 700; color: var(--global-theme-color, #8560ac); margin: .2rem 0 1.1rem; }
#g1-case-study .g1-lead { font-size: 1.09rem; line-height: 1.67; max-width: 850px; margin-bottom: 1.25rem; }
#g1-case-study p { line-height: 1.65; }
#g1-case-study h2 { font-size: 1.32rem; font-weight: 700; margin: 2.3rem 0 .7rem; }
#g1-case-study h3 { font-size: 1rem; font-weight: 700; margin: 0 0 .4rem; }
#g1-case-study .g1-facts { display: flex; flex-wrap: wrap; gap: .6rem; margin: 1.2rem 0 1.9rem; }
#g1-case-study .g1-facts > div { flex: 1 1 170px; min-width: 0; padding: .75rem .85rem; border: 1px solid var(--global-divider-color, #dfe2e6); border-radius: 8px; }
#g1-case-study .g1-facts span, #g1-case-study .g1-facts strong { display: block; }
#g1-case-study .g1-facts span { font-size: .72rem; opacity: .7; margin-bottom: .26rem; }
#g1-case-study .g1-facts strong { font-size: .84rem; line-height: 1.45; }
#g1-case-study figure { margin: .85rem 0; }
#g1-case-study .g1-video-figure { max-width: 840px; }
#g1-case-study .g1-video-figure video { display: block; width: 100%; height: auto; max-height: 520px; object-fit: contain; background: #101318; border-radius: 9px; }
#g1-case-study figcaption { margin-top: .55rem; font-size: .81rem; line-height: 1.55; color: var(--global-text-color-light, #65717e); }
#g1-case-study .g1-pipeline { display: flex; gap: .6rem; align-items: stretch; max-width: 840px; margin: 1.2rem 0; }
#g1-case-study .g1-pipeline > div { flex: 1 1 0; min-width: 0; padding: .75rem .6rem; border: 1px solid var(--global-divider-color, #dfe2e6); background: var(--global-card-bg-color, transparent); border-radius: 8px; text-align: center; }
#g1-case-study .g1-pipeline strong, #g1-case-study .g1-pipeline small { display: block; }
#g1-case-study .g1-pipeline strong { font-size: .83rem; }
#g1-case-study .g1-pipeline small { font-size: .73rem; line-height: 1.4; opacity: .75; margin-top: .28rem; }
#g1-case-study .g1-pipeline > span { align-self: center; font-weight: 700; color: var(--global-theme-color, #8560ac); }
#g1-case-study .g1-work-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .8rem; margin: 1.15rem 0; }
#g1-case-study .g1-work-grid > section { border: 1px solid var(--global-divider-color, #dfe2e6); border-radius: 8px; padding: 1rem; min-width: 0; }
#g1-case-study .g1-work-grid p { margin: 0; font-size: .9rem; }
#g1-case-study .g1-diagnostic-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.15rem; align-items: start; margin: 1.1rem 0 1.6rem; }
#g1-case-study .g1-diagnostic-grid figure { min-width: 0; margin: 0; }
#g1-case-study .g1-diagnostic-grid a { display: flex; height: 225px; overflow: hidden; justify-content: center; align-items: center; border: 1px solid var(--global-divider-color, #dfe2e6); border-radius: 9px; background: var(--global-card-bg-color, #f7f8fa); }
#g1-case-study .g1-diagnostic-grid img { display: block; max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; }
#g1-case-study .g1-diagnostic-grid figcaption strong, #g1-case-study .g1-diagnostic-grid figcaption span { display: block; }
#g1-case-study .g1-diagnostic-grid figcaption strong { font-size: .86rem; color: var(--global-text-color, inherit); }
#g1-case-study .g1-disclaimer { border-top: 1px solid var(--global-divider-color, #dfe2e6); padding-top: 1rem; margin-top: 2rem; font-size: .82rem; color: var(--global-text-color-light, #65717e); }
@media (max-width: 660px) {
  #g1-case-study .g1-pipeline { flex-direction: column; }
  #g1-case-study .g1-pipeline > span { transform: rotate(90deg); }
  #g1-case-study .g1-work-grid, #g1-case-study .g1-diagnostic-grid { grid-template-columns: minmax(0, 1fr); }
  #g1-case-study .g1-diagnostic-grid a { height: 210px; }
}
</style>
