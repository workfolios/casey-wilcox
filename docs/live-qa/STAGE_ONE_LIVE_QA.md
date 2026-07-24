# Stage One Live Preview QA

- **Live URL:** https://workfolios.github.io/casey-wilcox/
- **Overall result:** **FAIL**
- **Indexing state:** Disabled pending Casey Wilcox review

## HTTP And Asset Verification

- Root page HTTP 200: **Pass**
- Root application mount present: **Pass**
- Correct `/casey-wilcox/` production paths: **Fail**
- Controlled-preview noindex directive present: **Pass**
- Referenced CSS, JavaScript, robots, and social-preview assets: **Fail**

## Responsive Browser Verification

| Viewport | HTTP | Overflow | Images | Required Sections |
|---|---:|---|---|---|
| desktop-1440 (1440×900) | 0 | Fail | Fail | Fail |
| desktop-1024 (1024×900) | 0 | Fail | Fail | Fail |
| tablet-768 (768×1024) | 0 | Fail | Fail | Fail |
| mobile-390 (390×844) | 0 | Fail | Fail | Fail |
| mobile-320 (320×720) | 0 | Fail | Fail | Fail |

## Interaction And Accessibility Verification

- Skip link moves focus to main content: **Fail**
- Mobile navigation opens, closes, and restores state: **Fail**
- LinkedIn destination is Casey's approved profile: **Fail**
- Contact-form button label is `Submit`: **Fail**
- All primary section anchors are present: **Fail**

## Runtime Verification

- Browser-console errors: **5**
- Unhandled page errors: **0**
- Failed network requests: **5**
- QA runtime exception: **None**

The Stage One controlled preview is not ready to share. Review the JSON results and screenshot evidence from the workflow artifact.
