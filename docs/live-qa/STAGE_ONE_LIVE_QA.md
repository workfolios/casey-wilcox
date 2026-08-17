# Stage One Live Preview QA

- **Live URL:** https://workfolios.github.io/casey-wilcox/
- **Overall result:** **FAIL**
- **Indexing state:** Disabled pending Casey Wilcox review

## HTTP And Asset Verification

- Root page HTTP 200: **Pass**
- Root application mount present: **Pass**
- Correct `/casey-wilcox/` production paths: **Pass**
- Controlled-preview noindex directive present: **Pass**
- Referenced CSS, JavaScript, robots, and social-preview assets: **Pass**

## Responsive And Browser Verification

| Engine | Viewport | HTTP | Overflow | Images | Required Sections |
|---|---|---:|---|---|---|
| chromium | desktop-1440 (1440×900) | 200 | Pass | Pass | Pass |
| chromium | desktop-1024 (1024×900) | 200 | Pass | Pass | Pass |
| chromium | tablet-768 (768×1024) | 200 | Pass | Pass | Pass |
| chromium | mobile-390 (390×844) | 200 | Pass | Pass | Pass |
| chromium | mobile-320 (320×720) | 200 | Pass | Pass | Pass |
| firefox | desktop-1440 (1440×900) | 200 | Pass | Pass | Pass |
| firefox | mobile-390 (390×844) | 200 | Pass | Pass | Pass |
| webkit | desktop-1440 (1440×900) | 200 | Pass | Pass | Pass |
| webkit | mobile-390 (390×844) | 200 | Pass | Pass | Pass |

## Interaction And Accessibility Verification

- Skip link moves focus to main content: **Pass**
- Mobile navigation opens, closes, and restores state: **Pass**
- Sticky header is active: **Fail**
- Current-section navigation state updates: **Fail**
- Hero exposes approved `Connect` destination: **Fail**
- Reduced-motion preference suppresses authored transition duration: **Fail**
- LinkedIn destination is Casey's approved profile: **Pass**
- Contact-form button label is `Submit`: **Pass**
- All primary section anchors are present: **Pass**

## Formspree Delivery Acceptance Verification

- One-time provider acceptance check: **Fail**
- Submission attempted this run: **Yes**
- Provider response status: **N/A**
- On-page success confirmation visible: **Fail**
- Delivery-test runtime error: **TimeoutError: page.waitForResponse: Timeout 30000ms exceeded while waiting for event "response"**

## Runtime Verification

- Browser-console errors: **0**
- Unhandled page errors: **0**
- Failed network requests: **0**
- QA runtime exception: **None**

The Stage One controlled preview did not pass the governed live gate. Review the JSON results and screenshot evidence from the workflow artifact.
