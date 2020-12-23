import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTemoignageComponent } from './list-temoignage.component';

describe('ListTemoignageComponent', () => {
  let component: ListTemoignageComponent;
  let fixture: ComponentFixture<ListTemoignageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTemoignageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTemoignageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
