import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Contact = new FormGroup ({
    firstName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    date: new FormControl('',Validators.nullValidator),
    lastName: new FormControl('',Validators.required),
    event: new FormControl('',Validators.nullValidator),
    age: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required),

  })

  constructor() { }

  ngOnInit(): void {
  }
 
  onSubmit(){
  if(this.Contact.valid){
    Swal.fire({
      position: 'center',
      icon: 'success',
      background :`rgb(33,37,41)`,
      color : `white`,
      title: 'Your message was sent, we are looking forward to work with you ',
      showConfirmButton: false,
      timer: 1500
    })   }
  else{
    Swal.fire({
      position: 'center',
      icon: 'error',
      background :`rgb(33,37,41)`,
      color : `white`,
      title: 'One or more mandatory fields are empty ',
      showConfirmButton: false,
      timer: 1500
    })
   }
   return this.Contact = new FormGroup ({
    firstName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    date: new FormControl('',Validators.nullValidator),
    lastName: new FormControl('',Validators.required),
    event: new FormControl('',Validators.nullValidator),
    age: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required),

  })
  }
}
