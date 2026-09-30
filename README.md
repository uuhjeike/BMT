BMT — Business Management Technology

«A lightweight, file-driven study hub for Business Management Technology students.»

🌐 Live Website:
https://uuhjeike.github.io/BMT/

📦 Source Repository:
https://github.com/uuhjeike/BMT

---

📖 Table of Contents

1. "What Is BMT?" (#-what-is-bmt)
2. "The One-Sentence Explanation" (#-the-one-sentence-explanation)
3. "BMT Explained Like a 5-Year-Old" (#-bmt-explained-like-a-5-year-old)
4. "How the Entire System Works" (#-how-the-entire-system-works)
5. "Architecture" (#-architecture)
6. "Complete Project Structure" (#-complete-project-structure)
7. "What Every File Does" (#-what-every-file-does)
8. "The Most Important Rule" (#-the-most-important-rule)
9. "How "index.html" Works" (#-how-indexhtml-works)
10. "How "style.css" Works" (#-how-stylecss-works)
11. "How "script.js" Works" (#-how-scriptjs-works)
12. "How the Data Folder Works" (#-how-the-data-folder-works)
13. "How Subjects Work" (#-how-subjects-work)
14. "Current Subjects" (#-current-subjects)
15. "How Subject Files Are Connected" (#-how-subject-files-are-connected)
16. "How the Browser Finds a Subject File" (#-how-the-browser-finds-a-subject-file)
17. "The Post System" (#-the-post-system)
18. "The "-" Separator" (#-the--separator)
19. "How a Post Is Parsed" (#-how-a-post-is-parsed)
20. "Post Text" (#-post-text)
21. "Dates" (#-dates)
22. "Images" (#-images)
23. "Videos" (#-videos)
24. "Audio" (#-audio)
25. "Links" (#-links)
26. "Google Drive Links" (#-google-drive-links)
27. "Multiple Media Items" (#-multiple-media-items)
28. "Comments" (#-comments)
29. "Lightbox" (#-lightbox)
30. "Post Caching" (#-post-caching)
31. "Subject Post Counter" (#-subject-post-counter)
32. "Teacher System" (#-teacher-system)
33. "Teacher File Format" (#-teacher-file-format)
34. "Phone Buttons" (#-phone-buttons)
35. "WhatsApp Buttons" (#-whatsapp-buttons)
36. "Social System" (#-social-system)
37. "Social File Format" (#-social-file-format)
38. "Icons" (#-icons)
39. "Error Handling" (#-error-handling)
40. "What Happens When a File Is Missing" (#-what-happens-when-a-file-is-missing)
41. "GitHub Pages" (#-github-pages)
42. "Local Development" (#-local-development)
43. "Why "file://" Can Be a Problem" (#-why-file-can-be-a-problem)
44. "Adding a New Subject" (#-adding-a-new-subject)
45. "Renaming a Subject" (#-renaming-a-subject)
46. "Removing a Subject" (#-removing-a-subject)
47. "Adding Homework" (#-adding-homework)
48. "Adding Notes" (#-adding-notes)
49. "Adding Classwork" (#-adding-classwork)
50. "Adding Images to a Post" (#-adding-images-to-a-post)
51. "Adding Videos to a Post" (#-adding-videos-to-a-post)
52. "Adding Audio to a Post" (#-adding-audio-to-a-post)
53. "Adding Buttons" (#-adding-buttons)
54. "Adding Teachers" (#-adding-teachers)
55. "Adding Social Links" (#-adding-social-links)
56. "Unicode and Bangla Filename Rules" (#-unicode-and-bangla-filename-rules)
57. "What You Should Never Do" (#-what-you-should-never-do)
58. "Common Mistakes" (#-common-mistakes)
59. "Troubleshooting" (#-troubleshooting)
60. "Performance" (#-performance)
61. "Security" (#-security)
62. "Content vs Code" (#-content-vs-code)
63. "Source of Truth" (#-source-of-truth)
64. "Safe Maintenance" (#-safe-maintenance)
65. "Testing Checklist" (#-testing-checklist)
66. "Complete Examples" (#-complete-examples)
67. "Developer Reference" (#-developer-reference)
68. "Future Expansion" (#-future-expansion)
69. "Limitations" (#-limitations)
70. "Final Mental Model" (#-final-mental-model)

---

🎓 What Is BMT?

BMT means:

«Business Management Technology»

This project is a lightweight study website designed to keep important academic information in one organized place.

The website can display:

- subjects
- homework
- classwork
- notes
- dates
- images
- videos
- audio
- external links
- Google Drive links
- teacher information
- phone actions
- WhatsApp actions
- social/group links

The important design decision is that normal academic content is stored separately from the website code.

That means the website code can stay the same while the study content changes.

---

🧠 The One-Sentence Explanation

The entire BMT system can be explained in one sentence:

«The browser loads the website code, JavaScript reads the appropriate ".txt" files from the "data/" folder, converts their simple text instructions into website elements, and displays them to the student.»

---

🧸 BMT Explained Like a 5-Year-Old

Imagine you have a big school cupboard.

Inside the cupboard there are different folders:

📁 বাংলা
📁 English
📁 Computer
📁 Accounting
📁 Economics
📁 Marketing
...

Each folder contains a notebook.

The notebooks are actually ".txt" files.

You write:

Today's homework:
Read chapter 5.

The website opens that notebook.

It reads what you wrote.

Then it shows the information beautifully on the screen.

So the process is:

👨‍🎓 You
   │
   │ write information
   ▼
📄 TXT FILE
   │
   │ stored in
   ▼
🐙 GitHub
   │
   │ browser downloads it
   ▼
🧠 JavaScript
   │
   │ understands the text
   ▼
🌐 BMT WEBSITE
   │
   ▼
👨‍🎓 Student sees the information

That is BMT.

---

🔥 How the Entire System Works

The complete process is:

1. Browser opens BMT
        ↓
2. index.html creates the page structure
        ↓
3. style.css gives the page its appearance
        ↓
4. script.js starts running
        ↓
5. JavaScript reads the configured subjects
        ↓
6. JavaScript creates the subject cards
        ↓
7. JavaScript waits for the student to select a subject
        ↓
8. Student clicks a subject
        ↓
9. JavaScript determines that subject's TXT filename
        ↓
10. fetch() requests that TXT file
        ↓
11. Browser receives plain text
        ↓
12. parsePosts() reads the text
        ↓
13. '-' lines divide the file into posts
        ↓
14. DATE / IMG / VID / AUD / DRIVE / LINK are detected
        ↓
15. Normal text becomes post text
        ↓
16. JavaScript creates HTML for the post
        ↓
17. The post appears inside the feed
        ↓
18. Media receives click behavior
        ↓
19. Clicking media opens the lightbox
        ↓
20. Student reads or watches the content

---

🏗️ Architecture

BMT has four major layers.

┌─────────────────────────────────────┐
│            CONTENT LAYER            │
│                                     │
│   data/*.txt                        │
│   Homework / notes / teachers       │
│   social links / media URLs         │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│            LOGIC LAYER              │
│                                     │
│   script.js                         │
│   Loading / parsing / rendering     │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│            STRUCTURE LAYER          │
│                                     │
│   index.html                        │
│   Page structure / containers       │
└─────────────────┬───────────────────┘
                  │
                  ▼
┌─────────────────────────────────────┐
│            DESIGN LAYER             │
│                                     │
│   style.css                         │
│   Colors / spacing / layout         │
└─────────────────────────────────────┘

---

📁 Complete Project Structure

The project uses this general structure:

BMT/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── data/
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
    ├── teachers.txt
    └── social.txt

The current JavaScript explicitly constructs subject files under "data/" and uses "data/teachers.txt" and "data/social.txt".

---

📄 What Every File Does

"index.html"

This is the structure of the website.

Think:

«Skeleton»

It contains the main HTML elements that JavaScript later uses.

It is not where normal homework should be written.

---

"style.css"

This is the appearance of the website.

Think:

«Clothes»

It controls things such as:

- layout
- spacing
- colors
- cards
- folders
- buttons
- typography
- responsive appearance
- visual effects

---

"script.js"

This is the brain.

Think:

«The teacher who reads the notebooks and puts everything in the correct place.»

It contains the subject configuration, file loading, parsing, rendering, teacher loading, social loading, media behavior, and lightbox behavior.

---

"README.md"

This is the instruction manual.

It explains how the project works.

It does not control the website.

Changing README text normally does not change website behavior.

---

"data/*.txt"

These are the content files.

They contain the actual study information.

This is where normal content should live.

---

🚨 The Most Important Rule

Remember this:

«Content goes into ".txt" files. Code goes into ".html", ".css", and ".js" files.»

Do not put ordinary homework inside "script.js".

Do not put ordinary homework inside "style.css".

Do not put ordinary homework inside "index.html".

Instead:

Homework
   ↓
Correct subject .txt file

---

🧱 How "index.html" Works

The HTML provides the places where information will appear.

For example, JavaScript expects certain page elements to exist.

The JavaScript then finds those elements with:

document.getElementById(...)

and inserts content into them.

This means HTML and JavaScript are connected.

If you rename or remove an element that JavaScript expects, functionality can break.

Therefore:

«Do not randomly rename HTML IDs unless you also update the JavaScript that uses them.»

---

🎨 How "style.css" Works

CSS does not decide what homework exists.

CSS decides how existing information looks.

For example:

JavaScript:
"This is a subject."

CSS:
"Make that subject look like a beautiful folder card."

Therefore:

Content problem
→ check TXT / JavaScript

Visual problem
→ check CSS

---

🧠 How "script.js" Works

The JavaScript can be divided conceptually into several systems:

1. Subject configuration
2. Icon definitions
3. Post parser
4. HTML rendering
5. Subject cards
6. Subject feed
7. Media handling
8. Lightbox
9. Teacher loader
10. Social loader

The actual implementation defines these systems in one JavaScript file.

---

📚 How Subjects Work

Subjects are defined in:

const SUBJECTS = [...]

The current implementation contains ten subjects.

Each subject has three important properties:

{
  name: "...",
  tab: "...",
  icon: "..."
}

"name"

The actual subject name.

Example:

বাংলা-১

"tab"

Controls the configured visual tab style.

Current values include:

gold
teal
rust

"icon"

Selects an icon from the "ICONS" object.

---

📚 Current Subjects

The current JavaScript configuration contains:

1. বাংলা-১
2. ইংরেজি-১
3. কম্পিউটার অফিস অ্যাপ্লিকেশন-১
4. ব্যবসায় গণিত ও পরিসংখ্যান
5. হিসাববিজ্ঞান নীতি ও প্রয়োগ-১
6. অর্থনীতি ও বাণিজ্যিক ভূগোল
7. ব্যবসায় সংগঠন ও ব্যবস্থাপনা-১
8. মার্কেটিং নীতি ও প্রয়োগ-১
9. ডিজিটাল টেকনোলজি ইন বিজনেস-১
10. হিউম্যান রিসোর্স ম্যানেজমেন্ট-১

These are defined directly in "script.js".

---

🔗 How a Subject Connects to Its TXT File

This is extremely important.

The code automatically creates:

s.file = `data/${encodeURIComponent(s.name)}.txt`;

So if:

name = বাংলা-১

the expected file is:

data/বাংলা-১.txt

If:

name = ইংরেজি-১

the expected file is:

data/ইংরেজি-১.txt

There is no separate English slug system in the current implementation. The subject name itself is used as the basis of the filename.

---

🌐 Why "encodeURIComponent()" Is Used

Bangla filenames contain Unicode characters.

They can also contain:

- spaces
- punctuation
- special characters

A browser URL cannot safely send every character exactly as typed.

So JavaScript uses:

encodeURIComponent(...)

before requesting the file.

This converts the filename into a URL-safe representation.

You should therefore not manually create a strange encoded filename.

Keep the real repository filename readable:

data/বাংলা-১.txt

JavaScript handles URL encoding.

---

📥 How a Subject Is Loaded

When the user clicks a subject:

User clicks subject
       ↓
openSubject(subject)
       ↓
Check cache
       ↓
If not cached:
       ↓
fetch(subject.file)
       ↓
Read response text
       ↓
parsePosts(raw)
       ↓
Store posts
       ↓
Render posts
       ↓
Show feed

The implementation uses "fetch()" and "response.text()" to retrieve the plain-text file.

---

📝 The Post System

The subject ".txt" files are not arbitrary text.

They use a simple mini-format.

The website understands several special commands.

The main commands are:

DATE:
IMG:
VID:
AUD:
DRIVE:
LINK:

Everything else becomes normal post text.

---

➖ The "-" Separator

The character:

-

on its own line is a post boundary.

Example:

-
আজকের হোমওয়ার্ক
-

means:

POST 1

Another:

-
আগামীকালের ক্লাস
-

means:

POST 2

The parser reads the file line-by-line and uses standalone "-" lines to divide the content into blocks.

---

🧩 Multiple Posts

Example:

-
আজকের বাংলা হোমওয়ার্ক।
-

-
আগামীকাল পরীক্ষা।
-

-
পরবর্তী অধ্যায় পড়তে হবে।
-

The website sees three posts.

---

⚠️ The Separator Must Be Alone

Correct:

-

Incorrect:

- আজকের কাজ

Incorrect:

--- 

Incorrect:

some text -

The parser specifically checks whether:

line.trim() === "-"

So only a line whose trimmed content is exactly "-" acts as a boundary.

---

🧠 How the Parser Thinks

Imagine this file:

-
DATE: ১ অক্টোবর ২০২৬
আজকের হোমওয়ার্ক।
IMG: https://example.com/a.jpg
-

-
DATE: ৩০ সেপ্টেম্বর ২০২৬
আগের ক্লাস।
-

The parser first creates blocks.

Conceptually:

BLOCK 1
DATE...
TEXT...
IMG...

BLOCK 2
DATE...
TEXT...

Then each block is inspected line-by-line.

---

🔍 Recognized Commands

The parser recognizes:

Command| Meaning
"DATE:"| Post date
"IMG:"| Image
"VID:"| Video
"AUD:"| Audio
"DRIVE:"| Drive link
"LINK:"| Normal link

The matching is case-insensitive because the parser uses an "i" flag.

So:

DATE:
date:
Date:
DaTe:

can be recognized as the same command.

---

📝 Post Text

Any line that is not one of the recognized commands becomes text.

Example:

-
আজকের গুরুত্বপূর্ণ ঘোষণা।

আগামীকাল সবাই সময়মতো আসবে।
-

Both sentences become the post's text.

---

📅 Dates

Use:

DATE:

Example:

DATE: ১ অক্টোবর ২০২৬

The date is stored separately from the normal post text.

The website then displays it above the post text.

---

⚠️ Important Date Fact

The current parser extracts and displays the date, but the actual "script.js" shown here does not implement a date-sorting algorithm.

Therefore, do not document BMT as automatically sorting posts newest-to-oldest unless that behavior is actually added to the current JavaScript.

The order of rendered posts currently follows the order produced by "parsePosts()", which follows the order of blocks in the text file.

Therefore:

If you want newest first, keep the newest post first in the ".txt" file.

Example:

-
DATE: ১ অক্টোবর ২০২৬
Newest
-

-
DATE: ৩০ সেপ্টেম্বর ২০২৬
Older
-

-
DATE: ২৯ সেপ্টেম্বর ২০২৬
Oldest
-

---

🖼️ Images

Use:

IMG: URL

Example:

IMG: https://example.com/photo.jpg

The image is stored in the post's:

images

array.

Multiple images are supported.

---

🖼️ Multiple Images

Example:

-
DATE: ১ অক্টোবর ২০২৬

আজকের ক্লাসের ছবি:

IMG: https://example.com/photo1.jpg
IMG: https://example.com/photo2.jpg
IMG: https://example.com/photo3.jpg
-

The parser adds each image to the same post.

The renderer then creates a media grid.

---

🎥 Videos

Use:

VID: URL

Example:

VID: https://example.com/video.mp4

Multiple videos are supported because every "VID:" line is pushed into the video's array.

---

🎵 Audio

Use:

AUD: URL

Example:

AUD: https://example.com/audio.mp3

The audio item appears as a clickable audio element in the post.

Clicking it opens the audio in the lightbox system.

---

🔗 Normal Links

Use:

LINK: URL

Example:

LINK: https://example.com

This creates a clickable link button.

---

🏷️ Custom Link Labels

You can give the link a label:

LINK: https://example.com (Open Study Material)

The parser separates:

URL

from:

(label)

So the button displays:

Open Study Material

instead of displaying the full URL as the button text.

The same label mechanism works for "DRIVE:".

---

📁 Google Drive Links

Use:

DRIVE: URL

Example:

DRIVE: https://drive.google.com/example

Or:

DRIVE: https://drive.google.com/example (Class PDF)

The website gives Drive links a Drive-specific icon.

---

🖼️ + 🎥 + 🎵 + 🔗 Everything in One Post

A post can contain multiple types simultaneously.

Example:

-
DATE: ১ অক্টোবর ২০২৬

আজকের গুরুত্বপূর্ণ ক্লাস।

এটি একটি গুরুত্বপূর্ণ অধ্যায়।

IMG: https://example.com/photo1.jpg
IMG: https://example.com/photo2.jpg

VID: https://example.com/video.mp4

AUD: https://example.com/audio.mp3

DRIVE: https://drive.google.com/example (PDF)

LINK: https://example.com (More Information)
-

The parser separates these into:

date
text
images
videos
audios
links

and the renderer displays each type separately.

---

💬 Comments

Lines beginning with:

#

are ignored.

Example:

# This is a private developer note.

The website does not treat that line as visible post content.

This is useful for leaving internal notes inside content files.

---

🔦 Lightbox

When media is clicked, BMT can open it in a larger overlay.

The current implementation supports:

Image
Video
Audio

The lightbox creates the appropriate HTML element.

Image

<img>

Video

<video controls autoplay>

Audio

<audio controls autoplay>

The implementation also supports closing the lightbox by:

- clicking the close button
- clicking the overlay
- pressing "Escape"

---

💾 Post Caching

BMT keeps already-loaded posts in:

const postCache = {};

When a subject is opened:

First open
    ↓
Fetch TXT
    ↓
Parse TXT
    ↓
Store posts in cache

If the same subject is opened again during the page session:

Open subject
    ↓
Check cache
    ↓
Already exists
    ↓
Use cached posts

This prevents repeatedly parsing the same file during the same page session.

---

🔢 Subject Post Counter

Each subject card receives a counter element.

After the subject's file is loaded, the code can display:

10 পোস্ট

if ten posts were parsed.

This count represents the number of valid parsed post blocks, not the number of lines in the file.

---

👨‍🏫 Teacher System

Teacher information comes from:

data/teachers.txt

JavaScript loads this file separately.

It does not require you to manually create each teacher card in HTML.

---

📋 Teacher File Format

Each line follows:

Name | Subject | Phone | Role

Example:

Md Example | Accounting | 01700000000 | Sir

The four parts mean:

Part 1 → Teacher name
Part 2 → Subject
Part 3 → Phone number
Part 4 → Role

The current implementation splits each row using:

|

---

👨‍🏫 Teacher Example

Md Rahman | English | 01712345678 | Sir

The website can display:

Sir
Md Rahman
English

and, when a number exists:

📞 Call
💬 WhatsApp

---

📞 Phone Buttons

If a teacher has a phone number, the website generates a "tel:" link.

Example:

01712345678

becomes a phone action.

On a compatible phone, tapping it can open the phone application.

---

💬 WhatsApp Buttons

The code converts the supplied number into a WhatsApp-compatible international number.

For example, a Bangladesh-style number:

01712345678

is converted conceptually into:

8801712345678

and used with:

https://wa.me/

The implementation performs this conversion inside "waLink()".

---

📢 Social System

Social/group/page links come from:

data/social.txt

Each non-empty line is treated as one item.

---

📋 Social File Format

Use:

Label | URL

Example:

BMT WhatsApp Group | https://chat.whatsapp.com/example

Another:

Facebook Group | https://facebook.com/example

The website converts each line into a clickable social chip.

---

🧹 Blank Lines

Blank lines in:

teachers.txt
social.txt

are ignored.

---

💬 Comments in Teacher and Social Files

Lines beginning with:

#

are ignored there too.

Example:

# This teacher is no longer active.

---

🎨 Icons

The project contains an internal SVG icon system.

Available configured icons include:

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

The function:

icon(name)

returns the SVG markup for the requested icon.

If an unknown icon name is requested, the implementation falls back to the link icon.

---

🛡️ HTML Escaping

The project includes:

escapeHtml()

This protects rendered text and URLs from being inserted directly as raw HTML.

Characters such as:

&
<
>
"
'

are escaped before being inserted into generated markup.

This is an important safety layer when rendering external text.

---

⚠️ What Happens When a Subject File Is Missing?

When the student opens a subject, the website tries:

fetch(subject.file)

If the request fails, the feed does not simply crash.

Instead, the UI displays a message indicating that the subject file is not currently available and tells the user where the expected file should exist.

The implementation handles this inside "openSubject()".

---

⚠️ What Happens When Teacher Data Is Missing?

If:

data/teachers.txt

cannot be loaded or contains no usable rows, the teacher section displays an explanatory message telling the user to add teacher information using the expected format.

---

⚠️ What Happens When Social Data Is Missing?

If:

data/social.txt

cannot be loaded or contains no usable rows, the social section displays an explanatory message explaining the required format.

---

🌐 GitHub Pages

BMT is designed as a static website.

That means it does not require:

Node.js
PHP
Python backend
MySQL
MongoDB
PostgreSQL
Server-side rendering

The core application uses:

HTML
CSS
JavaScript
TXT files

GitHub Pages can serve these files as static assets.

---

🚀 Publishing BMT on GitHub Pages

The general structure should be:

repository/
│
├── index.html
├── style.css
├── script.js
│
└── data/
    ├── বাংলা-১.txt
    ├── ইংরেজি-১.txt
    ├── ...
    ├── teachers.txt
    └── social.txt

Then:

1. Push the files to GitHub.
2. Open repository settings.
3. Open Pages.
4. Select the branch containing the website.
5. Select the appropriate root directory.
6. Save.
7. Wait for GitHub Pages to publish.
8. Open the generated Pages URL.

---

💻 Local Development

If you are developing the website on a computer, a local HTTP server is recommended.

For example:

python3 -m http.server 8000

Then open:

http://localhost:8000

This is preferable to simply double-clicking "index.html".

---

🚫 Why "file://" Can Be a Problem

When a browser opens:

file:///...

instead of:

http://...

browser security restrictions can prevent JavaScript from fetching local files in the same way a web server would provide them.

Because BMT uses:

fetch(...)

to load the ".txt" files, development through a local server is safer and more predictable.

The existing project documentation also recommends using a local HTTP server for this reason.

---

➕ Adding a New Subject

Suppose you want to add:

Business Law

You need to update the "SUBJECTS" array in "script.js".

Conceptually:

{
  name: "Business Law",
  tab: "gold",
  icon: "book"
}

Then create:

data/Business Law.txt

The filename must correspond to the subject name.

---

🇧🇩 Adding a Bangla Subject

Suppose you want:

ব্যবসায় আইন

Create:

data/ব্যবসায় আইন.txt

and configure:

{
  name: "ব্যবসায় আইন",
  tab: "gold",
  icon: "book"
}

JavaScript handles the URL encoding.

---

🏷️ Choosing a Subject Tab

Current configuration uses:

gold
teal
rust

Use an existing value unless you intentionally modify the CSS variable system.

---

🖼️ Choosing a Subject Icon

Use one of the existing icon names:

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

If you use:

icon: "book"

the book SVG is displayed.

---

✏️ Renaming a Subject

Suppose the current subject is:

বাংলা-১

and you rename it to:

বাংলা

You must update both:

script.js

and:

data/বাংলা-১.txt

to the new matching filename.

Otherwise JavaScript will request a file based on the new name while the repository still contains the old file.

---

🗑️ Removing a Subject

To remove a subject from the visible subject list:

1. Remove its object from "SUBJECTS".
2. Decide whether its ".txt" file should remain as an archive.
3. Do not delete content unless you are sure you no longer need it.

Removing a subject from the configuration prevents the website from creating its subject card.

---

📝 Adding Homework

Open the correct subject file.

Example:

data/বাংলা-১.txt

Add:

-
DATE: ১ অক্টোবর ২০২৬

আজকের বাংলা হোমওয়ার্ক:

১. অধ্যায় ৪ পড়তে হবে।
২. প্রশ্ন ১–৫ লিখতে হবে।
-

Save and commit.

---

📌 Adding a Permanent Note

A note does not necessarily need a date.

Example:

-
গুরুত্বপূর্ণ:

এই বিষয়ের পরীক্ষার জন্য অধ্যায় ১–৫ ভালোভাবে পড়তে হবে।
-

Because it has no date, it will simply remain in the position where the post appears in the file.

---

📚 Adding Classwork

Example:

-
DATE: ১ অক্টোবর ২০২৬

আজকের ক্লাসওয়ার্ক:

পৃষ্ঠা ২০–২৫ সম্পন্ন করতে হবে।
-

---

🖼️ Adding an Image

-
DATE: ১ অক্টোবর ২০২৬

আজকের ক্লাসের ছবি:

IMG: https://example.com/class.jpg
-

---

🎥 Adding a Video

-
DATE: ১ অক্টোবর ২০২৬

ক্লাস ভিডিও:

VID: https://example.com/class.mp4
-

---

🎵 Adding Audio

-
DATE: ১ অক্টোবর ২০২৬

শোনার জন্য অডিও:

AUD: https://example.com/audio.mp3
-

---

🔗 Adding a Button

-
LINK: https://example.com (Open Website)
-

---

📁 Adding a Drive Button

-
DRIVE: https://drive.google.com/example (Class PDF)
-

---

🧩 Complete Realistic Post

-
DATE: ১ অক্টোবর ২০২৬

আজকের গুরুত্বপূর্ণ কাজ:

১. অধ্যায় ৫ পড়তে হবে।
২. প্রশ্ন ১–১০ লিখতে হবে।
৩. আগামী ক্লাসে খাতা আনতে হবে।

IMG: https://example.com/homework.jpg

VID: https://example.com/explanation.mp4

AUD: https://example.com/lecture.mp3

DRIVE: https://drive.google.com/example (PDF)

LINK: https://example.com (Additional Material)
-

---

🧠 Content vs Code

This distinction should always be remembered.

Content

Homework
Notes
Classwork
Dates
Images
Videos
Audio
Links
Teacher names
Teacher numbers
Social links

→ put these into the appropriate data files.

Code

How posts are parsed
How subjects are loaded
How buttons are created
How media opens
How teacher cards work
How social cards work

→ this belongs in JavaScript.

Appearance

Colors
Sizes
Spacing
Borders
Layout
Typography
Animations

→ this belongs in CSS.

---

🧭 Source of Truth

For subject configuration:

script.js

For subject content:

data/<subject>.txt

For teacher data:

data/teachers.txt

For social data:

data/social.txt

For page structure:

index.html

For visual styling:

style.css

---

🚫 What You Should Never Do

❌ Do not put homework in "script.js"

Bad:

const homework = "Read chapter 5";

Normal homework belongs in the subject data file.

---

❌ Do not put homework in "style.css"

CSS should not contain academic content.

---

❌ Do not randomly rename data files

If JavaScript expects:

data/বাংলা-১.txt

do not rename it to:

data/bangla.txt

unless you also change the subject configuration.

---

❌ Do not remove "data/"

The current code expects:

data/

---

❌ Do not use a different separator without changing the parser

The parser currently expects:

-

as the post boundary.

---

❌ Do not assume every URL is a media file

A URL is only automatically treated as an image/video/audio when you use the corresponding explicit tag.

For reliable behavior, use:

IMG:
VID:
AUD:

---

⚠️ Common Mistakes

Mistake 1 — Wrong folder

Wrong:

বাংলা-১.txt

at repository root.

Correct:

data/বাংলা-১.txt

---

Mistake 2 — Wrong filename

Configured:

বাংলা-১

File:

বাংলা১.txt

These are not necessarily the same.

---

Mistake 3 — Missing separator

Bad:

DATE: ...
Homework

DATE: ...
Another homework

This can become one combined block.

Better:

-
DATE: ...
Homework
-

-
DATE: ...
Another homework
-

---

Mistake 4 — Wrong teacher separator

Correct:

Name | Subject | Phone | Sir

Not:

Name - Subject - Phone - Sir

---

Mistake 5 — Wrong social separator

Correct:

WhatsApp Group | https://...

Not:

WhatsApp Group - https://...

---

🛠️ Troubleshooting

Problem: Subject does not open

Check:

Is the subject in SUBJECTS?
        ↓
Does the matching TXT file exist?
        ↓
Is it inside data/?
        ↓
Does the filename match?
        ↓
Was the file committed?

---

Problem: "File not found"

Check the exact expected path.

For:

বাংলা-১

the expected path is conceptually:

data/বাংলা-১.txt

---

Problem: No posts appear

Check:

1. The file exists.
2. The file contains non-empty content.
3. The post contains at least text or recognized media/link content.
4. The separators are correct.

---

Problem: Two posts appear as one

Check whether you forgot a standalone:

-

between them.

---

Problem: Image does not appear

Check:

IMG: https://...

Then open the image URL directly.

If the image URL itself does not work, BMT cannot make it work.

---

Problem: Video does not appear

Check:

VID: https://...

and confirm the URL actually points to an accessible video resource.

---

Problem: Audio does not work

Check:

AUD: https://...

and verify that the external URL is accessible and provides a browser-compatible audio resource.

---

Problem: Teacher buttons are missing

Check:

Name | Subject | Phone | Sir

If the phone field is empty, the action buttons are not created.

---

Problem: WhatsApp opens incorrectly

Check the phone number.

Use a normal number such as:

01712345678

or:

8801712345678

Avoid putting unrelated characters in the phone field.

---

⚡ Performance

BMT is designed around static files.

There is no requirement for a continuously running application server.

Subject content is loaded when a subject is opened.

This is important because the website does not have to load every subject's complete post content before the student chooses a subject.

The implementation also keeps loaded posts in memory through "postCache", avoiding repeated fetch/parse operations for the same subject during the current page session.

---

🔐 Security

BMT is not a private database.

Anything stored in a public GitHub repository should be considered public.

Never put:

Passwords
API keys
Private tokens
Secret credentials
Private documents
Sensitive personal information

inside public data files.

A ".txt" file is not a security mechanism.

---

🌍 External URLs

BMT can display content hosted elsewhere.

That means the final result can depend on external services.

For example:

BMT
 ↓
External image server

If the external server removes the image, the image may stop working in BMT.

Likewise:

BMT
 ↓
Google Drive

If the Drive file becomes inaccessible, BMT cannot bypass Google's permissions.

---

📱 Mobile Behavior

The project is designed for student use across screen sizes.

However, external media behavior can still depend on the browser and device.

For example:

- video autoplay policies
- phone call behavior
- WhatsApp app availability
- browser media support

are controlled partly by the device/browser.

---

🧪 Testing Checklist

Before publishing a major update, test:

Website

- [ ] Homepage opens
- [ ] Subject cards appear
- [ ] Subject names are correct
- [ ] Icons appear
- [ ] Teacher section loads
- [ ] Social section loads

Subjects

- [ ] Every subject opens
- [ ] Correct file is loaded
- [ ] Correct posts appear
- [ ] Post count is correct

Text

- [ ] Bangla works
- [ ] English works
- [ ] Multiple lines work
- [ ] Blank lines do not cause problems

Post boundaries

- [ ] "-" works
- [ ] Multiple posts work
- [ ] Missing separators are understood as one block

Media

- [ ] Images appear
- [ ] Multiple images appear
- [ ] Videos appear
- [ ] Audio appears
- [ ] Lightbox opens
- [ ] Escape closes lightbox

Teachers

- [ ] Teacher names appear
- [ ] Subjects appear
- [ ] Phone buttons work
- [ ] WhatsApp buttons work

Social

- [ ] Social labels appear
- [ ] Social URLs work

---

🧰 Recommended Maintenance Workflow

When adding normal academic content:

1. Choose the correct subject.
2. Open its TXT file.
3. Create a new post.
4. Add DATE if appropriate.
5. Add the text.
6. Add media if necessary.
7. Save the file.
8. Commit the change.
9. Open the website.
10. Open that subject.
11. Verify the result.

You normally do not need to modify:

index.html
style.css
script.js

for ordinary homework/notes updates.

---

🧑‍💻 Developer Workflow

When changing functionality:

1. Identify which system is involved.
2. Find the relevant JavaScript function.
3. Change the smallest necessary part.
4. Test the affected system.
5. Test other systems that depend on it.
6. Commit.
7. Verify GitHub Pages.

---

🧩 Developer Map

Subject configuration

Search for:

const SUBJECTS

Icons

Search for:

const ICONS

Icon renderer

Search for:

function icon

Post parser

Search for:

function parsePosts

Post renderer

Search for:

function renderPost

Subject opening

Search for:

async function openSubject

Lightbox

Search for:

function openLightbox

Teachers

Search for:

async function loadTeachers

Social links

Search for:

async function loadSocial

These functions are part of the current implementation.

---

🧠 Complete Parser Reference

A post is conceptually converted into:

{
  date: "",
  text: [],
  images: [],
  videos: [],
  audios: [],
  links: []
}

During parsing:

DATE
  ↓
date

IMG
  ↓
images[]

VID
  ↓
videos[]

AUD
  ↓
audios[]

DRIVE
  ↓
links[]

LINK
  ↓
links[]

Anything else
  ↓
text

After parsing:

Parsed object
     ↓
renderPost()
     ↓
HTML
     ↓
Browser

---

🧠 Complete Teacher Reference

Each teacher row becomes conceptually:

Name
Subject
Phone
Role

Then:

Teacher data
     ↓
loadTeachers()
     ↓
HTML teacher card
     ↓
Call + WhatsApp actions

---

🧠 Complete Social Reference

Each social row becomes:

Label
URL

Then:

social.txt
     ↓
loadSocial()
     ↓
social chip
     ↓
external website

---

🔄 Complete BMT Data Flow

Here is the entire application from beginning to end:

                         GITHUB REPOSITORY
                                │
             ┌──────────────────┼──────────────────┐
             │                  │                  │
             ▼                  ▼                  ▼
        index.html          style.css         script.js
             │                  │                  │
             │                  │                  │
             └──────────────────┼──────────────────┘
                                │
                                ▼
                           BROWSER LOAD
                                │
                                ▼
                         SUBJECT CONFIG
                                │
                                ▼
                         SUBJECT CARDS
                                │
                    USER CLICKS SUBJECT
                                │
                                ▼
                         openSubject()
                                │
                                ▼
                       SUBJECT FILE PATH
                                │
                                ▼
                    data/SubjectName.txt
                                │
                                ▼
                            fetch()
                                │
                                ▼
                         response.text()
                                │
                                ▼
                         parsePosts()
                                │
             ┌──────────────────┼─────────────────┐
             │                  │                 │
             ▼                  ▼                 ▼
           TEXT               MEDIA             LINKS
             │                  │                 │
             │          ┌───────┼───────┐         │
             │          │       │       │         │
             │          ▼       ▼       ▼         │
             │        IMG     VID     AUD         │
             │          │       │       │         │
             └──────────┼───────┼───────┼─────────┘
                        │
                        ▼
                   renderPost()
                        │
                        ▼
                     FEED UI
                        │
                        ▼
                   STUDENT

---

📌 Exact File Responsibilities

File| Responsibility
"index.html"| Website structure
"style.css"| Website appearance
"script.js"| Website behavior
"README.md"| Documentation
"data/বাংলা-১.txt"| বাংলা content
"data/ইংরেজি-১.txt"| English content
"data/কম্পিউটার অফিস অ্যাপ্লিকেশন-১.txt"| Computer content
"data/ব্যবসায় গণিত ও পরিসংখ্যান.txt"| Mathematics/statistics content
"data/হিসাববিজ্ঞান নীতি ও প্রয়োগ-১.txt"| Accounting content
"data/অর্থনীতি ও বাণিজ্যিক ভূগোল.txt"| Economics/geography content
"data/ব্যবসায় সংগঠন ও ব্যবস্থাপনা-১.txt"| Business organization/management content
"data/মার্কেটিং নীতি ও প্রয়োগ-১.txt"| Marketing content
"data/ডিজিটাল টেকনোলজি ইন বিজনেস-১.txt"| Digital technology content
"data/হিউম্যান রিসোর্স ম্যানেজমেন্ট-১.txt"| HR content
"data/teachers.txt"| Teacher information
"data/social.txt"| Group/page/social URLs

---

🧸 If You Forget Everything

Remember these four rules:

Rule 1

TXT = CONTENT

Rule 2

JS = BRAIN

Rule 3

CSS = LOOK

Rule 4

HTML = STRUCTURE

And:

data/

contains the study data.

---

📝 Complete Subject File Template

Copy this structure:

-
DATE: ১ অক্টোবর ২০২৬

আজকের ক্লাস:

এখানে আপনার লেখা থাকবে।

IMG: https://example.com/image.jpg

VID: https://example.com/video.mp4

AUD: https://example.com/audio.mp3

DRIVE: https://drive.google.com/example (PDF)

LINK: https://example.com (More Information)
-

-
DATE: ৩০ সেপ্টেম্বর ২০২৬

আগের ক্লাসের কাজ।

-

---

👨‍🏫 Complete Teacher Template

"data/teachers.txt"

Md Example | English | 01700000000 | Sir
Md Example 2 | Accounting | 01800000000 | Sir
Example Madam | Marketing | 01900000000 | Madam

---

📢 Complete Social Template

"data/social.txt"

WhatsApp Group | https://chat.whatsapp.com/example
Facebook Group | https://facebook.com/example
Telegram Group | https://t.me/example

---

⚠️ Important Accuracy Notes

This README intentionally distinguishes between what the current implementation actually does and what could be added later.

For example:

Currently implemented

- Subject configuration
- ".txt" loading
- "-" post boundaries
- "DATE"
- "IMG"
- "VID"
- "AUD"
- "DRIVE"
- "LINK"
- Multiple media entries
- Media lightbox
- Teacher loading
- Phone links
- WhatsApp links
- Social loading
- Subject post counts
- Post caching
- HTML escaping
- Missing-file fallback behavior

These are represented in the current "script.js".

Not automatically claimed here

This README does not claim that the current implementation has:

- automatic date sorting
- database storage
- authentication
- user accounts
- real-time messaging
- notifications
- search
- exam result management
- offline-first functionality
- server-side processing
- automatic synchronization

unless those features are actually implemented.

This distinction keeps the documentation trustworthy.

---

🚀 Future Expansion

The architecture can be extended later.

Possible additions include:

🔎 Search
📌 Pinned posts
🏷️ Categories
📅 Calendar
⏰ Deadlines
📊 Study progress
📝 Dedicated notes
📚 Chapter tracking
📥 Downloads
🔔 Notifications
🌙 Theme controls
📱 PWA support
🗃️ Database integration
👤 User accounts

These should be considered future development ideas, not existing features unless implemented.

---

🧱 Why the Architecture Is Useful

The separation between:

Code

and:

Content

means a student can update study information without needing to understand JavaScript.

For example:

Old website code
       +
New TXT content
       =
Updated study information

The website's brain stays the same.

Only the notebook changes.

---

🌟 The Core Philosophy

BMT follows this philosophy:

«Make the code handle the system, and make the text files hold the information.»

This creates a clean separation.

The website knows:

«"How do I display a post?"»

The TXT file knows:

«"What should the post say?"»

That is the fundamental architecture.

---

🔬 Developer-Level Mental Model

A developer can think of BMT as a very small content-rendering engine.

Input:

Plain text

Parser:

parsePosts()

Intermediate representation:

{
  date,
  text,
  images,
  videos,
  audios,
  links
}

Renderer:

renderPost()

Output:

HTML

Browser:

HTML + CSS

Result:

Visible study feed

---

🧭 Final Mental Model

The entire BMT project can ultimately be remembered as:

                    BMT
                     │
          ┌──────────┴──────────┐
          │                     │
        CODE                  CONTENT
          │                     │
    ┌─────┼─────┐          ┌────┼─────┐
    │     │     │          │    │     │
   HTML  CSS    JS       Subjects Teachers Social
    │     │     │          │
    │     │     └──────────┤
    │     │                │
    └─────┴────────────────┘
              │
              ▼
           BROWSER
              │
              ▼
         BMT WEBSITE
              │
              ▼
           STUDENT

Or, even simpler:

📄 TXT
   ↓
🧠 JavaScript
   ↓
🌐 Website
   ↓
👨‍🎓 Student

---

❤️ Final Statement

BMT is designed around one simple idea:

«Academic information should be easy to add, easy to understand, easy to maintain, and easy to access.»

The project does this by separating:

Structure → HTML
Appearance → CSS
Behavior → JavaScript
Content → TXT

Once this separation is understood, maintaining BMT becomes extremely simple.

If you want to add homework:

Edit the subject TXT file.

If you want to add a teacher:

Edit teachers.txt.

If you want to add a group/page:

Edit social.txt.

If you want to change how the website behaves:

Edit script.js.

If you want to change how it looks:

Edit style.css.

If you want to change the page structure:

Edit index.html.

That is the complete philosophy behind BMT.

---

🌐 Project Links

Live Website

https://uuhjeike.github.io/BMT/

GitHub Repository

https://github.com/uuhjeike/BMT/

---

🏁 BMT

Business Management Technology

Learn. Build. Grow.

«One repository. One study hub. One simple system.»
