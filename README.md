BMT — Business Management Technology

«Learn · Build · Grow»

BMT is a simple, fast, static study website created for Business Management Technology students.

🌐 Live Website:
https://uuhjeike.github.io/BMT/

📦 GitHub Repository:
https://github.com/uuhjeike/BMT

---

📚 What Is BMT?

BMT is a small study-management website where homework, classwork, notes, teacher contact information, and useful social/group links can be kept in one place.

The main idea is very simple:

«Write the information in a text file → save it to GitHub → the website reads it automatically → the information appears on the website.»

You do not need a database.

You do not need a server.

You do not need PHP.

You do not need Node.js.

You do not need to manually edit the HTML every time you want to add homework or a note.

The website is designed around simple files that are easy to edit.

---

🎯 Main Idea

Imagine a notebook.

Inside the notebook you have different pages:

- বাংলা
- English
- Computer Office Applications
- Business Mathematics & Statistics
- Accounting
- Economics
- Business Organization & Management
- Marketing
- Digital Technology in Business
- Human Resource Management

Instead of writing everything inside the website's HTML, BMT gives each subject its own ".txt" file.

For example:

বাংলা-১.txt
ইংরেজি-১.txt
কম্পিউটার অফিস অ্যাপ্লিকেশন-১.txt
ব্যবসায় গণিত ও পরিসংখ্যান.txt

When information is added to those files, the website reads the files and displays the information.

This makes the website much easier to maintain.

---

🧠 The Simplest Possible Explanation

If you are only five years old and someone asks:

«"How does BMT work?"»

The answer is:

You write something
       ↓
You save it in a text file
       ↓
GitHub stores the file
       ↓
The website reads the file
       ↓
The website shows the information

That's it.

---

✨ What BMT Can Do

The current system supports:

- 📚 Multiple subjects
- 📝 Homework
- 📖 Classwork
- 📌 Notes
- 📅 Dates
- 🔄 Automatic newest-to-oldest sorting
- 🖼️ Multiple images in one post
- 🎥 Video files
- ▶️ YouTube embeds
- 🎵 Audio files
- 🔗 Normal website links
- 📁 Google Drive links
- 📱 Facebook links
- 📸 Instagram links
- 🎵 TikTok links
- 💬 WhatsApp links
- 📢 Telegram links
- 🔗 Bare URL detection
- 🔧 Automatic GitHub "blob" URL conversion
- 👨‍🏫 Teacher contact information
- 📞 Automatic phone-call buttons
- 💬 Automatic WhatsApp buttons
- 🌐 Social/contact feed
- 🕒 Continuous "UNSTOPPABLE" counter
- 📱 Mobile-friendly interface
- 💻 Desktop-friendly interface
- ✨ Glass-style interface
- ⚡ Static hosting
- 🆓 GitHub Pages hosting
- 🗂️ Text-file-based content management

---

🏗️ How the Project Is Built

BMT is intentionally simple.

The main website is made using:

- HTML — structure
- CSS — appearance
- JavaScript — functionality
- TXT files — content

There is no traditional backend database.

The project is designed to work as a static website.

---

🧩 Project Architecture

The project can be understood like this:

                         ┌─────────────────────┐
                         │      GitHub         │
                         │     Repository      │
                         └──────────┬──────────┘
                                    │
                  ┌─────────────────┼─────────────────┐
                  │                 │                 │
                  ▼                 ▼                 ▼
             index.html         style.css         script.js
                  │                                   │
                  │                                   │
                  └─────────────────┬─────────────────┘
                                    │
                                    ▼
                         Reads TXT content
                                    │
          ┌─────────────────────────┼─────────────────────────┐
          │                         │                         │
          ▼                         ▼                         ▼
     Subject files            teachers.txt              social.txt
          │                         │                         │
          └─────────────────────────┼─────────────────────────┘
                                    │
                                    ▼
                              BMT Website
                                    │
                                    ▼
                         Student sees everything

---

📁 Repository Structure

The important files currently include:

BMT/
│
├── README.md
├── index.html
├── style.css
├── script.js
│
├── social.txt
├── teachers.txt
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
    └── optional media files

The repository currently contains the main HTML/CSS/JavaScript files plus the subject, teacher, and social content files.

