import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class ToDoComponent {
  @Input() stuff: string;
  @Output() sayHello: EventEmitter<string> = new EventEmitter<string>();
  stuffList: string[] = [];
  forma: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forma = this.fb.group({
      stuffName: [null, null, null]
    });
  }

  addStuff() {
    this.stuffList.push(this.stuffName);
    this.forma.reset();
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
}
