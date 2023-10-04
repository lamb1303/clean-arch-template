import { Controller, Get } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { SeedService } from 'src/infrastructure/services/seed/seed.service';
import { CustomerPresenter } from './customer.presenter';

@Controller('seed')
@ApiTags('seed:customer')
@ApiExtraModels(CustomerPresenter)
export class SeedController {
  constructor(private readonly seedService: SeedService) {}
  @Get('customer')
  async getUser(): Promise<string> {
    return await this.seedService.executeSeed();
  }
}
