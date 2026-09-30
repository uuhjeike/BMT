/* =========================================================
   STUDY HUB — script.js  (performance build with photostack & virtual windowing)
   ========================================================= */

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
  youtube: '<rect x="3" y="6" width="18" height="12" rx="4"/><path d="M10.5 9.5l5 2.5-5 2.5v-5Z"/>',
  instagram: '<rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M16.2 7.6h.01"/>',
  tiktok: '<path d="M13.5 3.5v10.8a3 3 0 1 1-2.6-2.97"/><path d="M13.5 3.5c.35 2.4 2.05 4.1 4.3 4.4"/>',
};

function icon(name){ return `<svg viewBox="0 0 24 24">${ICONS[name]||ICONS.link}</svg>`; }

function resolveUrl(url){
  const m = url.match(/^https?:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^?#]+?)\/?(\?.*)?$/i);
  if(m){
    const [, owner, repo, path] = m;
    return `https://raw.githubusercontent.com/${owner}/${repo}/${path}`;
  }
  return url;
}

function youTubeEmbedUrl(url){
  let u;
  try{ u = new URL(url); }catch(e){ return null; }
  const host = u.hostname.replace(/^www\.|^m\./,"");
  let id = "";
  if(host === "youtu.be") id = u.pathname.slice(1);
  else if(host === "youtube.com" || host === "youtube-nocookie.com"){
    if(u.pathname === "/watch") id = u.searchParams.get("v") || "";
    else if(u.pathname.startsWith("/shorts/")) id = u.pathname.split("/")[2] || "";
    else if(u.pathname.startsWith("/embed/")) id = u.pathname.split("/")[2] || "";
  } else return null;
  id = (id || "").split("&")[0].split("?")[0];
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
}

function platformInfo(url){
  let host = "";
  try{ host = new URL(url).hostname.replace(/^www\./,""); }catch(e){}
  if(/youtube\.com$\vert{}youtu\.be$/.test(host)) return { label:"ইউটিউব", icon:"youtube" };
  if(/facebook\.com$\vert{}fb\.watch$/.test(host)) return { label:"ফেসবুক", icon:"facebook" };
  if(/instagram\.com$/.test(host)) return { label:"ইনস্টাগ্রাম", icon:"instagram" };
  if(/tiktok\.com$/.test(host)) return { label:"টিকটক", icon:"tiktok" };
  if(/t\.me$\vert{}telegram\.org$/.test(host)) return { label:"টেলিগ্রাম", icon:"chat" };
  if(/wa\.me$\vert{}whatsapp\.com$/.test(host)) return { label:"হোয়াটসঅ্যাপ", icon:"whatsapp" };
  if(/drive\.google\.com$/.test(host)) return { label:"ড্রাইভ ফাইল", icon:"drive" };
  return { label:"লিংক", icon:"link" };
}

const PHOTO_RESIZER = true;
const THUMB_WIDTH = 1200;
function thumbUrl(src){
  if(!PHOTO_RESIZER || !/^https?:\/\//i.test(src) || /\.gif(\?.*)?$/i.test(src)) return src;
  return "https://wsrv.nl/?url=" + encodeURIComponent(src) + "&w=" + THUMB_WIDTH + "&we&q=80&output=webp";
}

const IMG_EXT_RE = /\.(jpe?g|png|gif|webp|avif|bmp)(\?.*)?$/i;
const VID_EXT_RE = /\.(mp4|webm|mov|m4v)(\?.*)?$/i;
const AUD_EXT_RE = /\.(mp3|wav|m4a|aac|flac|ogg)(\?.*)?$/i;

function classifyBareUrl(post, rawUrl){
  const url = resolveUrl(rawUrl.trim());
  const yt = youTubeEmbedUrl(url);
  if(yt){ post.embeds.push({ platform:"youtube", embedUrl: yt }); return; }
  if(IMG_EXT_RE.test(url)){ post.images.push(url); return; }
  if(VID_EXT_RE.test(url)){ post.videos.push(url); return; }
  if(AUD_EXT_RE.test(url)){ post.audios.push(url); return; }
  const info = platformInfo(url);
  post.links.push({ url, label: info.label, kind: info.icon });
}

const BN_MONTHS = { "জানুয়ারি":0,"ফেব্রুয়ারি":1,"মার্চ":2,"এপ্রিল":3,"মে":4,"জুন":5,"জুলাই":6,"আগস্ট":7,"সেপ্টেম্বর":8,"অক্টোবর":9,"নভেম্বর":10,"ডিসেম্বর":11 };
function parseFlexibleDate(str){
  if(!str) return null;
  const bnDigits = "০১২৩৪৫৬৭৮৯";
  const normalized = str.replace(/[০-৯]/g, d => bnDigits.indexOf(d));
  const bnMatch = normalized.match(/^(\d{1,2})\s+([^\s\d]+)\s+(\d{4})$/);
  if(bnMatch && BN_MONTHS.hasOwnProperty(bnMatch[2])){
    return new Date(Number(bnMatch[3]), BN_MONTHS[bnMatch[2]], Number(bnMatch[1])).getTime();
  }
  const d = new Date(normalized);
  return isNaN(d.getTime()) ? null : d.getTime();
}

function sortPostsLatestFirst(posts){
  return posts
    .map((post, i) => ({ post, i, ts: parseFlexibleDate(post.date) }))
    .sort((a, b) => {
      if(a.ts != null && b.ts != null) return b.ts - a.ts;
      if(a.ts != null) return -1;
      if(b.ts != null) return 1;
      return a.i - b.i;
    })
    .map(x => x.post);
}

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

  const urlLineRe = /^https?:\/\/\S+$/i;
  const posts = [];
  for(const block of blocks){
    const lines = block.map(l=>l.trim()).filter(l=>l.length && !l.startsWith("#"));
    if(!lines.length) continue;
    const post = { date:"", text:[], images:[], videos:[], audios:[], links:[], embeds:[] };
    for(const line of lines){
      const m = line.match(/^(DATE|IMG|VID|AUD|DRIVE|LINK)\s*:\s*(.+)$/i);
      if(!m){
        if(urlLineRe.test(line)){ classifyBareUrl(post, line); continue; }
        post.text.push(line);
        continue;
      }
      const tag = m[1].toUpperCase();
      const val = m[2].trim();
      if(tag === "DATE") post.date = val;
      else if(tag === "IMG") post.images.push(resolveUrl(val));
      else if(tag === "VID"){
        const yt = youTubeEmbedUrl(resolveUrl(val));
        if(yt) post.embeds.push({ platform:"youtube", embedUrl: yt });
        else post.videos.push(resolveUrl(val));
      }
      else if(tag === "AUD") post.audios.push(resolveUrl(val));
      else if(tag === "DRIVE" || tag === "LINK"){
        const lm = val.match(/^(\S+)\s*\((.+)\)\s*$/);
        const url = resolveUrl(lm ? lm[1] : val);
        const info = platformInfo(url);
        post.links.push({
          url,
          label: lm ? lm[2] : (tag === "DRIVE" ? "ড্রাইভ ফাইল" : info.label),
          kind: tag === "DRIVE" ? "drive" : info.icon
        });
      }
    }
    post.text = post.text.join("\n");
    if(post.text || post.images.length || post.videos.length || post.audios.length || post.links.length || post.embeds.length){
      posts.push(post);
    }
  }
  return posts;
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

function mediaThumbHtml(kind, src, index, total){
  const s = escapeHtml(src);
  if(kind === "img"){
    return `<div class="media-thumb is-img" data-kind="img" data-src="${s}" role="button" tabindex="0" aria-label="ছবি ${index+1} বড় করে দেখো">
      <img alt="" decoding="async">
      <span class="photostack-badge">${index + 1} / ${total}</span>
    </div>`;
  }
  return `<div class="media-thumb is-vid" data-kind="vid" data-src="${s}" role="button" tabindex="0" aria-label="ভিডিও চালাও">
    <video muted playsinline preload="metadata"></video>
    <div class="media-play">${icon("play")}</div>
  </div>`;
}

function embedHtml(e){
  const id = (e.embedUrl.split("/embed/")[1] || "").replace(/[^\w-]/g, "");
  const cover = id ? `<img src="https://i.ytimg.com/vi/${escapeHtml(id)}/hqdefault.jpg" alt="" decoding="async" loading="lazy">` : "";
  return `<div class="post-embed" data-embed="${escapeHtml(e.embedUrl)}" role="button" tabindex="0" aria-label="ভিডিও চালাও">
    ${cover}
    <div class="media-play">${icon("play")}</div>
  </div>`;
}

function renderPost(post){
  const media = [
    ...post.images.map(src=>({kind:"img",src})),
    ...post.videos.map(src=>({kind:"vid",src})),
  ];
  
  const totalImgs = post.images.length;
  const mediaHtml = media.length
    ? `<div class="post-media ${totalImgs > 1 ? 'photostack-group' : ''}">${media.map((m,i)=>mediaThumbHtml(m.kind, m.src, i, totalImgs)).join("")}</div>`
    : "";
    
  const embedsHtml = (post.embeds||[]).map(embedHtml).join("");
  const audioHtml = post.audios.map(src=>`
    <div class="post-audio" data-src="${escapeHtml(src)}" role="button" tabindex="0">
      <span class="post-audio-icon">${icon("play")}</span>
      <span class="post-audio-label">অডিও শুনতে ক্লিক করো</span>
    </div>`).join("");
  const linksHtml = post.links.length
    ? `<div class="post-links">${post.links.map(l=>`
        <a class="post-link" href="${escapeHtml(l.url)}" target="_blank" rel="noopener">
          ${icon(l.kind)}${escapeHtml(l.label)}
        </a>`).join("")}</div>`
    : "";
    
  return `<article class="post">
    ${post.date ? `<p class="post-date">${escapeHtml(post.date)}</p>` : ""}
    ${post.text ? `<p class="post-text">${escapeHtml(post.text)}</p>` : ""}
    ${mediaHtml}
    ${embedsHtml}
    ${audioHtml}
    ${linksHtml}
  </article><div class="post-divider"><span>✦ BMT ✦</span></div>`;
}

let mediaObserver = null;

function sizeThumbToMedia(thumb, w, h){
  if(!w || !h) return;
  thumb.style.aspectRatio = w + " / " + h;
  if(thumb.dataset.kind === "img") thumb.style.maxWidth = w + "px";
}

function loadThumbMedia(thumb){
  const media = thumb.querySelector("img, video");
  if(!media || media.dataset.started) return;
  media.dataset.started = "1";
  const src = thumb.dataset.src;
  if(media.tagName === "IMG"){
    const fast = thumbUrl(src);
    let usedOriginal = (fast === src);
    let timer = 0;
    const useOriginal = () => {
      if(usedOriginal) return false;
      usedOriginal = true;
      clearTimeout(timer);
      media.src = src;
      return true;
    };
    media.addEventListener("load", () => {
      clearTimeout(timer);
      sizeThumbToMedia(thumb, media.naturalWidth, media.naturalHeight);
    });
    media.addEventListener("error", () => {
      if(!useOriginal()) thumb.classList.add("failed");
    });
    if(!usedOriginal){
      timer = setTimeout(() => { if(!media.naturalWidth) useOriginal(); }, 9000);
    }
    media.src = fast;
  } else {
    media.addEventListener("loadedmetadata", () => sizeThumbToMedia(thumb, media.videoWidth, media.videoHeight), { once:true });
    media.addEventListener("error", () => thumb.classList.add("failed"), { once:true });
    media.src = src + "#t=0.1";
  }
}

function observeMedia(scope, rootEl){
  if(mediaObserver){ mediaObserver.disconnect(); mediaObserver = null; }
  const thumbs = scope.querySelectorAll(".media-thumb");
  if(!thumbs.length) return;
  if(!("IntersectionObserver" in window)){
    thumbs.forEach(loadThumbMedia);
    return;
  }
  mediaObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      mediaObserver.unobserve(entry.target);
      loadThumbMedia(entry.target);
    });
  }, { root: rootEl, rootMargin: "700px 0px" });
  thumbs.forEach(t => mediaObserver.observe(t));
}

