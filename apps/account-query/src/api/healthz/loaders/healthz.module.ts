import { Module } from '@nestjs/common';
import { HealthzController } from '../controllers/healthz.controller';
import { IsHealthyService } from '../services/isHealthy.service';

@Module({
  controllers: [HealthzController],
  providers: [IsHealthyService],
})
export class HealthzModule {}
