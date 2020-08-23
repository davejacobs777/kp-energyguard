import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusGroupComponent } from './focus-group.component';

describe('FocusGroupComponent', () => {
  let component: FocusGroupComponent;
  let fixture: ComponentFixture<FocusGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
