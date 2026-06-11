import { Module } from '@nestjs/common';
import { Taskmodule } from './tasks/domain/infrastructure/controllers/persistence/task.module';

@Module({
  imports: [Taskmodule],

})
export class AppModule {}
