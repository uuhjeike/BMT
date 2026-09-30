====================================================================
BMT - STUDY HUB
====================================================================

A lightweight, static study-management website for organizing subjects,
homework, classwork, notes, teachers, social links, and study resources
in one place.

Live Website:
https://uuhjeike.github.io/BMT/

Repository:
https://github.com/uuhjeike/BMT

Made with:
HTML | CSS | JavaScript

License:
No explicit open-source license is currently documented in this README.


====================================================================
CONTENTS
====================================================================

1.  What Is BMT?
2.  Key Features
3.  How the Website Works
4.  Content System
5.  Repository Structure
6.  Technology Stack
7.  Quick Start
8.  Adding or Updating Content
9.  Troubleshooting
10. Design Principles
11. Future Expansion
12. License
13. Final Summary
14. Project Overview


====================================================================
1. WHAT IS BMT?
====================================================================

BMT - Study Hub is a simple, lightweight, browser-based study platform
designed to keep academic information organized and easy to access.

The project is intentionally built without:

- A backend
- A database
- A login system
- Complicated server infrastructure

Instead, the website reads its content directly from .txt files stored
in the GitHub repository.

That means:

    Edit a text file -> Commit the change -> Open the website
    -> Updated content appears.

No database management is required, and most content updates do not
require changing the website's HTML, CSS, or JavaScript.


====================================================================
2. KEY FEATURES
====================================================================

SUBJECT-BASED CONTENT
---------------------

Each subject has its own dedicated content file. Examples include:

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


SIMPLE CONTENT SYSTEM
---------------------

The most important design principle of BMT is that content is
controlled through text files.

Examples:

- বাংলা-১.txt
- ইংরেজি-১.txt
- কম্পিউটার অফিস অ্যাপ্লিকেশন-১.txt
- ব্যবসায় গণিত ও পরিসংখ্যান.txt

You do not need to modify the website interface every time you want to
add a new study post. Simply edit the appropriate .txt file.


SUPPORTED CONTENT TAGS
----------------------

Tag       Purpose
-------   ------------------------------------------------------------
DATE:     Sets the post date
IMG:      Adds an image
VID:      Adds a video
AUD:      Adds an audio file
DRIVE:    Creates a Google Drive button
LINK:     Creates a custom external-link button

Example:

    DATE: ১ অক্টোবর ২০২৬
    Today's homework.
    IMG: https://example.com/photo.jpg
    VID: https://example.com/video.mp4
    AUD: https://example.com/audio.mp3
    DRIVE: https://drive.google.com/... (Class Materials)
    LINK: https://example.com (Open Resource)


AUTOMATIC LINK DETECTION
------------------------

Explicit tags are not always required. If a post contains a standalone
URL, the website automatically attempts to determine what type of
resource it represents.

Resource Type   Supported Formats
-------------   ----------------------------------------------------
Images          .jpg .jpeg .png .gif .webp .avif .bmp
Videos          .mp4 .webm .mov .m4v
Audio           .mp3 .wav .m4a .aac .flac .ogg
YouTube         youtube.com/watch?v=...
                youtu.be/...
                youtube.com/shorts/...
Other Sites     Facebook, Instagram, TikTok, Telegram, WhatsApp,
                Google Drive, and more


GITHUB BLOB LINK SUPPORT
------------------------

The system also handles GitHub "blob" URLs. For example:

    https://github.com/uuhjeike/BMT/blob/main/Files/example.jpg

is converted internally to the corresponding raw file URL when
appropriate. This means you can copy a file URL directly from GitHub
without manually converting it to a raw.githubusercontent.com address.


AUTOMATIC DATE SORTING
----------------------

Posts are automatically organized from Newest -> Oldest when a valid
DATE: value is available.

The system supports date formats such as:

- 15 Jan 2026
- ১৫ জানুয়ারি ২০২৬

Posts without a recognizable date are placed after dated posts.


TEACHER INFORMATION
-------------------

Teacher information is stored separately in teachers.txt.

Basic format:

    Name | Subject | Mobile Number | Sir/Madam

Example:

    Example Teacher | বাংলা-১ | 01XXXXXXXXX | Sir

The website can automatically generate:

- Teacher name
- Subject
- Calling option
- WhatsApp option

The system accepts phone numbers beginning with either 0 or 880.


