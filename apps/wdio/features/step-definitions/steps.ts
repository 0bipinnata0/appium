import { Given, When, Then } from "@wdio/cucumber-framework";
import { getEle } from "@ui-automation/driver";

// import LoginPage from '../pageobjects/login.page';
// import SecurePage from '../pageobjects/secure.page';

// const pages = {
//     login: LoginPage
// }

Given(/^I am on the (\w+) page$/, async (page) => {
  // await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  const ele = getEle();
  await ele.click();
  const height = await ele.getSize("height");
  console.info(height);

  await driver.pause(10_000);
  // await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  // await expect(SecurePage.flashAlert).toBeExisting();
  // await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
