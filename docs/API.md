<a name="HttpStatus"></a>

## HttpStatus : <code>enum</code>
Enum for http status codes.

**Kind**: global enum  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| OK | <code>200</code> | The request has succeeded. [More info](https://tools.ietf.org/html/rfc7231#section-6.3.1) |
| CREATED | <code>201</code> | The request has been fulfilled and has resulted   in one or more new resources being created.   [More info](https://tools.ietf.org/html/rfc7231#section-6.3.2) |
| ACCEPTED | <code>202</code> | The request has been accepted for processing,   but the processing has not been completed.   [More info](https://tools.ietf.org/html/rfc7231#section-6.3.3) |
| BAD_REQUEST | <code>400</code> | The server can not or will   not process the request due to a client error.   [More info](https://tools.ietf.org/html/rfc7231#section-6.5.1) |
| UNAUTHORIZED | <code>401</code> | The request has not been applied   because it lacks valid authentication credentials for the target resource.   [More info](https://tools.ietf.org/html/rfc7235#section-3.1) |
| FORBIDDEN | <code>403</code> | The server understood the request but refuses to   authorize it.   [More info](https://tools.ietf.org/html/rfc7231#section-6.5.3) |
| NOT_FOUND | <code>404</code> | The origin server didn't find a current representation   for the target resource or is not willing to disclose that one exists.   [More info](https://tools.ietf.org/html/rfc7231#section-6.5.4) |
| METHOD_NOT_ALLOWED | <code>405</code> | The method received in the request-line is known by the   origin server but not supported by the target resource.   [More info](https://tools.ietf.org/html/rfc7231#section-6.5.5) |
| INTERNAL_SERVER_ERROR | <code>500</code> | The server encountered an unexpected condition that   prevented if from fulfilling the request.   [More info](https://tools.ietf.org/html/rfc7231#section-6.6.1) |
| BAD_GATEWAY | <code>502</code> | The server, while acting as a proxy, received an invalid response   from an inbound server it accessed while attempting to fulfill the request.   [More info](https://tools.ietf.org/html/rfc7231#section-6.6.3) |
| SERVICE_UNAVAILABLE | <code>503</code> | The server is currently unable to handle the request due to a temporary   overload  or scheduled maintenance.   [More info](https://tools.ietf.org/html/rfc7231#section-6.6.4) |

**Example**  
```js
req.send({ status: HttpStatus.OK });
```
