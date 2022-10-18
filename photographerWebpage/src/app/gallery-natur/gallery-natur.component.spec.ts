import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryNaturComponent } from './gallery-natur.component';

describe('GalleryNaturComponent', () => {
  let component: GalleryNaturComponent;
  let fixture: ComponentFixture<GalleryNaturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryNaturComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryNaturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
