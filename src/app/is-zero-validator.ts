import {ValidatorFn, ValidationErrors, AbstractControl} from '@angular/forms';


export const isZeroValidator : ValidatorFn = (control: AbstractControl<number>) => {
    return (control.value == 0) 
    ? {isZero: {value: control.value}}
    : null;
}