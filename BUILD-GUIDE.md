# Build your church's Prayer Chain — step by step

This guide takes you from **nothing** to a **working, private prayer app** for
your church, then (optionally) adds phone notifications.

- ⏱️ About **an hour**. 💵 **Free** — no credit card, no coding.
- You'll create two free accounts: **GitHub** (hosts the app) and **Firebase**
  (Google — stores the data and handles logins).
- We build and **test a fully working app first** (Parts 1–4). Notifications are
  a separate, optional step you can do later (Part 6).

> Tip: do this on a computer, not a phone — it's mostly copy-paste between
> browser tabs.

---

## Part 1 — Put the app online (GitHub Pages)

**Goal:** your app live at a free web address, showing a "connect Firebase" screen.

1. **Make a GitHub account** at https://github.com → *Sign up* (free).

2. **Get your own copy of the app.** Easiest way — start from the template:

   - Go to **https://github.com/FBCKJV/prayer-chain-template**
   - Click the green **Use this template** → **Create a new repository**.
   - **Repository name:** `prayer` (lowercase, no spaces) — this becomes part of
     your web address.
   - **Public** (required for free hosting) → **Create repository**.

   > **No "Use this template" button?** Then create a repo yourself: **+** →
   > **New repository** → name `prayer`, **Public**, don't add a README →
   > **Create**. On the empty repo page click **uploading an existing file**,
   > unzip the kit, and **drag all of its contents** in (keep the folders), then
   > **Commit changes**.

3. **Turn on hosting:** in your new `prayer` repo → **Settings** → **Pages**
   (left sidebar).
   - **Source:** *Deploy from a branch*
   - **Branch:** `main`, folder `/ (root)` → **Save**.

