import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  workers: 1,
  reporter: "line",
  use: {
    baseURL: "http://127.0.0.1:3000",
    headless: true,
  },
  webServer: {
    command: "yarn start",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
  },
});
