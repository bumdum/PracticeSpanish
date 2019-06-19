import { DragDropModule } from '@angular/cdk/drag-drop';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageMatchComponent } from './text-image-match.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('TextImageMatchComponent', () => {
  let component: TextImageMatchComponent;
  let fixture: ComponentFixture<TextImageMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DragDropModule, HttpClientTestingModule, RouterTestingModule ],
      declarations: [ TextImageMatchComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
