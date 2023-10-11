import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerInformation } from 'src/domain/model/customer';
import { SeedRepository } from 'src/domain/repositories/seedRepository.interface';
import { Customer } from 'src/infrastructure/entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeedService implements SeedRepository {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async executeSeed(): Promise<string> {
    this.customerRepository.clear();
    const fakeDataArray: CustomerInformation[] = [];
    for (let i = 0; i < 15; i++) {
      fakeDataArray.push(this.generateFakeCustomerData());
    }
    this.customerRepository.insert(fakeDataArray);
    return 'Seed Customer executed';
  }
  private generateFakeCustomerData(): CustomerInformation {
    return {
      customer_name: 'Customer ' + Math.floor(Math.random() * 100),
      account_stage: 'Stage ' + Math.floor(Math.random() * 50),
      deal_stage: 'Deal ' + Math.floor(Math.random() * 10),
      mrr: Math.random() * 100,
      arr: Math.random() * 100,
      discount: Math.random() * 100,
      natural_margin: Math.random() * 100,
      gross_margin: Math.random() * 100,
      deal_owner: 'Owner ' + Math.floor(Math.random() * 30),
      primary_assigned: 'Assigned ' + Math.floor(Math.random() * 30),
      created_date: new Date().toISOString(),
      last_modified_by: 'User ' + Math.floor(Math.random() * 50),
    };
  }
}
