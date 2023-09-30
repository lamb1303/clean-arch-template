import { Module } from '@nestjs/common';
import { UsecasesProxyModule } from 'src/infrastructure/usecases-proxy/usecases-proxy.module';

import { UserController } from './user/user.controller';

@Module({
  imports: [UsecasesProxyModule.register()],
  controllers: [UserController],
})
export class ControllersModule {}
