import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { NestExpressApplication } from '@nestjs/platform-express'
import * as dotenv from 'dotenv'
import { join } from 'path'

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

  const PORT = process.env.PORT || 3501
  await app.listen(PORT);
}
bootstrap();