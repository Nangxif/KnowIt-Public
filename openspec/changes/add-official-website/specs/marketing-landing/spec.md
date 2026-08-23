## Purpose

Defines the single-page official marketing landing so visitors can understand KnowIt, browse the app catalog, and reach install or lifetime-purchase actions without using the extension itself.

## ADDED Requirements

### Requirement: Single-page landing sections

The official website SHALL present a single landing page with these sections in order: hero, highlights, app catalog, pricing, and footer. The top bar MUST provide in-page anchors to the highlights, app catalog, and pricing sections so a visitor can jump without leaving the page.

#### Scenario: All marketing sections are present
- **WHEN** a visitor opens the official website
- **THEN** they can see a hero, highlights, app catalog, and pricing section on one page

#### Scenario: Anchor navigation jumps in place
- **WHEN** a visitor activates a top-bar section link
- **THEN** the page scrolls to the matching landing section

### Requirement: Hero and install call to action

The hero SHALL state KnowIt's product promise and provide a primary install action. The install action MUST open the current public download destination. Until a Chrome Web Store listing exists, that destination MUST be the GitHub Releases page. The hero MUST also make the lifetime-purchase destination reachable without requiring the visitor to install the extension first.

#### Scenario: Primary install opens the public download destination
- **WHEN** a visitor activates the primary install action
- **THEN** the browser opens the configured public download destination (GitHub Releases by default)

#### Scenario: Purchase is reachable from the hero
- **WHEN** a visitor looks for a way to buy the lifetime plan from the hero
- **THEN** they can reach the published Afdian checkout without opening the extension

### Requirement: Product highlights

The highlights section SHALL communicate KnowIt's core value propositions: modular marketplace, privacy-first local processing, bring-your-own API key, and the available interaction surfaces (shortcuts, context menu, selection toolbar, side panel, and light/dark themes).

#### Scenario: Highlights match public product claims
- **WHEN** a visitor reads the highlights section
- **THEN** they can identify modular installation, local-first privacy, self-configured model keys, and the main interaction surfaces

### Requirement: Read-only app catalog

The landing page SHALL list the public KnowIt apps with name, short description, category, and free-versus-premium distinction. The catalog MUST be read-only: visitors MUST NOT be able to install, uninstall, or configure apps from the official website. The listed apps MUST include Text Search, Media Downloader, Page Export, Content Summary, Selection Translate, Selection Word Inspector, and Smart Writing & Polishing.

#### Scenario: Free and premium apps are distinguishable
- **WHEN** a visitor views the app catalog
- **THEN** free apps and lifetime-plan apps are visually distinguished
- **AND** each listed app shows a name and short description

#### Scenario: Catalog does not install apps
- **WHEN** a visitor interacts with an app card
- **THEN** the official website does not install, uninstall, or change extension settings

### Requirement: Pricing and purchase

The pricing section SHALL present a free plan and a lifetime plan. The free plan MUST include Text Search and Media Downloader. The lifetime plan MUST state the one-time price of ¥6.66, list the premium apps, and provide a purchase action that opens the published Afdian checkout. The pricing section MUST explain that activation happens inside the extension using email plus Afdian order number, that each order can be activated at most twice, and that AI features require the visitor's own model API key.

#### Scenario: Plans and price are visible
- **WHEN** a visitor views the pricing section
- **THEN** they see a free plan covering Text Search and Media Downloader
- **AND** they see a lifetime plan priced at ¥6.66 that covers the premium apps

#### Scenario: Purchase opens Afdian
- **WHEN** a visitor activates the lifetime purchase action
- **THEN** the browser opens the published Afdian checkout URL

#### Scenario: Activation is described but not performed on the site
- **WHEN** a visitor reads the pricing section
- **THEN** they are told to activate inside the extension with email and order number
- **AND** the official website does not collect an activation code or license email
