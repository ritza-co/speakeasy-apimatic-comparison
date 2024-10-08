/**
 * Bookstore APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, FileWrapper, RequestOptions } from '../core';
import {
  AddBookBody,
  addBookBodySchema,
} from '../models/containers/addBookBody';
import {
  AddBookResponse,
  addBookResponseSchema,
} from '../models/containers/addBookResponse';
import {
  GetAllBooksResponse,
  getAllBooksResponseSchema,
} from '../models/containers/getAllBooksResponse';
import {
  GetBookByIdResponse,
  getBookByIdResponseSchema,
} from '../models/containers/getBookByIdResponse';
import { array, number } from '../schema';
import { BaseController } from './baseController';

export class BooksController extends BaseController {
  /**
   * Returns a list of books
   *
   * @return Response from the API call
   */
  async getAllBooks(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetAllBooksResponse[]>> {
    const req = this.createRequest('GET', '/books');
    req.authenticate([{ clientCredentials: true }]);
    return req.callAsJson(array(getAllBooksResponseSchema), requestOptions);
  }

  /**
   * Adds a new book to the bookstore
   *
   * @param body         Book object to be added
   * @return Response from the API call
   */
  async addBook(
    body: AddBookBody,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<AddBookResponse>> {
    const req = this.createRequest('POST', '/books');
    const mapped = req.prepareArgs({ body: [body, addBookBodySchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.authenticate([{ apiKey: true }]);
    return req.callAsJson(addBookResponseSchema, requestOptions);
  }

  /**
   * Returns a single book
   *
   * @param bookId ID of the book to return
   * @return Response from the API call
   */
  async getBookById(
    bookId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetBookByIdResponse>> {
    const req = this.createRequest('GET');
    console.log(req);
    const mapped = req.prepareArgs({ bookId: [bookId, number()] });
    req.appendTemplatePath`/books/${mapped.bookId}`;
    req.authenticate(false);
    return req.callAsJson(getBookByIdResponseSchema, requestOptions);
  }

  /**
   * Updates a single book cover
   *
   * @param bookId ID of the book to update
   * @param cover
   * @return Response from the API call
   */
  async updateBookCoverById(
    bookId: number,
    cover?: FileWrapper,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({ bookId: [bookId, number()] });
    req.formData({ cover: cover });
    req.appendTemplatePath`/books/${mapped.bookId}/cover`;
    req.authenticate([{ apiKey: true }]);
    return req.call(requestOptions);
  }
}
