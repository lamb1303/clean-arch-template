import { ApiProperty } from '@nestjs/swagger';
import { Customer } from 'src/infrastructure/entities/customer.entity';

export class CustomerPresenter {
  @ApiProperty()
  id: number;
  @ApiProperty()
  customer_name: string;
  @ApiProperty()
  account_stage: string;
  @ApiProperty()
  deal_stage: string;
  @ApiProperty()
  mrr: number;
  @ApiProperty()
  arr: number;
  @ApiProperty()
  discount: number;
  @ApiProperty()
  natural_margin: number;
  @ApiProperty()
  gross_margin: number;
  @ApiProperty()
  deal_owner: string;
  @ApiProperty()
  primary_assigned: string;
  @ApiProperty()
  created_date: string;
  @ApiProperty()
  last_modified_by: string;

  constructor(customer: Customer) {
    this.id = customer.id;
    this.customer_name = customer.customer_name;
    this.account_stage = customer.account_stage;
    this.deal_stage = customer.deal_stage;
    this.mrr = customer.mrr;
    this.arr = customer.arr;
    this.discount = customer.discount;
    this.natural_margin = customer.natural_margin;
    this.gross_margin = customer.gross_margin;
    this.deal_owner = customer.deal_owner;
    this.primary_assigned = customer.primary_assigned;
    this.created_date = customer.created_date;
    this.last_modified_by = customer.last_modified_by;
  }
}
