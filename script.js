/* =========================================================
   BMT — script.js
   Separate data + functionality file.
   ========================================================= */

/*
  IMPORTANT:
  GitHub "blob" URLs are page URLs, not raw text endpoints.
  The code below automatically converts each supplied GitHub
  blob URL into raw.githubusercontent.com and reads the TXT
  as UTF-8. This is what makes Bengali display correctly.
*/

const subjects = [
  { name: "বাংলা-১", url: "https://github.com/uuhjeike/BMT/blob/main/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE-%E0%A7%A7.txt" },
  { name: "ইংরেজি-১", url: "https://github.com/uuhjeike/BMT/blob/main/%E0%A6%87%E0%A6%82%E0%A6%B0%E0%A7%87%E0%A6%9C%E0%A6%BF-%E0%A7%A7.txt" },
  { name: "কম্পিউটার অফিস অ্যাপ্লিকেশন-১", url: "https://github.com/uuhjeike/BMT/blob/main/%E0%A6%95%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A6%BF%E0%A6%89%E0%A6%9F%E0%A6%BE%E0%A6%B0%20%E0%A6%85%E0%A6%AB%E0%A6%BF%E0%A6%B8%20%E0%A6%85%E0%A6%AA%E0%A7%8D%E0%A6%B2%E0%A6%BF%E0%A6%95%E0%A7%87%E0%A6%B6%E0%A6%A8-%E0%A7%A7.txt" },
  { name: "ব্যবসায় গণিত ও পরিসংখ্যান", url: "https://github.com/uuhjeike/BMT/blob/main/%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%B8%E0%A6%BE%E0%A7%9F%20%E0%A6%97%E0%A6%A3%E0%A6%BF%E0%A6%A4%20%E0%A6%93%20%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%B8%E0%A6%82%E0%A6%96%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8.txt" },
  { name: "হিসাববিজ্ঞান নীতি ও প্রয়োগ-১", url: "https://github.com/uuhjeike/BMT/blob/main/%E0%A6%B9%E0%A6%BF%E0%A6%B8%E0%A6%BE%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A7%8D%E0%A6%9E%E0%A6%BE%E0%A6%A8%20%E0%A6%A8%E0%A7%80%E0%A6%A4%E0%A6%BF%20%E0%A6%93%20%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%9F%E0%A7%8B%E0%A6%97-%E0%A7%A1.txt" },
  { name: "অর্থনীতি ও বাণিজ্যিক ভূগোল", url: "https://github.com/uuhjeike/BMT/blob/main/%E0%A6%85%E0%A6%B0%E0%A7%8D%E0%A6%A5%E0%A6%A8%E0%A7%80%E0%A6%A4%E0%A6%BF%20%E0%A6%93%20%E0%A6%AC%E0%A6%BE%E0%A6%A3%E0%A6%BF%E0%A6%9C%E0%A7%8D%E0%A6%AF%E0%A6%BF%E0%A6%95%20%E0%A6%AD%E0%A7%82%E0%A6%97%E0%A7%8B%E0%A6%B2.txt" },
  { name: "ব্যবসায় সংগঠন ও ব্যবস্থাপনা-১", url: "https://github.com/uuhjeike/BMT/blob/main/%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%B8%E0%A6%BE%E0%A7%9F%20%E0%A6%B8%E0%A6%82%E0%A6%97%E0%A6%A0%E0%A6%A8%20%E0%A6%93%20%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%AA%E0%A6%A8%E0%A6%BE-%E0%A7%A১.txt" },
  { name: "মার্কেটিং নীতি ও প্রয়োগ-১", url: "https://github.com/uuhjeike/BMT/blob/main/%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%95%E0%A7%87%E0%A6%9F%E0%A6%BF%E0%A6%82%20%E0%A6%A8%E0%A7%80%E0%A6%A4%E0%A6%BF%20%E0%A6%93%20%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%9F%E0%A7%8B%E0%A6%97-%E0%A7%A১.txt" },
  { name: "ডিজিটাল টেকনোলজি ইন বিজনেস-১", url: "https://github.com/uuhjeike/BMT/blob/main/%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BF%E0%A6%9F%E0%A6%BE%E0%A6%B2%20%E0%A6%9F%E0%A7%87%E0%A6%95%E0%A6%A8%E0%A7%8B%E0%A6%B2%E0%A6%9C%E0%A6%BF%20%E0%A6%87%E0%A6%A8%20%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A6%A8%E0%A7%87%E0%A6%B8-%E0%A7%A১.txt" },
  { name: "হিউম্যান রিসোর্স ম্যানেজমেন্ট-১", url: "https://github.com/uuhjeike/BMT/blob/main/%E0%A6%B9%E0%A6%BF%E0%A6%89%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%20%E0%A6%B0%E0%A6%BF%E0%A6%B8%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%20%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%9C%E0%A6%AE%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F-%E0%A7%A১.txt" }
];

/*
  Add the real teacher phone numbers here.
  Example:
  {
    name: "স্যার",
    detail: "বিষয় / শিক্ষক",
    phone: "8801XXXXXXXXX"
  }
*/
const teachers = [];

/*
  Add real social/group URLs here.
  Example:
  {
    name: "BMT Facebook Group",
    detail: "Facebook",
    url: "https://facebook.com/..."
  }
*/
const socials = [];


/* ---------- GitHub URL handling ---------- */

