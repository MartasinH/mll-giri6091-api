import { Module } from "@nestjs/common";
import { TasksController } from "../datos/task.controller";
import { CreateTaskUseCase } from "@//tasks/application/create-task.use-case";
import { ITaskRepositoryToken } from "../../../task.repository.interface";
import { TaskRepositoryImpl } from "./task.repository.impt";
import { GetTaskByIdUseCase } from "@//tasks/application/get-task-by-id.use-case";
import { UpdateTaskUseCase } from "@//tasks/application/update-task-use-case";
import { DeleteTaskUseCase } from "@//tasks/application/delete-task.use-case";

@Module({
    controllers: [TasksController ],
    providers:[
        CreateTaskUseCase,
        GetTaskByIdUseCase,
        UpdateTaskUseCase,
        DeleteTaskUseCase,

        {
            provide: ITaskRepositoryToken,
            useClass: TaskRepositoryImpl //Cambiar si la DB cambia
        
        }
    ],
    exports: [CreateTaskUseCase]
})
export class Taskmodule{

}