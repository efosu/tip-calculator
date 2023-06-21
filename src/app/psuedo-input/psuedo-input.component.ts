import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-psuedo-input',
  templateUrl: './psuedo-input.component.html',
  styleUrls: ['./psuedo-input.component.css']
})
export class PsuedoInputComponent {
  @Input() rate!: number;
  @Output() setInput = new EventEmitter<number>();


  emitInput() {
    this.setInput.emit(this.rate);
  }
}
