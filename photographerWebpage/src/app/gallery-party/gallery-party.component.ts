import { Component, OnInit } from '@angular/core';
import { myGalleryParty } from '../galleryContent/galleryContent';

@Component({
  selector: 'app-gallery-party',
  templateUrl: './gallery-party.component.html',
  styleUrls: ['./gallery-party.component.css']
})
export class GalleryPartyComponent implements OnInit {
party:Array<any>=myGalleryParty
  constructor() { }

  ngOnInit(): void {
  }

}
