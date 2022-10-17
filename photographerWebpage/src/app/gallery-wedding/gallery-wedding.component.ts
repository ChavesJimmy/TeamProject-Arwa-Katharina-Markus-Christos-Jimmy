import { Component, OnInit } from '@angular/core';
import { myGalleryWedding } from '../galleryContent/galleryContent';

@Component({
  selector: 'app-gallery-wedding',
  templateUrl: './gallery-wedding.component.html',
  styleUrls: ['./gallery-wedding.component.css']
})
export class GalleryWeddingComponent implements OnInit {
wedding:Array<any>=myGalleryWedding
  constructor() { }

  ngOnInit(): void {
  }

}
