import { Component, OnInit } from '@angular/core';
import { Todo } from '../data/todo';
import { TodoDataService } from '../services/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;
  // todos = [
  //   new Todo(1,'Sample Item todo 1',false,new Date()),
  //   new Todo(1,'Become an expert at java',true,new Date()),
  //   new Todo(1,'Visit USA',false,new Date())
  // ];

  // todo ={
  //   id: 1,
  //   description: 'Sample Item todo 1'
  // }

  constructor(private tododataservice:TodoDataService,
    private router:Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.tododataservice.retrieveAlltodos('Nithin').subscribe(
      response=>{
        console.log(response);
        this.todos=response;
      }
    );
  }


  deletetodo(id){
    console.log(`delete todo ${id}`);
    this.tododataservice.deleteTodo("Nithin", id).subscribe(
      response=>{
        console.log(response)
        this.message=`Delete of Todo ${id} successfull!!`
        this.refreshTodos();
      }
    )
  }


  updatetodo(id){
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }
}
