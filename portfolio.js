
"use strict";
const PATHS=[["Home","index.html"],["Research","projects.html"],["Publications","publications.html"],["About","about.html"],["CV","cv.html"]];
const page=document.body.dataset.page||"Home";
const arxiv=id=>"https://arxiv.org/abs/"+id;
const videoPath=id=>"assets/videos/"+id+".mp4";
const thumbPath=id=>"assets/images/"+id+"-poster.jpg";
const link=(label,href,cls="small-btn",newtab=false)=>'<a class="'+cls+'" href="'+href+'"'+(newtab?' target="_blank" rel="noopener noreferrer"':'')+'>'+label+' ↗</a>';
function frame(pageName){
 const links=PATHS.map(([label,path])=>'<a href="'+path+'"'+(label===pageName?' class="active" aria-current="page"':'')+'>'+label+'</a>').join("");
 return '<div class="mobile-bar"><a href="index.html">Tianyuan Liu</a><button class="menu-toggle" aria-label="Open menu" aria-expanded="false" type="button">☰</button></div>'+
 '<aside class="sidebar" id="sidebar"><a href="index.html" class="identity"><div class="avatar">TL</div><strong>Tianyuan Liu</strong><span>PhD Candidate · Robotics & AI</span><small>Deakin University</small></a><div class="sidebar-rule"></div>'+
 '<nav class="nav" aria-label="Primary navigation">'+links+'</nav>'+
 '<div class="side-bottom"><div class="sidebar-social"><a href="mailto:tianyuan4113@gmail.com">Email</a><a href="https://github.com/Chris-airobot" rel="noopener noreferrer" target="_blank">GitHub</a></div><p>Robot Learning · Manipulation · Sim-to-Real</p><p>© 2026 Tianyuan Liu</p></div></aside>'+
 '<main id="main" class="main"><div class="main-inner" id="content"></div></main>';
}
function footer(){return '<footer class="footer"><span>Tianyuan Liu · Robotics research portfolio</span><a href="mailto:tianyuan4113@gmail.com">Get in touch ↗</a></footer>';}
function pagehead(kicker,title,desc){return '<header class="page-head"><span class="kicker">'+kicker+'</span><h1>'+title+'</h1><p>'+desc+'</p></header>';}
function cover(path,alt){return '<div class="tile-cover"><img src="'+path+'" alt="'+alt+'" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'"><div class="cover-fallback">Research demo</div></div>';}
function tile(id,kind,title,description,time,path){return '<a class="tile" href="projects.html#'+id+'">'+cover(path,title+' visual')+'<div class="tile-content"><div class="eyeline">'+kind+'</div><h3>'+title+'</h3><p>'+description+'</p><div class="tile-footer"><span>View research →</span><span>'+time+'</span></div></div></a>';}
function home(){
 return '<header class="intro"><span class="kicker">Welcome to my research portfolio</span><h1 class="hero-title">Hi, I’m <em>Tianyuan (Chris) Liu.</em></h1>'+
 '<p class="lead">I am a PhD candidate in Robotics & AI at Deakin University, supervised by Prof. Richard Dazeley and Dr. Akansel Cosgun. My research focuses on robot learning, manipulation, reinforcement learning, and reliable execution.</p>'+
 '<p class="lead">I work across planning, simulation, and real-robot experiments—from predicting whether a placement will succeed to learning contact-aware corrections for physical manipulation.</p>'+
 '<div class="quicklinks">'+link("Explore research","projects.html","pill primary")+link("Publications","publications.html","pill")+link("Academic CV","cv.html","pill")+'</div></header>'+
 '<section class="section"><div class="section-header"><h2 class="section-title">Selected research</h2><a class="text-link" href="projects.html">View all research →</a></div>'+
 '<div class="featured-grid">'+
 tile("bookshelf","Reinforcement learning · xArm7","Contact-rich book insertion","Residual reinforcement learning for reliable insertion with millimetre-scale clearance.","Demo · 2:28",thumbPath("bookshelf"))+
 tile("execution","Execution-aware planning · xArm7","Robotic placement ranking","Learning to rank grasp–placement candidates using actual downstream execution outcomes.","Demo · 2:58",thumbPath("execution"))+
 '</div>'+
 '<a href="projects.html#humanoid" class="compact-row"><img loading="lazy" src="assets/images/samsung/gopt-real-scene.png" alt="Real-scene box planning visualization"><div><div class="eyeline">Samsung Research · Unitree G1</div><h3>Humanoid perception & deployment</h3><p>6D pose tracking, multi-sensor localization, calibration and real-world system integration for a team-developed humanoid manipulation project.</p><span class="text-link">View experience and media →</span></div></a>'+
 '</section><section class="topic-line"><span class="kicker">Research interests</span><p class="topics">Robot Learning · Robotic Manipulation · Reinforcement Learning · Contact-rich Control · Placement Planning · Sim-to-Real · Embodied AI</p></section>'+footer();
}
function detail(label,body){return '<div class="detail-label">'+label+'</div><p>'+body+'</p>';}
function video(id,description){
 return '<div class="media-player" data-demo="'+id+'"><video controls playsinline preload="metadata" poster="'+thumbPath(id)+'"><source src="'+videoPath(id)+'" type="video/mp4">Your browser does not support video playback.</video><img class="media-cover" src="'+thumbPath(id)+'" alt="'+description+'" data-hidden><p class="missing-demo" data-hidden>The original video has not yet been added to this repository. The preview image is from the research demonstration.</p></div>';
}
function work(id,num,status,title,desc,media,notes){
 return '<article class="work" id="'+id+'"><div class="work-heading"><div><span class="work-index">'+num+'</span><h2>'+title+'</h2></div><span class="paper-status">'+status+'</span></div><p class="work-lead">'+desc+'</p><div class="media-layout"><div>'+media+'</div><div class="work-detail">'+notes+'</div></div></article>';
}
function galleryImage(url,title,description){
 return '<figure class="gallery-item"><div class="gallery-media"><a href="'+url+'" target="_blank" rel="noopener noreferrer"><img loading="lazy" src="'+url+'" alt="'+title+'"></a></div><figcaption><strong>'+title+'</strong>'+description+'</figcaption></figure>';
}
function projects(){
 let html=pagehead("Research portfolio","Robotics research","Selected research projects in learning-based manipulation, placement planning, and humanoid system integration. Where available, videos show actual experimental behavior.");
 html+='<nav class="jump-nav" aria-label="Project shortcuts"><a href="#bookshelf">Book insertion</a><a href="#execution">Placement ranking</a><a href="#grasp">Grasp feasibility</a><a href="#humanoid">Humanoid research</a></nav>';
 html+=work("bookshelf","01 / Robot learning","ICRA 2027 · Under review","Contact-rich robotic book insertion with residual RL",
 "A nominal insertion controller is augmented with a residual PPO policy to compensate for errors and contacts when inserting books into narrow slots.",
 video("bookshelf","Residual RL xArm7 research video preview"),
 detail("Method","Residual reinforcement learning trained in Isaac Lab, combined with a nominal motion controller for execution on a real xArm7.")+
 '<div class="metrics"><div class="metric"><strong>~90%</strong><span>Residual PPO success</span></div><div class="metric"><strong>~20%</strong><span>Nominal controller</span></div></div>'+
 detail("Evaluation","Reported results include approximately 2 mm slot clearance.")+
 '<div class="links">'+link("Paper / arXiv",arxiv("2609.19962"),"small-btn",true)+'</div>');
 html+=work("execution","02 / Robot planning","ICRA 2027 · Under review","Execution-aware robotic placement ranking",
 "Predicting which grasp-conditioned placement candidates will survive motion planning, manipulation execution, object release and stability checks—not only endpoint feasibility.",
 video("execution","Execution-aware placement demo preview"),
 detail("Method","A learned ranking model scores candidates using downstream plan-and-execution outcomes.")+
 detail("Evaluation","Simulation and real-robot placement experiments, including transfer between robotic embodiments.")+
 '<div class="links">'+link("Paper / arXiv",arxiv("2609.19946"),"small-btn",true)+'</div>');
 html+=work("grasp","03 / Learning-based placement","ACRA 2025 · Oral","Grasp-conditioned placement feasibility prediction",
 "Learning to estimate placement feasibility from the selected grasp and target pose for a Franka Panda robot.",
 '<div class="media-player"><div class="cv-panel" style="margin:0;border:0"><div class="kicker">Peer-reviewed research</div><h2 style="font:400 25px Georgia,serif">Grasp–placement coupling</h2><p>Predicting inverse-kinematics and collision feasibility to prioritize placement candidates.</p></div></div>',
 detail("Contribution","Grasp-conditioned features and target-pose context for feasibility prediction, combined with real-robot placement evaluation.")+
 '<div class="links">'+link("Paper / arXiv",arxiv("2512.18922"),"small-btn",true)+'</div>');
 html+=work("humanoid","04 / Industry robotics","Samsung Research · 2026","Humanoid manipulation, perception & integration",
 "Contributed perception, multi-sensor localization, calibration and deployment integration to a team-developed Unitree G1 box manipulation and placement system. The complete system was deployed on the physical robot.",
 '<div class="media-player"><img src="assets/images/samsung/gopt-real-scene.png" alt="Real-scene box placement planning visualization"><p class="missing-demo" style="display:block">Selected GOPT offline planning visualization — this is not a clip of G1 physical execution.</p></div>',
 detail("My contributions","RGB-D perception, SAM3 segmentation, FoundationPose tracking, VIVE localization, ChArUco calibration, coordinate frames and real-world integration debugging.")+
 detail("Team contribution","Robot control-policy development and the overall G1 box-handling system were team achievements.")+
 '<div class="links">'+link("GitHub profile","https://github.com/Chris-airobot","small-btn",true)+'</div>');
 html+='<section class="section" id="samsung-gallery"><h2 class="section-title">Selected technical media</h2><p class="gallery-description">Selected visual materials from perception, tracking, camera evaluation and offline placement planning. More project recordings appear automatically when imported.</p>'+
 '<h3 class="gallery-heading">Perception & depth evaluation</h3><div class="image-gallery" id="samsung-perception">'+
 galleryImage("assets/images/samsung/gemini-plane.png","Orbbec Gemini 335L","Depth and plane segmentation diagnostic.")+
 galleryImage("assets/images/samsung/d435i-plane.png","RealSense D435i + FoundationStereo","RGB-D plane reconstruction and diagnostic.")+
 galleryImage("assets/images/samsung/gemini-close-depth.png","Near-field RGB-D evaluation","Observed depth coverage at short working distances.")+
 galleryImage("assets/images/samsung/gopt-real-scene.png","GOPT real-scene planning","Offline placement visualization from measured boxes.")+
 '</div><div id="more-samsung-media"></div></section>';
 return html+footer();
}
function publication(status,title,venue,id,project){
 return '<article class="pub-entry"><span class="pub-badge '+(status==="Under review"?"under":"")+'">'+status+'</span><div><h3>'+title+'</h3><p>Tianyuan Liu et al. · '+venue+'</p><div class="pub-actions"><a href="'+arxiv(id)+'" target="_blank" rel="noopener noreferrer">arXiv ↗</a><a href="projects.html#'+project+'">Project & demo ↗</a></div></div></article>';
}
function publications(){
 return pagehead("Academic output","Publications","Selected first-author publications and preprints. Submissions are clearly distinguished from accepted papers.")+
 '<div class="pub-year">2026 · Manuscripts under review</div>'+
 publication("Under review","Hybrid Residual Reinforcement Learning for Contact-Rich Robotic Book Insertion","Submitted to ICRA 2027","2609.19962","bookshelf")+
 publication("Under review","Execution-Aware Pre-Execution Ranking for Grasp-Conditioned Robotic Placement","Submitted to ICRA 2027","2609.19946","execution")+
 '<div class="pub-year">2025 · Peer-reviewed publication</div>'+
 publication("Published · Oral","Optimizing Robotic Placement via Grasp-Dependent Feasibility Prediction","Australasian Conference on Robotics and Automation (ACRA 2025)","2512.18922","grasp")+
 '<p class="subtle-note" style="margin-top:20px">Additional co-authored publications can be added from the verified Academic CV.</p>'+footer();
}
function timeline(date,role,desc){
 return '<div class="timeline-row"><time>'+date+'</time><div><h3>'+role+'</h3><p>'+desc+'</p></div></div>';
}
function about(){
 return pagehead("About me","A little about my background","My work spans academic robot learning research and hands-on integration of physical robotic systems.")+
 '<div class="section prose"><h2 class="section-title">Research background</h2><p>I am pursuing a PhD in Robotics & AI at Deakin University under Prof. Richard Dazeley and Dr. Akansel Cosgun, with an expected thesis submission in February 2027.</p><p>My interests include learning-based manipulation, reinforcement learning, motion and placement planning, contact-rich control, and sim-to-real transfer. I particularly enjoy understanding why an algorithm succeeds in simulation but fails when deployed on real hardware.</p></div>'+
 '<section class="section"><h2 class="section-title">Education & experience</h2><div class="timeline">'+
 timeline("2023 – present","PhD Candidate · Deakin University","Robot learning and manipulation research; expected thesis submission February 2027.")+
 timeline("2026","Robotics Research Intern · Samsung Research, Beijing","Perception, pose tracking, localization, calibration and deployment integration for a humanoid robot system.")+
 timeline("Previous experience","Research Assistant · Monash University","Research experience in robotics and collaborative projects.")+
 timeline("Graduate study","Master’s degree · University of Melbourne","Graduate education in engineering and robotics-related research.")+
 '</div></section><section class="section"><h2 class="section-title">Research interests</h2><p class="topics">Robotic Manipulation · Reinforcement Learning · Contact-rich Manipulation · Placement Planning · Sim-to-Real · Embodied AI</p></section>'+footer();
}
function cv(){
 return pagehead("Curriculum vitae","Academic CV","Academic training, publications, research projects and experience.")+
 '<div class="cv-panel"><h2>Two-page Academic CV</h2><p>The latest verified PDF will appear here when it has been added to the repository. The original document has not been recreated or modified.</p>'+
 '<div class="quicklinks"><a class="pill primary" href="assets/Tianyuan_Liu_Academic_CV.pdf" id="cv-download" data-hidden>View PDF ↗</a>'+link("Email","mailto:tianyuan4113@gmail.com","pill")+'</div><p class="subtle-note" id="cv-notice">PDF pending upload.</p></div>'+footer();
}
const views={Home:home,Research:projects,Publications:publications,About:about,CV:cv};
document.querySelector("#app").innerHTML=frame(page);
document.querySelector("#content").innerHTML=(views[page]||home)();
const menu=document.querySelector(".menu-toggle"),sidebar=document.querySelector(".sidebar");
menu.addEventListener("click",()=>{const open=sidebar.classList.toggle("open");menu.setAttribute("aria-expanded",open);menu.setAttribute("aria-label",open?"Close menu":"Open menu");menu.textContent=open?"×":"☰"});
sidebar.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>{sidebar.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.textContent="☰"}));
async function exists(url){try{return (await fetch(url,{method:"HEAD",cache:"no-store"})).ok}catch(e){return false}}
document.querySelectorAll("[data-demo]").forEach(async el=>{
 const id=el.getAttribute("data-demo");if(await exists(videoPath(id)))return;
 const v=el.querySelector("video"),poster=el.querySelector(".media-cover"),note=el.querySelector(".missing-demo");
 v.dataset.hidden="";poster.removeAttribute("data-hidden");note.removeAttribute("data-hidden");
});
if(page==="CV")exists("assets/Tianyuan_Liu_Academic_CV.pdf").then(ok=>{if(ok){document.querySelector("#cv-download").removeAttribute("data-hidden");document.querySelector("#cv-notice").setAttribute("data-hidden","") }});
if(page==="Research")loadSamsung();
function makeMedia(url,title,desc,type){
 const f=document.createElement("figure");f.className="gallery-item";
 const wrap=document.createElement("div");wrap.className="gallery-media";let element;
 if(type==="video"){element=document.createElement("video");element.controls=true;element.preload="metadata";element.playsInline=true;}
 else{const a=document.createElement("a");a.href=url;a.target="_blank";a.rel="noopener noreferrer";element=document.createElement("img");element.loading="lazy";element.alt=title;a.appendChild(element);wrap.appendChild(a);}
 element.src=url;if(type==="video")wrap.appendChild(element);
 const caption=document.createElement("figcaption"),strong=document.createElement("strong");
 strong.textContent=title;caption.append(strong,document.createTextNode(desc));
 f.append(wrap,caption);return f;
}
async function loadSamsung(){
 const target=document.querySelector("#more-samsung-media");
 const extras=[
  ["assets/images/samsung/foundationpose-tracking.png","Object pose tracking","SAM3 / FoundationPose visualization.","image"],
  ["assets/images/samsung/d435i-close-depth.png","Near-field D435i depth","Camera comparison observation.","image"],
  ["assets/images/samsung/object-detection.png","Object detection test","Detection diagnostics recorded during research exploration.","image"],
  ["assets/videos/viz-root-alignment.mp4","Localization alignment","Visualization of frame and tracking alignment.","video"],
  ["assets/videos/g1-research-recording.mp4","Additional research recording","Recording from the project media library.","video"]
 ];
 const available=[];
 for(const [url,title,desc,type] of extras)if(await exists(url))available.push(makeMedia(url,title,desc,type));
 if(available.length){
   const title=document.createElement("h3");title.className="gallery-heading";title.textContent="Additional experiments";
   const grid=document.createElement("div");grid.className="image-gallery";grid.append(...available);
   target.append(title,grid);
 }
 try{
  const r=await fetch("assets/portfolio/g1/manifest.json",{cache:"no-store"});
  if(!r.ok)return;const data=await r.json();
  if(!Array.isArray(data)||!data.length)return;
  const title=document.createElement("h3");title.className="gallery-heading";title.textContent="G1 portfolio recordings";
  const text=document.createElement("p");text.className="gallery-description";text.textContent="Additional project media from the G1 portfolio archive; individual contributions and team attribution are described above.";
  const grid=document.createElement("div");grid.className="image-gallery";
  for(const x of data){
    if(!x||!["video","image"].includes(x.kind)||typeof x.path!=="string"||!x.path.startsWith("assets/portfolio/g1/"))continue;
    grid.appendChild(makeMedia(x.path,String(x.title||"Research media"),"G1 project media.",x.kind));
  }
  if(grid.children.length)target.append(title,text,grid);
 }catch(e){/* Optional gallery not yet imported */ }
}
