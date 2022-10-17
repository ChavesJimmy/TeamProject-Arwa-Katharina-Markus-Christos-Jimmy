import { Component, OnInit } from '@angular/core';
import { myGalleryBirthday } from '../galleryContent/galleryContent';

@Component({
  selector: 'app-gallery-birthday',
  templateUrl: './gallery-birthday.component.html',
  styleUrls: ['./gallery-birthday.component.css']
})
export class GalleryBirthdayComponent implements OnInit {
birthday : Array<any> = myGalleryBirthday
  constructor() { }

  ngOnInit(): void {
  }

}
