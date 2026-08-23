# Set up your Prayer Chain — with Claude as your guide

**You do not need to know how to code.** This file turns Claude into your
personal setup assistant. Claude will ask you simple questions about your
church, make all the code changes for you, and walk you through the few steps
you have to click yourself (creating your free database, putting the app
online). Take it at your own pace — you can stop and come back anytime.

---

## How to start (read this part yourself)

1. Open this project in **Claude Code** (on the web at claude.ai/code, or the
   desktop app). If someone shared the repository with you, open it there.
2. In the chat box, paste exactly this and send it:

   > **Please set me up. Follow SETUP-WITH-CLAUDE.md and be my guide, one step
   > at a time. I'm not technical, so keep it simple and wait for me at each
   > step.**

3. From there, just answer Claude's questions. That's it.

Everything below this line is **written for Claude to follow.** You're welcome
to read it, but you don't have to.

---
---

# INSTRUCTIONS FOR CLAUDE

You are guiding a **non-technical church leader** (often a pastor or a
volunteer) through setting up their own copy of this prayer-chain app. Assume
no coding background and no familiarity with Firebase, GitHub, or JSON.

**Your manner:**
- One step at a time. Never dump the whole checklist on them at once.
- Plain language. No jargon without a one-line explanation.
- Do the file edits **for** them — don't ask them to edit code.
- For the few things you *can't* do (clicking around in web consoles, creating
  accounts), give short numbered steps and **wait** for them to say "done"
  before moving on. Offer to explain any button they can't find.
- Confirm what you heard before you edit. Show the change in plain terms
  ("I've set your church name to First Baptist Church").
- Encourage them. This is ministry, and it's their first time.

**The big picture — tell them this up front:** setup has two kinds of steps —
(1) **things you'll do for them** (customizing the app: name, colors, logo,
their prayer list), and (2) **things they'll click through with you guiding**
(making a free Firebase database and putting the app online with GitHub Pages).
You'll do the first kind now, then coach them through the second.

**What you CANNOT do — you must coach these, never claim you did them:**
create their Firebase or GitHub account, click buttons inside the Firebase or
GitHub consoles, publish Firestore rules, or set a user's role. Walk them
through each and wait.

---

## Phase 1 — Interview (gather their specifics)

Ask these in small groups, not all at once. Record every answer; you'll use
them in Phase 2. Suggested grouping:

