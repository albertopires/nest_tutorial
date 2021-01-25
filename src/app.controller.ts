import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cats')
  getCats(): string {
    return this.appService.getCats();
  }

  @Get('roof/cats')
  getRoofCats(): string {
    return this.appService.getRoofCats();
  }
}
