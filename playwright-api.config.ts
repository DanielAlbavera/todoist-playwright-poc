import type { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config()

const config: PlaywrightTestConfig = {
  use: {
    baseURL: process.env.API_BASE_URL,
    extraHTTPHeaders: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`,
    },
  }
};
export default config;