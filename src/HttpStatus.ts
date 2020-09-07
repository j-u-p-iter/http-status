/**
 * Enum for http status codes.
 *
 * @enum {number}
 *
 * @property {200} OK                    - The request has succeeded. [More info]{@link https://tools.ietf.org/html/rfc7231#section-6.3.1}
 *
 * @property {201} CREATED               - The request has been fulfilled and has resulted
 *   in one or more new resources being created.
 *   [More info]{@link https://tools.ietf.org/html/rfc7231#section-6.3.2}
 *
 * @property {202} ACCEPTED              - The request has been accepted for processing,
 *   but the processing has not been completed.
 *   [More info]{@link https://tools.ietf.org/html/rfc7231#section-6.3.3}
 *
 * @property {400} BAD_REQUEST           - The server can not or will
 *   not process the request due to a client error.
 *   [More info]{@link https://tools.ietf.org/html/rfc7231#section-6.5.1}
 *
 * @property {401} UNAUTHORIZED          - The request has not been applied
 *   because it lacks valid authentication credentials for the target resource.
 *   [More info]{@link https://tools.ietf.org/html/rfc7235#section-3.1}
 *
 * @property {403} FORBIDDEN             - The server understood the request but refuses to
 *   authorize it.
 *   [More info]{@link https://tools.ietf.org/html/rfc7231#section-6.5.3}
 *
 * @property {404} NOT_FOUND             - The origin server didn't find a current representation
 *   for the target resource or is not willing to disclose that one exists.
 *   [More info]{@link https://tools.ietf.org/html/rfc7231#section-6.5.4}
 *
 * @property {405} METHOD_NOT_ALLOWED    - The method received in the request-line is known by the
 *   origin server but not supported by the target resource.
 *   [More info]{@link https://tools.ietf.org/html/rfc7231#section-6.5.5}
 *
 * @property {500} INTERNAL_SERVER_ERROR - The server encountered an unexpected condition that
 *   prevented if from fulfilling the request.
 *   [More info]{@link https://tools.ietf.org/html/rfc7231#section-6.6.1}
 *
 * @property {502} BAD_GATEWAY - The server, while acting as a proxy, received an invalid response
 *   from an inbound server it accessed while attempting to fulfill the request.
 *   [More info]{@link https://tools.ietf.org/html/rfc7231#section-6.6.3}
 *
 * @property {503} SERVICE_UNAVAILABLE - The server is currently unable to handle the request due to a temporary
 *   overload  or scheduled maintenance.
 *   [More info]{@link https://tools.ietf.org/html/rfc7231#section-6.6.4}
 *
 * @example
 * req.send({ status: HttpStatus.OK });
 */

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,

  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,

  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503
}
