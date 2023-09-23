import { Controller, Get } from '@nestjs/common';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get('all')
  findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }
}
