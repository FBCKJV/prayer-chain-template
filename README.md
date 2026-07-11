# Prayer Chain — a free, invite-only prayer app for your church ✝

**▶️ [See a live demo](https://fbckjv.app/prayer-chain-template/)** &nbsp;·&nbsp;
**⭐ Click _"Use this template"_ (top of this page) to make your own** &nbsp;·&nbsp;
**📖 [Build Guide](./BUILD-GUIDE.md)**

A small, private prayer-request and prayer-chain app you can stand up for your
church **for free**, with no server to run and no coding required.

Built to be quiet and low-drama by design:

- **No direct messages.** One shared feed — everything posted goes to the whole
  chain, so there's nothing hidden to moderate.
- **Invite-only.** New members must enter a secret **invite code** to join. You
  hand out the code; you can change it any time.
- **Newest first**, updating live on everyone's devices.
- **Installable** on phones ("Add to Home Screen") — opens like a real app.
- **Weekly Prayer List** — a standing, categorized page moderators can edit.
- **Open moderation** — moderators wear a visible badge; nothing is done in secret.
- **Optional push notifications** for new and answered prayers.

It's a plain static website (HTML/CSS/JavaScript, no build step) backed by
**Firebase** (Google's free database + login). It runs entirely on free tiers.

## 👉 Start here: [BUILD-GUIDE.md](./BUILD-GUIDE.md)

That guide walks you from zero — creating accounts, putting the app online,
connecting Firebase, and **testing a fully working app** — before you ever touch
the optional notification setup. Plan about an hour. No credit card, no coding.

## What you'll touch (the only files you normally edit)

| File | What it's for |
|------|----------------|
| `js/site-config.js` | Your church's name |
| `js/firebase-config.js` | Connects the app to your Firebase project |
| `firestore.rules` | Security rules you paste into Firebase (as-is) |
| `manifest.json` | The app's name on a phone's home screen (optional) |
| `assets/icons/…` + `assets/logo-display.png` | Your logo (optional — a neutral church icon is included) |
| `js/notify-config.js` | Notifications (optional, later) |

Everything else is the app itself — you shouldn't need to edit it.

## How your data stays private

The invite code lives in your Firebase database and is **never readable by the
app**. Signing up requires it, and the security rules (`firestore.rules`) make
sure only members can read or write anything. No Cloud Functions, no billing.

> Firebase web config values (in `firebase-config.js`) are **not** secrets —
> they're meant to be public. Your data is protected by the rules, not by hiding
> those values.

## Want help customizing?

This whole app was built by chatting with **Claude Code** (https://claude.ai/code)
in plain English. You can point it at your copy of this repo to change colors,
add features, swap in your logo, or troubleshoot — no coding needed. See Part 2
of the build guide.
