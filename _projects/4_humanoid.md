---
layout: page
title: Samsung Research — Unitree G1 Humanoid Manipulation
description: Samsung Research · Unitree G1 · Real-world box handling, policy deployment, 6D tracking, and localization.
img: assets/images/samsung/g1-real-deployment.jpg
importance: 1
category: industry
permalink: /projects/humanoid-integration/
---

**Samsung Research China · Robotics Research Intern · 2026**

**Platform:** Unitree G1 humanoid robot  
**Focus:** Real-world policy deployment, perception, localization, and system integration

I worked on **real-robot policy deployment and system integration** for a Unitree G1 box-handling task, bringing learned control together with robot perception and localization.

### My work

- **Real-robot deployment:** Participated in integrating and deploying the G1 box-handling policy on the physical robot.
- **Object perception:** Built workflows using RGB-D sensing, SAM3 and FoundationPose for segmentation and 6D object pose tracking.
- **Localization and calibration:** Developed VIVE-tracker localization, ChArUco-based extrinsic calibration, and coordinate-frame alignment.
- **System integration:** Connected perception and localization outputs to the robot control pipeline and supported real-world testing and debugging.

The **box-handling policy was successfully deployed on the physical Unitree G1**. My individual contributions focused on the deployment and integration work described above.

### Real-robot demonstration

<video controls playsinline preload="metadata" poster="{{ '/assets/images/samsung/g1-real-deployment.jpg' | relative_url }}" style="width:100%;max-width:960px;border-radius:8px;">
  <source src="{{ '/assets/videos/g1-box-handling-demo.mp4' | relative_url }}" type="video/mp4">
  Your browser does not support embedded video. [Watch the clip]({{ '/assets/videos/g1-box-handling-demo.mp4' | relative_url }}).
</video>

*Selected 23-second excerpt from a physical Unitree G1 box-handling test, recorded at Samsung Research. Laboratory staff are visible nearby during the experimental run.*

![Physical Unitree G1 box-handling demonstration]({{ '/assets/images/samsung/g1-real-deployment.jpg' | relative_url }})

### Selected system diagnostics

The following images document supporting perception and calibration work. They are **not** photographs or videos of the G1 executing the box-handling policy.

![Offline placement planning visualization]({{ '/assets/images/samsung/gopt-real-scene.png' | relative_url }})

*Offline placement-planning diagnostic; this visualization should not be interpreted as a physical G1 execution.*

![RGB-D plane diagnostic from Orbbec Gemini]({{ '/assets/images/samsung/gemini-plane.png' | relative_url }})

A real-robot G1 project photograph or demonstration can be added here when an appropriate shareable asset is available.
