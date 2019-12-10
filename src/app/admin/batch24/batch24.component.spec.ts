import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Batch24Component } from './batch24.component';

describe('Batch24Component', () => {
  let component: Batch24Component;
  let fixture: ComponentFixture<Batch24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Batch24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Batch24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
