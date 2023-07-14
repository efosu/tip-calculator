import { Component, EventEmitter, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { TipCalculator } from './tip.sercive';
import { isZeroValidator } from './is-zero-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tip-calculator';
  tipAmount!: number;
  totalAmount!: number;
  rate!: number;
  

  form = new FormGroup({
    bill: new FormControl<number | undefined>(undefined),
    people: new FormControl<number | undefined>(undefined, isZeroValidator),
    customRate: new FormControl<number | undefined>(undefined)
  })

  get people() {
    return this.form.get('people');
  }

  get bill() {
    return this.form.get('bill');
  }

  get customRate() {
    return this.form.get('customRate');
  }

  recalculate() {
    this.tipAmount = this.tipCalculator.calculateTipPerson(this.rate, this.bill!.value!, this.people!.value!);
    this.totalAmount = this.tipCalculator.calculateTotalPerson(this.bill!.value!, this.rate, this.people!.value!)
    console.log('calculated')
  }

  updateRate(event: number) {
    // this.rate?.setValue(event);
    this.rate = event;
    this.recalculate();
  }

  
  reset() {
    this.form.reset({
      bill: 0,
      people: 0
    });
    this.recalculate();
  }

  constructor(private tipCalculator: TipCalculator) {
  }

  ngOnInit(): void {
    this.recalculate();
  }

}
