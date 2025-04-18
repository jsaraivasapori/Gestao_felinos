import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFelinosComponent } from './edit-felinos.component';

describe('EditFelinosComponent', () => {
  let component: EditFelinosComponent;
  let fixture: ComponentFixture<EditFelinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFelinosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFelinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
