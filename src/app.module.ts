import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Taskmodule } from './tasks/domain/infrastructure/controllers/persistence/task.module';

@Module({
  imports: [Taskmodule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
