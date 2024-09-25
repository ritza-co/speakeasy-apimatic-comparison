# Orders

Operations related to orders

```ts
const ordersController = new OrdersController(client);
```

## Class Name

`OrdersController`

## Methods

* [Get All Orders](../../doc/controllers/orders.md#get-all-orders)
* [Create Order](../../doc/controllers/orders.md#create-order)
* [Get Order by Id](../../doc/controllers/orders.md#get-order-by-id)
* [Get Order Stream](../../doc/controllers/orders.md#get-order-stream)


# Get All Orders

Returns a list of orders

```ts
async getAllOrders(requestOptions?: RequestOptions): Promise<ApiResponse<Order[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### clientCredentials

`orders.read`

## Response Type

[`Order[]`](../../doc/models/order.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await ordersController.getAllOrders();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Order

Creates a new order

```ts
async createOrder(  body: NewOrder,
requestOptions?: RequestOptions): Promise<ApiResponse<Order>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`NewOrder`](../../doc/models/new-order.md) | Body, Required | Order object to be created |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### clientCredentials

`orders.write`

## Response Type

[`Order`](../../doc/models/order.md)

## Example Usage

```ts
const body: NewOrder = {
  user: 1,
  products: [
    1,
    3
  ],
};

try {
  const { result, ...httpResponse } = await ordersController.createOrder(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Order by Id

Returns a single order

```ts
async getOrderById(  orderId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<Order>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `orderId` | `number` | Template, Required | ID of the order to return |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### clientCredentials

`orders.read`

## Response Type

[`Order`](../../doc/models/order.md)

## Example Usage

```ts
const orderId = 1;

try {
  const { result, ...httpResponse } = await ordersController.getOrderById(orderId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Order Stream

Returns a stream of orders

```ts
async getOrderStream(requestOptions?: RequestOptions): Promise<ApiResponse<OrderStreamMessage>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`OrderStreamMessage`](../../doc/models/order-stream-message.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await ordersController.getOrderStream();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

