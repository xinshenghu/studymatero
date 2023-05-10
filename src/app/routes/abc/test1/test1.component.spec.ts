import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcTest1Component } from './test1.component';

describe('AbcTest1Component', () => {
  let component: AbcTest1Component;
  let fixture: ComponentFixture<AbcTest1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcTest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
