/**
 * Bookstore APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  compositeAuthenticationProvider,
  customHeaderAuthenticationProvider,
  OAuthConfiguration,
  requestAuthenticationProvider,
} from './authentication';
import { ClientCredentialsManager } from './clientCredentialsManager';
import { Configuration } from './configuration';
import { OAuthToken } from './models/oAuthToken';

export function createAuthProviderFromConfig(
  config: Partial<Configuration>,
  clientCredentials: () => ClientCredentialsManager | undefined
) {
  const authConfig = {
    apiKey:
      config.apiKeyCredentials &&
      customHeaderAuthenticationProvider(config.apiKeyCredentials),
    clientCredentials:
      config.clientCredentialsCredentials &&
      requestAuthenticationProvider(
        config.clientCredentialsCredentials.oAuthToken,
        clientCredentialsTokenProvider(
          clientCredentials,
          config.clientCredentialsCredentials.oAuthTokenProvider
        ),
        config.clientCredentialsCredentials.oAuthOnTokenUpdate,
        {
          clockSkew: config.clientCredentialsCredentials.oAuthClockSkew,
        } as OAuthConfiguration
      ),
  };

  return compositeAuthenticationProvider<
    keyof typeof authConfig,
    typeof authConfig
  >(authConfig);
}

function clientCredentialsTokenProvider(
  clientCredentials: () => ClientCredentialsManager | undefined,
  defaultProvider:
    | ((
        lastOAuthToken: OAuthToken | undefined,
        authManager: ClientCredentialsManager
      ) => Promise<OAuthToken>)
    | undefined
): ((token: OAuthToken | undefined) => Promise<OAuthToken>) | undefined {
  return (token: OAuthToken | undefined) => {
    const manager = clientCredentials();
    if (manager === undefined) {
      throw Error('Unable to find the OAuthManager instance');
    }
    if (defaultProvider === undefined) {
      return manager.updateToken(token);
    }
    return defaultProvider(token, manager);
  };
}
