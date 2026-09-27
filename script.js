/* =========================================================
   STUDY HUB — script.js
   Everything content-related is read from plain .txt files in /data.
   To add a subject: add an entry to SUBJECTS below and create its
   matching data/<slug>.txt file. See README.md for the post syntax.
   ========================================================= */

/* Content lives in Alpha's GitHub repo (uuhjeike/BMT, branch main), one
   file per subject, named EXACTLY after the subject (Bangla name + ".txt"),
   sitting at the repo ROOT — not inside a /data folder. Fetched straight
   from raw.githubusercontent.com so the site works even opened as a local
   file (no CORS issue, unlike fetching a local .txt via file://). To point
   this at a different repo, just change GITHUB_RAW_BASE below. */
const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/uuhjeike/BMT/main/";

const SUBJECTS = [
  { name: "বাংলা-১",                            tab: "gold", icon: "book" },
  { name: "ইংরেজি-১",                            tab: "teal", icon: "language" },
  { name: "কম্পিউটার অফিস অ্যাপ্লিকেশন-১",        tab: "rust", icon: "computer" },
  { name: "ব্যবসায় গণিত ও পরিসংখ্যান",            tab: "gold", icon: "calculator" },
  { name: "হিসাববিজ্ঞান নীতি ও প্রয়োগ-১",         tab: "teal", icon: "coins" },
  { name: "অর্থনীতি ও বাণিজ্যিক ভূগোল",           tab: "rust", icon: "globe" },
  { name: "ব্যবসায় সংগঠন ও ব্যবস্থাপনা-১",        tab: "gold", icon: "briefcase" },
  { name: "মার্কেটিং নীতি ও প্রয়োগ-১",            tab: "teal", icon: "megaphone" },
  { name: "ডিজিটাল টেকনোলজি ইন বিজনেস-১",         tab: "rust", icon: "chip" },
  { name: "হিউম্যান রিসোর্স ম্যানেজমেন্ট-১",       tab: "gold", icon: "users" },
];
SUBJECTS.forEach(s => {
  s.slug = s.name;
  s.file = GITHUB_RAW_BASE + encodeURIComponent(s.name) + ".txt";
});

const TEACHERS_FILE = GITHUB_RAW_BASE + "teachers.txt";
const SOCIAL_FILE = GITHUB_RAW_BASE + "social.txt";

const ICONS = {
  book: '<path d="M4 5c3-1.5 6-1.5 8 0v14c-2-1.5-5-1.5-8 0V5Z"/><path d="M20 5c-3-1.5-6-1.5-8 0v14c2-1.5 5-1.5 8 0V5Z"/>',
  language: '<path d="M4 6h9M8 4v2c0 5-2 8-5 10M6 9c1 2 3 4 6 5"/><path d="M13 20l4-9 4 9M14.5 17h5"/>',
  computer: '<rect x="3" y="5" width="18" height="12" rx="1"/><path d="M8 21h8M12 17v4"/>',
  calculator: '<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 18h.01M12 18h.01M16 18h.01"/>',
  coins: '<ellipse cx="9" cy="8" rx="6" ry="3"/><path d="M3 8v4c0 1.7 2.7 3 6 3s6-1.3 6-3V8"/><path d="M3 12v4c0 1.7 2.7 3 6 3s6-1.3 6-3v-4"/><ellipse cx="17" cy="13" rx="4" ry="2"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9Z"/>',
  briefcase: '<rect x="3" y="8" width="18" height="12" rx="1"/><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
  megaphone: '<path d="M3 10v4l4 1v4l4-2M3 10l14-6v16L3 14M17 9c1.5 1 1.5 5 0 6"/>',
  chip: '<rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14c2.6.4 4.5 2.5 4.5 6"/>',
  link: '<path d="M9 15l6-6M10 6l1-1a4 4 0 0 1 5.6 5.6l-1 1M14 18l-1 1A4 4 0 0 1 7.4 13.4l1-1"/>',
  drive: '<path d="M8 3h8l5 9-2.5 4.5h-13L3 12 8 3Z"/><path d="M10.5 8.5h3L16 12H8l2.5-3.5Z"/>',
  phone: '<path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2 2C10.5 19 5 13.5 5 6a2 2 0 0 1 1-3Z"/>',
  chat: '<path d="M4 4h16v11H8l-4 4V4Z"/>',
  play: '<path d="M9 6l10 6-10 6V6Z"/>',
  whatsapp: '<path d="M7 17l-3 1 1-3a8 8 0 1 1 2 2Z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.5 0 1-.7.8-1.2l-.6-1.2a.6.6 0 0 0-.7-.3l-1 .3a4 4 0 0 1-2.6-2.6l.3-1a.6.6 0 0 0-.3-.7L9.2 8.2c-.5-.2-1.2.3-1.2.8Z"/>',
  facebook: '<path d="M14 21v-7h2.3l.4-3H14V9c0-.9.2-1.5 1.5-1.5H17V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.4-3.7 3.9V11H8.5v3H11v7h3Z"/>',
};

