import { Injectable } from '@nestjs/common';
import { Task } from '../../../task.entity';

@Injectable()
export class TaskRepositoryImpl implements TaskRepositoryImpl {
    async update(updateTask: Task): Promise<Task> {
        const index = this.tasks.findIndex(t => t.id == updateTask.id);
        this.tasks[index] = updateTask;
        return updateTask;
    }
    async delete(id: string): Promise<boolean> {
        const index = this.tasks.findIndex(t => t.id == id);
        if (index === -1) return false;
        this.tasks.splice(index, 1);
        return true;
    }
    private tasks: Task[] = [];

    async create(task: Task): Promise<Task> {
        this.tasks.push(task);
        return (task);
    }

    async findAll(): Promise<Task[]> {
        return this.tasks;
         
    }
    async findById(id: string): Promise<Task | null> {
        return this.tasks.find(task => task.id === id) || null;
         
    }

}

// nmp i --save class-validator class-transformer