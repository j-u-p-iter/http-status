<a name="HttpStatus"></a>

## HttpStatus : <code>enum</code>
Enum for http status codes.

**Kind**: global enum  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| OK | <code>200</code> | The request has succeeded. [More info](https://tools.ietf.org/html/rfc7231#section-6.3.1) |
| Created | <code>201</code> | The request has been fulfilled and has resulted   in one or more new resources being created. [More info](https://tools.ietf.org/html/rfc7231#section-6.3.2) |
| Accepted | <code>202</code> | The request has been accepted for processing,   but the processing has not been completed. [More info](https://tools.ietf.org/html/rfc7231#section-6.3.3) |

**Example**  
```js
req.send({ status: HttpStatus.OK });
```
