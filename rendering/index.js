// Best place to put script or external js file

// 1)  Default Behavior (Without async or defer)
// By default, when the browser encounters a <script> tag:

// It pauses HTML rendering.
// It fetches and executes the script immediately before continuing to render the rest of the page.
// Best Practice for Inline Scripts:

//  Place <script> just before </body>

// Why?

// Ensures the entire DOM is loaded before JavaScript runs.
// Prevents blocking the rendering of visible content.

// ============================================================================================

// 2) async Attribute
// <script src="script.js" async></script>

// How it Works:
// The browser downloads the script while parsing HTML.
// Once downloaded, the script executes immediately, pausing HTML parsing.
// Execution order is not guaranteed (scripts run as soon as they are downloaded).
// Best Use Case for async
// For scripts that don’t depend on DOM elements or other scripts.

// Example: Analytics, Ads, Tracking scripts.

// =============================================================================================

// 3) defer attribute
// How it Works:
// The browser downloads the script while parsing HTML.
// Execution is delayed until after the entire document is parsed.
// Scripts execute in order, unlike async.
// Best Use Case for defer
// For scripts that modify the DOM and depend on HTML elements.

// Example: Main application scripts (e.g., event listeners, DOM manipulations).

// ==============================================================================================

// Best Practices:
// Scenario	Best Placement / Attribute
// Small inline script	Before </body>
// DOM-dependent scripts	<script src="script.js" defer></script> (Best for interactivity)
// Independent scripts (e.g., analytics)	<script src="analytics.js" async></script>
// Multiple scripts that must execute in order	Use defer (scripts run in order)
// Third-party libraries (CDNs)	Use defer unless required ASAP
