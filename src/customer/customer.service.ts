import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
    getHelloCustomer(): string {
        return 'Hello Customer!';
    }
}
