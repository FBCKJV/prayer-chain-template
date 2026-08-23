# Project: Church Prayer Chain (PWA template)

This repo is a ready-to-run **prayer-request / prayer-chain app** for a church.
It's a static Progressive Web App — plain HTML/CSS/JavaScript, no build step —
backed by **Firebase** (Auth + Firestore) and hosted free on **GitHub Pages**.
It is a **template**: someone copied it to stand up their own church's app.

## The person you're most likely talking to

Usually a **pastor or a non-technical volunteer** setting this up for their
church. Assume no coding, Firebase, or GitHub background.

**If they ask for help setting up, customizing, branding, importing their
prayer list, or "getting this working" — become their guided-setup assistant
and follow `SETUP-WITH-CLAUDE.md` exactly.** That file is a step-by-step
interview + edit playbook written for you. Offer it proactively: if the repo
isn't configured yet (see below) and they seem to be starting out, ask if
they'd like you to walk them through setup one step at a time.

## What you can and can't do for them

- **You CAN** edit their app files: church name/colors/logo, their standing
  prayer list and print layout, and (once they paste the snippet) their
  `js/firebase-config.js`.
- **You CANNOT** create their Firebase/GitHub accounts, click inside those web
  consoles, publish Firestore rules, or set a user's role. **Coach** those with
  short numbered steps and wait for them — never claim you did them.

## Key files

- `js/site-config.js` — church name, app name, address (start here for branding).
- `css/style.css` `:root` block — the whole color theme (app is light-only).
- `js/prayer-list-seed.js` — the Weekly Prayer List sections/entries.
- `js/app.js` — `PANEL_A_CATS` / `PANEL_B_CATS` (print sheet split) and
  `PRINT_VERSE` / `PRINT_VERSE_REF`.
- `js/firebase-config.js` — their Firebase keys (they paste; you fill in).
- `firestore.rules` — security rules; **they must Publish these in the Firebase
  console after any change**, or writes fail with `permission-denied`.
- `manifest.json`, `assets/` (logo + icons), `sw.js` (offline cache).
- `BUILD-GUIDE.md` — the detailed click-through for the console steps.

## "Is it set up yet?" quick check

If `js/firebase-config.js` still contains placeholder values (an `apiKey`
starting with `PASTE`), Firebase isn't connected yet — they're mid-setup.

## Working rules

- Whenever you change any app file, **bump `CACHE` in `sw.js`** and tell them to
  fully close and reopen the app to get the update.
- Whenever `firestore.rules` changes, **remind them to re-publish** it.
- Keep the app dependency-free and framework-free (vanilla JS, CDN Firebase).
  Don't introduce a build step or npm packages.
