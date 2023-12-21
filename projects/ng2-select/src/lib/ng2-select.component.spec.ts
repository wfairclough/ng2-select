import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2SelectComponent } from './ng2-select.component';

describe('Ng2SelectComponent', () => {
  let component: Ng2SelectComponent;
  let fixture: ComponentFixture<Ng2SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2SelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
