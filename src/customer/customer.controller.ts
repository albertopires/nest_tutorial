import { CustomerService } from './customer.service';

import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req } from '@nestjs/common';
import { CustomerDto } from './customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Get('/id/:id')
    getHello(@Param('id') id: string): string {
        console.log(`This action returns a #${id} customer`);
        return this.customerService.getHelloCustomer();
    }

    @Get('/error/:op')
    generateError(@Param('op', ParseIntPipe) op: number) : string {
        if (op == 0) {
            console.log("no error");
        }
        if (op == 1) {
            console.log("error");
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
        return "ok";
    }

    @Post()
    runPost(@Body() customerDto: CustomerDto): string {
        console.log('customer.name: '+customerDto.name);
        console.log('customer.Age : '+customerDto.age);
        console.log('customer.Type: '+customerDto.type);
        return 'null';
    }
}
