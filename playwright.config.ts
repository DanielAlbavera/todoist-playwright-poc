import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import { URLS } from './data/constants'

const config: PlaywrightTestConfig = {
  testDir: './tests/ui',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    baseURL: URLS.BASE,
    screenshot: 'only-on-failure',

    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Chrome',
      use: {
        channel : 'chrome',
        ...devices['Desktop Chrome'],
      },
    },
  ],

};

export default config;
