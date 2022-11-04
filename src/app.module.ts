import { Module } from '@nestjs/common';
import {ProductsModule} from './product/products.module';
import {DatabaseConfigModule} from './core/config/database/config.module';
import {DatabaseModule} from './core/database/database.module';
import {CustomerModule} from './customer/customer.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import {PassportModule} from '@nestjs/passport';
import {LocalStrategy} from './core/auth/local.strategy';
import {AuthModule} from './core/auth/auth.module';

@Module({
  imports: [
    ProductsModule,
    CustomerModule,
    DatabaseModule,
    DatabaseConfigModule,
    UsersModule,
    PassportModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [LocalStrategy]
})
export class AppModule {}