const shelf = document.getElementById("shelf");
const postCache = {};

SUBJECTS.forEach((s, i) => {
  s.domId = `count-${i}`;
  const card = document.createElement("div");
  card.className = "tile folder";
  card.setAttribute("role", "button");
  card.tabIndex = 0;
  card.style.setProperty("--tab", `var(--${s.tab})`);
  card.innerHTML = `
    <div class="folder-icon">${icon(s.icon)}</div>
    <div class="folder-name">${escapeHtml(s.name)}</div>
    <div class="folder-meta"><span>খুলতে ক্লিক করো</span><span class="folder-count" id="${s.domId}"></span></div>
  `;
  card.addEventListener("click", () => openSubject(s));
  card.addEventListener("keydown", e => {
    if(e.key === "Enter" || e.key === " "){ e.preventDefault(); openSubject(s); }
  });
  shelf.appendChild(card);
});

const feedOverlay = document.getElementById("feedOverlay");
const feedTitle = document.getElementById("feedTitle");
const feedKicker = document.getElementById("feedKicker");
const feedPosts = document.getElementById("feedPosts");
const feedLoading = document.getElementById("feedLoading");
const feedEmpty = document.getElementById("feedEmpty");
const feedBody = document.getElementById("feedBody");

let feedToken = 0;

