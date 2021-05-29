import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcCreatComponent } from './gc-creat.component';

describe('GcCreatComponent', () => {
  let component: GcCreatComponent;
  let fixture: ComponentFixture<GcCreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcCreatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
