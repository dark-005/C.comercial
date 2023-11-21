import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearlocalComponent } from './crearlocal.component';

describe('CrearlocalComponent', () => {
  let component: CrearlocalComponent;
  let fixture: ComponentFixture<CrearlocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearlocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearlocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
