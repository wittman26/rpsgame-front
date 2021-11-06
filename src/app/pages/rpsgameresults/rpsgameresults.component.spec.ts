import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsgameresultsComponent } from './rpsgameresults.component';

describe('RpsgameresultsComponent', () => {
  let component: RpsgameresultsComponent;
  let fixture: ComponentFixture<RpsgameresultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpsgameresultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpsgameresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
