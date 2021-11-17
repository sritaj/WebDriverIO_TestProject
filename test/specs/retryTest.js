describe("Verify Retry Mechnanism", () => {
  it("Verify Retry Scenario", async function () {
    this.retries(2);
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    await expect(browser).toHaveTitleContaining("Rahul Shetty Acdemy");
  });
});