---

📄 What Each File Does

"index.html"

This is the main structure of the website.

Think of it as:

«The skeleton of the website.»

It determines where major website elements exist.

Examples:

- navigation
- subject area
- teacher area
- buttons
- panels
- containers

You normally should not edit this file just to add homework.

---

"style.css"

This controls the appearance.

Think of it as:

«The clothes and decoration of the website.»

It controls things such as:

- colors
- spacing
- glass effects
- borders
- buttons
- typography
- responsive layout
- animations
- cards
- panels

Changing "style.css" changes how the website looks without changing the actual study content.

---

"script.js"

This is the brain of the website.

Think of it as:

«The person who reads the files and tells the website what to show.»

It handles things such as:

- subject definitions
- loading ".txt" files
- parsing posts
- recognizing dates
- sorting posts
- recognizing images
- recognizing videos
- recognizing audio
- recognizing YouTube URLs
- recognizing social links
- fixing GitHub "blob" links
- displaying teacher information
- creating call buttons
- creating WhatsApp buttons

---

📚 Subject Files

Each subject has its own text file.

For example:

বাংলা-১.txt

belongs to:

বাংলা-১

Another example:

ইংরেজি-১.txt

belongs to:

ইংরেজি-১

The important rule is:

«The subject name and the text filename must match exactly.»

That includes:

- Bangla characters
- English characters
- spaces
- hyphens
- numbers
- punctuation

Even a small difference can cause the website to look for the wrong file.

---

📝 Adding a Homework or Note

You do not normally need to edit HTML.

Open the appropriate subject ".txt" file.

For example:

বাংলা-১.txt

Then add:

-
DATE: ১ অক্টোবর ২০২৬
আজকের বাংলা হোমওয়ার্ক:
১. অধ্যায় ৩ পড়তে হবে।
২. প্রশ্ন ১–৫ লিখতে হবে।
-

Save the file.

Commit the change to GitHub.

The website will read the updated file.

---

📦 The "-" Separator

A post is surrounded by "-".

Example:

-
DATE: ১ অক্টোবর ২০২৬
আজকের হোমওয়ার্ক।
-

Another post:

-
DATE: ৩০ সেপ্টেম্বর ২০২৬
আগের ক্লাসের কাজ।
-

You can have many posts in one file.

---

🧱 Multiple Posts

Example:

-
DATE: ১ অক্টোবর ২০২৬
আজকের কাজ:
পৃষ্ঠা ২০–২৫ পড়তে হবে।
-

DATE: ৩০ সেপ্টেম্বর ২০২৬
আগের ক্লাসের কাজ:
পৃষ্ঠা ১৫–১৯ পড়তে হবে।
-

DATE: ২৯ সেপ্টেম্বর ২০২৬
একটি গুরুত্বপূর্ণ নোট।
-

Each block represents one post.

---

📅 Dates

A post can contain:

DATE:

Example:

DATE: ১ অক্টোবর ২০২৬

English-style dates can also be used:

DATE: 1 Oct 2026

The system uses the date to sort posts.

---

🔄 Automatic Post Sorting

Posts are automatically arranged:

Newest
   ↓
Older
   ↓
Oldest

So you do not have to manually move old posts.

For example, if the file contains:

২০ সেপ্টেম্বর
১ অক্টোবর
২৫ সেপ্টেম্বর
২৮ সেপ্টেম্বর

the website will display them according to their recognized dates rather than simply using the physical order in the file.

---

⚠️ Posts Without Dates

A post can exist without a "DATE:" line.

Example:

-
This is an important permanent note.
-

However, dated posts have priority when sorting.

Therefore:

«Use "DATE:" whenever the information represents a dated event, homework, classwork, announcement, or note.»

This makes the feed more predictable.

---

🖼️ Adding Images

You can explicitly use:

IMG: https://example.com/image.jpg

Example:

-
DATE: ১ অক্টোবর ২০২৬
আজকের ক্লাসের ছবি:
IMG: https://example.com/class.jpg
-

---

🖼️ Multiple Images

You can add more than one image:

-
DATE: ১ অক্টোবর ২০২৬
আজকের ক্লাস:

IMG: https://example.com/photo1.jpg
IMG: https://example.com/photo2.jpg
IMG: https://example.com/photo3.jpg
-

