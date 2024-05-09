import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ConnectionModule } from './libs/persistence/connection.module';
import dbConfig from './libs/persistence/db.config';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [dbConfig],
      isGlobal: true,
    }),
    ConnectionModule,
    UserModule,
    

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
