import { Component, OnInit } from '@angular/core';
import { iTestimonialsList } from './testimonials-scripts/iTestimonialsList';
import { testimonialsList } from './testimonials-scripts/testimonialsList';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
    if (this.testimonialForm.valid) {
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

      Swal.fire({
        position: 'center',
        icon: 'success',
        background: `rgb(33,37,41)`,
        color: `white`,
        title:
          'Your testimonial was sent, we are thankful for sharing your opinion',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        background: `rgb(33,37,41)`,
        color: `white`,
        title: 'One or more mandatory fields are empty',
        showConfirmButton: false,
        timer: 1500,
      });
      this.testimonialForm.reset();
    }
  }

  ngOnInit(): void {}
}
