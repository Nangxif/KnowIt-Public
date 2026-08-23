## Purpose

Provides the official site chrome that visitors see on every view: the KnowIt pixel-wave background, capsule sticky navigation, theme and locale controls, and a footer with contact and legal entry points.

## ADDED Requirements

### Requirement: Pixel wave page background

The official website SHALL render a full-viewport decorative pixel-wave canvas behind page content, matching the visual language of the KnowIt extension apps page. The background MUST remain non-interactive so it does not intercept clicks or keyboard focus. When the visitor's system requests reduced motion, the background MUST show a static frame instead of a continuous animation.

#### Scenario: Background sits behind content
- **WHEN** a visitor opens the official website
- **THEN** a pixel-wave canvas fills the viewport behind the navigation and page sections
- **AND** the visitor can still click navigation and content controls without the canvas capturing pointer events

#### Scenario: Reduced motion uses a static frame
- **WHEN** a visitor has `prefers-reduced-motion: reduce` enabled
- **THEN** the pixel-wave background does not continuously animate

### Requirement: Capsule sticky navigation

The official website SHALL display a sticky top bar that visually matches the KnowIt extension apps-page toolbar: brand mark plus "KnowIt" wordmark on the left, utility controls on the right, and a capsule floating treatment after the page has been scrolled. The navigation MUST remain usable on narrow viewports without covering primary page content.

#### Scenario: Resting and scrolled treatments
- **WHEN** a visitor is at the top of the page
- **THEN** the top bar shows the brand and utilities without a floating capsule backdrop
- **WHEN** the visitor scrolls past a small offset
- **THEN** the top bar stays pinned and reveals a blurred capsule backdrop

#### Scenario: Brand returns to the top of the page
- **WHEN** a visitor activates the brand mark or wordmark
- **THEN** the page scrolls to the top of the landing view

### Requirement: Theme switching

The official website SHALL support `vscode-dark` and `vscode-light` themes consistent with the KnowIt extension. The default theme MUST be `vscode-dark`. The visitor MUST be able to toggle theme from the top bar, and the chosen theme MUST persist across reloads in the same browser. Theme changes MUST also update the pixel-wave background colors.

#### Scenario: Default dark theme
- **WHEN** a first-time visitor opens the official website
- **THEN** the page uses the dark theme

#### Scenario: Toggle persists
- **WHEN** a visitor switches from dark to light (or the reverse)
- **THEN** the page, top bar, and pixel-wave background update immediately
- **AND** a subsequent reload in the same browser restores the last chosen theme

### Requirement: Locale switching

The official website SHALL support Simplified Chinese, Traditional Chinese, and English. The default locale MUST be Simplified Chinese. The visitor MUST be able to change locale from the top bar, and the chosen locale MUST persist across reloads in the same browser. Visible chrome and landing copy MUST update to the selected locale without a full-site navigation away from the current page.

#### Scenario: Default Simplified Chinese
- **WHEN** a first-time visitor opens the official website
- **THEN** chrome and landing copy are shown in Simplified Chinese

#### Scenario: Locale persists and updates in place
- **WHEN** a visitor selects English or Traditional Chinese from the top bar
- **THEN** navigation, landing sections, and footer text update to that locale
- **AND** a subsequent reload in the same browser restores the last chosen locale

### Requirement: Site footer and legal entry points

The official website SHALL display a footer with the KnowIt brand, GitHub repository link, contact emails, issue-feedback link, and entry points for privacy policy, user agreement, and changelog. Activating a legal entry point MUST present the corresponding document without leaving the official website. The footer MUST NOT include extension-only controls such as license activation.

#### Scenario: Footer contact and repository links
- **WHEN** a visitor views the footer
- **THEN** they can open the public GitHub repository, the issues page, and the published contact email addresses

#### Scenario: Legal documents open in place
- **WHEN** a visitor activates privacy policy, user agreement, or changelog
- **THEN** the corresponding document is shown on the official website without navigating to an external page
