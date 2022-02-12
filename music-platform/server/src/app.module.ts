import { FileService } from './file/file.service';
import { TrackModule } from './track/track.module';
import { Module } from "@nestjs/common";
import {MongooseModule} from '@nestjs/mongoose'
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path'

@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    TrackModule,
    FileService
  ]
})
export class AppModule{

}