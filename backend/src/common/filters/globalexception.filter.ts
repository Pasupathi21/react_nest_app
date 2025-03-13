import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { RequestResponseService } from 'src/utils/request-response/request-response.service';
import { Response } from 'express'

@Catch()
export class GlobalExceptionFilter<T> implements ExceptionFilter {
  constructor(private readonly responseService: RequestResponseService) {}
  catch(exception: HttpException , host: ArgumentsHost) {
    this.responseService.failed(
      host.switchToHttp().getResponse<Response>(),
      null,
      exception?.message,
      exception.getStatus()
    )
  }
}
