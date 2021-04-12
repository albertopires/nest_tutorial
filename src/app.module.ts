import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerModule } from './customer/customer.module';
import { CustomerService } from './customer/customer.service';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CustomerModule, UsuarioModule],
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