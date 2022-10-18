import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryModelComponent } from './gallery-model.component';

describe('GalleryModelComponent', () => {
  let component: GalleryModelComponent;
  let fixture: ComponentFixture<GalleryModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
