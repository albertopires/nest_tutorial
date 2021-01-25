import { CustomerService } from './customer.service';

import { Body, Controller, Get, HttpCode, Param, Post, Req } from '@nestjs/common';
import { CustomerDto } from './customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Get(':id')
    getHello(@Param('id') id: string): string {
        console.log(`This action returns a #${id} customer`);
        return this.customerService.getHelloCustomer();
    }

    @Post()
    runPost(@Body() customerDto: CustomerDto): string {
        console.log('customer.name: '+customerDto.name);
        console.log('customer.Age : '+customerDto.age);
        console.log('customer.Type: '+customerDto.type);
        return 'null';
    }
}
