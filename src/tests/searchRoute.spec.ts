import { test } from '../fixtures/testFixtures';
import { routeData } from '../utils/testData';
import { getDatePlusDays } from '../utils/dateUtils';

test.describe('Authenticated Route Search', () => {
  test('User can search for a shuttle route from homepage', async ({
    homePage
  }) => {
    // Calculate travel date (today + 2 days)
    const travelDate = getDatePlusDays(2);

    // Search route
    await homePage.navigate('/');
    await homePage.searchRoute(routeData.location, routeData.destination, travelDate);
    await homePage.verifyResultsDisplayed();
  });
});

