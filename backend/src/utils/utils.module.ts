import { Module, Global } from '@nestjs/common';
import { RequestResponseService } from './request-response/request-response.service';
import { ControllerWrapperService } from './controller-wrapper/controller-wrapper.service';

@Global()
@Module({
  providers: [RequestResponseService, ControllerWrapperService],
  exports: [
    RequestResponseService,
    ControllerWrapperService
  ]
})
export class UtilsModule {}
