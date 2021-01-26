import { CustomerService } from './customer.service';

import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { CustomerDto } from './customer.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { writeFileSync } from 'fs';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) { }

    @Get('id/:id')
    getHello(@Param('id') id: string): string {
        console.log(`This action returns a #${id} customer`);
        return this.customerService.getHelloCustomer();
    }

    @Get('error/:op')
    generateError(@Param('op', ParseIntPipe) op: number): string {
        if (op == 0) {
            console.log("no error");
        }
        if (op == 1) {
            console.log("error");
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
        return "ok";
    }

    @Post('payload')
    runPost(@Body() customerDto: CustomerDto): string {
        console.log('customer.name: ' + customerDto.name);
        console.log('customer.Age : ' + customerDto.age);
        console.log('customer.Type: ' + customerDto.type);
        return 'null';
    }

    @Post('upload')
    @UseInterceptors(FilesInterceptor('file'))
    uploadFile(@UploadedFiles() file) {
        file.forEach(function (value) {
            console.log(value);
            console.log('===================');
            writeFileSync("/tmp/" + value.originalname + '_tst', value.buffer);
        })
        //console.log(file);
    }
}
