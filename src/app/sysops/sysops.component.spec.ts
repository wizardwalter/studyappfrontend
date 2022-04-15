import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysopsComponent } from './sysops.component';

describe('SysopsComponent', () => {
  let component: SysopsComponent;
  let fixture: ComponentFixture<SysopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
