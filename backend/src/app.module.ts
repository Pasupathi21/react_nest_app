import { Module } from '@nestjs/common';
import { APP_FILTER} from '@nestjs/core'


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './config/prisma/prisma.module';
import { UsermanagementModule } from './features/usermanagement/usermanagement.module';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { UtilsModule } from './utils/utils.module';

import { GlobalExceptionFilter } from './common/filters/globalexception.filter'; 
import { RequestResponseService } from './utils/request-response/request-response.service';
import { ControllerWrapperService } from './utils/controller-wrapper/controller-wrapper.service';
import { DemoModule } from './features/demo/demo.module';

@Module({
  imports: [
    // DB service
    PrismaModule, 
    
    UsermanagementModule, 
    AuthenticationModule, 

    // utils service modules
    UtilsModule,
    DemoModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // global exception filters without creating any instance
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter
    }
  ],
  exports: []
})
export class AppModule {}
