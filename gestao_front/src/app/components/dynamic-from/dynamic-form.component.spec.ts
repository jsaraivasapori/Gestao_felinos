import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFromComponent } from './dynamic-form.component';

describe('DynamicFromComponent', () => {
  let component: DynamicFromComponent;
  let fixture: ComponentFixture<DynamicFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFromComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
