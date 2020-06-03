import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeconnComponent } from './deconn.component';

describe('DeconnComponent', () => {
  let component: DeconnComponent;
  let fixture: ComponentFixture<DeconnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeconnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeconnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
