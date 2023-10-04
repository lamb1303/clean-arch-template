import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from 'src/infrastructure/entities/customer.entity';
import { SeedService } from './seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}
