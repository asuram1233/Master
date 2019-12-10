import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Batch21Component } from './batch21.component';

describe('Batch21Component', () => {
  let component: Batch21Component;
  let fixture: ComponentFixture<Batch21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Batch21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Batch21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
