
# Order Stream Message

A message in the order stream

## Structure

`OrderStreamMessage`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `event` | `string` | Required | - |
| `data` | [`Order`](../../doc/models/order.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "event": "order_created",
  "data": {
    "id": 1,
    "date": "05/17/2023 09:24:00",
    "status": "pending",
    "user": {
      "id": 1,
      "email": "user@example.com",
      "name": "John Doe"
    },
    "products": [
      {
        "id": 154,
        "title": "title4",
        "description": "description8",
        "price": 230,
        "category": "Sci-fi",
        "author": {
          "id": 102,
          "name": "name4",
          "photo": "photo0",
          "biography": "biography4"
        },
        "cover_image": "cover_image8"
      }
    ]
  }
}
```

