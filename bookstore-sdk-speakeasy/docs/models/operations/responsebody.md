# ResponseBody

## Example Usage

```typescript
import { ResponseBody } from "openapi/models/operations";

let value: ResponseBody = {
    id: 2,
    title: "The Hobbit",
    description: "A fantasy novel by J.R.R. Tolkien",
    price: 1599,
    author: {
        id: 1,
        name: "Robert C. Martin",
        photo: "https://example.com/photos/robert.jpg",
        biography:
            'Robert Cecil Martin, colloquially known as "Uncle Bob", is an American software engineer...',
    },
    coverImage: "https://example.com/covers/cleancode.jpg",
};
```

## Supported Types

### `components.ProgrammingBook`

```typescript
const value: components.ProgrammingBook = /* values here */
```

### `components.FantasyBook`

```typescript
const value: components.FantasyBook = /* values here */
```

### `components.SciFiBook`

```typescript
const value: components.SciFiBook = /* values here */
```

