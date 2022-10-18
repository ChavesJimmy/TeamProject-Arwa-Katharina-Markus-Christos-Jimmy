import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryWeddingComponent } from './gallery-wedding/gallery-wedding.component';
import { GalleryNaturComponent } from './gallery-natur/gallery-natur.component';
import { GalleryPortraitComponent } from './gallery-portrait/gallery-portrait.component';
import { GalleryFamilyComponent } from './gallery-family/gallery-family.component';
import { GalleryPartyComponent } from './gallery-party/gallery-party.component';
import { GalleryModelComponent } from './gallery-model/gallery-model.component';
import { GalleryBirthdayComponent } from './gallery-birthday/gallery-birthday.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    FooterComponent,
    GalleryWeddingComponent,
    GalleryNaturComponent,
    GalleryPortraitComponent,
    GalleryFamilyComponent,
    GalleryPartyComponent,
    GalleryModelComponent,
    GalleryBirthdayComponent,
    TestimonialsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
