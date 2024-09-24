import { HttpStatus } from '@nestjs/common';

export interface AppHttpExceptionResponse {
  message: string;
  statusCode: HttpStatus;
  data?: any[];
}
