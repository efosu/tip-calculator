import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TipCalculator {
    calculateTipPerson(rate: number, bill: number, people: number) {
        return (bill * rate) / people;
    }

    calculateTotalPerson(bill: number, rate: number, people: number) {
        const tip = bill * rate;
        return (bill + tip) / people;
    }
}