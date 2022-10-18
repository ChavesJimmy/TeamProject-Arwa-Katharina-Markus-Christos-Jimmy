import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryBirthdayComponent } from './gallery-birthday/gallery-birthday.component';
import { GalleryFamilyComponent } from './gallery-family/gallery-family.component';
import { GalleryModelComponent } from './gallery-model/gallery-model.component';
import { GalleryNaturComponent } from './gallery-natur/gallery-natur.component';
import { GalleryPartyComponent } from './gallery-party/gallery-party.component';
import { GalleryPortraitComponent } from './gallery-portrait/gallery-portrait.component';
import { GalleryWeddingComponent } from './gallery-wedding/gallery-wedding.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path:"gallery", component:GalleryComponent
  },
  {
    path:"Model", component:GalleryModelComponent
  },
  {
    path:"Wedding", component:GalleryWeddingComponent
  },
  {
    path:"Birthday", component:GalleryBirthdayComponent
  },
  {
    path:"Party", component:GalleryPartyComponent
  },
  {
    path:"Natur", component:GalleryNaturComponent
  },
  {
    path:"Portrait", component:GalleryPortraitComponent
  },
  {
    path:"Family", component:GalleryFamilyComponent
  },
  {
    path:"testimonials", component: TestimonialsComponent
  },
  {
    path:"contact", component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