function icon(name){ return `<svg viewBox="0 0 24 24">${ICONS[name]||ICONS.link}</svg>`; }

/* ---------------------------------------------------------
   POST TEXT-FILE PARSER
   Each post sits between "-" lines, the familiar way:
       -
       DATE: ...
       post content...
       -
       DATE: ...
       next post...
       -
   A "-" line just marks a boundary, so it works whether a post has
   one on both sides, only before, only after, or several in a row —
   any stretch of text between two "-" lines (or the start/end of the
   file) becomes one post.
   Lines starting with "#" are comments and ignored.
   Recognised tags (case-insensitive), one per line:
     DATE: 15 Jan 2026
     IMG:  https://...              (repeatable -> photo gallery)
     VID:  https://...              (repeatable -> video gallery)
     AUD:  https://...              (repeatable -> audio track)
     DRIVE: https://... (লেবেল)     (repeatable -> drive button)
     LINK:  https://... (লেবেল)     (repeatable -> link button)
   Any other line is treated as post text.
--------------------------------------------------------- */
function parsePosts(raw){
  const rawLines = raw.split("\n");
  const blocks = [];
  let current = [];
  for(const line of rawLines){
    if(line.trim() === "-"){
      blocks.push(current);
      current = [];
    } else {
      current.push(line);
    }
  }
  blocks.push(current);

  const posts = [];
  for(const block of blocks){
    const lines = block.map(l=>l.trim()).filter(l=>l.length && !l.startsWith("#"));
    if(!lines.length) continue;
    const post = { date:"", text:[], images:[], videos:[], audios:[], links:[] };
    for(const line of lines){
      const m = line.match(/^(DATE|IMG|VID|AUD|DRIVE|LINK)\s*:\s*(.+)$/i);
      if(!m){ post.text.push(line); continue; }
      const tag = m[1].toUpperCase();
      const val = m[2].trim();
      if(tag === "DATE") post.date = val;
      else if(tag === "IMG") post.images.push(val);
      else if(tag === "VID") post.videos.push(val);
      else if(tag === "AUD") post.audios.push(val);
      else if(tag === "DRIVE" || tag === "LINK"){
        const lm = val.match(/^(\S+)\s*\((.+)\)\s*$/);
        post.links.push({
          url: lm ? lm[1] : val,
          label: lm ? lm[2] : (tag === "DRIVE" ? "ড্রাইভ ফাইল" : "লিংক"),
          kind: tag.toLowerCase()
        });
      }
    }
    post.text = post.text.join("\n");
    if(post.text || post.images.length || post.videos.length || post.audios.length || post.links.length){
      posts.push(post);
    }
  }
  return posts;
}

