import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodoDto } from "./dtos/create-todo.dto";


@Controller('todos')
export class TodosController {

    constructor( private readonly todosService: TodosService) {}

  @Post()
    cretae(@Body() dto:CreateTodoDto) {
        return this.todosService.cretae(dto);
    }

    @Get()
    findAll() {
        return this.todosService.findAll();
    }

    @Put(':id')
       update(@Param ('id') id :number ,@Body() dto: CreateTodoDto) {
              return this.todosService.update(id ,dto);
        }

}