function toRawGithubUrl(url) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname === "github.com" && parsed.pathname.includes("/blob/")) {
      const parts = parsed.pathname.split("/").filter(Boolean);
      const owner = parts[0];
      const repo = parts[1];
      const blobIndex = parts.indexOf("blob");

      if (owner && repo && blobIndex >= 0 && parts[blobIndex + 1]) {
        const branch = parts[blobIndex + 1];
        const filePath = parts.slice(blobIndex + 2).join("/");
        return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`;
      }
    }

    return url;
  } catch {
    return url;
  }
}


/* ---------- Render subjects ---------- */

const subjectsGrid = document.getElementById("subjectsGrid");

function renderSubjects() {
  subjectsGrid.innerHTML = subjects.map((subject, index) => `
    <button
      class="subject-card glass"
      type="button"
      data-index="${index}"
      aria-label="${escapeHtml(subject.name)} খুলুন"
    >
      <span class="subject-number">${String(index + 1).padStart(2, "0")}</span>

      <h3>${escapeHtml(subject.name)}</h3>

      <span class="subject-open">
        <span>বাংলা TXT পড়ুন</span>
        <span>→</span>
      </span>
    </button>
  `).join("");

  subjectsGrid.querySelectorAll(".subject-card").forEach(card => {
    card.addEventListener("click", () => {
      openReader(Number(card.dataset.index));
    });
  });
}


/* ---------- Bengali TXT reader ---------- */

const overlay = document.getElementById("readerOverlay");
const readerTitle = document.getElementById("readerTitle");
const readerText = document.getElementById("readerText");
const readerLoading = document.getElementById("readerLoading");
const readerError = document.getElementById("readerError");
const rawLink = document.getElementById("rawLink");
const closeReaderButton = document.getElementById("closeReader");

async function openReader(index) {
  const subject = subjects[index];
  const rawUrl = toRawGithubUrl(subject.url);

  readerTitle.textContent = subject.name;
  rawLink.href = rawUrl;

  readerText.textContent = "";
  readerError.hidden = true;
  readerLoading.hidden = false;

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  try {
    const response = await fetch(rawUrl, {
      method: "GET",
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    /*
      Explicit UTF-8 decoding prevents Bengali text from being
      interpreted as the wrong character encoding.
    */
    const buffer = await response.arrayBuffer();
    const text = new TextDecoder("utf-8", { fatal: false }).decode(buffer);

    readerText.textContent = text.replace(/^\uFEFF/, "");
    readerLoading.hidden = true;

  } catch (error) {
    readerLoading.hidden = true;
    readerError.hidden = false;
    readerError.textContent =
      "ফাইলটি সরাসরি পড়া যায়নি। RAW বাটনে চাপ দিয়ে ফাইলটি খুলুন।";
    console.error("BMT TXT loading error:", error);
  }
}

function closeReader() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

closeReaderButton.addEventListener("click", closeReader);

overlay.addEventListener("click", event => {
  if (event.target === overlay) closeReader();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeReader();
});


/* ---------- Teachers ---------- */

const teachersGrid = document.getElementById("teachersGrid");

function renderTeachers() {
  if (!teachers.length) {
    teachersGrid.innerHTML = `
      <div class="contact-button glass" style="grid-column:1/-1">
        <div class="contact-info">
          <strong>স্যারদের নম্বর এখানে যোগ করুন</strong>
          <span>script.js-এর teachers array-তে phone number বসালেই button সক্রিয় হবে।</span>
        </div>
        <span class="contact-arrow">＋</span>
      </div>
    `;
    return;
  }

  teachersGrid.innerHTML = teachers.map(teacher => `
    <a class="contact-button glass"
       href="tel:+${encodeURIComponent(teacher.phone)}">
      <div class="contact-info">
        <strong>${escapeHtml(teacher.name)}</strong>
        <span>${escapeHtml(teacher.detail || "Phone")}</span>
      </div>
      <span class="contact-arrow">☎</span>
    </a>
  `).join("");
}


/* ---------- Social ---------- */

const socialGrid = document.getElementById("socialGrid");

function renderSocials() {
  if (!socials.length) {
    socialGrid.innerHTML = `
      <div class="contact-button glass" style="grid-column:1/-1">
        <div class="contact-info">
          <strong>Social links এখানে যোগ করুন</strong>
          <span>script.js-এর socials array-তে URL বসালেই button সক্রিয় হবে।</span>
        </div>
        <span class="contact-arrow">＋</span>
      </div>
    `;
    return;
  }

  socialGrid.innerHTML = socials.map(item => `
    <a class="contact-button glass"
       href="${escapeAttribute(item.url)}"
       target="_blank"
       rel="noopener noreferrer">
      <div class="contact-info">
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.detail || "Social")}</span>
      </div>
      <span class="contact-arrow">↗</span>
    </a>
  `).join("");
}


/* ---------- UNSTOPPABLE stopwatch ---------- */

const START_DATE = new Date("2026-09-24T00:00:00");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function pad(value) {
  return String(value).padStart(2, "0");
}

function updateTimer() {
  const now = new Date();
  let difference = now.getTime() - START_DATE.getTime();

  if (difference < 0) difference = 0;

  const totalSeconds = Math.floor(difference / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = days;
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}

updateTimer();
setInterval(updateTimer, 1000);


/* ---------- Safe HTML helpers ---------- */

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}


/* ---------- Initial render ---------- */

renderSubjects();
renderTeachers();
renderSocials();
