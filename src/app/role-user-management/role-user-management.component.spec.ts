import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleUserManagementComponent } from './role-user-management.component';

describe('RoleUserManagementComponent', () => {
  let component: RoleUserManagementComponent;
  let fixture: ComponentFixture<RoleUserManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleUserManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoleUserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
