import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private get emailInput() {
    return this.page.locator('input[id="email"]');
  }

  private get passwordInput() {
    return this.page.locator('input[id="password"]');
  }

  private get loginButton() {
    return this.page.locator('button[data-test="login-button"]');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
