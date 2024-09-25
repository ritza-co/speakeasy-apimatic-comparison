/**
 * Bookstore APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface User {
  id?: number;
  email?: string;
  name?: string;
}

export const userSchema: Schema<User> = object({
  id: ['id', optional(number())],
  email: ['email', optional(string())],
  name: ['name', optional(string())],
});
