import { Injectable } from '@nestjs/common';
// import { Table_a } from './table_a.entity';

@Injectable()
export class CustomerService {
    constructor(
        // @InjectRepository(Table_a)
        // private usersRepository: Repository<Table_a>,
    ) { }

    getHelloCustomer(): string {
        return 'Hello Customer!';
    }
}
