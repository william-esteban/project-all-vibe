import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './libs/persistence/db.config';
import { ConnectionModule } from './libs/persistence/connection.module';
import { UserModule } from './modules/user/user.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [dbConfig],
      isGlobal: true,
    }),
    ConnectionModule,
    UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
