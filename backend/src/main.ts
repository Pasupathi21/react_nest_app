import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { NestExpressApplication } from '@nestjs/platform-express'
import * as dotenv from 'dotenv'
import { join } from 'path'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  // load env data
  dotenv.config({ path: join(__dirname, '..', '.env' )})

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['debug', 'error', 'fatal', 'log', 'verbose', 'warn']
  });

  // enable cors
  app.enableCors({
    origin: '*'
  })

  // global api prefix
  app.setGlobalPrefix('api')
  const swaggerConfig: any = new DocumentBuilder().setTitle('Demo API').setDescription("Demo api with some validations").setVersion('0.0')
  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('docs', app, document)
  const PORT = process.env.PORT || 3501
  console.log(PORT)
  await app.listen(PORT);
}
bootstrap();