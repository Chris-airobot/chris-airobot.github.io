---
layout: page
title: In-Hand Pivoting Using Vision, Force and Touch
description: Monash University · IROS 2023 · UR5/Robotiq · Vision–force–tactile closed-loop control.
img: assets/images/monash-pivoting-poster.jpg
preview_animation: assets/images/monash-pivoting-animated.webp
importance: 5
category: research
permalink: /projects/in-hand-pivoting/
related_publications: true
---

**IROS 2023 · Published · Second Author**  
**Monash University · Research Assistant (2022–2023)**

[**arXiv Paper**](https://arxiv.org/abs/2303.10865) · [**Published Paper (DOI)**](https://doi.org/10.1109/IROS55552.2023.10341505)

**Authors:** Shiyu Xu, **Tianyuan Liu**, Michael Wong, Dana Kulić, Akansel Cosgun.

### Overview

This project studied **in-hand object pivoting** on a physical **UR5 robot with a Robotiq gripper**, using visual object pose estimates, wrist force/torque sensing, and tactile feedback.

The controller combines two coupled feedback loops:

- **End-effector position control**, using vision and wrist force feedback to maintain the desired surface-contact force.
- **Gripper width control**, using tactile feedback to permit controlled rotational slip while preventing unwanted translational slip.

### My role and results

As a research assistant at Monash University, I **co-developed and tested** the multimodal, closed-loop in-hand pivoting system.

The experiments demonstrated approximately **90° rotation of cuboid objects** while maintaining contact with the supporting surface and avoiding translational slip.

**Paper:** *Rotating Objects via In-Hand Pivoting Using Vision, Force and Touch*, IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2023.


### Real-robot demonstration

<video controls playsinline preload="metadata" poster="{{ '/assets/images/monash-pivoting-poster.jpg' | relative_url }}" style="display:block;width:100%;max-width:960px;border-radius:8px;">
  <source src="{{ '/assets/videos/monash-pivoting-demo.mp4' | relative_url }}" type="video/mp4">
  Your browser does not support embedded video.
</video>

*Physical UR5/Robotiq demonstration of in-hand object pivoting from the research project.*
