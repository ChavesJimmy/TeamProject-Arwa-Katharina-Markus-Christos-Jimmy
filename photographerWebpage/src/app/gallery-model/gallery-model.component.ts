import { Component, OnInit } from '@angular/core';
import { myGalleryModel } from '../galleryContent/galleryContent';

@Component({
  selector: 'app-gallery-model',
  templateUrl: './gallery-model.component.html',
  styleUrls: ['./gallery-model.component.css']
})
export class GalleryModelComponent implements OnInit {
model:Array<any>=myGalleryModel
  constructor() { }

  ngOnInit(): void {
  }

}
