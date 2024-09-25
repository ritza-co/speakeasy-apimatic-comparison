# Books

Operations related to books

```ts
const booksController = new BooksController(client);
```

## Class Name

`BooksController`

## Methods

* [Get All Books](../../doc/controllers/books.md#get-all-books)
* [Add Book](../../doc/controllers/books.md#add-book)
* [Get Book by Id](../../doc/controllers/books.md#get-book-by-id)
* [Update Book Cover by Id](../../doc/controllers/books.md#update-book-cover-by-id)


# Get All Books

Returns a list of books

```ts
async getAllBooks(requestOptions?: RequestOptions): Promise<ApiResponse<GetAllBooksResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### clientCredentials

`books.read`

## Response Type

[`GetAllBooksResponse[]`](../../doc/models/containers/get-all-books-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await booksController.getAllBooks();
  if (GetAllBooksResponse.isProgrammingBook(result)) {
      // Use the result narrowed down to ProgrammingBook type.
  } else if (GetAllBooksResponse.isFantasyBook(result)) {
      // Use the result narrowed down to FantasyBook type.
  } else if (GetAllBooksResponse.isSciFiBook(result)) {
      // Use the result narrowed down to SciFiBook type.
  } else {
      // result is narrowed down to type 'never'.
  }
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Add Book

Adds a new book to the bookstore

```ts
async addBook(  body: AddBookBody,
requestOptions?: RequestOptions): Promise<ApiResponse<AddBookResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`AddBookBody`](../../doc/models/containers/add-book-body.md) | Body, Required | This is a container for one-of cases. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AddBookResponse`](../../doc/models/containers/add-book-response.md)

## Example Usage

```ts
const body: AddBookBody = {
  title: 'Clean Code',
  description: 'A Handbook of Agile Software Craftsmanship',
  price: 2999,
  category: CategoryEnum.Programming,
  author: {
    name: 'Robert C. Martin',
    id: 1,
    photo: 'https://example.com/photos/robert.jpg',
    biography: 'Robert Cecil Martin, colloquially known as "Uncle Bob", is an American software engineer...',
  },
  id: 1,
  coverImage: 'https://example.com/covers/cleancode.jpg',
};

try {
  const { result, ...httpResponse } = await booksController.addBook(body);
  if (AddBookResponse.isProgrammingBook(result)) {
      // Use the result narrowed down to ProgrammingBook type.
  } else if (AddBookResponse.isFantasyBook(result)) {
      // Use the result narrowed down to FantasyBook type.
  } else if (AddBookResponse.isSciFiBook(result)) {
      // Use the result narrowed down to SciFiBook type.
  } else {
      // result is narrowed down to type 'never'.
  }
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Book by Id

Returns a single book

:information_source: **Note** This endpoint does not require authentication.

```ts
async getBookById(  bookId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<GetBookByIdResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bookId` | `number` | Template, Required | ID of the book to return |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetBookByIdResponse`](../../doc/models/containers/get-book-by-id-response.md)

## Example Usage

```ts
const bookId = 1;

try {
  const { result, ...httpResponse } = await booksController.getBookById(bookId);
  if (GetBookByIdResponse.isProgrammingBook(result)) {
      // Use the result narrowed down to ProgrammingBook type.
  } else if (GetBookByIdResponse.isFantasyBook(result)) {
      // Use the result narrowed down to FantasyBook type.
  } else if (GetBookByIdResponse.isSciFiBook(result)) {
      // Use the result narrowed down to SciFiBook type.
  } else {
      // result is narrowed down to type 'never'.
  }
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Book Cover by Id

Updates a single book cover

```ts
async updateBookCoverById(  bookId: number,
  cover?: FileWrapper,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bookId` | `number` | Template, Required | ID of the book to update |
| `cover` | `FileWrapper \| undefined` | Form, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const bookId = 1;

try {
  const { result, ...httpResponse } = await booksController.updateBookCoverById(bookId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