The website can treat them as multiple media items belonging to the same post.

---

🎥 Adding Video

Use:

VID: https://example.com/video.mp4

Example:

-
DATE: ১ অক্টোবর ২০২৬
আজকের ক্লাসের ভিডিও:

VID: https://example.com/class.mp4
-

Supported video file types include common formats such as:

.mp4
.webm
.mov
.m4v

---

▶️ YouTube Videos

You can use a YouTube URL.

Example:

-
DATE: ১ অক্টোবর ২০২৬
আজকের গুরুত্বপূর্ণ ভিডিও:

https://www.youtube.com/watch?v=XXXXXXXXXXX
-

The website recognizes supported YouTube URLs and creates an embedded player.

Supported examples include:

https://www.youtube.com/watch?v=...

https://youtu.be/...

https://www.youtube.com/shorts/...

A normal channel or playlist URL is not necessarily an embeddable individual video URL.

---

🎵 Adding Audio

Use:

AUD: https://example.com/audio.mp3

Supported common audio types include:

.mp3
.wav
.m4a
.aac
.flac
.ogg

---

🔗 Adding a Normal Link

Use:

LINK: https://example.com (Open Website)

The text inside parentheses becomes the button label.

Example:

LINK: https://example.com (Study Material)

---

📁 Google Drive

You can use:

DRIVE: https://drive.google.com/... (Class File)

This creates a dedicated button for the Drive resource.

---

🌐 Bare Links

You do not always have to write a special tag.

For example:

-
DATE: ১ অক্টোবর ২০২৬

https://example.com
-

The website attempts to identify what kind of URL it is.

This means the system can understand many links even when you simply paste the URL.

---

🤖 Automatic Link Recognition

When a line contains only a URL, BMT checks what the URL appears to represent.

Image

Examples:

.jpg
.jpeg
.png
.gif
.webp
.avif
.bmp

→ displayed as an image.

Video

Examples:

.mp4
.webm
.mov
.m4v

→ displayed as video.

Audio

Examples:

.mp3
.wav
.m4a
.aac
.flac
.ogg

→ displayed as audio.

YouTube

A recognized YouTube video URL:

→ embedded video player.

Other websites

Examples:

- Facebook
- Instagram
- TikTok
- Telegram
- WhatsApp
- Google Drive
- other URLs

→ displayed as an appropriate link/button when recognized.

---

🔧 GitHub "blob" URL Auto-Fix

This is an important convenience feature.

Suppose you copy this:

https://github.com/uuhjeike/BMT/blob/main/Files/example.jpg

That is normally a GitHub webpage URL, not the actual raw image file.

BMT can recognize the GitHub "blob" format and convert it into the corresponding raw file URL.

So you do not normally need to manually convert:

github.com/.../blob/...

into:

raw.githubusercontent.com/...

This applies to supported media/link situations handled by the parser.

---

📝 Normal Text

Any line that does not begin with a recognized tag can normally become part of the post's text/caption.

Example:

-
DATE: ১ অক্টোবর ২০২৬

আগামীকাল সবাইকে সময়মতো ক্লাসে আসতে হবে।

গুরুত্বপূর্ণ:
কলম এবং খাতা সঙ্গে আনবে।
-

This produces a normal text post.

---

💬 Comments Inside Text Files

Lines beginning with:

#

are treated as comments.

Example:

# This is only a developer note.

The website does not normally show that line as visible post content.

This is useful when you want to leave yourself instructions inside the content file.

---

👨‍🏫 Teacher Information

Teacher information is stored in:

teachers.txt

The format is:

Name | Subject | Mobile Number | Sir/Madam

Example:

Md Example | Business Mathematics | 01700000000 | Sir

---

📞 Teacher Phone Numbers

When a valid phone number is supplied, the website can generate a call button.

The system recognizes common Bangladesh-style formats beginning with:

0

or:

880

---

💬 Teacher WhatsApp

Where supported, the teacher card can also provide a WhatsApp action.

This means a student can quickly:

Teacher
   ↓
Phone
   ↓
Call / WhatsApp

instead of manually copying the number.

---

📢 Social / Contact Feed

The file:

social.txt

is used for communication, groups, pages, and other useful links.

