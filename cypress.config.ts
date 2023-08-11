import { defineConfig } from "cypress";
import "dotenv/config";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const version = config.env.version || "sandbox";
      config.env = require(`./cypress/config/${version}.json`);
      config.baseUrl = config.env.baseUrl;

      return config;
    },
  },
});
