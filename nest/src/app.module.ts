import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './modules/upload/upload.module';
import { DownloadModule } from './modules/download/download.module';

@Module({
  imports: [UploadModule, DownloadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
