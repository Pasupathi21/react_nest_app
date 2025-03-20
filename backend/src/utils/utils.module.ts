import { Module, Global } from '@nestjs/common';
import { RequestResponseService } from './request-response/request-response.service';
import { ControllerWrapperService } from './controller-wrapper/controller-wrapper.service';
import { GeneralService } from './general/general.service';

@Global()
@Module({
  providers: [
    RequestResponseService, 
    ControllerWrapperService,
    GeneralService
  ],
  exports: [
    RequestResponseService,
    ControllerWrapperService,
    GeneralService
  ]
})
export class UtilsModule {}
