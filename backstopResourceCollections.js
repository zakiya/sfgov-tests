// @see https://github.com/garris/BackstopJS

// Get URLs.
const liveURL = process.env.LIVE_SITE_URL.replace(/\/$/, "");
const multidevURL = process.env.MULTIDEV_SITE_URL.replace(/\/$/, "");

// Defaults.
let pathsToTest = {
  1: "/resource/2021/covid-19-outreach-toolkit",
  2: "/resource/2021/covid-19-health-orders-directives-guidance",
  3: "/resource/2021/citywide-cybersecurity-policy",
  4: "/resource/2021/technology-project-management-policy",
  5: "/resource/2020/ocme-annual-reports",
};
let clickSelectorsToTest = [];
let keyPressSelectorsToTest = [];
let viewportsToTest = [
  // {
  //   name: "phone",
  //   width: 320,
  //   height: 480,
  // },
  {
    name: "desktop",
    width: 1920,
    height: 1080,
  },
];
let readySelectorToTest = "main";

// Other tests.
// See .env for test types.
if (process.env.TEST_TYPE > 1) {
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

  if (process.env.TEST_TYPE == 3) {
    keyPressSelectorsToTest = [
      {
        selector: ".vaccine-filter-form #edit-language",
        keyPress: "vi",
      },
      {
        selector: ".vaccine-filter-form #edit-access-mode",
        keyPress: "dr",
      },
    ];
    clickSelectorsToTest = [
      ".vaccine-filter-form #edit-restrictions",
      ".vaccine-filter-form #edit-eligibility-ec",
      ".vaccine-filter-form #edit-submit",
    ];
  }

  if (process.env.TEST_TYPE == 4) {
    clickSelectorsToTest = [
      ".vaccine-filter-form #edit-restrictions",
      ".vaccine-filter-form #edit-wheelchair",
      ".vaccine-filter-form #edit-eligibility-sf",
      ".vaccine-filter-form #edit-submit",
    ];
  }
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
    keyPressSelectors: keyPressSelectorsToTest,
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
