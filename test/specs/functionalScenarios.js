const chaiExpect = require("chai").expect;

describe("UI Controls Advanced", () => {
  xit("Verify Mouse Hover and Scrolling", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await $("#mousehover").scrollIntoView();
    await $("#mousehover").moveTo();
    await $("=Top").click();
  });

  xit("Verify JavaScript Popup", async () => {
    await browser.url(
      "https://only-testing-blog.blogspot.com/2014/09/selectable.html"
    );
    //await $("button").scrollIntoView();
    await $("button").doubleClick();
    await browser.pause(3000);
    chaiExpect(await browser.isAlertOpen()).to.be.true;
    chaiExpect(await browser.getAlertText()).to.equal(
      "You double clicked me.. Thank You.."
    );
  });

  xit("Verify WebTable Sorting", async () => {
    await browser.url(
      "https://rahulshettyacademy.com/seleniumPractise/#/offers"
    );
    await $("//tr/th[1]").click();
    const veggiesLocators = $$("//tr/td[1]");
    const veggieNames = await veggiesLocators.map((veggie) => veggie.getText());
    console.log(veggieNames);
    const veggieNamesSorted = veggieNames.slice();
    veggieNamesSorted.sort();
    chaiExpect(veggieNames).to.eql(veggieNamesSorted);
  });

  xit("Verify search in WebTable", async () => {
    await browser.url(
      "https://rahulshettyacademy.com/seleniumPractise/#/offers"
    );
    await $("#search-field").setValue("Tomato");
    const veggiesLocators = $$("//tr/td[1]");
    const veggieNames = await veggiesLocators.map((veggie) => veggie.getText());
    expect(veggieNames).toBeElementsArrayOfSize({ eq: 1 });
    chaiExpect(veggieNames[0]).to.eql("Tomato");
  });
});
