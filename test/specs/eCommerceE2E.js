describe("Ecommerce End 2 End Flow", () => {
  xit("E2E scenario", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/#");
    const passwordVariable = $("//input[@type='password']");
    await $("input[name = 'username']").setValue("rahulshettyacademy");
    await passwordVariable.setValue("learning");
    await $("#signInBtn").click();
    const checkOutButton = $(".nav-link.btn.btn-primary");
    await checkOutButton.waitForClickable();

    //let allCards = await $$("//div[@class='card h-100']//div//h4/a");
    // await allCards
    //   .filter((card) => card.getText() == "iphone X")
    //   .map((selectedCard) =>
    //     selectedCard.$("//button[@class='btn btn-info']").click()
    //   );

    //div[@class='card h-100']//div//h4//a[normalize-space()='iphone X']

    const phone = "Blackberry";
    const choosePhone = `//div[@class='card h-100']//div//h4//a[normalize-space()='${phone}']`;
    await $(choosePhone).$("//button[@class='btn btn-info']").click();
    await $(choosePhone).$("//button[@class='btn btn-info']").click();

    await browser.pause(3000);
    await checkOutButton.click();
    await browser.pause(3000);
    const productPrices = $$("//tr//td[4]//strong");
    //getting error split is not a function
    const sumOfProductPrices = await productPrices
      .map((productPrice) =>
        parseInt(productPrice.getText().split(".")[1].trim())
      )
      .reduce((acc, price) => acc + price, 0);
    console.log(sumOfProductPrices);
  });
});
