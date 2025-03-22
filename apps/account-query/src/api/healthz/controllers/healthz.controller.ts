import { Controller, Get } from '@nestjs/common';
import { IsHealthyService } from '../services/isHealthy.service';

@Controller('healthz')
export class HealthzController {
  constructor(private readonly isHealthyService: IsHealthyService) {}

  @Get()
  async isHealthy(): Promise<string> {
    return this.isHealthyService.isHealthy();
  }
}