It uses the same general post system as subject files.

That means you can create posts like:

-
DATE: ১ অক্টোবর ২০২৬
নতুন WhatsApp group:

LINK: https://chat.whatsapp.com/example (WhatsApp Group)
-

Or:

-
DATE: ১ অক্টোবর ২০২৬
Important Facebook page:

https://facebook.com/example
-

---

🔁 Why "social.txt" Uses the Same System

This is intentional.

Instead of learning one format for subjects and another format for social information, you learn one format.

The same concepts work:

-
DATE:
TEXT
IMG:
VID:
AUD:
LINK:
DRIVE:
-

That makes the system easier to understand and maintain.

---

🕒 UNSTOPPABLE Counter

The website includes an ongoing counter beginning from:

24 September 2026

It displays:

Days
Hours
Minutes
Seconds

The idea is simple:

«Keep moving forward.»

The counter is a website feature and does not require you to manually update the displayed numbers every second.

---

🎨 Visual Design

The current website uses a premium glass-inspired visual style.

The design includes:

- glass-like panels
- frosted effects
- colored accents
- rounded components
- responsive layout
- subtle visual effects
- navigation controls
- animated visual highlights

The visual layer is separate from the content files.

Therefore:

«Changing a ".txt" file does not require changing the visual design.»

---

⚡ Performance Philosophy

BMT is intentionally a static website.

That means it avoids unnecessary infrastructure.

The basic flow is:

Browser
   ↓
HTML
   ↓
CSS
   ↓
JavaScript
   ↓
TXT files
   ↓
Content displayed

There is no requirement for a traditional application server or database.

However, actual performance can still depend on:

- internet speed
- GitHub availability
- media-file size
- external website availability
- device performance
- browser limitations

---

🌍 GitHub Raw Content

The website reads content from GitHub's raw-content endpoint.

The current repository configuration uses:

https://raw.githubusercontent.com/uuhjeike/BMT/main/

This allows the website to fetch the text files directly.

If the content repository changes, the corresponding configuration in "script.js" must also be updated.

---

🧑‍💻 Adding a New Subject

Adding a new subject requires two things.

Step 1 — Add the subject to "script.js"

The subject needs an entry in the subject configuration.

The entry contains information such as:

name
tab
icon

---

Step 2 — Create the matching ".txt" file

Suppose the subject name is:

New Subject

The content file must correspond to the name expected by the application.

For Bangla names, preserve the exact Bangla spelling.

---

⚠️ Important Rule for New Subjects

The subject name and file name must match.

For example:

ব্যবসায় গণিত ও পরিসংখ্যান

must correspond to:

ব্যবসায় গণিত ও পরিসংখ্যান.txt

Do not accidentally create:

ব্যবসায় গণিত ও পরিসংখ্যান.txt

if the configured subject uses a different Unicode character.

Bangla Unicode characters can look almost identical while technically being different.

This is one of the easiest ways to make a file appear to be "missing."

---

🧩 Icons

The JavaScript configuration contains predefined icon names.

Examples include:

book
language
computer
calculator
coins
globe
briefcase
megaphone
chip
users
link
drive
phone
chat
play
whatsapp
facebook
youtube
instagram
tiktok

A subject can use one of the existing icons.

A new SVG icon can also be added to the icon configuration if the code is intentionally being extended.

---

🚀 How to Run the Website Locally

There are two simple approaches.

Method 1 — Open "index.html"

Because the project is designed to fetch content from the remote raw GitHub URL, the main page can be opened directly in a browser in the current configuration.

Simply open:

index.html

---

Method 2 — Use a Local Server

If you want to run the project through a local web server:

python3 -m http.server 8000

Then open:

http://localhost:8000

This is useful for development and testing.

---

🌐 GitHub Pages Deployment

The website can be hosted using GitHub Pages.

Basic process:

1. Create or use a GitHub repository.
2. Put the website files inside the repository.
3. Make sure "index.html" exists.
4. Open repository Settings.
5. Open Pages.
6. Select the appropriate branch.
7. Select the repository root if the files are there.
8. Save.
9. Wait for GitHub Pages to publish the site.
10. Open the generated Pages URL.

GitHub's documentation recommends using a repository README to explain what the project does, how people use it, and where they can get help.

