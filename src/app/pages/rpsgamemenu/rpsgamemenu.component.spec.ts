import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpsgamemenuComponent } from './rpsgamemenu.component';

describe('RpsgamemenuComponent', () => {
  let component: RpsgamemenuComponent;
  let fixture: ComponentFixture<RpsgamemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpsgamemenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpsgamemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
