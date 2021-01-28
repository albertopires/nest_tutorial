import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { Table_a } from './table_a.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Table_a])],
  providers: [CustomerService],
  controllers: [CustomerController],
})
export class CustomerModule {}