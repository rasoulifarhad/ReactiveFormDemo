import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matchingPasswordsValidator } from '../validators';

@Component({
  selector: 'app-reactive-add-user-form',
  templateUrl: './reactive-add-user-form.component.html',
  styleUrls: ['./reactive-add-user-form.component.css']
})
export class ReactiveAddUserFormComponent {

  // addForm2 = new FormGroup({
  //   "username" : new FormControl("", Validators.required),
  //   "email" : new FormControl("", Validators.required),
  //   "role" : new FormControl("", Validators.required),
  //   "password" : new FormControl("", Validators.required),
  //   "password2" : new FormControl("", Validators.required),
  // });

  addForm = this.fb.group({

    username : ['', {
      Validators : [
        Validators.required
      ],
      updateOn : 'blur'
    }],

    email : ['', {
      Validators : [
        Validators.required
      ],
      updateOn : 'blur'
    }],

    role : ['', {
      Validators : [
        Validators.required
      ],
      updateOn : 'blur'
    }],

    password : ['', {
      Validators : [
        Validators.required
      ],
      updateOn : 'blur'
    }],

    password2 : ['', {
      Validators : [
        Validators.required
      ],
      updateOn : 'blur'
    }],
  }, {
    validators : [matchingPasswordsValidator()]
});


constructor(private fb : FormBuilder) {

}

onSubmitModelBased() {
    console.log("reactive form submitted");
    console.log(this.addForm);
    this.addUser();
}

ngOnInit(): void {
}

get username() {
  return this.addForm.controls['username'];
}

get email() {
  return this.addForm.controls['email'];
}

get role() {
  return this.addForm.controls['role'];
}

get password() {
  return  this.addForm.controls['password'];
}

get password2() {
  return  this.addForm.controls['password2'];
}

addUser() {
  if(this.addForm.valid) {
    var addUser = {
      username : this.addForm.controls['username'].value,
      email : this.addForm.controls['email'].value,
      password : this.addForm.controls['password'].value,
      profile : {
        name : this.addForm.controls['username'].value,
        email : this.addForm.controls['email'].value,
        role : this.addForm.controls['role'].value,
      }
    }
    console.log(addUser);
    this.addForm.reset();
  }
}

reset() {
  this.addForm.reset();
}

fullUpdate() {
  this.addForm.setValue({username : 'farhad' , email : 'y@y', role : 'admin', password : 'test', password2 : 'test'});
}

partialUpdate() {
  this.addForm.patchValue({username : 'Partial'});
}

}
