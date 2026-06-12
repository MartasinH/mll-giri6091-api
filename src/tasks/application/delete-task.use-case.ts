import { Inject, NotFoundException } from "@nestjs/common";
import {  ITaskRepositoryToken } from "../domain/task.repository.interface";
import type { ITaskRepository } from "../domain/task.repository.interface";


export class DeleteTaskUseCase {

    constructor(
        @Inject (ITaskRepositoryToken)
        private readonly taskRepository: ITaskRepository
        ){ }

        async execute(id: string): Promise <void>{
            const task = await this.taskRepository.delete(id);
            if (!task)
                throw new NotFoundException ('La tarea ${id} no existe');
    
    }
}