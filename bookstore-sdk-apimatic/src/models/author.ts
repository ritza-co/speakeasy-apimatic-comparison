/**
 * Bookstore APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface Author {
  id?: number;
  name?: string;
  photo?: string;
  biography?: string;
}

export const authorSchema: Schema<Author> = object({
  id: ['id', optional(number())],
  name: ['name', optional(string())],
  photo: ['photo', optional(string())],
  biography: ['biography', optional(string())],
});
