import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelinosFormComponent } from './felinos-form.component';

describe('FelinosFormComponent', () => {
  let component: FelinosFormComponent;
  let fixture: ComponentFixture<FelinosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FelinosFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FelinosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
