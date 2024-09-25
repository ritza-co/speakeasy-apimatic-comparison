/**
 * Bookstore APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OAuthScopeClientCredentialsEnum
 */
export enum OAuthScopeClientCredentialsEnum {
  BooksRead = 'books.read',
  OrdersRead = 'orders.read',
  OrdersWrite = 'orders.write',
}

/**
 * Schema for OAuthScopeClientCredentialsEnum
 */
export const oAuthScopeClientCredentialsEnumSchema: Schema<OAuthScopeClientCredentialsEnum> = stringEnum(
  OAuthScopeClientCredentialsEnum
);
