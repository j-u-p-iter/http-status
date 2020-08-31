/**
 * Enum for http status codes.
 *
 * @enum {number}
 *
 * @property {200} OK       - The request has succeeded. [More info]{@link https://tools.ietf.org/html/rfc7231#section-6.3.1}
 * @property {201} Created  - The request has been fulfilled and has resulted
 *   in one or more new resources being created. [More info]{@link https://tools.ietf.org/html/rfc7231#section-6.3.2}
 * @property {202} Accepted - The request has been accepted for processing,
 *   but the processing has not been completed. [More info]{@link https://tools.ietf.org/html/rfc7231#section-6.3.3}
 *
 * @example
 * req.send({ status: HttpStatus.OK });
 */
export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202
}
