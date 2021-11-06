import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsgameenteridComponent } from './rpsgameenterid.component';

describe('RpsgameenteridComponent', () => {
  let component: RpsgameenteridComponent;
  let fixture: ComponentFixture<RpsgameenteridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpsgameenteridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpsgameenteridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
