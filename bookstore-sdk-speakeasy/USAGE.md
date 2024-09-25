<!-- Start SDK Example Usage [usage] -->
```typescript
import { SDK } from "openapi";

const sdk = new SDK({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await sdk.books.getAllBooks();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->