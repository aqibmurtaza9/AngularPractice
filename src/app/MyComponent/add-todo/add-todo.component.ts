import { Component, NgModule, Output,EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})


export class AddTodoComponent {
  
  @Output() todo  = new EventEmitter<any>();
  
  onSubmit(data : NgForm){  
    console.log(data.value.title, data.value.description);
    console.log(data.value)
    this.todo.emit(data.value);
  }

}
