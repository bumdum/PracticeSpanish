import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExpandtoPageComponent } from './button-expandto-page.component';

describe('ButtonExpandtoPageComponent', () => {
  let component: ButtonExpandtoPageComponent;
  let fixture: ComponentFixture<ButtonExpandtoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonExpandtoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonExpandtoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
