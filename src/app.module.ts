import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [PersonModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
