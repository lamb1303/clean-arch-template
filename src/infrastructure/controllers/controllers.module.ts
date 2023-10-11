import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from 'src/infrastructure/usecases-proxy/usecases-proxy.module';
import { SeedModule } from '../services/seed/seed.module';
import { SeedController } from './seed/seed.controller';

import { UserController } from './user/user.controller';

@Module({
  imports: [UsecasesProxyModule.register(), SeedModule],
  controllers: [UserController, SeedController],
})
export class ControllersModule {}
