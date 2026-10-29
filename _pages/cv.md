---
layout: page
title: CV
permalink: /cv/
nav: true
nav_order: 4
---

# Tianyuan (Chris) Liu

**Robotics Engineer · Robot Learning · Manipulation · Real-Robot Deployment**

{% assign cv_file = site.static_files | where: "path", "/assets/pdf/Tianyuan_Liu_CV.pdf" | first %}
{% if cv_file %}

[**Download CV (PDF)**]({{ '/assets/pdf/Tianyuan_Liu_CV.pdf' | relative_url }}) · [Open PDF in a new tab]({{ '/assets/pdf/Tianyuan_Liu_CV.pdf' | relative_url }})

<iframe src="{{ '/assets/pdf/Tianyuan_Liu_CV.pdf' | relative_url }}" title="Tianyuan Liu CV (PDF)" width="100%" height="950" style="border: 1px solid #ddd; border-radius: 6px;"></iframe>

{% else %}

My two-page CV covers research and engineering experience at **Samsung Research China**, **Zoellent Technology**, and **Monash University**, as well as my PhD research at Deakin University and prior degrees at the University of Melbourne.

For a copy, please contact me via **tianyuan4113@gmail.com**.

{% endif %}
