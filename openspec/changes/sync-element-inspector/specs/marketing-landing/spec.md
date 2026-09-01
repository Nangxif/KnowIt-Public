## MODIFIED Requirements

### Requirement: Read-only app catalog

The landing page SHALL list the public KnowIt apps with name, short description, category, and free-versus-premium distinction. The catalog MUST be read-only: visitors MUST NOT be able to install, uninstall, or configure apps from the official website. The listed apps MUST include Text Search, Media Downloader, Ad Cleaner, Element Inspector, Page Export, Content Summary, Selection Translate, Selection Word Inspector, and Smart Writing & Polishing. Element Inspector MUST appear as a free app in the Development category, using the same name and short description as the KnowIt extension marketplace.

#### Scenario: Free and premium apps are distinguishable
- **WHEN** a visitor views the app catalog
- **THEN** free apps and lifetime-plan apps are visually distinguished
- **AND** each listed app shows a name and short description

#### Scenario: Catalog does not install apps
- **WHEN** a visitor interacts with an app card
- **THEN** the official website does not install, uninstall, or change extension settings

#### Scenario: Element Inspector is listed as a free development app
- **WHEN** a visitor views the app catalog
- **THEN** they can find Element Inspector with a free badge
- **AND** its category is shown as Development (开发工具 / 開發工具)
- **AND** the short description states that clicking a page element opens a Figma-like properties panel and that an eyedropper can pick any on-screen pixel color

### Requirement: Pricing and purchase

The pricing section SHALL present a free plan and a lifetime plan. The free plan MUST include Text Search, Media Downloader, Ad Cleaner, and Element Inspector. The lifetime plan MUST state the one-time price of ¥6.66, list the premium apps, and provide a purchase action that opens the published Afdian checkout. The pricing section MUST explain that activation happens inside the extension using email plus Afdian order number, that each order can be activated at most twice, and that AI features require the visitor's own model API key.

#### Scenario: Plans and price are visible
- **WHEN** a visitor views the pricing section
- **THEN** they see a free plan covering Text Search, Media Downloader, Ad Cleaner, and Element Inspector
- **AND** they see a lifetime plan priced at ¥6.66 that covers the premium apps

#### Scenario: Purchase opens Afdian
- **WHEN** a visitor activates the lifetime purchase action
- **THEN** the browser opens the published Afdian checkout URL

#### Scenario: Activation is described but not performed on the site
- **WHEN** a visitor reads the pricing section
- **THEN** they are told to activate inside the extension with email and order number
- **AND** the official website does not collect an activation code or license email

## ADDED Requirements

### Requirement: Element Inspector showcase

The showcase section SHALL include Element Inspector among the switchable app demos. The mock MUST remain a stylized illustration that follows the site theme and locale; it MUST NOT run a live inspector against the official website. The illustration MUST show a highlighted page element, a Figma-like properties panel with identity / size / layout / typography / fill groups, and a bottom toolbar that can switch Inspect and Eyedropper.

#### Scenario: Visitor can switch to the Element Inspector demo
- **WHEN** a visitor selects Element Inspector in the showcase switcher
- **THEN** the stage shows the Element Inspector mock instead of another app
- **AND** a caption explains entering inspect mode from the context menu or shortcut, then hovering for properties or picking a color

#### Scenario: Mock does not inspect the real page
- **WHEN** a visitor views the Element Inspector showcase
- **THEN** interacting with the mock does not highlight or inspect elements on the official website itself

### Requirement: Public docs mention Element Inspector

The public README (Simplified Chinese and English) and the site changelog MUST mention Element Inspector as a free app. The README MUST describe what it does and how to use it (context menu or shortcut, hover to inspect, toolbar to pick color, Esc to exit). The changelog MUST add an entry for the new app without rewriting older version history.

#### Scenario: README lists the free development app
- **WHEN** a visitor reads the public README app list
- **THEN** Element Inspector appears under free apps
- **AND** the usage notes cover inspect mode, the properties panel, and the eyedropper

#### Scenario: Changelog records the new app
- **WHEN** a visitor opens the official website changelog
- **THEN** the newest entry states that Element Inspector was added
