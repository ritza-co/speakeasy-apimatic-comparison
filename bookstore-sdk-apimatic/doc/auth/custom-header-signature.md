
# Custom Header Signature



Documentation for accessing and setting credentials for apiKey.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| X-API-Key | `string` | - | `xAPIKey` |



**Note:** Auth credentials can be set using `apiKeyCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
const client = new Client({
  apiKeyCredentials: {
    'X-API-Key': 'X-API-Key'
  },
});
```


