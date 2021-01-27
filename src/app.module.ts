import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';

@Module({
  imports: [
    TypeOrmModule.forRoot()],
  controllers: [AppController, CustomerController],
  providers: [AppService, CustomerService],
})
export class AppModule {}
/*
      type: 'postgres',
      host: '127.0.0.1',
      port: 5431,
      username: 'alberto',
      password: 'Teste123.',
      database: 'claro',
      entities: [],
      synchronize: true,
      */