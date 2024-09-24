import { HttpException, HttpStatus } from '@nestjs/common';
import { AppHttpExceptionResponse } from './exception-response.interface';

export class AppHttpException extends HttpException {
  constructor(message: string, status: HttpStatus) {
    const errorResponse: AppHttpExceptionResponse = {
      message,
      statusCode: status,
      data: [],
    };

    super(errorResponse, status);
  }
}
