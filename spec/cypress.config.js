/* eslint-disable no-undef */
import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config({
  path: [".env.local", ".env"],
});

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.BACKEND_URL = process.env.BACKEND_URL;
      config.env.FRONTEND_URL = process.env.FRONTEND_URL;
      return config;
    },
  },
});
