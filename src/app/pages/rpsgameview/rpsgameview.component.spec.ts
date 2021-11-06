import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsgameviewComponent } from './rpsgameview.component';

describe('RpsgameviewComponent', () => {
  let component: RpsgameviewComponent;
  let fixture: ComponentFixture<RpsgameviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpsgameviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpsgameviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
