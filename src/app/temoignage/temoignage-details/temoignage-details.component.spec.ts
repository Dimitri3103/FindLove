import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemoignageDetailsComponent } from './temoignage-details.component';

describe('TemoignageDetailsComponent', () => {
  let component: TemoignageDetailsComponent;
  let fixture: ComponentFixture<TemoignageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemoignageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemoignageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