function escapeHtml(s){
  return s.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

function mediaThumbHtml(kind, src, index){
  if(kind === "img"){
    return `<div class="media-thumb" data-kind="img" data-src="${escapeHtml(src)}">
      <img src="${escapeHtml(src)}" loading="lazy" alt="ছবি ${index+1}">
    </div>`;
  }
  return `<div class="media-thumb" data-kind="vid" data-src="${escapeHtml(src)}">
    <video src="${escapeHtml(src)}" muted playsinline preload="metadata"></video>
    <div class="media-play">${icon("play")}</div>
  </div>`;
}

function renderPost(post){
  const media = [
    ...post.images.map(src=>({kind:"img",src})),
    ...post.videos.map(src=>({kind:"vid",src})),
  ];
  const mediaHtml = media.length
    ? `<div class="post-media-grid ${media.length===1?'single':''}">${media.map((m,i)=>mediaThumbHtml(m.kind,m.src,i)).join("")}</div>`
    : "";
  const audioHtml = post.audios.map(src=>`
    <div class="post-audio" data-src="${escapeHtml(src)}">
      <span class="post-audio-icon">${icon("play")}</span>
      <span class="post-audio-label">অডিও শুনতে ক্লিক করো</span>
    </div>`).join("");
  const linksHtml = post.links.length
    ? `<div class="post-links">${post.links.map(l=>`
        <a class="post-link" href="${escapeHtml(l.url)}" target="_blank" rel="noopener">
          ${icon(l.kind==="drive"?"drive":"link")}${escapeHtml(l.label)}
        </a>`).join("")}</div>`
    : "";
  return `<article class="post">
    ${post.date ? `<p class="post-date">${escapeHtml(post.date)}</p>` : ""}
    ${post.text ? `<p class="post-text">${escapeHtml(post.text)}</p>` : ""}
    ${mediaHtml}
    ${audioHtml}
    ${linksHtml}
  </article>`;
}

/* ---------------------------------------------------------
   SHELF (subject folder-cards)
--------------------------------------------------------- */
const shelf = document.getElementById("shelf");
const postCache = {};

SUBJECTS.forEach((s, i) => {
  s.domId = `count-${i}`;
  const card = document.createElement("div");
  card.className = "tile folder";
  card.style.setProperty("--tab", `var(--${s.tab})`);
  card.style.animationDelay = `${Math.min(i*0.06,0.6)}s`;
  card.innerHTML = `
    <div class="folder-icon">${icon(s.icon)}</div>
    <div class="folder-name">${s.name}</div>
    <div class="folder-meta"><span>খুলতে ক্লিক করো</span><span class="folder-count" id="${s.domId}"></span></div>
  `;
  card.addEventListener("click", () => openSubject(s));
  shelf.appendChild(card);
});

/* ---------------------------------------------------------
   FEED PANEL
--------------------------------------------------------- */
const feedOverlay = document.getElementById("feedOverlay");
const feedTitle = document.getElementById("feedTitle");
const feedKicker = document.getElementById("feedKicker");
const feedPosts = document.getElementById("feedPosts");
const feedLoading = document.getElementById("feedLoading");
const feedEmpty = document.getElementById("feedEmpty");
const feedBody = document.getElementById("feedBody");

/* Shared by every feed source (subjects + social): opens the same
   sliding panel, shows the loading/empty states, and renders posts.
   `loader` is an async function that returns a posts[] array (or
   throws, with a message to show in the empty state). */
async function openFeed({kicker, title, emptyText, loader}){
  feedKicker.textContent = kicker;
  feedTitle.textContent = title;
  feedPosts.innerHTML = "";
  feedEmpty.hidden = true;
  feedLoading.hidden = false;
  feedOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
  feedBody.scrollTop = 0;

  try{
    const posts = await loader();
    feedLoading.hidden = true;
    if(!posts.length){
      feedEmpty.hidden = false;
      feedEmpty.textContent = emptyText || "এখনো কোনো পোস্ট নেই। প্রথম হোমওয়ার্কটা এখানেই যোগ হবে।";
      return;
    }
    feedPosts.innerHTML = posts.map(renderPost).join("");
    [...feedPosts.children].forEach((el,i)=> el.style.animationDelay = `${Math.min(i*0.05,0.5)}s`);
    bindMediaHandlers(feedPosts);
  }catch(err){
    feedLoading.hidden = true;
    feedEmpty.hidden = false;
    feedEmpty.textContent = err.message || "লোড করা যায়নি।";
  }
}

function openSubject(subject){
  openFeed({
    kicker: "বিষয়",
    title: subject.name,
    async loader(){
      let posts = postCache[subject.name];
      if(!posts){
        const res = await fetch(subject.file, {cache:"no-store"});
        if(!res.ok) throw new Error("GitHub রিপোতে এখনো এই বিষয়ের ফাইল পাওয়া যাচ্ছে না — uuhjeike/BMT রিপোর রুটে \"" + subject.name + ".txt\" আপলোড করো।");
        const raw = await res.text();
        posts = parsePosts(raw);
        postCache[subject.name] = posts;
        const countEl = document.getElementById(subject.domId);
        if(countEl) countEl.textContent = posts.length ? `${posts.length} পোস্ট` : "";
      }
      return posts;
    }
  });
}

/* ---------------------------------------------------------
   SOCIAL FEED — social.txt is now written with the exact same
   post syntax as a subject file (DATE / IMG / VID / AUD / LINK,
   blocks separated by "-" lines). Put your WhatsApp/Facebook/
   Telegram links in a LINK: line inside each post, e.g.:

     -
     DATE: 15 Jan 2026
     নতুন হোয়াটসঅ্যাপ গ্রুপ খোলা হয়েছে, সবাই জয়েন করো।
     LINK: https://chat.whatsapp.com/xxxx (হোয়াটসঅ্যাপ গ্রুপ)
     -

   Clicking "যোগাযোগ" in the nav opens this as its own feed panel —
   it is no longer a section on the homepage.
--------------------------------------------------------- */
let socialCache = null;

function openSocialFeed(){
  openFeed({
    kicker: "যোগাযোগ",
    title: "সবার সাথে যুক্ত থাকো",
    emptyText: "GitHub রিপোতে এখনো social.txt পাওয়া যাচ্ছে না — uuhjeike/BMT রিপোর রুটে \"social.txt\" আপলোড করো (বিষয়ের ফাইলের মতোই DATE/LINK ফরম্যাটে)।",
    async loader(){
      if(!socialCache){
        const res = await fetch(SOCIAL_FILE, {cache:"no-store"});
        if(!res.ok) throw new Error();
        const raw = await res.text();
        socialCache = parsePosts(raw);
      }
      return socialCache;
    }
  });
}
document.getElementById("navSocial").addEventListener("click", openSocialFeed);

function closeFeed(){
  feedOverlay.classList.remove("open");
  document.body.style.overflow = "";
}
document.getElementById("feedClose").addEventListener("click", closeFeed);
feedOverlay.addEventListener("click", e => { if(e.target === feedOverlay) closeFeed(); });

/* ---------------------------------------------------------
   LIGHTBOX — same click-to-expand behaviour for image, video, audio
--------------------------------------------------------- */
const lightbox = document.getElementById("lightbox");
const lightboxStage = document.getElementById("lightboxStage");

function openLightbox(kind, src){
  if(kind === "img") lightboxStage.innerHTML = `
    <img src="${escapeHtml(src)}" alt="" decoding="async">
    <a class="lightbox-original" href="${escapeHtml(src)}" target="_blank" rel="noopener">মূল ছবি নতুন ট্যাবে দেখো (আসল কোয়ালিটি)</a>`;
  else if(kind === "vid") lightboxStage.innerHTML = `<video src="${escapeHtml(src)}" controls autoplay playsinline></video>`;
  else if(kind === "aud") lightboxStage.innerHTML = `<audio src="${escapeHtml(src)}" controls autoplay></audio>`;
  lightbox.classList.add("open");
}
function closeLightbox(){
  lightbox.classList.remove("open");
  lightboxStage.innerHTML = "";
}
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => {
  if(e.key !== "Escape") return;
  if(lightbox.classList.contains("open")) closeLightbox();
  else if(feedOverlay.classList.contains("open")) closeFeed();
});

