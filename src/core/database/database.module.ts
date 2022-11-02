import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigModule } from '../config/database/config.module';
import { DatabaseConfigService } from '../config/database/config.service';

/**
 * Nestjs module that consumes TypeOrmModule and uses a provider to dynamically pass configuration from process.env.
 * This module should then be able to be imported and used in app.module.ts
 */
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [DatabaseConfigModule],
      useFactory: async (configService: DatabaseConfigService) => {
        return {
          ...configService.ormConfig,
          autoLoadEntities: true,
          encrypt: false,
          options: {
            trustServerCertificate: true,
          }
        };
      },
      inject: [DatabaseConfigService],
      
    }),
  ],
})
export class DatabaseModule {}