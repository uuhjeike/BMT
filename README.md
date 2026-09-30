BMT — Study Hub

«A lightweight, static study-management website for organizing subjects, homework, classwork, notes, teachers, social links, and study resources in one place.»

Live Website: https://uuhjeike.github.io/BMT/
Repository: https://github.com/uuhjeike/BMT

---

📚 What Is BMT?

BMT — Study Hub is a simple, lightweight, browser-based study platform designed to keep academic information organized and easy to access.

The project is intentionally built without a backend, database, login system, or complicated server infrastructure.

Instead, the website reads its content directly from ".txt" files stored in the GitHub repository.

That means:

Edit a text file → Commit the change → Open the website → Updated content appears.

No database management is required, and most content updates do not require changing the website's HTML, CSS, or JavaScript.

---

🎯 Main Purpose

The project is designed to provide a single place for:

- 📖 Academic subjects
- 📝 Homework
- 📒 Classwork
- 📚 Study notes
- 👨‍🏫 Teacher information
- 📱 Teacher contact options
- 🌐 Social/community links
- 🖼️ Images
- 🎬 Videos
- 🎵 Audio
- 🔗 External resources
- 📁 GitHub-hosted files
- ▶️ YouTube videos
- 📅 Date-based post organization

The system keeps the website interface separate from the actual study content, making future updates much easier.

---

✨ Key Features

📖 Subject-Based Content

Each subject has its own dedicated content file.

Examples include:

- বাংলা-১
- ইংরেজি-১
- কম্পিউটার অফিস অ্যাপ্লিকেশন-১
- ব্যবসায় গণিত ও পরিসংখ্যান
- হিসাববিজ্ঞান নীতি ও প্রয়োগ-১
- অর্থনীতি ও বাণিজ্যিক ভূগোল
- ব্যবসায় সংগঠন ও ব্যবস্থাপনা-১
- মার্কেটিং নীতি ও প্রয়োগ-১
- ডিজিটাল টেকনোলজি ইন বিজনেস-১
- হিউম্যান রিসোর্স ম্যানেজমেন্ট-১

Each subject can maintain its own independent stream of posts.

---

📝 Simple Content System

The most important design principle of BMT is that content is controlled through text files.

For example:

বাংলা-১.txt
ইংরেজি-১.txt
কম্পিউটার অফিস অ্যাপ্লিকেশন-১.txt
ব্যবসায় গণিত ও পরিসংখ্যান.txt

You do not need to modify the website interface every time you want to add a new study post.

Simply edit the appropriate ".txt" file.

---

🧩 Post Format

Posts are separated using a line containing:

-

Example:

-
DATE: ১ অক্টোবর ২০২৬
আজকের বাংলা-১ ক্লাসের গুরুত্বপূর্ণ নোট।

IMG: https://example.com/note.jpg
-

DATE: ৩০ সেপ্টেম্বর ২০২৬
আজকের হোমওয়ার্ক:
১. অধ্যায় ৩ পড়তে হবে।
২. প্রশ্নগুলোর উত্তর লিখতে হবে।
-

A post can contain multiple lines.

The system automatically interprets supported tags and displays the appropriate content.

---

🏷️ Supported Content Tags

Tag| Purpose
"DATE:"| Sets the post date
"IMG:"| Adds an image
"VID:"| Adds a video
"AUD:"| Adds an audio file
"DRIVE:"| Creates a Google Drive button
"LINK:"| Creates a custom external-link button

Example:

DATE: ১ অক্টোবর ২০২৬

Today's homework.

IMG: https://example.com/photo.jpg

VID: https://example.com/video.mp4

AUD: https://example.com/audio.mp3

DRIVE: https://drive.google.com/... (Class Materials)

LINK: https://example.com (Open Resource)

---

🔗 Automatic Link Detection

Explicit tags are not always required.

If a post contains a standalone URL, the website automatically attempts to determine what type of resource it represents.

Images

Supported image formats include:

.jpg
.jpeg
.png
.gif
.webp
.avif
.bmp

These are displayed as images.

Videos

Supported video formats include:

.mp4
.webm
.mov
.m4v

