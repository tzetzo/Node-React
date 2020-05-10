const puppeteer = require("puppeteer");
const sessionFactory = require("../factories/sessionFactory");
const userFactory = require("../factories/userFactory");

class CustomPage {
  static async build() {
    const browser = await puppeteer.launch({
      headless: true, //true for Travis-CI Server; false for when on localhost
      args: ["--no-sandbox"], //dramatically decreases the time for the tests to run on Travis-CI
    });

    const page = await browser.newPage();
    const customPage = new CustomPage(page);

    return new Proxy(customPage, {
      get: function (target, property) {
        return customPage[property] || browser[property] || page[property];
      },
    });
  }

  constructor(page) {
    this.page = page;
  }

  async login(credits = 1) {
    const user = await userFactory(credits);

    const { session, sig } = sessionFactory(user);

    // set the 2 cookies on the browser tab:
    await this.page.setCookie(
      { name: "express:sess", value: session },
      { name: "express:sess.sig", value: sig }
    );

    await this.page.goto("http://localhost:3000/surveys"); //refresh the tab
    await this.page.waitFor(".test-logout"); //wait for the Logout button to appear
  }

  async getContentsOf(selector) {
    return this.page.$eval(selector, (el) => el.innerHTML);
  }

  get(path) {
    return this.page.evaluate((_path) => {
      //puppeteer sends this function to Chromium as a string to execute and send back the result to our test suite
      return fetch(_path, {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    }, path);
  }

  post(path, data) {
    return this.page.evaluate(
      (_path, _data) => {
        //puppeteer sends this function to Chromium to execute and send back the result to our test suite
        return fetch(_path, {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(_data),
        }).then((res) => res.json());
      },
      path,
      data
    );
  }

  execRequests(actions) {
    return Promise.all(
      //waits for all Promises in the array to resolve
      //array of Promises
      actions.map(({ method, path, data }) => {
        return this[method](path, data); //Promise is returned
      })
    );
  }
}

module.exports = CustomPage;