SOCIAL & COMMUNITY FEED
-----------------------

Social/community information is stored in social.txt.

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

This makes social.txt a flexible communication and resource feed rather
than simply a list of social-media URLs.


====================================================================
3. HOW THE WEBSITE WORKS
====================================================================

The project has three main code layers.

1. index.html
--------------

Responsible for the basic webpage structure. It provides the areas
into which the JavaScript application places the content.

2. style.css
------------

Responsible for the visual presentation. It controls things such as:

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

3. script.js
------------

This is the main application logic. It handles:

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


CONTENT LOADING ARCHITECTURE
----------------------------

The website reads content from the GitHub repository using a raw-content
base URL:

    const GITHUB_RAW_BASE =
    "https://raw.githubusercontent.com/uuhjeike/BMT/main/";

The architecture is therefore:

    GitHub Repository
           |
           v
       .txt Files
           |
           v
       script.js
           |-- Parse content
           |-- Detect dates
           |-- Detect media
           |-- Detect links
           |-- Build posts
           |
           v
       index.html
           |
           v
       style.css
           |
           v
     Final Study Hub


WHY THIS ARCHITECTURE?
----------------------

The project deliberately separates application code from study content.

This provides an important advantage:

If you only want to add homework, notes, or a new link, you normally do
not need to edit index.html, style.css, or script.js.

Instead, you edit the appropriate content file. For example:

- বাংলা-১.txt for Bengali content
- social.txt for community/social content


====================================================================
4. CONTENT SYSTEM
====================================================================

The content system is built around plain .txt files.

Each subject file can contain one or more posts. Posts are separated
using:

    POST CONTENT

A post can include:

- Plain text
- DATE: for ordering
- IMG: for images
- VID: for videos
- AUD: for audio
- DRIVE: for Google Drive buttons
- LINK: for custom external-link buttons
- Standalone URLs for automatic detection

Example:

    DATE: ১ অক্টোবর ২০২৬
    Today's homework.
    IMG: https://example.com/photo.jpg
    VID: https://example.com/video.mp4
    AUD: https://example.com/audio.mp3
    DRIVE: https://drive.google.com/... (Class Materials)
    LINK: https://example.com (Open Resource)


====================================================================
5. REPOSITORY STRUCTURE
====================================================================

BMT/
|
|-- index.html
|-- style.css
|-- script.js
|
|-- README.md
|-- README.txt
|
|-- teachers.txt
|-- social.txt
|
|-- বাংলা-১.txt
|-- ইংরেজি-১.txt
|-- কম্পিউটার অফিস অ্যাপ্লিকেশন-১.txt
|-- ব্যবসায় গণিত ও পরিসংখ্যান.txt
|-- হিসাববিজ্ঞান নীতি ও প্রয়োগ-১.txt
|-- অর্থনীতি ও বাণিজ্যিক ভূগোল.txt
|-- ব্যবসায় সংগঠন ও ব্যবস্থাপনা-১.txt
|-- মার্কেটিং নীতি ও প্রয়োগ-১.txt
|-- ডিজিটাল টেকনোলজি ইন বিজনেস-১.txt
|-- হিউম্যান রিসোর্স ম্যানেজমেন্ট-১.txt
|
|-- Files/
    |-- Optional media files


====================================================================
6. TECHNOLOGY STACK
====================================================================

Technology                  Purpose
--------------------------  --------------------------------------
HTML5                       Page structure
CSS3                        Design and responsive presentation
JavaScript                  Application logic and content processing
TXT                         Content storage
GitHub                      Repository and content hosting
GitHub Pages                Website hosting
Raw GitHub Content          Content retrieval

No backend database is required by the current architecture.


====================================================================
7. QUICK START
====================================================================

If you only remember five things, remember these:

1. Website:
   https://uuhjeike.github.io/BMT/

2. Repository:
   https://github.com/uuhjeike/BMT

3. Subject content:
   Subject Name.txt

4. Separate posts:
   POST CONTENT

5. Add dates when ordering matters:
   DATE: ১ অক্টোবর ২০২৬

That is the basic system.


====================================================================
8. ADDING OR UPDATING CONTENT
====================================================================

ADDING A NEW SUBJECT
--------------------

To add another subject, update the SUBJECTS configuration inside
script.js.

A subject requires information such as:

- Name
- Tab
- Icon

The corresponding .txt file should use the same subject name.

For example, New Subject should have New Subject.txt.

IMPORTANT:
The filename and configured subject name must match correctly,
including spaces, punctuation, and characters. Even small differences
can cause the content file to be unavailable to the subject.


UPDATING THE WEBSITE
--------------------

One of the simplest workflows is:

1. Open the required .txt file
2. Add or edit the content
3. Commit the change to GitHub
4. GitHub stores the updated file
5. The website fetches the updated content
6. The new information appears on the site

For ordinary content changes, the website code itself does not need to
be rewritten.


RUNNING LOCALLY
---------------

Because the project retrieves content from GitHub's raw-content service,
the main page can be opened locally.

You can also run a simple local HTTP server using Python:

    python3 -m http.server 8000

Then open:

    http://localhost:8000


DEPLOYMENT
----------

The project is compatible with static hosting.

The current website is available through GitHub Pages.

A static deployment does not require:

- A traditional web server
- A database server
- Backend APIs
- User authentication
- Server-side rendering


====================================================================
9. TROUBLESHOOTING
====================================================================

Issue: Images are not appearing
--------------------------------
Check that the image URL actually points to an accessible image file.
If using GitHub, a normal "blob" URL is automatically handled where
supported, but the underlying file must still be accessible.

Issue: YouTube video is not embedded
-------------------------------------
Use a supported YouTube URL format such as:

    https://www.youtube.com/watch?v=VIDEO_ID
    https://youtu.be/VIDEO_ID

A channel or playlist URL is not equivalent to a normal individual
video URL.

Issue: Posts appear in the wrong order
---------------------------------------
Check the DATE: value. Make sure the date is recognizable by the parser.
Posts without valid dates are handled separately from dated posts.

Issue: New subject does not appear
-----------------------------------
Check both:

1. The subject exists in the SUBJECTS configuration.
2. The corresponding .txt file exists in the repository root.

The names must match exactly.

Issue: Teacher contact buttons are not working
----------------------------------------------
Check that the teacher entry follows the expected format:

    Name | Subject | Mobile Number | Sir/Madam

Also verify that the phone number is valid.


====================================================================
10. DESIGN PRINCIPLES
====================================================================

BMT follows several core principles:

- Simple
  The system should be understandable without requiring a complicated
  backend.

- Content-Driven
  Academic content lives in text files rather than being hard-coded
  into the interface.

- Lightweight
  The project avoids unnecessary infrastructure.

- Maintainable
  The interface and content are separated.

- Expandable
  New subjects, posts, media, and links can be added without
  redesigning the entire application.

- Human-Friendly
  Content should be easy to create and understand even without
  advanced programming knowledge.


====================================================================
11. FUTURE EXPANSION
====================================================================

The current architecture provides a foundation that can be extended
later.

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

    Keep the interface simple while making the content easy to update.


====================================================================
12. LICENSE
====================================================================

No explicit open-source license is currently documented in this README.

If this project is intended to be reused, modified, or redistributed by
other people, a suitable license should be added to the repository so
the permitted usage is clearly defined.


====================================================================
13. FINAL SUMMARY
====================================================================

BMT is a static, text-driven Study Hub.

- The website provides the interface.
- GitHub stores the files.
- .txt files store the academic content.
- script.js reads and interprets that content.
- style.css presents it visually.
- GitHub Pages publishes the final website.

The result is a simple workflow:

    WRITE -> SAVE -> COMMIT -> GITHUB -> BMT -> READ

One website. Separate subjects. Simple content files. Flexible media.
Automatic organization. Minimal infrastructure.

STUDY SMARTER. STAY ORGANIZED. KEEP MOVING FORWARD.


====================================================================
14. PROJECT OVERVIEW
====================================================================

Category                  Implementation
------------------------  ------------------------------------------
Website type              Static web application
Content model             Text-file driven
Backend                   None
Database                  None
Main logic                JavaScript
Styling                   CSS
Structure                 HTML
Content files             .txt
Repository                GitHub
Hosting                   GitHub Pages
Media                     External URLs / repository files
Subject organization      Individual files
Teacher data              teachers.txt
Social feed               social.txt
Date ordering             Automatic
Responsive interface      Yes


====================================================================
END OF README.TXT
====================================================================