---

🔄 How Updating Works

One of the biggest advantages of BMT is that content and website code are separated.

Suppose you want to add homework.

You do not need to:

Edit HTML
↓
Edit CSS
↓
Edit JavaScript
↓
Rebuild website

Instead:

Open subject TXT file
↓
Add new post
↓
Commit
↓
Website fetches updated file

---

🧠 Example: Complete Homework Post

Here is a realistic example:

-
DATE: ১ অক্টোবর ২০২৬

আজকের হোমওয়ার্ক:

১. অধ্যায় ৪ পড়তে হবে।
২. ১–১০ নম্বর প্রশ্নের উত্তর লিখতে হবে।
৩. আগামী ক্লাসে খাতা আনতে হবে।

IMG: https://github.com/uuhjeike/BMT/blob/main/Files/homework.jpg
-

The website can:

- read the date
- read the text
- recognize the image
- fix the GitHub "blob" URL
- display the complete post

---

🖼️ Example: Multiple Media Types

A single post can contain different types of content.

Example:

-
DATE: ১ অক্টোবর ২০২৬

আজকের গুরুত্বপূর্ণ ক্লাস।

IMG: https://example.com/photo.jpg

VID: https://example.com/video.mp4

AUD: https://example.com/audio.mp3

LINK: https://example.com (Study Material)
-

The exact behavior depends on the URL and how the parser recognizes it.

---

📱 Mobile Support

The website is designed to be usable on:

- Android phones
- iPhones
- tablets
- laptops
- desktop computers

The exact visual appearance can differ depending on:

- screen size
- browser
- operating system
- browser rendering engine

---

🔐 Security

BMT does not require users to enter a password just to view the static website.

However, this does not mean the repository itself should be treated as a private storage system.

Never place sensitive information inside a public repository.

Do not put:

- passwords
- API keys
- private tokens
- secret credentials
- private personal documents
- confidential information

inside public ".txt" files or JavaScript files.

GitHub recommends using security features such as secret scanning, push protection, and code scanning where applicable.

---

🚫 What BMT Is Not

BMT is not currently intended to be:

- a full Learning Management System
- a private student database
- an authentication system
- a messaging server
- a cloud database
- a real-time classroom system
- a replacement for an official educational institution system

It is a lightweight study-information website.

---

🗄️ No Database

There is intentionally no traditional database.

Instead:

TXT FILE
   ↓
GitHub
   ↓
JavaScript fetch
   ↓
Website

This makes the project simple.

But it also means that GitHub is effectively the source of truth for the content.

---

⚠️ Important Limitations

Because BMT is a static website, some things depend on external services.

For example:

Internet connection

The browser needs internet access to fetch remote content.

External media

If an external image, video, audio file, or website stops working, BMT cannot magically restore it.

YouTube

YouTube controls whether an embedded video can be displayed or played.

Facebook / Instagram / TikTok

External platforms can change their URLs, privacy rules, login requirements, or embedding behavior.

GitHub

If GitHub or its raw-content service is unavailable, remote content may fail to load.

Large media

Very large media files can load slowly and can consume significant bandwidth.

---

🛠️ Troubleshooting

❓ The subject is empty

Check:

1. Does the ".txt" file exist?
2. Is the filename correct?
3. Does the subject name exactly match the configured name?
4. Is the file in the repository root?
5. Is the branch correct?
6. Is the file publicly accessible?
7. Did GitHub successfully save the latest commit?
8. Is the browser showing an old cached version?

---

❓ The image does not appear

Check:

1. Open the image URL directly in your browser.
2. Confirm the file actually exists.
3. Confirm the URL is correct.
4. Check whether the image host allows access.
5. If it is a GitHub URL, confirm the file exists in the repository.
6. If using a "blob" URL, confirm it points to an actual file.

---

❓ YouTube does not play

Make sure you are using an individual video URL such as:

https://www.youtube.com/watch?v=VIDEO_ID

or:

https://youtu.be/VIDEO_ID

A channel or unsupported URL format may not become an embedded player.

---

❓ Posts appear in the wrong order

Check the "DATE:" line.

For example:

DATE: ১ অক্টোবর ২০২৬

or:

DATE: 1 Oct 2026

