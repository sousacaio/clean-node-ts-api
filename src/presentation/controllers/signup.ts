import MissingParamError from '../errors/missigin-param-error'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): any {
    const requiredFields = ['name', 'email']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
