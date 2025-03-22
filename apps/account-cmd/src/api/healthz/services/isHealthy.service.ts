import { Injectable } from '@nestjs/common';
import { linebreak } from 'common/functions/linebreak';

@Injectable()
export class IsHealthyService {
  async isHealthy(): Promise<string> {
    return linebreak('Ok!');
  }
}
