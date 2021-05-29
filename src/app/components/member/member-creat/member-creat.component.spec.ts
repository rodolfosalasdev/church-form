import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCreatComponent } from './member-creat.component';

describe('MemberCreatComponent', () => {
  let component: MemberCreatComponent;
  let fixture: ComponentFixture<MemberCreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberCreatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
