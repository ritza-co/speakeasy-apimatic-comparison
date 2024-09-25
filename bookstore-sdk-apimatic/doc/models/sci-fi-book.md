
# Sci Fi Book

## Structure

`SciFiBook`

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
  "id": 3,
  "title": "New Sci-Fi Book",
  "description": "A new Sci-Fi book description",
  "price": 1999,
  "category": "Sci-fi",
  "cover_image": "https://example.com/covers/newbook.jpg",
  "author": {
    "name": "New Author",
    "photo": "https://example.com/photos/newauthor.jpg",
    "biography": "New Author is an upcoming writer in the Sci-Fi genre...",
    "id": 102
  }
}
```

