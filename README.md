## Install

1. Make sure to run "npm install" in "/" AND "/client" folders!

2. Webhook for Stripe(https://dashboard.stripe.com/test/webhooks/) has to be set up;
3. Webhook for SendGrid (https://app.sendgrid.com/settings/mail_settings) has to be set up;

4. Need to create /config/dev.js with following content :

module.exports = {
googleClientID:
"...",
googleClientSecret: "...",
FACEBOOK_APP_ID: "...",
FACEBOOK_APP_SECRET: "...",
mongoURI:
"...",
cookieKey: "...",
stripePublishableKey: "...",
stripeSecretKey: "...",
sendGridKey:
"...",
redirectDomain: "http://localhost:5000"
};

5. Install Redis on Windows(used as caching server for mongoose queries) :

- Go to the releases page of the Redis for Windows repo: https://github.com/MicrosoftArchive/redis/releases
- Download the 'Redis-x64-xxx.zip' file.Â  You can use any version.Â  Make sure you doÂ not download the 'source code' zip.
- Unzip the file
- In the newly created folder, run redis-server.exeÂ
- You should see a window appear that says redis is running on port 6379

6. Integration Testing with Headless Browser :

- "npm run dev"
- start "redis-server.exe" from the folder where redis is installed
- "npm run test"
