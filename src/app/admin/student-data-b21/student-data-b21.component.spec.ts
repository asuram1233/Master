import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDataB21Component } from './student-data-b21.component';

describe('StudentDataB21Component', () => {
  let component: StudentDataB21Component;
  let fixture: ComponentFixture<StudentDataB21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDataB21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDataB21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
