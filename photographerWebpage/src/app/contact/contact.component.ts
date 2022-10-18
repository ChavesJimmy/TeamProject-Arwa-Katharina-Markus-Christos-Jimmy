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
    date: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required),

  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    if(this.Contact.valid){

      var a = this.Contact.value;
      alert(``)
      console.log(a)
   }
   else{
    alert(`one or more infos are missing`)
   }

  }
}