/* Virtualized windowing parameters */
let currentPostsAll = [];
const CHUNK_SIZE = 6;
let renderedCount = 0;

function renderChunk(postsToRender) {
  const htmlFragment = postsToRender.map(renderPost).join("");
  feedPosts.insertAdjacentHTML('beforeend', htmlFragment);
  observeMedia(feedPosts, feedBody);
}

function handleFeedScroll() {
  if (!feedBody) return;
  const scrollTop = feedBody.scrollTop;
  const scrollHeight = feedBody.scrollHeight;
  const clientHeight = feedBody.clientHeight;

  // Load more down
  if (scrollTop + clientHeight >= scrollHeight - 300) {
    if (renderedCount < currentPostsAll.length) {
      const nextBatch = currentPostsAll.slice(renderedCount, renderedCount + CHUNK_SIZE);
      renderedCount += nextBatch.length;
      renderChunk(nextBatch);
    }
  }

  // Memory management: remove items far up if too many rendered
  const articles = feedPosts.querySelectorAll('article.post');
  if (articles.length > 12 && scrollTop > 1500) {
    for (let i = 0; i < articles.length - 8; i++) {
      const art = articles[i];
      const div = art.nextElementSibling;
      if (div && div.classList.contains('post-divider')) div.remove();
      art.remove();
    }
  }
}

