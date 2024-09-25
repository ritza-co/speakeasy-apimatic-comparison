# Order

## Example Usage

```typescript
import { Order } from "openapi/models/components";

let value: Order = {
    id: 1,
    date: new Date("2023-05-17T09:24:00Z"),
    status: "pending",
    user: {
        id: 1,
        email: "user@example.com",
        name: "John Doe",
    },
    products: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 1                                                                                             |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2023-05-17 09:24:00 +0000 UTC                                                                 |
| `status`                                                                                      | [components.Status](../../models/components/status.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           | pending                                                                                       |
| `user`                                                                                        | [components.User](../../models/components/user.md)                                            | :heavy_check_mark:                                                                            | N/A                                                                                           | {<br/>"id": 1,<br/>"email": "user@example.com",<br/>"name": "John Doe"<br/>}                  |
| `products`                                                                                    | *components.Products*[]                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |