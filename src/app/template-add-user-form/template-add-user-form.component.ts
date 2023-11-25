import { Component } from '@angular/core';

@Component({
  selector: 'app-template-add-user-form',
  templateUrl: './template-add-user-form.component.html',
  styleUrls: ['./template-add-user-form.component.css']
})
export class TemplateAddUserFormComponent {

  onSubmitModelBased(form : any) {
    console.log("reactive form submitted");
    console.log(form);
  }

  ngOnInit(): void {
  }


}
