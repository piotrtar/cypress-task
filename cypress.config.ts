import { defineConfig } from "cypress";
require("custom-env").env(`${process.env.APP_ENV}`);

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
	  config.baseUrl = process.env.BASE_URL;
	  return config;
    },
  },
});
