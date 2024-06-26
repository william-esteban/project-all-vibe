import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ConnectionModule } from './libs/persistence/connection.module';
import { AuthModule } from './libs/auth/auth.module';
import dbConfig from './libs/persistence/db.config';
import { AuthController } from './libs/auth/controllers/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [dbConfig],
      isGlobal: true,
    }),
    ConnectionModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
