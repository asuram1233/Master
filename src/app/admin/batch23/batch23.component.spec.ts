import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Batch23Component } from './batch23.component';

describe('Batch23Component', () => {
  let component: Batch23Component;
  let fixture: ComponentFixture<Batch23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Batch23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Batch23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