function bindMediaHandlers(scope){
  scope.querySelectorAll(".media-thumb").forEach(el=>{
    el.addEventListener("click", () => openLightbox(el.dataset.kind, el.dataset.src));
  });
  scope.querySelectorAll(".post-audio").forEach(el=>{
    el.addEventListener("click", () => openLightbox("aud", el.dataset.src));
  });
}

/* ---------------------------------------------------------
   TEACHERS  — data/teachers.txt lines: Name | Subject | Phone | Sir/Madam
--------------------------------------------------------- */
function waLink(phone){
  const digits = phone.replace(/[^\d]/g, "");
  const local = digits.startsWith("880") ? digits : digits.startsWith("0") ? "88"+digits : "880"+digits;
  return `https://wa.me/${local}`;
}

async function loadTeachers(){
  const grid = document.getElementById("teacherGrid");
  const tabs = ["gold","teal","rust"];
  try{
    const res = await fetch(TEACHERS_FILE, {cache:"no-store"});
    if(!res.ok) throw new Error();
    const raw = await res.text();
    const rows = raw.split("\n").map(l=>l.trim()).filter(l=>l && !l.startsWith("#"));
    if(!rows.length) throw new Error();
    grid.innerHTML = rows.map((row,i)=>{
      const [name="", subject="", phone="", role=""] = row.split("|").map(p=>p.trim());
      const tab = tabs[i % tabs.length];
      const actions = phone ? `
        <div class="tile-actions" onclick="event.stopPropagation()">
          <a href="tel:${escapeHtml(phone)}" aria-label="কল করো">${icon("phone")}</a>
          <a href="${waLink(phone)}" target="_blank" rel="noopener" aria-label="হোয়াটসঅ্যাপ">${icon("whatsapp")}</a>
        </div>` : "";
      return `<a class="tile teacher-tile" style="--tab:var(--${tab})" href="tel:${escapeHtml(phone)}">
        <div class="folder-icon">${icon("users")}</div>
        <div class="folder-name">${escapeHtml(name)}</div>
        <div class="folder-meta"><span>${escapeHtml(subject || role || "যোগাযোগ")}</span>${role ? `<span class="folder-count">${escapeHtml(role)}</span>` : ""}</div>
        ${actions}
      </a>`;
    }).join("");
  }catch(err){
    grid.innerHTML = `<a class="tile tile-ghost" href="https://github.com/uuhjeike/BMT/edit/main/teachers.txt" target="_blank" rel="noopener">
      <div class="folder-icon">${icon("users")}</div>
      <div class="folder-name">এখানে স্যার/ম্যাডামের নম্বর দেখাবে</div>
      <div class="folder-meta"><span>uuhjeike/BMT রিপোর teachers.txt-এ লিখো — নাম | বিষয় | নম্বর | Sir/Madam</span></div>
    </a>`;
  }
}

