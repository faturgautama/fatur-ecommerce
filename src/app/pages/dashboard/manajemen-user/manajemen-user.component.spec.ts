import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManajemenUserComponent } from './manajemen-user.component';

describe('ManajemenUserComponent', () => {
  let component: ManajemenUserComponent;
  let fixture: ComponentFixture<ManajemenUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManajemenUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManajemenUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
