import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerlocalesComponent } from './verlocales.component';

describe('VerlocalesComponent', () => {
  let component: VerlocalesComponent;
  let fixture: ComponentFixture<VerlocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerlocalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerlocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
