import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCats(): string {
    return 'Hello Cats!';
  }

  getRoofCats(): string {
    return 'Hello Cats on the Roof!';
  }
}
