/* Samsung media showcase: public assets only, never fetch private repository URLs. */
(() => {
  "use strict";
  const host = document.getElementById("humanoid");
  if (!host) return;

  const wrap = document.createElement("div");
  wrap.className = "research-showcase";
  wrap.innerHTML = [
    '<div class="showcase-intro">',
    '  <span class="eyebrow">Selected technical evidence</span>',
    '  <h3>From sensor measurements to robot integration.</h3>',
    '  <p>Research visuals from the Unitree G1 manipulation work. These illustrate selected perception, calibration and planning experiments; they are not presented as evidence that every component was executed by the robot.</p>',
    '</div>',
    '<div class="showcase-group"><div class="showcase-heading">',
    '  <h4>01 / Object perception & pose tracking</h4>',
    '  <p>SAM3-assisted segmentation, RGB-D observations and FoundationPose 6D tracking supported scene understanding and coordinate alignment.</p>',
    '</div><div class="showcase-media showcase-grid" data-gallery="perception"></div></div>',
    '<div class="showcase-group"><div class="showcase-heading">',
    '  <h4>02 / RGB-D camera diagnostics</h4>',
    '  <p>Comparing geometry coverage, temporal behavior and challenging near-field depth measurements during camera evaluation. The two cameras were not always tested at identical distances, so these figures should not be read as a controlled accuracy ranking.</p>',
    '</div><div class="showcase-media showcase-grid" data-gallery="cameras"></div></div>',
    '<div class="showcase-group"><div class="showcase-heading">',
    '  <h4>03 / Real-scene placement planning prototype</h4>',
    '  <p>A pre-trained GOPT policy evaluated on measured box geometry and an occupancy representation. This particular demonstration used offline inference and visualization; it is distinct from the team\'s real-robot G1 carrying deployment.</p>',
    '</div><div class="showcase-media showcase-grid" data-gallery="gopt"></div></div>',
    '<div class="showcase-group"><div class="showcase-heading">',
    '  <h4>04 / Video demonstrations</h4>',
    '  <p>Available after the source Videos media library is imported. Clips include alignment visualization, an additional research recording, and selected G1 portfolio videos.</p>',
    '</div><div class="showcase-media showcase-grid" data-gallery="videos"></div></div>',
    '<div class="showcase-group"><div class="showcase-heading">',
    '  <h4>05 / G1 portfolio media</h4>',
    '  <p>Additional images and videos from the project portfolio archive. Individual captions describe the visual material, not an individual claim of ownership for a team-developed system.</p>',
    '</div><div class="showcase-media showcase-grid" data-gallery="portfolio"></div>',
    '<p class="showcase-help" data-help="portfolio" hidden>Additional portfolio media can be included with <code>python3 scripts/import_media.py ~/Documents/Videos</code>.</p>',
    '</div>'
  ].join("");
  host.appendChild(wrap);

  const assets = [
    {path:"assets/images/samsung/foundationpose-tracking.png",title:"SAM3 / FoundationPose",description:"Pose tracking and object segmentation visualization.",group:"perception"},
    {path:"assets/images/samsung/gemini-plane.png",title:"Orbbec Gemini 335L",description:"Depth observation and plane diagnostic.",group:"cameras"},
    {path:"assets/images/samsung/d435i-plane.png",title:"D435i + FoundationStereo",description:"RGB-D plane estimation diagnostic.",group:"cameras"},
    {path:"assets/images/samsung/gemini-close-depth.png",title:"Gemini: close-range depth",description:"Observed depth dropouts in one near-field test.",group:"cameras"},
    {path:"assets/images/samsung/d435i-close-depth.png",title:"D435i: close-range depth",description:"Near-field depth from the comparison recording.",group:"cameras"},
    {path:"assets/images/samsung/gopt-real-scene.png",title:"GOPT: real-scene placement visualization",description:"Offline box placement policy evaluation (not a G1 execution claim).",group:"gopt"},
  ];
  const videos = [
    {path:"assets/videos/viz-root-alignment.mp4",title:"Root-frame alignment visualization",description:"Multi-frame localization alignment."},
    {path:"assets/videos/g1-research-recording.mp4",title:"Additional research recording",description:"Video from the Samsung Videos library; context to be confirmed."},
  ];

  const byGroup = group => wrap.querySelector('[data-gallery="' + group + '"]');
  const fileExists = async (path) => {
    try {
      const r = await fetch(path,{method:"HEAD",cache:"no-store"});
      return r.ok;
    } catch (e) { return false; }
  };

  function createMediaCard({path,title,description,kind}) {
    const card = document.createElement("article");
    card.className = "research-media-card";
    const figure = document.createElement("div");
    figure.className = "research-media-frame";
    let media;
    if (kind === "video") {
      media = document.createElement("video");
      media.controls = true;
      media.preload = "metadata";
      media.playsInline = true;
      media.setAttribute("aria-label", title);
    } else {
      media = document.createElement("img");
      media.loading = "lazy";
      media.alt = title;
      media.addEventListener("click", () => window.open(path,"_blank","noopener,noreferrer"));
      media.title = "Open image";
    }
    media.src = path;
    figure.appendChild(media);
    card.appendChild(figure);
    const text = document.createElement("div");
    text.className = "research-media-caption";
    const heading = document.createElement("strong");
    heading.textContent = title;
    const caption = document.createElement("p");
    caption.textContent = description || "";
    text.append(heading, caption);
    card.appendChild(text);
    return card;
  }
  const loadStatic = async () => {
    for (const item of assets) {
      if (await fileExists(item.path)) {
        byGroup(item.group).appendChild(createMediaCard({...item,kind:"image"}));
      }
    }
    for (const item of videos) {
      if (await fileExists(item.path)) {
        byGroup("videos").appendChild(createMediaCard({...item,kind:"video"}));
      }
    }
    const empty = byGroup("videos").children.length === 0;
    if (empty) {
      const note = document.createElement("p");
      note.className = "showcase-help";
      note.textContent = "Video assets can be imported from the local Videos repository; image evidence is already visible above.";
      byGroup("videos").appendChild(note);
    }
  };

  const loadPortfolio = async () => {
    try {
      const res = await fetch("assets/portfolio/g1/manifest.json",{cache:"no-store"});
      if (!res.ok) throw new Error("No portfolio manifest");
      const items = await res.json();
      if (!Array.isArray(items)) throw new Error("Invalid manifest");
      let count = 0;
      for (const item of items) {
        if (!item || typeof item.path !== "string" || !item.path.startsWith("assets/portfolio/g1/")) continue;
        if (!["image","video"].includes(item.kind)) continue;
        const title = String(item.title || "Project media");
        const card = createMediaCard({
          path:item.path,title,kind:item.kind,
          description:item.kind==="video" ? "G1 project portfolio recording." : "G1 project portfolio visual."
        });
        byGroup("portfolio").appendChild(card);
        count++;
      }
      if (count === 0) wrap.querySelector('[data-help="portfolio"]').hidden=false;
    } catch(e) {
      wrap.querySelector('[data-help="portfolio"]').hidden=false;
    }
  };
  loadStatic();
  loadPortfolio();
})();