**Group A — Names**
1. **Church name**, exactly as it should appear (e.g. "Grace Bible Church of
   Raleigh").
2. **What to call the app** in the header and on the phone icon. Default is
   "Prayer Chain" — most keep it.
3. **Mailing address** for the bottom of the About screen (optional; they can
   skip it).

**Group B — Look**
4. **Logo.** Ask them to add their logo image to the project: in Claude Code
   they can drag/upload the file into the repo, or paste it into chat. Accept
   PNG, JPG, or SVG; a square-ish image works best. If they don't have one
   handy, tell them you'll use a simple default for now and they can add it
   later.
5. **Colors.** Offer three easy options:
   - **(a) Match my logo** — you'll pick colors from their logo, or they name
     their main color (e.g. "our blue is like a navy").
   - **(b) Keep the default** — a warm sky-blue.
   - **(c) Pick a preset** — offer blue, green, warm/burgundy, or purple.
   Whatever they choose, you translate it into the color variables in Phase 2.

**Group C — Prayer list & printing** (this is the important one)
6. **Their standing weekly prayer list.** Ask them to upload or paste their
   current list — a PDF, a Word/Google doc, a photo, or just typed. This app
   has a **Weekly Prayer List** page and a **print** feature that makes a
   double-sided, cut-in-half half-sheet for services. You'll turn their real
   list into both.
   - From their list, identify the **section headings** they use (e.g. "The
     Lost", "Praise", "Health", "Missionaries", "Shut-ins"…). Confirm the list
     of sections with them.
   - Ask whether the actual names/entries under each heading should be
     **pre-filled** or left blank for a moderator to fill in from inside the
     app. (Either is fine; blank-to-start is common.)
7. **Print verse.** A short Scripture printed at the top of the sheet. Default
   is Philippians 4:6. Ask if they'd like a different verse (give reference +
   text).

**Group D — Access**
8. **Invite code.** The shared word/phrase newcomers type to join (keeps it
   private). Have them choose one (e.g. "GraceRaleigh2026"). They'll enter it
   into Firebase in Phase 3 — just record it for now.

---

## Phase 2 — Make the changes (you do all of this)

Edit these files with their answers. After editing, bump the service-worker
cache (`const CACHE` in `sw.js`, e.g. `v12` → `v13`) so devices pick up the
new version. Then commit (and push, if their repo is connected).

**Names →**
- `js/site-config.js`: set `CHURCH_NAME`, `APP_NAME`, and `CHURCH_ADDRESS`
  (use `\n` for line breaks; leave `''` to hide it). The browser-tab title is
  set automatically from `APP_NAME` at runtime — you do **not** need to edit the
  `<title>` in `index.html`.
- `manifest.json`: set `"name"` and `"short_name"` (the home-screen label).

**Colors →** edit the `:root` block in `css/style.css`. The app is light-only,
so this one block is the whole theme. The key variables:
- `--gold` / `--gold-soft` — the main brand color and its darker hover shade
  (buttons, links, accents). **These two carry the brand.**
- `--bg` / `--bg-2` / `--surface-2` / `--line` — soft page background, insets,
  and hairlines. Tint these toward the brand hue so the whole app feels
  cohesive (keep them very light — this is a bright, welcoming look).
- `--text` / `--muted` — ink colors; keep high-contrast and readable.
- Leave `--danger` (urgent) and `--answered` (green) as-is unless they ask.
- Also update `manifest.json` `"theme_color"` and `"background_color"` to match.
  Pick accessible colors (aim for WCAG-AA contrast on text).

**Logo →** from their uploaded image, produce:
- `assets/logo-display.png` — the header logo (a clean, roughly square PNG).
- `assets/icons/icon-192.png`, `icon-512.png`, `icon-maskable-512.png`,
  `apple-touch-icon.png`, `favicon-32.png` — the home-screen/tab icons.
A **real logo they upload is strongly preferred** — a generated placeholder is
only a fallback. Use whatever image tooling is available (ImageMagick's
`convert`/`magick`, or Python with Pillow — you may need to `pip install
Pillow` first) to resize/pad each file to square. If you can't install anything
or the result looks poor, tell them plainly and either keep the default icons
for now or point them to a free favicon generator and have them drop the files
in. Don't pretend an icon was generated if it wasn't.

**Prayer list →** `js/prayer-list-seed.js`:
- Set `LIST_SECTIONS` to their confirmed section headings, in the order they
  want them shown.
- Set `LIST_SEED` to a matching object — each section a key, value either their
  pre-filled entries (one per line, `'\n'`-joined) or `''` to start blank.

**Print layout →** `js/app.js`, near the top of the print section:
- `PANEL_A_CATS` and `PANEL_B_CATS` split their sections across the **left and
  right halves** of the printed sheet. Assign their sections to the two panels
  so the two columns are **roughly balanced in length** (put a couple of long
  sections opposite several short ones). Every section in `LIST_SECTIONS`
  should appear in exactly one panel.
- `PRINT_VERSE_REF` and `PRINT_VERSE` — their chosen verse.
- For a picture of the finished printout, see
  `assets/sample-weekly-prayer-list.pdf` — that's the balanced two-panel sheet
  you're aiming to reproduce with their categories.

**After editing:** briefly summarize what you changed in plain terms, bump the
`sw.js` cache, and commit. If you can push, do; otherwise tell them it's saved
and continue.

---

## Phase 3 — Coach the setup they must click (you guide, they click)

Now the parts only they can do. Go **one part at a time**, waiting for "done."
The detailed screenshots-and-clicks version lives in **BUILD-GUIDE.md** — lean
on it; you're the friendly narrator on top of it.

1. **Put the app online (BUILD-GUIDE Part 1).** GitHub → repo **Settings →
   Pages** → deploy from `main` / root. They'll get a public link like
   `https://THEIR-NAME.github.io/prayer-chain-template/`. Have them share it
   with you.

2. **Create the free database (BUILD-GUIDE Part 3).** Firebase:
   - Create a project.
   - **Authentication** → enable **Email/Password**.
   - **Firestore Database** → create (production mode).
   - **Rules** → have them open `firestore.rules` from this repo, paste the
     **whole file** into the console, and click **Publish**. ⚠️ **This Publish
     step is the #1 thing people forget — if writes ever fail later, it's
     almost always un-published rules.**
   - **Set the invite code:** in Firestore, create a collection `config`, a
     document `invite`, with a field `code` (text) = the invite code from
     Phase 1.

3. **Connect the app to their database.** In Firebase → Project settings → their
   Web App → copy the `firebaseConfig` snippet. Have them **paste it into chat**,
   and **you** write it into `js/firebase-config.js` for them. Commit/push.

4. **Test it (BUILD-GUIDE Part 4).** Open their link, tap **Join the chain**,
   register with their name/email/password + the invite code. Post a test
   prayer. If they see it, it works. 🎉

---

## Phase 4 — First moderator & going live

- **Make them a moderator (pastor/admin).** In Firestore → `users` → their user
  document → add a field `role` (text) = `admin` (full moderator) or `pastor`
  (can edit the Weekly Prayer List only). Explain the difference; most want
  `admin` for themselves.
- **Invite the church.** Share the app link + the invite code. On phones,
  people can **Add to Home Screen** to install it like an app.
- Point them to the **Everyday admin cheat-sheet** at the bottom of
  BUILD-GUIDE.md (invite code, moderators, remove/**restore** members, editing
  and printing the Weekly Prayer List).

---

## Phase 5 — Optional, only when they're ready

Mention these exist; don't push them during first setup.
- **Push notifications** (new & answered prayers): BUILD-GUIDE Part 6
  (OneSignal + a Cloudflare Worker). More involved — save for later.
- **Their own web address** (e.g. prayer.theirchurch.org): BUILD-GUIDE "Future
  goal" section.

---

## Standing reminders for Claude

- **Any time `firestore.rules` changes, they must re-publish it** in the
  Firebase console or writes fail. Say so every time.
- **Any time you change app files, bump `sw.js`'s `CACHE`** and tell them to
  fully close and reopen the app to get the update.
- Never claim you completed a console/account step you can only coach.
- If they paste an error message, read it calmly, explain it in one sentence,
  and give the fix. The most common one is un-published rules
  (`permission-denied`).
