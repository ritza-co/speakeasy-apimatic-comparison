/**
 * Bookstore APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Client, Configuration, Environment } from '../src';

export const testClient = new Client(createConfigurationFromEnvironment());

function createConfigurationFromEnvironment(): Partial<Configuration> {
  const config: Partial<Configuration> = {};

  const environment = process.env.BOOKSTORE_API_LIB_ENVIRONMENT;
  const timeout = process.env.BOOKSTORE_API_LIB_TIMEOUT;
  const xAPIKey = process.env.BOOKSTORE_API_LIB_X_API_KEY;
  const oAuthClientId = process.env.BOOKSTORE_API_LIB_O_AUTH_CLIENT_ID;
  const oAuthClientSecret = process.env.BOOKSTORE_API_LIB_O_AUTH_CLIENT_SECRET;

  if (environment !== undefined) {
    config.environment = environment as Environment;
  }

  if (timeout !== undefined && timeout !== '') {
    config.timeout = parseInt(timeout);
  }

  if (xAPIKey !== undefined) {
    config.apiKeyCredentials = { 'X-API-Key': xAPIKey };
  }

  if (oAuthClientId !== undefined && oAuthClientSecret !== undefined) {
    config.clientCredentialsCredentials = {
      oAuthClientId: oAuthClientId,
      oAuthClientSecret: oAuthClientSecret,
    };
  }

  return config;
}
