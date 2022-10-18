import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryBirthdayComponent } from './gallery-birthday.component';

describe('GalleryBirthdayComponent', () => {
  let component: GalleryBirthdayComponent;
  let fixture: ComponentFixture<GalleryBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryBirthdayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
