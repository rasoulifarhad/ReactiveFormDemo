import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveAddUserFormComponent } from './reactive-add-user-form/reactive-add-user-form.component';
import { TemplateAddUserFormComponent } from './template-add-user-form/template-add-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveAddUserFormComponent,
    TemplateAddUserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
