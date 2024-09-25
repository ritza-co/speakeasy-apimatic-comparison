import { SDKCore } from "openapi/core.js";
import { booksAddBook } from "openapi/funcs/booksAddBook.js";

// Use `SDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const sdk = new SDKCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await booksAddBook(sdk, {
    id: 1,
    title: "New Sci-Fi Book",
    description: "A new Sci-Fi book description",
    category: "Sci-fi",
    price: 1999,
    author: {
      id: 1,
      name: "New Author",
      photo: "https://example.com/photos/newauthor.jpg",
      biography: "New Author is an upcoming writer in the Sci-Fi genre...",
    },
    coverImage: "https://example.com/covers/newbook.jpg",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();