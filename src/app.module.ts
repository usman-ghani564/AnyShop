import { Module } from '@nestjs/common';
import {ProductsModule} from './product/products.module';
import {DatabaseConfigModule} from './core/config/database/config.module';
import {DatabaseModule} from './core/database/database.module';
import {CustomerModule} from './customer/customer.module';

@Module({
  imports: [
    ProductsModule,
    CustomerModule,
    DatabaseModule,
    DatabaseConfigModule,
  ],
})
export class AppModule {}
