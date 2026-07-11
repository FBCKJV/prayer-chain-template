// ─────────────────────────────────────────────────────────────────────────
//  Push notification settings.  Leave all blank to keep notifications OFF
//  (the app works fully without them). This is an OPTIONAL later step — build
//  and test the app first, then add notifications if you want them. Full
//  walkthrough: BUILD-GUIDE.md (Part 6).
// ─────────────────────────────────────────────────────────────────────────

// From OneSignal → your app → Settings → Keys & IDs → "OneSignal App ID".
export const ONESIGNAL_APP_ID = '';

// From the OneSignal "Add Code to Site" snippet (safari_web_id). Needed for
// Apple push. Safe to leave blank if you don't have it.
export const ONESIGNAL_SAFARI_WEB_ID = '';

// The URL of your Cloudflare Worker (cloudflare-worker/notify.js), e.g. the
// *.workers.dev URL it gives you.
export const NOTIFY_ENDPOINT = '';
