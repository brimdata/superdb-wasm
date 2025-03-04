import { test, expect } from "@playwright/test";

test("check the query result", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/SuperDB Wasm Test/);
  const code = page.locator("code");
  await expect(code).toContainText("101\n102\n103");
});
