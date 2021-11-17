//merge parent config object + add new changes in uar conft(baseurl, connection timeout etc)
const merge = require("deepmerge");
const wdioConf = require("./wdio.conf.js");

exports.config = merge(wdioConf.config, {
  baseUrl: "https://rahulshettyacademy.com/loginpagePractise/#",
  waitforTimeout: 5000,

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
    grep: "sanity",
  },
});
