/**
 * Bookstore APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, number, object, Schema } from '../schema';

export interface NewOrder {
  user: number;
  products: number[];
}

export const newOrderSchema: Schema<NewOrder> = object({
  user: ['user', number()],
  products: ['products', array(number())],
});
