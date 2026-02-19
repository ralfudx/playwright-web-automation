import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './src/tests',
  timeout: 60_000,
  retries: process.env.CI ? 2 : 0,
  reporter: [['html', { open: 'never' }]],

  globalSetup: require.resolve('./src/setup/global.setup'),

  use: {
    baseURL: 'https://my.shuttlers.co',
    storageState: 'storageState.json',
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  }
});
