import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthzModule } from 'api/healthz/loaders/healthz.module';
import appConfigs from 'common/configs/app';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [appConfigs],
    }),
    HealthzModule,
  ],
})
export class AppModule {}
