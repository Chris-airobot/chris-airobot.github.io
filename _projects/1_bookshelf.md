---
layout: page
title: Book insertion with residual RL
description: Contact-rich manipulation and sim-to-real reinforcement learning with xArm7.
img: assets/images/bookshelf-poster.jpg
importance: 1
category: research
permalink: /projects/bookshelf-insertion/
related_publications: true
---

**Under Review** · [arXiv Paper](https://arxiv.org/abs/2609.19962)

**Authors:** Tianyuan Liu, Rutherford Agbeshi Patamia, Benjamin Champion, Akansel Cosgun, Richard Dazeley.

A nominal controller provides the insertion motion, while a learned residual PPO policy corrects local errors and contacts.

In **60 physical xArm7 trials** across 30 matched conditions, insertion success improved from **26.7%** with nominal control to **63.3%** with residual reinforcement learning.

![xArm7 book insertion experiment]({{ '/assets/images/bookshelf-poster.jpg' | relative_url }})

### Research demonstration

<video controls preload="metadata" playsinline poster="{{ '/assets/images/bookshelf-poster.jpg' | relative_url }}" style="max-width:100%;width:100%">
  <source src="{{ '/assets/videos/bookshelf.mp4' | relative_url }}" type="video/mp4">
</video>

*The full MP4 will become available once the original demo is copied to the website assets.*