These are displayed as video content.

Audio

Supported audio formats include:

.mp3
.wav
.m4a
.aac
.flac
.ogg

These are presented through an audio player.

YouTube

YouTube URLs such as:

https://youtube.com/watch?v=...
https://youtu.be/...
https://youtube.com/shorts/...

can be recognized and displayed as embedded video players.

Other Websites

Links to platforms such as:

- Facebook
- Instagram
- TikTok
- Telegram
- WhatsApp
- Google Drive
- Other websites

are displayed as appropriate clickable buttons.

This makes the content system much easier to use because you can often paste a link directly without manually deciding which tag to use.

---

🛠️ GitHub Blob Link Support

The system also handles GitHub "blob" URLs.

For example:

https://github.com/uuhjeike/BMT/blob/main/Files/example.jpg

can be converted internally to the corresponding raw file URL when appropriate.

This is useful because GitHub's normal "blob" URL points to a GitHub webpage rather than directly to the file itself.

Therefore, users can copy a file URL directly from GitHub without manually converting it to a "raw.githubusercontent.com" address.

---

📅 Automatic Date Sorting

Posts are automatically organized from:

Newest → Oldest

when a valid "DATE:" value is available.

For example:

DATE: ১ অক্টোবর ২০২৬

appears before:

DATE: ৩০ সেপ্টেম্বর ২০২৬

The system supports date formats such as:

15 Jan 2026

and Bengali date formats such as:

১৫ জানুয়ারি ২০২৬

Posts without a recognizable date are placed after dated posts.

---

👨‍🏫 Teacher Information

Teacher information is stored separately in:

teachers.txt

The basic format is:

Name | Subject | Mobile Number | Sir/Madam

Example:

Example Teacher | বাংলা-১ | 01XXXXXXXXX | Sir

The website can automatically generate:

- Teacher name
- Subject
- Calling option
- WhatsApp option

The system accepts phone numbers beginning with either:

0

or:

880

---

🌐 Social & Community Feed

Social/community information is stored in:

social.txt

The social feed uses the same content system as the subject feeds.

Therefore it can contain:

- Text
- Dates
- Images
- Videos
- Audio
- YouTube links
- WhatsApp links
- Facebook links
- Instagram links
- Telegram links
- Google Drive resources
- Other external links

This makes "social.txt" a flexible communication and resource feed rather than simply a list of social-media URLs.

---

🗂️ Repository Structure

The current project is organized around a small number of core website files and content files.

BMT/
│
├── index.html
├── style.css
├── script.js
│
├── README.md
│
├── teachers.txt
├── social.txt
│
├── বাংলা-১.txt
├── ইংরেজি-১.txt
├── কম্পিউটার অফিস অ্যাপ্লিকেশন-১.txt
├── ব্যবসায় গণিত ও পরিসংখ্যান.txt
├── হিসাববিজ্ঞান নীতি ও প্রয়োগ-১.txt
├── অর্থনীতি ও বাণিজ্যিক ভূগোল.txt
├── ব্যবসায় সংগঠন ও ব্যবস্থাপনা-১.txt
├── মার্কেটিং নীতি ও প্রয়োগ-১.txt
├── ডিজিটাল টেকনোলজি ইন বিজনেস-১.txt
├── হিউম্যান রিসোর্স ম্যানেজমেন্ট-১.txt
│
└── Files/
    └── Optional media files

---

⚙️ How the Website Works

The project has three main code layers.

1. "index.html"

Responsible for the basic webpage structure.

It provides the areas into which the JavaScript application places the content.

---

2. "style.css"

Responsible for the visual presentation.

It controls things such as:

- Layout
- Colors
- Glass-style panels
- Buttons
- Cards
- Typography
- Responsive behavior
- Hover effects
- Visual transitions

The visual design does not control the content format.

---

3. "script.js"

This is the main application logic.

It handles things such as:

- Subject configuration
- Content-file loading
- Text parsing
- Post generation
- Date sorting
- Media detection
- Link detection
- YouTube recognition
- GitHub-link conversion
- Teacher information
- Social feed rendering
- Interactive interface behavior

---

🔄 Content Loading Architecture

