import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFamilyComponent } from './gallery-family.component';

describe('GalleryFamilyComponent', () => {
  let component: GalleryFamilyComponent;
  let fixture: ComponentFixture<GalleryFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryFamilyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
