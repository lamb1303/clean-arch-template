import { DynamicModule, Module } from '@nestjs/common';
import { ExceptionsModule } from '../exceptions/exceptions.module';
import { LoggerModule } from '../logger/logger.module';
import { LoggerService } from '../logger/logger.service';
import { RepositoriesModule } from '../repositories/repositories.module';
import { DatabaseUserRepository } from '../repositories/user.repository';
import { EnvironmentConfigModule } from '../config/environment-config/environment-config.module';
import { UseCaseProxy } from './usecases-proxy';
import { GetUserUseCases } from 'src/usecases/getUser.usecases';

@Module({
  imports: [
    LoggerModule,
    EnvironmentConfigModule,
    RepositoriesModule,
    ExceptionsModule,
  ],
})
export class UsecasesProxyModule {
  static GET_USER_USECASES_PROXY = 'GetUserUseCasesProxy';
  static register(): DynamicModule {
    return {
      module: UsecasesProxyModule,
      providers: [
        {
          inject: [LoggerService, DatabaseUserRepository],
          provide: UsecasesProxyModule.GET_USER_USECASES_PROXY,
          useFactory: (
            logger: LoggerService,
            userRepository: DatabaseUserRepository,
          ) => new UseCaseProxy(new GetUserUseCases(logger, userRepository)),
        },
      ],
      exports: [UsecasesProxyModule.GET_USER_USECASES_PROXY],
    };
  }
}
