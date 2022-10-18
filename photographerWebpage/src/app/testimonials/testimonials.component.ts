import { Component, OnInit } from '@angular/core';
import { iTestimonialsList } from './testimonials-scripts/iTestimonialsList';
import { testimonialsList } from './testimonials-scripts/testimonialsList';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  testimonialsList: iTestimonialsList[] = testimonialsList;

  constructor() {}

  ngOnInit(): void {}
}
