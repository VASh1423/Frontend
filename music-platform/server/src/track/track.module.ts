import { FileService } from './../file/file.service';
import { Track, TrackSchema } from './schemas/track.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { Module } from "@nestjs/common";
import { Comment, CommentSchema } from './schemas/comment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),
    MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}]),
  ],
  controllers: [TrackController],
  providers: [TrackService, FileService]
})
export class TrackModule{}