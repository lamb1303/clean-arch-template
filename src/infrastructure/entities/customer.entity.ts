import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer_name: string;

  @Column()
  account_stage: string;

  @Column()
  deal_stage: string;

  @Column()
  mrr: number;

  @Column()
  arr: number;

  @Column()
  discount: number;

  @Column()
  natural_margin: number;

  @Column()
  gross_margin: number;

  @Column()
  deal_owner: string;

  @Column()
  primary_assigned: string;

  @Column()
  created_date: string;

  @Column()
  last_modified_by: string;
}
