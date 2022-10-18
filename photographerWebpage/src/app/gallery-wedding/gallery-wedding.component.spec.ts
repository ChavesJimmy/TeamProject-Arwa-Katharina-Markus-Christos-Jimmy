import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryWeddingComponent } from './gallery-wedding.component';

describe('GalleryWeddingComponent', () => {
  let component: GalleryWeddingComponent;
  let fixture: ComponentFixture<GalleryWeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryWeddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
