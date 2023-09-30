import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentConfigService } from './environment-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './env/local.env',
      ignoreEnvFile:
        process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'test'
          ? false
          : true,
      isGlobal: true,
    }),
  ],
  providers: [EnvironmentConfigService],
  exports: [EnvironmentConfigService],
})
export class EnvironmentConfigModule {
  constructor(private readonly envConfig: EnvironmentConfigService) {
    // console.log('DATABASE_USER:', this.envConfig.getDatabaseUser());
    // console.log('DATABASE_PASSWORD:', this.envConfig.getDatabasePassword());
  }
}
