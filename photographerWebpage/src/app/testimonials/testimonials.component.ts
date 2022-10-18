import { Component, OnInit } from '@angular/core';
import { iTestimonialsList } from './testimonials-scripts/iTestimonialsList';
import { testimonialsList } from './testimonials-scripts/testimonialsList';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  testimonialsList: iTestimonialsList[] = testimonialsList;
  testimonial: iTestimonialsList = {} as iTestimonialsList;

  testimonialForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    position: '',
    company: '',
    description: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.testimonialForm.value.name != null) {
      this.testimonial.name = this.testimonialForm.value.name;
    }
    if (this.testimonialForm.value.email != null) {
      this.testimonial.email = this.testimonialForm.value.email;
    }
    if (this.testimonialForm.value.position != null) {
      this.testimonial.position = this.testimonialForm.value.position;
    }
    if (this.testimonialForm.value.company != null) {
      this.testimonial.company = this.testimonialForm.value.company;
    }
    if (this.testimonialForm.value.description != null) {
      this.testimonial.description = this.testimonialForm.value.description;
    }

    this.testimonialsList.push(this.testimonial);
    this.testimonial = {} as iTestimonialsList;
    this.testimonialForm.reset();
  }

  ngOnInit(): void {}
}
