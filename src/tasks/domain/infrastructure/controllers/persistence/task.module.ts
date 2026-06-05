import { Module } from "@nestjs/common";
import { TasksController } from "../datos/task.controller";
import { CreateTaskUseCase } from "@//tasks/application/create-task.use-case";
import { ITaskRepositoryToken } from "../../../task.repository.interface";
import { TaskRepositoryImpl } from "./task.repository.impt";

@Module({
    controllers: [TasksController ],
    providers:[
        CreateTaskUseCase,
        {
            provide: ITaskRepositoryToken,
            useClass: TaskRepositoryImpl //Cambiar si la DB cambia
        
        }
    ],
    exports: [CreateTaskUseCase]
})
export class Taskmodule{

}