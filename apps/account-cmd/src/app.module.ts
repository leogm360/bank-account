import { Module } from '@nestjs/common';
import { HealthzModule } from 'api/healthz/loaders/healthz.module';

@Module({
  imports: [HealthzModule],
})
export class AppModule {}
