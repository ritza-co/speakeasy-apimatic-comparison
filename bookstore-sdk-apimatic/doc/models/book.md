
# Book

## Structure

`Book`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `title` | `string` | Required | - |
| `description` | `string` | Required | - |
| `price` | `number` | Required | Price in USD cents |
| `category` | [`CategoryEnum`](../../doc/models/category-enum.md) | Required | - |
| `author` | [`Author2`](../../doc/models/containers/author-2.md) | Required | - |
| `coverImage` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 1,
  "title": "Clean Code",
  "description": "A Handbook of Agile Software Craftsmanship",
  "price": 2999,
  "author": {
    "id": 1,
    "name": "Robert C. Martin",
    "photo": "https://example.com/photos/robert.jpg",
    "biography": "Robert Cecil Martin, colloquially known as \"Uncle Bob\", is an American software engineer..."
  },
  "category": "Programming",
  "cover_image": "cover_image8"
}
```

