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

## Responsive Browser Verification

| Viewport | HTTP | Overflow | Images | Required Sections |
|---|---:|---|---|---|
| desktop-1440 (1440×900) | 200 | Pass | Fail | Pass |
| desktop-1024 (1024×900) | 200 | Pass | Fail | Pass |
| tablet-768 (768×1024) | 200 | Pass | Fail | Pass |
| mobile-390 (390×844) | 200 | Pass | Fail | Pass |
| mobile-320 (320×720) | 200 | Pass | Fail | Pass |

## Interaction And Accessibility Verification

- Skip link moves focus to main content: **Pass**
- Mobile navigation opens, closes, and restores state: **Pass**
- LinkedIn destination is Casey's approved profile: **Pass**
- Contact-form button label is `Submit`: **Pass**
- All primary section anchors are present: **Pass**

## Runtime Verification

- Browser-console errors: **0**
- Unhandled page errors: **0**
- Failed network requests: **0**
- QA runtime exception: **None**

The Stage One controlled preview is not ready to share. Review the JSON results and screenshot evidence from the workflow artifact.
