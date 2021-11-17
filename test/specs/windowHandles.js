describe("Window Handles", () => {
  xit("Verify Window Switching", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await $("//button[@id='openwindow']").click();
    const windows = await browser.getWindowHandles();
    await browser.switchToWindow(windows[1]);
    const childWindow = await browser.getTitle();
    console.log(childWindow);
    await browser.switchToWindow(windows[0]);
    const parentWindow = await browser.getTitle();
    console.log(parentWindow);
  });

  xit("Verify Alert", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await browser.newWindow("https://rahulshettyacademy.com/");
    const todaysTitle = await browser.getTitle();
    await browser.switchWindow(
      "https://rahulshettyacademy.com/AutomationPractice/"
    );
    console.log(await browser.getUrl());
    await $("//input[@id='name']").setValue(todaysTitle);
    await browser.switchWindow(todaysTitle);
    console.log(await browser.getUrl());
  });

  xit("Verify frames", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await $("#mousehover").scrollIntoView();
    const urls = await $$("a").length;
    console.log(urls);
    // const iFrameHandle = await $("//iframe[@id='courses-iframe']").value;
    // console.log(iFrameHandle);
    await browser.switchToFrame($("[id='courses-iframe']"));
    console.log(await $("=courses").getTagName());
    console.log($$("a").length);
    // await browser.switchToFrame(iFrameHandle);
    // const urlsFrame = await $$("a").length;
    // console.log(urlsFrame);
  });
});
