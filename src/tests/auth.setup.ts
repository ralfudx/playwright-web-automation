import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { credentials } from '../utils/auth';

setup('authenticate', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(credentials.email, credentials.password);

  await page.context().storageState({
    path: 'storageState.json'
  });
});