4. Wait 1–2 minutes, then open your app address (Settings → Pages shows the exact
   link once it's ready):
   **`https://YOUR-USERNAME.github.io/prayer/`**

✅ **Checkpoint:** You should see the **Prayer Chain** sign-in screen with a red
banner: *"Almost there… connect Firebase."* **That banner means success** — the
app is live; it just isn't connected to a database yet. That's Part 3.

> **Editing a file later** (you'll do this a few times below): open the file in
> your repo, click the **pencil ✏️ icon**, make your change, then click
> **Commit changes**. Your live app updates in a minute or two.

---

## Part 2 — (Optional) Get help from Claude Code

You can do this whole guide by hand. But if you'd like a helper, **Claude Code**
(https://claude.ai/code) lets you customize the app or fix problems by just
*chatting in plain English* — it can edit your repo for you. This entire app was
built that way.

Handy for: swapping in your logo, changing colors, adjusting wording, adding a
feature, or pasting an error message and asking "what's wrong?" It's optional and
the rest of this guide doesn't require it.

---

## Part 3 — Set up Firebase (the database + logins)

**Goal:** a free Firebase project with email logins, a database, security rules,
and your invite code. ~10 minutes, all clicking.

1. Go to https://console.firebase.google.com and sign in with a Google account.
2. **Add project** → name it (e.g. `church-prayer`). You can **turn OFF Google
   Analytics** (not needed). **Create project.**
3. **Add a Web app:** on the project home, click the **`</>`** icon. Give it a
   nickname (e.g. `Prayer Chain`). You do **not** need Firebase Hosting.
   **Register app.** Firebase shows a `firebaseConfig = { … }` block — **leave
   this tab open**, you'll copy it in Part 4.
4. **Turn on Email logins:** left sidebar → **Build → Authentication →
   Get started** → **Email/Password** → toggle **Enable** (the first one) →
   **Save**.
5. **Create the database:** **Build → Firestore Database → Create database** →
   choose **Start in production mode** → pick a location near you → **Create**.
6. **Publish the security rules:** open the **Rules** tab. Delete everything
   there, then paste the entire contents of **`firestore.rules`** from your repo.
   Click **Publish**.
   - *(To copy it: in your GitHub repo, open `firestore.rules` and click the copy
     icon.)*
7. **Set your invite code:** open the **Data** tab → **Start collection**.
   - Collection ID: `config` → **Next**
   - Document ID: type exactly `invite` (do **not** click "Auto-ID")
   - Field name `code`, type **string**, value = your secret code (e.g.
     `Grace2025`) → **Save**.

> You'll give members this code so they can join. Change it any time by editing
> this value — people already in keep their access.

---

## Part 4 — Connect the app, then TEST it 🎉

**Goal:** a real, working prayer app you and a friend can use.

1. **Paste your Firebase config:** in your GitHub repo, open
   `js/firebase-config.js`, click the **pencil (Edit)** icon. The field names in
   this file (`apiKey`, `authDomain`, `projectId`, …) are **exactly the same**
   as the ones Firebase shows you — so the easiest, safest way is to **replace
   the whole `firebaseConfig = { … }` block** with the one from your Firebase tab
   (keep the `export const` in front of it, and the semicolon after). Or replace
   the six `PASTE_…` values one at a time, matching by name. Click **Commit
   changes**.

   > **Where to find the config again later:** Firebase → ⚙️ **Project settings**
   > → scroll to **Your apps** → your Web app → **SDK setup and configuration**.
2. Wait 1–2 minutes, then reload your app URL. **The red banner should be gone.**
3. **Test everything:**
   - Tap **Join** → enter your name, email, a password, and your **invite code** →
     you're in.
   - Post a **prayer request** — it appears at the top.
   - Tap a card to expand it; try **🙏 I prayed**, add an **update** (comment),
     and **Mark answered**.
   - On a second device or browser, **Join** with a different test email + the
     same code, and confirm both see the same feed. (One shared chain, no DMs.)
4. **Make yourself a moderator** (so you can edit the Weekly Prayer List, manage
   members, and moderate):
   - Firebase → **Firestore → Data → `users`** → open **your** document (match by
     the `email` field) → **+ Add field** → name `role`, type **string**, value
     `admin` → **Save**.
   - Reload the app. You'll see a **Moderator** badge and an **Edit** button on the
     📋 Prayer List. Repeat for anyone else you want as a moderator.

   **Roles you can give (all set the same way — the `role` field, typed in
   lowercase exactly as shown):**
   - `admin` → **Moderator**: full powers — everything below, plus delete any
     post/comment and remove/restore members.
   - `pastor`, `deacon`, `clerk`, or `secretary` → **Church leader** (with a Pastor /
     Deacon / Secretary badge): can **edit the Weekly Prayer List**, **post church
     messages**, and **manage the calendar** — but not the moderator powers.

   To appoint one, do the same as above but set `role` to `pastor`, `deacon`,
   `clerk`, or `secretary`. (Capitals matter: `Deacon` won't work — use `deacon`.)

✅ **You now have a complete, private prayer app for your church.** You can stop
here and start inviting people (share the app link + the invite code). Everything
below is optional polish.

### If something isn't working (the four common snags)

- **"We couldn't confirm your membership" / permission-denied.** The security
  rules aren't published. Firebase → **Firestore → Rules** → paste all of
  `firestore.rules` → **Publish**. This is the #1 cause — it happens any time
  the rules change and aren't re-published.
- **Red "connect Firebase" banner won't go away.** Either the config in
  `js/firebase-config.js` still has `PASTE_…` values, or GitHub Pages hasn't
  rebuilt yet (wait 1–2 min and hard-refresh). Double-check you committed the
  file.
- **"That invite code is not valid" when joining.** The `config/invite` document
  is missing or the code doesn't match. Check Firebase → **Firestore → Data** →
  `config` → `invite` → the `code` field equals what you're typing (exact case).
  The document ID must be exactly `invite` (not an auto-generated ID).
- **A change to the app didn't show up.** Bump `CACHE` in `sw.js` (e.g. `v12` →
  `v13`), commit, then fully close and reopen the app.

---

## Part 5 — Make it yours (branding)

All optional — the app works great as-is with a neutral church logo.

- **Church name & address:** edit `js/site-config.js` → set `CHURCH_NAME` (and,
  optionally, `CHURCH_ADDRESS`) → Commit. The name shows in the header and
  sign-in screen; both appear in the **About** dialog (⋯ menu → About & help),
  which also shows a share QR code for your app link and printing instructions.
- **Installed app name** (what shows under the icon on a phone): edit
  `manifest.json` → `name` and `short_name` → Commit.
- **Your logo:** replace these images in your repo with your own (keep the same
  filenames and square sizes):
  `assets/logo-display.png`, and in `assets/icons/`:
  `app-icon-192.png` and `app-icon-512.png` (the home-screen icons — **solid
  square, no transparent corners**, with your round logo filling about 90% of
  it; transparent corners make Android shrink the icon onto a white circle),
  `apple-touch-icon.png`, `favicon-32.png`.
  *Easiest:* ask Claude Code (Part 2) to generate them from your logo, or use a
  free "PWA icon generator" website.
- **Prayer List categories:** edit the list in `js/prayer-list-seed.js`.
- **After any change,** bump the version in `sw.js` (e.g. `prayer-chain-v1` →
  `v2`) so members' phones pick up the update on next open.

---

## Part 6 — (Optional, later) Push notifications

Adds a phone alert when a **new prayer** is posted, one is **marked answered**, or
a leader posts a **church message** (never for comments). Message alerts show the
message's title, e.g. "📣 Potluck Nov 1! — From Pastor Smith · Sun, Nov 1".
**Quiet hours:** anything posted between 8 PM and 8 AM (your church's time) is
held and delivered at 8 AM. It's free but has more moving parts, so do it **after** your
app is working and tested. It uses two services: **OneSignal** (sends the alert)
and a tiny **Cloudflare Worker** (safely holds the secret key).

> **Heads-up for iPhones:** Apple only allows web notifications for **installed**
> apps — an iPhone user must "Add to Home Screen," open it from that icon, *then*
> allow alerts. Test on a computer or Android first.

### 6a. OneSignal (delivery)

1. Create a free account at https://onesignal.com → **New App/Website** → name it,
   platform **Web** → choose **Custom Code**.
2. **Site Setup:**
   - **Site Name:** your church
   - **Site URL:** your app URL, e.g. `https://YOUR-USERNAME.github.io/prayer/`
   - **Auto Resubscribe:** ON
3. **Advanced → Service Workers → Customize:**
   - **Path / filename:** `sw.js`
   - **Registration Scope:** your app's subpath, e.g. `/prayer/` (or `/` if your
     app is at the site root)
4. **Save.** If it shows install code, **ignore it** — the app already includes
   everything. If it says "couldn't detect OneSignal," that's expected (the app
   only starts OneSignal after you sign in) — just finish.
5. **Settings → Keys & IDs:** copy your **App ID**. If there's a **safari_web_id**
   in the "Add Code to Site" snippet, copy that too. Create a **REST API Key**
   (you'll paste it into the Worker, not the app).

### 6b. Cloudflare Worker (the secure sender)

1. Create a free account at https://dash.cloudflare.com → **Workers & Pages →
   Create → Create Worker** → name it `prayer-notify` → **Deploy**.
2. **Edit code** → delete the sample → paste the contents of
   `cloudflare-worker/notify.js` from your repo → **Deploy**.
3. **Settings → Variables and Secrets** — add:
   | Name | Type | Value |
   |------|------|-------|
   | `ONESIGNAL_APP_ID` | Text | your OneSignal App ID |
   | `ONESIGNAL_REST_API_KEY` | **Secret** | your OneSignal REST API Key |
   | `FIREBASE_PROJECT_ID` | Text | your Firebase project id |
   | `ALLOW_ORIGIN` | Text | `https://YOUR-USERNAME.github.io` |
   | `APP_URL` | Text | `https://YOUR-USERNAME.github.io/prayer/` |
   | `CHURCH_TZ` | Text | *(optional)* your time zone for quiet hours, e.g. `America/Chicago`, `America/Denver`, `America/Los_Angeles`. Eastern is used if blank. |
   Save/Deploy.
4. Copy the Worker's **`*.workers.dev`** URL (shown on its page).

### 6c. Turn it on in the app

Edit `js/notify-config.js` in your repo:
```js
export const ONESIGNAL_APP_ID = 'your-onesignal-app-id';
export const ONESIGNAL_SAFARI_WEB_ID = 'web.onesignal.auto.…'; // or leave '' if none
export const NOTIFY_ENDPOINT = 'https://prayer-notify.your-name.workers.dev';
```
Commit, wait 1–2 minutes, hard-refresh the app.

### 6d. (Optional) Automatic birthday & anniversary greetings

Each morning at **8 AM** the Worker can post one **"🎉 Celebrating today"**
message for that day's birthdays and anniversaries, and alert everyone. Because
no one is signed in at 8 AM, it needs its own key:

1. Firebase → ⚙ **Project settings → Service accounts → Generate new private
   key** → **Generate key**. A `.json` file downloads. *Treat it like a
   password* — it can read and change your whole database.
2. Cloudflare → your Worker → **Settings → Variables and Secrets → + Add** →
   Type **Secret**, name `FIREBASE_SA`, value = the **entire** contents of that
   file (open it in Notepad, select all, copy). Optionally add a Text variable
   `APP_NAME` (e.g. `Grace Church`) — the greeting is shown as coming from it.
   **Deploy**, then delete the downloaded file.
3. Cloudflare → your Worker → **Settings → Trigger events → + Add → Cron
   Triggers**: add `0 12 * * *` and also `0 13 * * *` (UTC). The Worker only
   posts on whichever one is 8 AM in your `CHURCH_TZ`, so daylight saving needs
   no attention. *(Pacific time: use `0 15 * * *` and `0 16 * * *`; Central:
   `0 13 * * *` and `0 14 * * *`; Mountain: `0 14 * * *` and `0 15 * * *`.)*

Skip this and nothing breaks — a leader can post the day's greeting by hand:
**📅 Calendar → Today → "Post today's greetings"**.

### 6e. Test notifications

1. On a computer or Android phone, open the app, sign in, open the **⋯ menu →
   🔔 Turn on prayer alerts** → **Allow**.
2. Confirm a subscriber appears in **OneSignal → Audience → Subscriptions**.
3. From another account, post a prayer → you should get a **"🙏 New prayer
   request"** notification. Mark one answered → a **"🎉 Answered prayer"** alert.
   As a leader, post a message with a title → an alert showing that title.
   (Testing after 8 PM? The alert waits until 8 AM — that's quiet hours, not a
   failure. The Worker's **Logs** show `scheduled=` with the send time.)

If nothing arrives, check OneSignal's **Subscriptions** (did it register?) and
**Delivery** (did a message send?). The service-worker scope in step 6a·3 is the
usual culprit on a project subpath — it must match your app's path.

---

## Future goal (once you're established): your own web address

Right now your app lives at `https://YOUR-USERNAME.github.io/prayer/`, which is
perfectly fine to share. Later, if you'd like a friendlier address like
`prayer.yourchurch.org`, you can add a **custom domain** in GitHub Pages settings
(it needs a domain name and a couple of DNS records). That's a nice upgrade once
the app is in regular use — not needed to get started.

---

## Everyday admin cheat-sheet

- **Invite someone:** share the app link + the invite code.
- **Change the invite code:** Firebase → Firestore → `config/invite` → edit `code`.
- **Add a moderator:** set `role: admin` on their `users` document (Part 4·4).
- **Add a church leader** (pastor, deacon, clerk or secretary — edits the prayer
  list, posts messages, manages the calendar): set `role` to `pastor`, `deacon`,
  `clerk`, or `secretary` (lowercase) on their `users` document, the same way.
- **Post a church message:** **📣 Messages → ＋ Post a message**. Tick **📅 Add
  to calendar** to put the event's date, time and place on the calendar in the
  same step — one entry, one alert. Edit or delete the message and the calendar
  entry follows. Once the date passes, the message is marked **Passed**.
- **Add a quiet date** (save-the-dates): **📅 Calendar → ＋ Add event**. These
  never send an alert. Can repeat weekly, every other week, or monthly; **Skip
  this date** drops a single week.
- **Birthdays & anniversaries:** **📅 Calendar → ＋ Add event → Type: 🎂 Birthday**
  (or 💍 Anniversary), or import a whole list: **📅 Calendar → ⬆ Import birthdays
  & anniversaries** with a CSV saved from your spreadsheet — columns **Name,
  Type, Date** (e.g. `Pat Doe, Birthday, 12/02`; couples as `John & Mary Smith,
  Anniversary, 6/14`). Only the month and day are kept. You'll see a preview
  (rows it couldn't read are listed) before anything is added. On the day, a
  "🎉 Celebrating today" message goes out (automatically with 6d, or tap **Post
  today's greetings**) and members tap 🎉 to send good wishes.
- **Help for members:** point people to **⋯ → ❓ How do I…?** (plain-words
  answers) and **⋯ → Text size** (A / A+ / A++) if they find the words small.
- **Someone forgot their password:** they tap **Forgot your password?** on the
  sign-in screen and follow the emailed link. Don't "Remove" them for this — that
  only revokes access and blocks re-registering with the same email.
- **Remove someone:** open the app as a moderator → **⋯ → Members → Remove**.
  This revokes their access but keeps their record — they show up under a
  **Removed** heading in the same dialog.
- **Restore someone:** **⋯ → Members**, find them under **Removed**, tap
  **Restore**. Their access comes back; they sign in with their old password (or
  use **Forgot your password?** if they’ve forgotten it). Only if you want to
  erase them for good do you delete the login in Firebase → Authentication → Users.
- **Edit the Weekly Prayer List:** open **📋 Prayer List** in the app → **Edit**.
- **Print the Weekly Prayer List:** open **📋 Prayer List** → **🖨️ Print**. It
  makes a landscape, two-panel sheet (with a verse, date line, and write-in
  lines that auto-fill the page). Print **double-sided, flip on short edge**, then
  cut down the middle — each sheet becomes two identical two-sided half-page
  prayer sheets. (Printers vary — if front/back don't line up, switch the duplex
  option to long edge.) Best from a computer; on a phone use Print → Save as PDF.
  The PDF is named with the date of the coming prayer meeting, e.g.
  `Prayer List 101426.pdf` (set the day with `PRINT_LIST_DAY` in `js/app.js`;
  3 = Wednesday).
  **See what it looks like:** [`assets/sample-weekly-prayer-list.pdf`](./assets/sample-weekly-prayer-list.pdf)
  is a filled-in example.

Questions or stuck? Paste what you see into Claude Code (Part 2) and it'll help.
God bless the ministry this serves. ✝
