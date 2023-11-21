import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarpersonasComponent } from './editarpersonas.component';

describe('EditarpersonasComponent', () => {
  let component: EditarpersonasComponent;
  let fixture: ComponentFixture<EditarpersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarpersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarpersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
