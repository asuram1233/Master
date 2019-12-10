import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Batch22Component } from './batch22.component';

describe('Batch22Component', () => {
  let component: Batch22Component;
  let fixture: ComponentFixture<Batch22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Batch22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Batch22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
