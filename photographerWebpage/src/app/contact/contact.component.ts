import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      alert(`Your message was send , we will get in touch with you soon!`);
   }
  else{
    alert(`one or more infos are missing`)
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
