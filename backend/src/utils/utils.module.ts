import { Module, Global } from '@nestjs/common';
import { RequestResponseService } from './request-response/request-response.service';
import { ControllerWrapperService } from './controller-wrapper/controller-wrapper.service';
import { GeneralService } from './general/general.service';
import { ResponseMapper } from './mapper/response.mapper.service';

@Global()
@Module({
  providers: [
    RequestResponseService, 
    ControllerWrapperService,
    GeneralService,
    ResponseMapper
  ],
  exports: [
    RequestResponseService,
    ControllerWrapperService,
    GeneralService,
    ResponseMapper
  ]
})
export class UtilsModule {}
