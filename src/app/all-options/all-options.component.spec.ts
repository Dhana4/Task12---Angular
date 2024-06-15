import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOptionsComponent } from './all-options.component';

describe('AllOptionsComponent', () => {
  let component: AllOptionsComponent;
  let fixture: ComponentFixture<AllOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
