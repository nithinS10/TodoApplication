import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { Todo } from '../data/todo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;
  todayDate: string;
  maxDate: string;

  constructor(private todoservice: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const today = new Date();
    const nextMonth = new Date();
    nextMonth.setMonth(today.getMonth() + 1);

    // Format the dates to 'yyyy-MM-dd'
    this.todayDate = this.formatDate(today);
    this.maxDate = this.formatDate(nextMonth);

    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id != -1) {
      this.todoservice.retrieveTodo('Nithin', this.id).subscribe(
        data => this.todo = data
      )
    }
  }

  savetodo() {
    if (this.id === -1) { 
      //create todo
      this.todoservice.createTodo("Nithin", this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos']);
        }
      )
    }
    else {
      this.todoservice.updateTodo("Nithin", this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos']);
        }
      )
    }
  }
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
