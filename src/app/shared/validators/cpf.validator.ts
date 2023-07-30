import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

import {validateCpf} from '../utils/validate-cpf';

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const valid = validateCpf(value);

    return !valid ? {invalidCpf: true} : null;
  };
}
