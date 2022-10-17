import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPartyComponent } from './gallery-party.component';

describe('GalleryPartyComponent', () => {
  let component: GalleryPartyComponent;
  let fixture: ComponentFixture<GalleryPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryPartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
