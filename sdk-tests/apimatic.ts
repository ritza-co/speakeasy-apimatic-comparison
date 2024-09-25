import {
  Client,
  BooksController,
  AddBookBody,
  AddBookResponse,
  CategoryEnum,
  ApiError,
} from "bookstore-apilib";

const client = new Client({
  apiKeyCredentials: {
    "X-API-Key": "YOUR_API_KEY",
  },
});

const booksController = new BooksController(client);

const body: AddBookBody = {
  title: "Clean Code",
  description: "A Handbook of Agile Software Craftsmanship",
  price: 2999,
  category: CategoryEnum.Programming,
  author: {
    name: "Robert C. Martin",
    photo: "https://example.com/photos/robert.jpg",
    biography:
      'Robert Cecil Martin, colloquially known as "Uncle Bob", is an American software engineer...',
  },
  id: 1,
  coverImage: "https://example.com/covers/cleancode.jpg",
};

async function addBook() {

  try {
    const { result, ...httpResponse } = await booksController.addBook(body);
    console.log(result);
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
    console.error(error);
    if (error instanceof ApiError) {
      const errors = error.result;
    }
  }
}

addBook();