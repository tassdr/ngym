import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsFormComponent } from './sports-form.component';

describe('SportsFormComponent', () => {
  let component: SportsFormComponent;
  let fixture: ComponentFixture<SportsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
