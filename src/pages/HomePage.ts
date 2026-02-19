import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators
  private get locationInput() {
    return this.page.locator('input[id="location"]');
  }

  private get destinationInput() {
    return this.page.locator('input[id="destination"]');
  }

  private get suggestionsContainer() {
    return this.page.locator('.suggestions-container');
  }

  private get suggestionItems() {
    return this.suggestionsContainer.locator('div.suggestion-item');
  }

  private get dateInput() {
    return this.page.locator('input[name="date"]');
  }

  private get findTripsButton() {
    return this.page.locator('button[data-testid="find-trips-btn"]');
  }

  private get resultsSection() {
    return this.page.locator('section.content-box');
  }

  private async selectLocation(inputLocator: Locator, value: string) {
    await inputLocator.fill(value);

    // wait for suggestions to appear
    await this.suggestionsContainer.waitFor({ state: 'visible' });

    // select first suggestion
    await expect(this.suggestionItems.first()).toBeVisible();
    const selectedText = await this.suggestionItems.first().innerText();
    await this.suggestionItems.first().click();

    // wait for dropdown to close (selection completed)
    await this.suggestionsContainer.waitFor({ state: 'hidden' });

    // confirm input updated with selected value
    await expect(inputLocator).toHaveValue(selectedText);
  }

  async selectDate(date: Date) {
    await this.dateInput.click();
    const formattedDate = date.toISOString().split('T')[0];
    const dayCell = this.page.locator(
      `td.cell[title="${formattedDate}"]:visible`
    );

    await dayCell.waitFor({ state: 'visible' });
    await dayCell.click();
  }

  // Actions
  async searchRoute(location: string, destination: string, date: Date) {
    await this.selectLocation(this.locationInput, location);
    await this.selectLocation(this.destinationInput, destination);
    await this.selectDate(date);
    await this.findTripsButton.click();
  }

  // Assertions
  async verifyResultsDisplayed() {
    await expect(this.resultsSection).toBeVisible();
  }
}
