import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "./todo.entity";
import { Repository } from "typeorm";
import { CreateTodoDto } from "./dtos/create-todo.dto";


@Injectable()

export class TodosService {
  
    constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>) {}

    async cretae(dto:CreateTodoDto) {
        const todo = this.todoRepository.create(dto);

        return await this.todoRepository.save(todo);
    }

    async findAll() {
        return await this.todoRepository.find();
    }


   async  update(id: number, dto: CreateTodoDto) {
    const todo = await this.todoRepository.findOne({where: {id}});

    //check that record 
    Object.assign(todo, dto);
    
     return await this.todoRepository.save(todo);
    

    }



}
