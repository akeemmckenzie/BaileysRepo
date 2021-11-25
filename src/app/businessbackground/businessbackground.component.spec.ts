import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessbackgroundComponent } from './businessbackground.component';

describe('BusinessbackgroundComponent', () => {
  let component: BusinessbackgroundComponent;
  let fixture: ComponentFixture<BusinessbackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessbackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
