import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private primas: PrismaService) {}

  async getAllTask(): Promise<Task[]> {
    return this.primas.task.findMany();
  }
  async getTaskById(id: number): Promise<Task> {
    return this.primas.task.findUnique({
      where: {
        id,
      },
    });
  }
  async createTask(data: Task): Promise<Task> {
    return this.primas.task.create({
      data,
    });
  }
  async updateTask(id: number, data: Task): Promise<Task> {
    return this.primas.task.update({
      where: {
        id,
      },
      data,
    });
  }
  async deleteTask(id: number): Promise<Task> {
    return this.primas.task.delete({
      where: {
        id,
      },
    });
  }
}
