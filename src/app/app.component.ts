import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MainTodosComponent } from './MyComponent/main-todos/main-todos.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, FormsModule, MainTodosComponent]
})
export class AppComponent implements OnInit {
  
  constructor(){}

  ngOnInit(): void {

  }

  
}