If the parser cannot understand a date, that post may not sort as expected.

---

❓ New subject does not appear

Check all of these:

script.js
     ↓
SUBJECTS
     ↓
Subject name
     ↓
Matching .txt file

The spelling must match exactly.

---

❓ Teacher phone button does not work

Check:

- number is present
- number is valid
- number is written in a supported format
- there are no accidental characters
- the device/browser allows phone actions

---

❓ Social link does not work

First copy the URL and open it directly in the browser.

If the external platform itself requires:

- login
- permission
- region availability
- membership
- private access

BMT cannot bypass those requirements.

---

🧪 Testing Checklist

Before considering a major update finished, test:

Basic website

- [ ] Website opens
- [ ] Navigation works
- [ ] Subject buttons work
- [ ] Teacher section works
- [ ] Contact/social section works
- [ ] Mobile layout works
- [ ] Desktop layout works

Text

- [ ] Normal text appears
- [ ] Multiple lines work
- [ ] Bangla text works
- [ ] English text works
- [ ] Comments are hidden

Dates

- [ ] Dates are detected
- [ ] Newest posts appear first
- [ ] Old posts appear later
- [ ] Undated posts do not break the feed

Media

- [ ] Images work
- [ ] Multiple images work
- [ ] Videos work
- [ ] Audio works
- [ ] YouTube works
- [ ] Bare URLs are detected
- [ ] GitHub blob links are converted correctly

Teachers

- [ ] Teacher names appear
- [ ] Subjects appear
- [ ] Phone numbers appear
- [ ] Call action works
- [ ] WhatsApp action works

Social

- [ ] Social posts load
- [ ] Social links work
- [ ] Dates work
- [ ] Media works
- [ ] Link buttons work

---

🧹 Maintenance Rules

To keep BMT healthy:

Rule 1 — Keep content separate from code

Homework belongs in ".txt" files.

Do not put ordinary homework directly into "index.html".

---

Rule 2 — Keep filenames consistent

If a subject is configured as:

বাংলা-১

keep the file:

বাংলা-১.txt

---

Rule 3 — Use dates

Whenever possible, write:

DATE:

This makes chronological sorting reliable.

---

Rule 4 — Keep URLs complete

Prefer:

https://example.com/file.jpg

instead of incomplete URLs.

---

Rule 5 — Test new features

Do not assume something works simply because the code looks correct.

Test it in:

- mobile browser
- desktop browser
- slow connection if possible
- normal connection
- different media types

---

📈 Future Expansion

The current architecture leaves room for future features.

Possible future additions include:

- 📌 dedicated notes system
- 📅 class schedule
- 📝 examination schedule
- 📊 result section
- 📚 semester organization
- 🔍 search
- 🏷️ categories
- ⭐ important-post marking
- 📌 pinned posts
- 🔔 notifications
- 🗓️ calendar
- 📥 downloadable files
- 🧾 assignment tracking
- ⏰ deadlines
- 📖 chapter tracking
- 📊 study progress
- 🌙 theme controls
- 🌐 language switching
- 📱 PWA support
- 🔄 better caching
- 📴 limited offline support

These are future possibilities, not promises that they are currently implemented.

---

🧱 Design Philosophy

BMT follows several important ideas.

Simple

A student should not need to become a programmer to add homework.

Lightweight

The project avoids unnecessary infrastructure.

Maintainable

Content is separated from website code.

Upgradeable

The website can evolve without changing every content file.

Human-readable

A ".txt" file should remain understandable even without the website.

GitHub-friendly

The project is designed around a GitHub repository and GitHub Pages.

---

🤝 Contributing

If another person wants to improve BMT, they should first understand:

index.html

controls structure.

style.css

controls appearance.

script.js

controls behavior.

*.txt

contains content.

A change to one layer should not unnecessarily break another layer.

---

📌 Source of Truth

For normal study content:

The TXT files are the source of truth.

For website behavior:

script.js is the main source of truth.

For appearance:

style.css is the main source of truth.

For page structure:

index.html is the main source of truth.

This distinction is important when troubleshooting.

---

🔄 Recommended Update Workflow

Whenever adding normal content:

1. Open the correct TXT file
        ↓
2. Add a new post
        ↓
3. Add DATE if applicable
        ↓