feedBody.addEventListener('scroll', handleFeedScroll);

async function openFeed({kicker, title, emptyText, loader}){
  const token = ++feedToken;
  feedKicker.textContent = kicker;
  feedTitle.textContent = title;
  feedPosts.innerHTML = "";
  feedEmpty.hidden = true;
  feedLoading.hidden = false;
  feedOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
  feedBody.scrollTop = 0;
  renderedCount = 0;
  currentPostsAll = [];

  try{
    const loaded = await loader();
    if(token !== feedToken) return;
    currentPostsAll = sortPostsLatestFirst(loaded);
    feedLoading.hidden = true;
    if(!currentPostsAll.length){
      feedEmpty.hidden = false;
      feedEmpty.textContent = emptyText || "এখনো কোনো পোস্ট নেই। প্রথম হোমওয়ার্কটা এখানেই যোগ হবে।";
      return;
    }
    const initialBatch = currentPostsAll.slice(0, CHUNK_SIZE);
    renderedCount = initialBatch.length;
    renderChunk(initialBatch);
  }catch(err){
    if(token !== feedToken) return;
    feedLoading.hidden = true;
    feedEmpty.hidden = false;
    feedEmpty.textContent = (err instanceof TypeError)
      ? "ইন্টারনেট সংযোগে সমস্যা হচ্ছে — সংযোগ দেখে আবার চেষ্টা করো।"
      : (err.message || emptyText || "লোড করা যায়নি।");
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

let socialCache = null;

function openSocialFeed(){
  openFeed({
    kicker: "যোগাযোগ",
    title: "সবার সাথে যুক্ত থাকো",
    emptyText: "GitHub রিপোতে এখনো social.txt পাওয়া যাচ্ছে না — uuhjeike/BMT রিপোর রুটে \"social.txt\" আপলোড করো।",
    async loader(){
      if(!socialCache){
        const res = await fetch(SOCIAL_FILE, {cache:"no-store"});
        if(!res.ok) throw new Error("GitHub রিপোতে এখনো social.txt পাওয়া যাচ্ছে না — uuhjeike/BMT রিপোর রুটে \"social.txt\" আপলোড করো।");
        const raw = await res.text();
        socialCache = parsePosts(raw);
      }
      return socialCache;
    }
  });
}
document.getElementById("navSocial").addEventListener("click", openSocialFeed);

function closeFeed(){
  feedToken++;
  if(mediaObserver){ mediaObserver.disconnect(); mediaObserver = null; }
  feedOverlay.classList.remove("open");
  document.body.style.overflow = "";
  setTimeout(() => { if(!feedOverlay.classList.contains("open")) feedPosts.innerHTML = ""; }, 350);
}
document.getElementById("feedClose").addEventListener("click", closeFeed);
feedOverlay.addEventListener("click", e => { if(e.target === feedOverlay) closeFeed(); });

const lightbox = document.getElementById("lightbox");
const lightboxStage = document.getElementById("lightboxStage");

let lightboxToken = 0;
function openLightbox(kind, src, preview){
  const s = escapeHtml(src);
  const token = ++lightboxToken;
  if(kind === "img"){
    const first = (preview && preview !== src) ? preview : src;
    lightboxStage.innerHTML = `
      <img src="${escapeHtml(first)}" alt="" decoding="async">
      <a class="lightbox-original" href="${s}" target="_blank" rel="noopener">মূল ছবি নতুন ট্যাবে দেখো (আসল কোয়ালিটি)</a>`;
    const im = lightboxStage.querySelector("img");
    let triedOriginal = (first === src);
    im.addEventListener("error", () => {
      if(token !== lightboxToken) return;
      if(!triedOriginal){ triedOriginal = true; im.src = src; return; }
      im.outerHTML = `<p class="lightbox-msg">ছবিটা লোড করা যায়নি।</p>`;
    });
    if(first !== src){
      const hi = new Image();
      hi.onload = () => {
        if(token !== lightboxToken) return;
        const cur = lightboxStage.querySelector("img");
        if(cur) cur.src = src;
      };
      hi.src = src;
    }
  }
  else if(kind === "vid") lightboxStage.innerHTML = `<video src="${s}" controls autoplay playsinline></video>`;
  else if(kind === "aud") lightboxStage.innerHTML = `<audio src="${s}" controls autoplay></audio>`;
  else return;
  lightbox.classList.add("open");
}
function closeLightbox(){
  lightboxToken++;
  const playing = lightboxStage.querySelector("video, audio");
  if(playing){ try{ playing.pause(); }catch(e){} }
  lightbox.classList.remove("open");
  lightboxStage.innerHTML = "";
}
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
  if(e.target === lightbox || e.target === lightboxStage) closeLightbox();
});
document.addEventListener("keydown", e => {
  if(e.key !== "Escape") return;
  if(lightbox.classList.contains("open")) closeLightbox();
  else if(feedOverlay.classList.contains("open")) closeFeed();
});

