describe("Login Page Scenarios", () => {
  xit("Validate Login Page Title", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");
  });

  xit("Send Value to Username", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    // Using CSS Selector
    await $("input[name = 'username']").setValue("test1");
    await $("#username").setValue("test2");
    await browser.pause(3000);
  });

  xit("Send Value to Password", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    // Using Xpath
    const passwordVariable = $("//input[@type='password']");
    await passwordVariable.setValue("test");
    await browser.pause(3000);
  });

  xit("Verify Error Message", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    const passwordVariable = $("//input[@type='password']");
    await $("input[name = 'username']").setValue("test1");
    await passwordVariable.setValue("test");
    await $("#signInBtn").click();

    // const signInButtonState = async () =>
    //   await $("signInBtn").getAttribute("value");
    browser.waitUntil(
      async () => (await $("#signInBtn").getAttribute("value")) === "Sign In",
      {
        timeout: 2000,
        timeoutMsg: "Button not visible",
      }
    );
    //check the error message based on Sign In button changes
    const errorMessage = await $("p.text-center.text-white").getText();
    //await $(".alert-danger").getText();
    await expect(errorMessage).toEqual("Incorrect username/password.");
    await browser.pause(3000);
  });

  xit("Verify text present", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    const loginHelpLocator = $("p.text-center.text-white");
    const expectedText =
      "(username is rahulshettyacademy and Password is learning)";
    await expect(loginHelpLocator).toHaveText(expectedText);
  });

  xit("Verify Login Page Title", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    const passwordVariable = $("//input[@type='password']");
    await $("input[name = 'username']").setValue("rahulshettyacademy");
    await passwordVariable.setValue("learning");
    await $("#signInBtn").click();
    await expect(browser).toHaveTitle("ProtoCommerce");
  });

  xit("Verify Checkout button", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    const passwordVariable = $("//input[@type='password']");
    await $("input[name = 'username']").setValue("rahulshettyacademy");
    await passwordVariable.setValue("learning");
    await $("#signInBtn").click();
    const checkOutButton = $(".nav-link.btn.btn-primary");
    await checkOutButton.waitForClickable();
    await checkOutButton.click();
  });
});
