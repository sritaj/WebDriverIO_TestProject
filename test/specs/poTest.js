const loginPage = require("../pageObjects/loginPage");
const fs = require("fs");
let credentials = JSON.parse(fs.readFileSync("test/testData/LoginTest.json"));

describe("Login Scenarios", () => {
  credentials.forEach(({ username, password }) => {
    it("Login to the application", async () => {
      await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
      await loginPage.Login(username, password);
      await browser.pause(5000);
    });
  });

  it("Login to the application - sanity", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    await loginPage.Login("", "");
    await browser.pause(5000);
  });
});
