import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAddUserFormComponent } from './reactive-add-user-form.component';

describe('ReactiveAddUserFormComponent', () => {
  let component: ReactiveAddUserFormComponent;
  let fixture: ComponentFixture<ReactiveAddUserFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveAddUserFormComponent]
    });
    fixture = TestBed.createComponent(ReactiveAddUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
