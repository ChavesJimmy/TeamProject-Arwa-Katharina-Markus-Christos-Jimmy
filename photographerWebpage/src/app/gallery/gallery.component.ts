import { Component, OnInit } from '@angular/core';

import { mainImage } from '../galleryContent/galleryContent';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  mainImage:Array<any> = mainImage;

  
  constructor() { }

  ngOnInit(): void {
  }

}
