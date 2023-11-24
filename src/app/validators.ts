import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export function matchingPasswordsValidator() : ValidatorFn {

  return (addForm : AbstractControl) : ValidationErrors | null => {

    const password : string = addForm.get('password')?.value;
    const password2 : string = addForm.get('password2')?.value;
    if(password && password2) {
      return password !== password2 ? {matchingPasswords : true} : null;
    }
    return null;
  };
}
