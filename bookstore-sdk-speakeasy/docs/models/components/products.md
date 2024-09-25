# Products

## Example Usage

```typescript
import { Products } from "openapi/models/components";

let value: Products = {
    id: 1,
    title: "Clean Code",
    description: "A Handbook of Agile Software Craftsmanship",
    price: 2999,
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

