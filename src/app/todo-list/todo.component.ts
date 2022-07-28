import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class ToDoComponent {
  @Output() sayHello: EventEmitter<string> = new EventEmitter<string>();
  stuffList: string[] = [];
  forma: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forma = this.fb.group({
      stuffName: [null, null, null]
    });
  }

  addStuff() {
    if (this.isFieldCompleted(this.stuffName)) {
      this.stuffList.push(this.stuffName);
      this.forma.reset();
    }
  }

  removeStuff(index: number) {
    this.stuffList.splice(index, 1);
  }

  onStuffClick() {
    this.sayHello.emit('Hello from to-do Component');
  }

  get stuffName() {
    return this.forma.get('stuffName').value;
  }

  isFieldCompleted(field: any) {
    return field && field.trim().length > 0;
  }
}
