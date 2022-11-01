import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Product} from './product/product.entity';
import {ProductsModule} from './product/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 6666,
      username: 'sa',
      password: 'Hussnain20',
      database: 'shoply',
      entities: [Product],
      options: { encrypt: false },
    }),
    ProductsModule,
  ],
})
export class AppModule {}
