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

## 👉 Two ways to set it up — pick one

**🟢 Easiest — let Claude walk you through it: [SETUP-WITH-CLAUDE.md](./SETUP-WITH-CLAUDE.md)**
Open this project in [Claude Code](https://claude.ai/code) and say *"Please set
me up — follow SETUP-WITH-CLAUDE.md and be my guide."* Claude asks simple
questions about your church (name, colors, logo, your prayer list), makes all
the code changes for you, and coaches you through the click-through parts. Best
if you're not technical.

**📖 By hand: [BUILD-GUIDE.md](./BUILD-GUIDE.md)**
The same setup as a detailed, do-it-yourself walkthrough — creating accounts,
putting the app online, connecting Firebase, and **testing a fully working
app** — before you ever touch the optional notification setup. Plan about an
hour. No credit card, no coding either way.

---

### 🤝 Sharing this with another church? (for whoever's passing it on)

If you already run this and you're setting up a friend at another church, here's
the short version of what to hand them:

1. **Give them their own copy.** On this repo's GitHub page, have them click
   **"Use this template" → Create a new repository** under *their* account (not
   yours). That gives them a clean copy they own. If they'd rather you drive,
   create it and add them as a collaborator (repo **Settings → Collaborators**).
2. **Tell them to open it in [Claude Code](https://claude.ai/code)** and paste:
   *"Please set me up — follow SETUP-WITH-CLAUDE.md and be my guide, one step at
   a time. I'm not technical."* Claude takes it from there.
3. **Have them gather three things first** so the interview goes smoothly:
   their **logo** image, their **current weekly prayer list** (PDF, doc, photo,
   or typed), and a **brand color** if they have one.
4. **Warn them about the one recurring gotcha:** every time Claude has them
   paste `firestore.rules` into Firebase, they must click **Publish**, or the
   app will say *permission-denied*.
5. They'll need free **Google/Firebase** and **GitHub** accounts — no credit
   card. Budget about an hour together the first time.

That's it — the app code and the how-to travel with the repo.

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
