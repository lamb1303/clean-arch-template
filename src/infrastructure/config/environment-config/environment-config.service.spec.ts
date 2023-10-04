import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentConfigModule } from './environment-config.module';
import { EnvironmentConfigService } from './environment-config.service';

describe('EnvironmentConfigService', () => {
  let service: EnvironmentConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvironmentConfigService],
      imports: [EnvironmentConfigModule],
    }).compile();

    service = module.get<EnvironmentConfigService>(EnvironmentConfigService);
  });

  it('should return DB_PORT', () => {
    const dbPort = service.getDatabasePort();
    expect(dbPort).toEqual(3906);
  });

  it('should return DB_USERNAME', () => {
    const dbUsername = service.getDatabaseUser();
    expect(dbUsername).toEqual('root');
  });

  it('should return DB_PASSWORD', () => {
    const dbPassword = service.getDatabasePassword();
    expect(dbPassword).toEqual('MySecr3tPassWord@123');
  });
});
