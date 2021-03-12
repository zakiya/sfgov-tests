const liveURL = process.env.LIVE_SITE_URL.replace(/\/$/, "");
const multidevURL = process.env.MULTIDEV_SITE_URL.replace(/\/$/, "");

// Defaults.
let pathsToTest = {
  "Vaccine Sites": "/vaccine-sites",
  "Vaccine Sites-es": "/es/vaccine-sites",
  "Vaccine Sites-zh": "/zh-hant/vaccine-sites",
  "Vaccine Sites-fil": "/fil/vaccine-sites",
};
let clickSelectorsToTest = [];
let viewportsToTest = [
  {
    name: "phone",
    width: 320,
    height: 480,
  },
  {
    name: "desktop",
    width: 1920,
    height: 1080,
  },
];
let readySelectorToTest = "main";

// Other tests.
// See .env for test types.
if (process.env.TEST_TYPE == 2) {
  pathsToTest = {
    "Vaccine Sites": "/vaccine-sites",
  };
  clickSelectorsToTest = [
    ".vaccine-filter-form #edit-restrictions",
    ".vaccine-filter-form #edit-available",
    ".vaccine-filter-form #edit-submit",
  ];
  viewportsToTest = [
    {
      name: "desktop",
      width: 1920,
      height: 1080,
    },
  ];
  readySelectorToTest = ".vaccine-filter-form #edit-submit";
}

// -------------
// Define scenario.
let scenariosToTest = [];
for (let [key, value] of Object.entries(pathsToTest)) {
  scenariosToTest.push({
    label: key,
    url: multidevURL + value,
    referenceUrl: liveURL + value,
    hideSelectors: [],
    removeSelectors: [],
    readySelector: readySelectorToTest,
    clickSelectors: clickSelectorsToTest,
    selectorExpansion: true,
    selectors: ["main"],
    readyEvent: null,
    delay: 3000,
    misMatchThreshold: 0.1,
  });
}

// Put it all together.
module.exports = {
  id: "sfgov",
  viewports: viewportsToTest,
  scenarios: scenariosToTest,
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
    engine_scripts: "backstop_data/engine_scripts",
    html_report: "backstop_data/html_report",
    ci_report: "backstop_data/ci_report",
  },
  report: ["browser", "CI"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
  },
  onReadyScript: "puppet/onReady.js",
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
