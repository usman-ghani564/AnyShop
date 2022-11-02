import { Module } from '@nestjs/common';
import {ProductsModule} from './product/products.module';
import {DatabaseConfigModule} from './core/config/database/config.module';
import {DatabaseModule} from './core/database/database.module';

@Module({
  imports: [
    ProductsModule,
    DatabaseModule,
    DatabaseConfigModule,
  ],
})
export class AppModule {}
