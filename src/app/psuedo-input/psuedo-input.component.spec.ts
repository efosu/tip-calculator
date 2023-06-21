import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsuedoInputComponent } from './psuedo-input.component';

describe('PsuedoInputComponent', () => {
  let component: PsuedoInputComponent;
  let fixture: ComponentFixture<PsuedoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsuedoInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsuedoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
