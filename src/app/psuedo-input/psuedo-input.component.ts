import { Component, Input, Output, EventEmitter, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-psuedo-input',
  templateUrl: './psuedo-input.component.html',
  styleUrls: ['./psuedo-input.component.css']
})
export class PsuedoInputComponent implements OnInit {
  @Input() rate!: number;
  @Output() setInput = new EventEmitter<number>();
  id!: string;

  emitInput() {
    this.setInput.emit(this.rate);
  }

  ngOnInit(): void {
    this.id = "rate" + this.rate;
  }


}
