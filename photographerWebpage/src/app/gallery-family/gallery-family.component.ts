import { Component, OnInit } from '@angular/core';
import { myGalleryFamily } from '../galleryContent/galleryContent';

@Component({
  selector: 'app-gallery-family',
  templateUrl: './gallery-family.component.html',
  styleUrls: ['./gallery-family.component.css']
})
export class GalleryFamilyComponent implements OnInit {
family:Array<any> = myGalleryFamily
  constructor() { }

  ngOnInit(): void {
  }

}
