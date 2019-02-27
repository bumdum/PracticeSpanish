import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageMatchComponent } from './text-image-match.component';

describe('TextImageMatchComponent', () => {
  let component: TextImageMatchComponent;
  let fixture: ComponentFixture<TextImageMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextImageMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextImageMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
