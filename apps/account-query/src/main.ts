import { NestFactory } from '@nestjs/core';
import { Logger, type INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { type Express } from 'express';
import { AppModule } from './app.module';
import { type AppConfigs } from 'common/types/configs';

async function bootstrap() {
  const app = await NestFactory.create<INestApplication<Express>>(AppModule);

  const logger = new Logger('Bootstrap');
  const configService = app.get(ConfigService<AppConfigs>);

  await app.listen(configService.get('APP').PORT);

  if (configService.get('APP').NODE_ENV !== 'production') {
    logger.log(`Server is running on ${await app.getUrl()}`);
  }
}

bootstrap();
