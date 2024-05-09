import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import dbConnect from './db.config'

@Global()
@Module({
    imports: [
        MongooseModule.forRootAsync({
          useFactory: (configService: ConfigType<typeof dbConnect>) => {
            const { db , env} = configService;     
            const uriDb =
              env === process.env.ENVIROMENT
                ? ` ${db.connection}/${db.name}`
                : `mongodb+srv://${db.user}:${db.password}@cluster0platzinestjs.9xczul6.mongodb.net/${db.name}?retryWrites=true&w=majority`
            return {
              uri: uriDb,
            };
          },
          inject: [dbConnect.KEY],
        }),
      ],
})
export class ConnectionModule {}