function playEmbed(el){
  const url = el.dataset.embed;
  if(!url) return;
  el.removeAttribute("data-embed");
  el.removeAttribute("role");
  el.removeAttribute("tabindex");
  el.innerHTML = `<iframe src="${escapeHtml(url)}?autoplay=1&rel=0&playsinline=1" title="ভিডিও" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

feedPosts.addEventListener("click", e => {
  const thumb = e.target.closest(".media-thumb");
  if(thumb){
    const im = thumb.querySelector("img");
    const preview = (im && im.naturalWidth) ? (im.currentSrc || im.src) : "";
    openLightbox(thumb.dataset.kind, thumb.dataset.src, preview);
    return;
  }
  const aud = e.target.closest(".post-audio");
  if(aud){ openLightbox("aud", aud.dataset.src); return; }
  const emb = e.target.closest(".post-embed[data-embed]");
  if(emb){ playEmbed(emb); }
});

feedPosts.addEventListener("keydown", e => {
  if(e.key !== "Enter" && e.key !== " ") return;
  const t = e.target;
  if(t && t.getAttribute && t.getAttribute("role") === "button"){
    e.preventDefault();
    t.click();
  }
});

const BN_DIGITS = "০১২৩৪৫৬৭৮৯";
function bnToEn(str){ return str.replace(/[০-৯]/g, d => BN_DIGITS.indexOf(d)); }

function parseTeacherRow(row){
  if(row.includes("|")){
    const [name="", subject="", phone="", role=""] = row.split("|").map(p=>p.trim());
    return { name, subject, phone: bnToEn(phone), role };
  }
  const flat = bnToEn(row);
  const pm = flat.match(/\+?\d[\d\s().-]{6,}\d/);
  const phone = pm ? pm[0].trim() : "";
  const name = (pm ? flat.replace(pm[0], "") : row)
    .replace(/[\s\-–—:,;|()]+$/, "").replace(/^[\s\-–—:,;|]+/, "").trim();
  const origName = pm ? row.slice(0, flat.indexOf(pm[0])).replace(/[\s\-–—:,;|()]+$/, "").trim() : name;
  return { name: origName || name, subject:"", phone, role:"" };
}

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
      const { name, subject, phone, role } = parseTeacherRow(row);
      const tab = tabs[i % tabs.length];
      const tel = phone.replace(/[^\d+]/g, "");
      const inner = `
        <div class="folder-icon">${icon("users")}</div>
        <div class="folder-name">${escapeHtml(name)}</div>
        <div class="folder-meta"><span>${escapeHtml(subject || role || "যোগাযোগ")}</span>${role ? `<span class="folder-count">${escapeHtml(role)}</span>` : ""}</div>`;
      const main = tel
        ? `<a class="tile-main" href="tel:${escapeHtml(tel)}" aria-label="${escapeHtml(name)} — কল করো">${inner}</a>`
        : `<div class="tile-main">${inner}</div>`;
      const actions = tel ? `
        <div class="tile-actions">
          <a href="tel:${escapeHtml(tel)}" aria-label="কল করো">${icon("phone")}</a>
          <a href="${waLink(phone)}" target="_blank" rel="noopener" aria-label="হোয়াটসঅ্যাপ">${icon("whatsapp")}</a>
        </div>` : "";
      return `<div class="tile teacher-tile" style="--tab:var(--${tab})">${main}${actions}</div>`;
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

const UNSTOPPABLE_START = new Date(2026, 8, 24, 0, 0, 0);
const pDays = document.getElementById("pDays");
const pHours = document.getElementById("pHours");
const pMins = document.getElementById("pMins");
const pSecs = document.getElementById("pSecs");

function pad(n){ return String(n).padStart(2,"0"); }
function setText(el, v){ if(el.textContent !== v) el.textContent = v; }

function updatePulse(){
  const diff = Math.max(0, Date.now() - UNSTOPPABLE_START.getTime());
  const totalSec = Math.floor(diff/1000);
  setText(pDays, String(Math.floor(totalSec/86400)));
  setText(pHours, pad(Math.floor((totalSec%86400)/3600)));
  setText(pMins, pad(Math.floor((totalSec%3600)/60)));
  setText(pSecs, pad(totalSec%60));
}
if(pDays){ updatePulse(); setInterval(updatePulse, 1000); }
