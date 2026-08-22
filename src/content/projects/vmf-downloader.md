---
title: 'VMF Downloader'
summary: "A Chrome extension that adds a bulk download button to ViewMyFax's Fax Central, which otherwise makes you save faxes one at a time, one page at a time."
date: 2025-07-24
updated: 2025-07-25
tech: ['JavaScript', 'Chrome Extension', 'Manifest V3']
repo: 'https://github.com/connerglover/vmf-downloader'
demo: 'https://chromewebstore.google.com/detail/fjhmfdcjnhmeaaieoilemehgdgppfhci'
featured: true
draft: false
---

ViewMyFax lets you download a fax. Singular. If you have a few hundred sitting in
Fax Central spread across paginated tables, the only route the site gives you is
clicking each one, waiting, and going back — and then doing it again on the next
page.

This extension adds one button that does the whole thing.

## How it works

It is a content script injected on the Fax Central page. When you click
**Download All Faxes**, it:

1. Finds the multi-select table that holds the fax checkboxes
2. Walks the pagination, collecting fax IDs from every page rather than just the
   one you are looking at
3. Validates the IDs, so malformed rows do not become broken requests
4. Shows you a count and asks for confirmation before it starts
5. Opens the faxes in controlled batches

## Why batches

Opening a few hundred tabs at once makes the browser fall over. The script keeps
a ceiling on concurrent downloads and spaces the batches out, with the limits
exposed at the top of the content script rather than buried:

```javascript
const CONFIG = {
  MAX_CONCURRENT_DOWNLOADS: 5,    // Max tabs opened simultaneously
  TAB_DELAY_MS: 500,              // Delay between batches
  PAGE_NAVIGATION_DELAY: 2000,    // Delay when scanning pages
  MAX_PAGES: 50                   // Maximum pages to scan
};
```

## Permissions

It asks for `activeTab` and nothing else, and only runs on
`viewmyfax.com/view.php`. There is no background service worker, no data
collection and no network calls of its own — everything happens client-side, in
the tab you already have open. That was deliberate: an extension that touches
documents like these has no business asking for more than it needs.

Built on Manifest V3, so it works in Chrome and Edge. Firefox is still on V2 and
is not supported.

It is on the Chrome Web Store, and it is not affiliated with ViewMyFax.
