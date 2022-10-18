import { Component, OnInit } from '@angular/core';
import { myGalleryPortrait } from '../galleryContent/galleryContent';

@Component({
  selector: 'app-gallery-portrait',
  templateUrl: './gallery-portrait.component.html',
  styleUrls: ['./gallery-portrait.component.css']
})
export class GalleryPortraitComponent implements OnInit {
portrait:Array<any> =myGalleryPortrait
  constructor() { }

  ngOnInit(): void {
  }

}