The website reads content from the GitHub repository using a raw-content base URL:

const GITHUB_RAW_BASE =
"https://raw.githubusercontent.com/uuhjeike/BMT/main/";

This allows the application to retrieve the ".txt" content files directly.

The architecture is therefore:

GitHub Repository
       │
       ▼
   .txt Files
       │
       ▼
   script.js
       │
       ├── Parse content
       ├── Detect dates
       ├── Detect media
       ├── Detect links
       └── Build posts
       │
       ▼
   index.html
       │
       ▼
   style.css
       │
       ▼
   Final Study Hub

---

🧠 Why This Architecture?

The project deliberately separates:

Application code

from

Study content

This provides an important advantage.

If you only want to add homework, notes, or a new link, you normally do not need to edit:

index.html
style.css
script.js

Instead, you edit the appropriate content file.

For example:

বাংলা-১.txt

for Bengali content, or:

social.txt

for community/social content.

---

➕ Adding a New Subject

To add another subject, update the "SUBJECTS" configuration inside:

script.js

A subject requires information such as:

name
tab
icon

The corresponding ".txt" file should use the same subject name.

For example:

New Subject

should have:

New Subject.txt

The filename and configured subject name must match correctly, including spaces, punctuation, and characters.

---

🎨 Visual Design

BMT uses a premium glass-inspired visual style.

The interface includes visual concepts such as:

- Frosted glass panels
- Glass-like cards
- Gold accents
- Teal accents
- Rust accents
- Deep backgrounds
- Soft borders
- Highlight effects
- Responsive layouts

The visual effects are separated from the content system.

Therefore, changing a ".txt" file does not require changing the design.

---

⚡ Performance Philosophy

BMT is intentionally lightweight.

The project does not depend on a large frontend framework or a complex backend.

Its core architecture is based on:

HTML
CSS
JavaScript
TXT content
GitHub

This keeps the application relatively simple to maintain and makes it suitable for static hosting.

---

📱 Responsive Usage

The interface is designed to work across common modern devices, including:

- 📱 Smartphones
- 📲 Tablets
- 💻 Laptops
- 🖥️ Desktop computers

Because the project is web-based, no separate Android or Windows application is required.

---

🚀 Updating the Website

One of the simplest workflows is:

1. Open the required .txt file
        ↓
2. Add or edit the content
        ↓
3. Commit the change to GitHub
        ↓
4. GitHub stores the updated file
        ↓
5. The website fetches the updated content
        ↓
6. The new information appears on the site

For ordinary content changes, the website code itself does not need to be rewritten.

---

💻 Running Locally

Because the project retrieves content from GitHub's raw-content service, the main page can be opened locally.

You can also run a simple local HTTP server.

Using Python:

python3 -m http.server 8000

Then open:

http://localhost:8000

---

🌍 Deployment

The project is compatible with static hosting.

The current website is available through GitHub Pages:

https://uuhjeike.github.io/BMT/

A static deployment does not require:

- A traditional web server
- A database server
- Backend APIs
- User authentication
- Server-side rendering

The browser loads the application and retrieves the required content.

---

🔐 Data & Privacy

BMT does not require a traditional user account or application database.

The website itself is a static frontend.

However, users should remember that any information committed to a public GitHub repository should be considered publicly accessible.

Do not publish:

- Passwords
- Private API keys
- Authentication tokens
- Private documents
- Sensitive personal information
- Confidential credentials

Especially avoid placing secrets inside ".txt", ".js", or other publicly accessible repository files.

---

🧩 Design Principles

BMT follows several core principles:

Simple

The system should be understandable without requiring a complicated backend.

Content-Driven

Academic content lives in text files rather than being hard-coded into the interface.

Lightweight

The project avoids unnecessary infrastructure.

Maintainable

The interface and content are separated.

Expandable

New subjects, posts, media, and links can be added without redesigning the entire application.

Human-Friendly

Content should be easy to create and understand even without advanced programming knowledge.

---

🛠️ Technology Stack

