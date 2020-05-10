const Page = require("./helpers/page");

let page;

beforeEach(async () => {
  page = await Page.build(); // page is the Proxy providing us access to our custom page, puppeteer browser & page
  await page.goto("http://localhost:3000"); //navigate to our app
});

afterEach(async () => {
  await page.close();
});

describe("When logged in", () => {
  beforeEach(async () => {
    await page.login();
    await page.click(".test-surveys-new");
  });

  test("Can see survey create form", async () => {
    const label = await page.getContentsOf("form label");

    expect(label).toEqual("Survey Title");
  });

  describe("and using valid inputs", () => {
    beforeEach(async () => {
      // Set values in all inputs in the form:
      await page.type('input[name="title"]', "My Title");
      await page.type('input[name="subject"]', "My Subject");
      await page.type('input[name="body"]', "My Body");
      await page.type('input[name="recipients"]', "tzvetanmarinov@yahoo.com");
      await page.type('input[name="fromEmail"]', "kefche1@abv.bg");
      await page.click(".test-next");
    });

    test("Submitting takes user to review screen", async () => {
      const headingText = await page.getContentsOf(".test-review-heading");
      expect(headingText).toEqual("Please confirm your entries");
    });

    test("Submitting and then creating survey adds survey to /surveys page", async () => {
      await page.click(".test-create-survey");
      await page.waitFor(".test-card");

      const title = await page.getContentsOf(".test-title");
      const body = await page.getContentsOf(".test-body");

      expect(title).toEqual("My Title");
      expect(body).toEqual("My Body");
    });
  });

  describe("and using invalid inputs", () => {
    beforeEach(async () => {
      await page.click(".test-next");
    });

    test("the form shows an error message", async () => {
      const titleErrorMessage = await page.getContentsOf(
        'input[name="title"] + .test-error-message'
      );
      const subjectErrorMessage = await page.getContentsOf(
        'input[name="subject"] + .test-error-message'
      );

      expect(titleErrorMessage).toEqual("You must provide a value");
      expect(subjectErrorMessage).toEqual("You must provide a value");
    });
  });
});

describe("When logged in without credits", () => {
  beforeEach(async () => {
    await page.login(0);
    await page.click(".test-surveys-new");

    // Set values in all inputs in the form:
    await page.type('input[name="title"]', "No credits title");
    await page.type('input[name="subject"]', "No credits subject");
    await page.type('input[name="body"]', "No credits body");
    await page.type('input[name="recipients"]', "tzvetanmarinov@yahoo.com");
    await page.type('input[name="fromEmail"]', "kefche1@abv.bg");
    await page.click(".test-next");
  });

  test('creating a survey shows message "Not enough credits"', async () => {
    await page.click(".test-create-survey");
    await page.waitFor(".test-failure");

    const error = await page.getContentsOf(".test-failure");
    expect(error).toEqual("Not enough credits");
  });
});

describe("When not logged in", () => {
  const actions = [
    { method: "get", path: "/api/surveys" },
    {
      method: "post",
      path: "/api/surveys",
      data: {
        title: "T",
        subject: "S",
        body: "B",
        recipients: "tzvetanmarinov@yahoo.com",
        fromEmail: "kefche1@abv.bg",
      },
    },
  ];

  test("Surveys related actions are prohibited", async () => {
    const results = await page.execRequests(actions); //array of objects
    for (let result of results) {
      expect(result).toEqual({ error: "You must log in!" });
    }
  });
});
