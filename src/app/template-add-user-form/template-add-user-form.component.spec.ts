import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAddUserFormComponent } from './template-add-user-form.component';

describe('TemplateAddUserFormComponent', () => {
  let component: TemplateAddUserFormComponent;
  let fixture: ComponentFixture<TemplateAddUserFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateAddUserFormComponent]
    });
    fixture = TestBed.createComponent(TemplateAddUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
