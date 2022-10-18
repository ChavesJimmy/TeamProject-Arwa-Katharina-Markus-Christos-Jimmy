import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPortraitComponent } from './gallery-portrait.component';

describe('GalleryPortraitComponent', () => {
  let component: GalleryPortraitComponent;
  let fixture: ComponentFixture<GalleryPortraitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryPortraitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryPortraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
