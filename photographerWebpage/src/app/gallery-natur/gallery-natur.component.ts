import { Component, OnInit } from '@angular/core';
import { myGalleryNatur } from '../galleryContent/galleryContent';

@Component({
  selector: 'app-gallery-natur',
  templateUrl: './gallery-natur.component.html',
  styleUrls: ['./gallery-natur.component.css']
})
export class GalleryNaturComponent implements OnInit {
 natur:Array<any> = myGalleryNatur
  constructor() { }
  ngOnInit(): void {
  }

}
