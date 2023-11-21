import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarlocalComponent } from './editarlocal.component';

describe('EditarlocalComponent', () => {
  let component: EditarlocalComponent;
  let fixture: ComponentFixture<EditarlocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarlocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarlocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
