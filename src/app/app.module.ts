import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToDoComponent } from '../app/todo-list/todo.component';

import { UpperCapitalPipe } from '../app/todo-list/upper-capital.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    UpperCapitalPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
