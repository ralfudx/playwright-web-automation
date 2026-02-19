import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { credentials } from '../utils/auth';

async function globalSetup(config: FullConfig) {
  const baseURL = config.projects[0].use.baseURL as string;
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(baseURL);

  const loginPage = new LoginPage(page);

  await loginPage.login(
    credentials.email,
    credentials.password
  );

  await page.waitForURL('**/dashboard/daily', {
    timeout: 60000
  });

  await page.context().storageState({
    path: 'storageState.json'
  });

  await browser.close();
}

export default globalSetup;
