
# Order

## Structure

`Order`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | - |
| `date` | `string` | Required | - |
| `status` | [`StatusEnum`](../../doc/models/status-enum.md) | Required | - |
| `user` | [`User`](../../doc/models/user.md) | Required | - |
| `products` | [`OrderProducts[]`](../../doc/models/containers/order-products.md) | Required | This is Array of a container for one-of cases. |

## Example (as JSON)

```json
{
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
    },
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
```

