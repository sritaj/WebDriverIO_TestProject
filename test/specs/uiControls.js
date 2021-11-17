const expectChai = require("chai").expect;

describe("Verify UI Controls Scenarios", () => {
  xit("Verify checkbox selection ", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    const passwordVariable = $("//input[@type='password']");
    await $("input[name = 'username']").setValue("rahulshettyacademy");
    await passwordVariable.setValue("learning");
    const radioButtons = $$(".customradio");
    const adminRadioButton = radioButtons[0];
    const userRadioButton = radioButtons[1];
    //clicking and accepting cancel button for switching to user
    await userRadioButton.$(".radiotextsty").click();
    await $(".modal-body").waitForDisplayed();
    await $("#cancelBtn").click();
    const state = await userRadioButton.$(".radiotextsty").isSelected();
    expect(state).toEqual(false);
    //clicking and accepting okay button for switching to user
    await userRadioButton.$(".radiotextsty").click();
    await $(".modal-body").waitForDisplayed();
    await $("#okayBtn").click();
    //clicking on Admin
    await adminRadioButton.$(".radiotextsty").click();
    await expect($(".modal-body")).not.toBeDisplayed();
  });

  xit("Verify dropdown selection", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    const dropDown = $("select.form-control");
    expectChai(await dropDown.getValue()).to.equal("stud");
    await dropDown.click();
    await dropDown.selectByVisibleText("Teacher");
  });

  xit("Verify dynamic dropdown", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await $("#autocomplete").setValue("ind");
    // let items = $$("[class='ui-menu-item'] div");
    // const desiredLocator = await items.filter(
    //   (item) => item.getText() === "India"
    // );
    // await desiredLocator[0].click();
    await $("/html[1]/body[1]/ul[1]/li[2]/div[1]").click();
    await browser.pause(3000);
  });

  xit("Checkboxes selection", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    const element = $$("input[type='checkbox']");
    await element[1].click();
    const stateTrue = await element[1].isSelected();
    expect(stateTrue).toEqual(true);
    const stateFalse = await element[0].isSelected();
    expect(stateFalse).toEqual(false);
    await browser.saveScreenshot("screenshot.png");
  });
});