Technology| Purpose
HTML5| Page structure
CSS3| Design and responsive presentation
JavaScript| Application logic and content processing
TXT| Content storage
GitHub| Repository and content hosting
GitHub Pages| Website hosting
Raw GitHub Content| Content retrieval

No backend database is required by the current architecture.

---

📌 Important File Rules

When creating or renaming subject files, make sure the filename matches the configured subject name.

For example:

SUBJECTS name:
বাংলা-১

must correspond to:

বাংলা-১.txt

Even small differences such as:

- Extra spaces
- Different punctuation
- Different hyphens
- Different characters

can cause the content file to be unavailable to the subject.

---

🧪 Troubleshooting

Images are not appearing

Check that the image URL actually points to an accessible image file.

If using GitHub, a normal "blob" URL is automatically handled where supported, but the underlying file must still be accessible.

---

YouTube video is not embedded

Use a supported YouTube URL format such as:

https://www.youtube.com/watch?v=VIDEO_ID

or:

https://youtu.be/VIDEO_ID

A channel or playlist URL is not equivalent to a normal individual video URL.

---

Posts appear in the wrong order

Check the "DATE:" value.

For example:

DATE: ১ অক্টোবর ২০২৬

Make sure the date is recognizable by the parser.

Posts without valid dates are handled separately from dated posts.

---

New subject does not appear

Check both:

1. The subject exists in the "SUBJECTS" configuration.
2. The corresponding ".txt" file exists in the repository root.

The names must match exactly.

---

Teacher contact buttons are not working

Check that the teacher entry follows the expected format:

Name | Subject | Mobile Number | Sir/Madam

Also verify that the phone number is valid.

---

🔮 Future Expansion

The current architecture provides a foundation that can be extended later.

Possible future improvements could include:

- More subjects
- More content categories
- Better search
- Additional media formats
- More file types
- More external platforms
- Improved filtering
- Advanced notes
- Study schedules
- Assignment tracking
- Examination resources
- Attendance tools
- Additional teacher information
- More structured academic resources

Future features should preserve the project's central principle:

«Keep the interface simple while making the content easy to update.»

---

📖 Quick Start

If you only remember five things, remember these:

1. Website

https://uuhjeike.github.io/BMT/

2. Repository

https://github.com/uuhjeike/BMT

3. Subject content

Subject Name.txt

4. Separate posts

-
POST CONTENT
-

5. Add dates when ordering matters

DATE: ১ অক্টোবর ২০২৬

That's the basic system.

---

🏗️ Project Philosophy

BMT is built around a simple idea:

«The website should handle the presentation; the text files should handle the content.»

This separation makes the project easier to understand, easier to update, and easier to expand.

A person should be able to add a homework post, note, image, video, audio file, or external resource without needing to redesign the entire website.

---

📊 Project Overview

Category| Implementation
Website type| Static web application
Content model| Text-file driven
Backend| None
Database| None
Main logic| JavaScript
Styling| CSS
Structure| HTML
Content files| ".txt"
Repository| GitHub
Hosting| GitHub Pages
Media| External URLs / repository files
Subject organization| Individual files
Teacher data| "teachers.txt"
Social feed| "social.txt"
Date ordering| Automatic
Responsive interface| Yes

---

📄 License

No explicit open-source license is currently documented in this README.

If this project is intended to be reused, modified, or redistributed by other people, a suitable license should be added to the repository so the permitted usage is clearly defined.

---

👤 Project

BMT — Study Hub

A lightweight academic resource platform built around simple technology, organized content, and easy maintenance.

Live:
https://uuhjeike.github.io/BMT/

Repository:
https://github.com/uuhjeike/BMT

---

⭐ Final Summary

BMT is a static, text-driven Study Hub.

The website provides the interface.

GitHub stores the files.

".txt" files store the academic content.

"script.js" reads and interprets that content.

"style.css" presents it visually.

GitHub Pages publishes the final website.

The result is a simple workflow:

WRITE
  ↓
SAVE
  ↓
COMMIT
  ↓
GITHUB
  ↓
BMT
  ↓
READ

One website.
Separate subjects.
Simple content files.
Flexible media.
Automatic organization.
Minimal infrastructure.

«Study smarter. Stay organized. Keep moving forward.»
