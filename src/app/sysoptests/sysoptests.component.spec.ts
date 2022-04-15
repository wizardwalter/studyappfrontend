import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysoptestsComponent } from './sysoptests.component';

describe('SysoptestsComponent', () => {
  let component: SysoptestsComponent;
  let fixture: ComponentFixture<SysoptestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SysoptestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SysoptestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
