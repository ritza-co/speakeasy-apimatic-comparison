/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { booksAddBook } from "../funcs/booksAddBook.js";
import { booksGetAllBooks } from "../funcs/booksGetAllBooks.js";
import { booksGetBookById } from "../funcs/booksGetBookById.js";
import { booksUpdateBookCoverById } from "../funcs/booksUpdateBookCoverById.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Books extends ClientSDK {
    /**
     * Get all books
     *
     * @remarks
     * Returns a list of books
     */
    async getAllBooks(options?: RequestOptions): Promise<Array<operations.ResponseBody>> {
        return unwrapAsync(booksGetAllBooks(this, options));
    }

    /**
     * Add a new book
     *
     * @remarks
     * Adds a new book to the bookstore
     */
    async addBook(
        request: operations.AddBookRequestBody,
        options?: RequestOptions
    ): Promise<operations.AddBookResponseBody> {
        return unwrapAsync(booksAddBook(this, request, options));
    }

    /**
     * Get a book by ID
     *
     * @remarks
     * Returns a single book
     */
    async getBookById(
        request: operations.GetBookByIdRequest,
        options?: RequestOptions
    ): Promise<operations.GetBookByIdResponseBody> {
        return unwrapAsync(booksGetBookById(this, request, options));
    }

    /**
     * Update a book cover by ID
     *
     * @remarks
     * Updates a single book cover
     */
    async updateBookCoverById(
        request: operations.UpdateBookCoverByIdRequest,
        options?: RequestOptions
    ): Promise<void> {
        return unwrapAsync(booksUpdateBookCoverById(this, request, options));
    }
}