loadTeachers();

/* ---------------------------------------------------------
   PULSE BAR — "unstoppable" stopwatch, counting up since
   24 September 2026 (local time). Days/Hours/Minutes/Seconds,
   updates every second, pinned above everything on the page.
--------------------------------------------------------- */
const UNSTOPPABLE_START = new Date(2026, 8, 24, 0, 0, 0); // month is 0-indexed: 8 = September
const pDays = document.getElementById("pDays");
const pHours = document.getElementById("pHours");
const pMins = document.getElementById("pMins");
const pSecs = document.getElementById("pSecs");

function pad(n){ return String(n).padStart(2,"0"); }

function updatePulse(){
  const diff = Math.max(0, Date.now() - UNSTOPPABLE_START.getTime());
  const totalSec = Math.floor(diff/1000);
  pDays.textContent = Math.floor(totalSec/86400);
  pHours.textContent = pad(Math.floor((totalSec%86400)/3600));
  pMins.textContent = pad(Math.floor((totalSec%3600)/60));
  pSecs.textContent = pad(totalSec%60);
}
if(pDays){ updatePulse(); setInterval(updatePulse, 1000); }

/* ---------------------------------------------------------
   TILE LIGHT — tracks the pointer over any .tile and feeds it
   into --mx/--my so the glass specular highlight (style.css)
   follows the cursor, like light catching a tilted glass pane.
--------------------------------------------------------- */
document.addEventListener("pointermove", e => {
  const tile = e.target.closest(".tile");
  if(!tile) return;
  const r = tile.getBoundingClientRect();
  tile.style.setProperty("--mx", `${((e.clientX - r.left) / r.width * 100).toFixed(1)}%`);
  tile.style.setProperty("--my", `${((e.clientY - r.top) / r.height * 100).toFixed(1)}%`);
});

/* ---------------------------------------------------------
   SCROLL REVEAL — fades/rises .reveal elements in as they
   enter the viewport (section headings, the unstoppable panel).
--------------------------------------------------------- */
const revealItems = document.querySelectorAll(".reveal");
if("IntersectionObserver" in window && revealItems.length){
  const revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -8% 0px" });
  revealItems.forEach(el => revealObserver.observe(el));
} else {
  revealItems.forEach(el => el.classList.add("in"));
}