4. Add text/media/links
        ↓
5. Save
        ↓
6. Commit to GitHub
        ↓
7. Wait for the updated content to become available
        ↓
8. Open the website
        ↓
9. Test the new post

---

🧠 Example Complete Subject File

-
DATE: ১ অক্টোবর ২০২৬

আজকের ক্লাসওয়ার্ক:

অধ্যায় ৫ পড়তে হবে।
১–১০ নম্বর প্রশ্ন লিখতে হবে।

IMG: https://github.com/uuhjeike/BMT/blob/main/Files/class.jpg

https://www.youtube.com/watch?v=XXXXXXXXXXX

LINK: https://example.com (Additional Material)
-

-
DATE: ৩০ সেপ্টেম্বর ২০২৬

আগের ক্লাসের হোমওয়ার্ক।

-

This demonstrates the basic idea of the system.

---

🌐 Live Website

Visit the actual BMT website:

https://uuhjeike.github.io/BMT/

The live website currently presents the BMT study hub with subjects, teacher/contact functionality, notes navigation, and the ongoing "UNSTOPPABLE" counter.

---

📦 Repository

The complete source and content are maintained here:

https://github.com/uuhjeike/BMT

The repository currently contains the website source files and subject/content files used by the project.

---

📜 License

No specific open-source license is declared in the current repository documentation.

Until a license is explicitly added, do not assume that the code or content is automatically available for unrestricted reuse.

If this project is intended to become an open-source project, add an appropriate "LICENSE" file and document the permissions clearly.

---

🧭 Quick Reference

Task| Where to do it
Change website structure| "index.html"
Change website design| "style.css"
Change website behavior| "script.js"
Add Bangla homework| "বাংলা-১.txt"
Add English homework| "ইংরেজি-১.txt"
Add Computer homework| "কম্পিউটার অফিস অ্যাপ্লিকেশন-১.txt"
Add teacher| "teachers.txt"
Add contact/social post| "social.txt"
Add an image| "IMG:" or supported bare URL
Add a video| "VID:" or supported bare URL
Add audio| "AUD:" or supported bare URL
Add Google Drive| "DRIVE:"
Add custom link| "LINK:"
Separate posts| "-"
Add a date| "DATE:"
Add an internal comment| "#"

---

🧸 BMT Explained Like You're Five

Imagine BMT is a big school cupboard.

Inside the cupboard are boxes.

Each box has a name:

বাংলা
English
Computer
Accounting
Marketing
...

Each box has a notebook.

Those notebooks are the ".txt" files.

You put homework into the correct notebook.

GitHub keeps the notebooks.

The BMT website opens the notebooks and reads them.

Then it puts everything on the screen in a beautiful way.

So:

📄 TXT FILE
     ↓
📦 GITHUB
     ↓
🧠 JAVASCRIPT
     ↓
🌐 BMT WEBSITE
     ↓
👨‍🎓 STUDENT

That is the entire idea.

---

🚀 The Golden Rule

If you remember only one thing about BMT, remember this:

«Do not change the website code just to change the study content.»

For normal content:

Edit the correct TXT file.

For website behavior:

Edit script.js.

For website appearance:

Edit style.css.

For page structure:

Edit index.html.

Keeping these responsibilities separate is what makes BMT easy to maintain.

---

❤️ Why BMT Exists

BMT was created with one simple purpose:

«Put the things students need for their studies in one simple place.»

Instead of searching through:

- Messenger
- WhatsApp
- Facebook
- group chats
- old messages
- random photos
- different links
- separate notebooks

the goal is to make important study information easier to find.

---

⭐ Final Summary

BMT is a:

static + GitHub-powered + text-file-driven + student-focused study website.

Its core system is:

CONTENT
  ↓
TXT FILES
  ↓
GITHUB
  ↓
JAVASCRIPT
  ↓
BMT
  ↓
STUDENTS

The system is intentionally simple enough to understand, while still supporting:

- subjects
- homework
- classwork
- notes
- dates
- images
- videos
- audio
- YouTube
- external links
- teachers
- phone actions
- WhatsApp
- social/contact posts
- automatic sorting
- GitHub media links
- GitHub Pages

Learn · Build · Grow

BMT — Business Management Technology
