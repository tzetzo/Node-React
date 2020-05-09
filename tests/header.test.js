const Page = require("./helpers/page");

let page;

beforeEach(async () => {
  page = await Page.build(); // page is the Proxy providing us access to our custom page, puppeteer browser & page
  await page.goto("localhost:3000"); //navigate to our app
});

afterEach(async () => {
  await page.close();
});

test("The header has the correct logo text", async () => {
  //get the logo element; node stringifies the query and sends it to the browser & browser returns string as response
  const text = await page.getContentsOf(".test-logo");

  expect(text).toEqual("Emaily");
});

test("Clicking logging starts OAuth flow", async () => {
  await page.click(".test-google-login");

  const url = await page.url();

  expect(url).toMatch(/accounts\.google\.com/);
});

test("When signed in, shows logout button", async () => {
  await page.login();

  const text = await page.getContentsOf(".test-logout");
  expect(text).toEqual("Logout");
});
