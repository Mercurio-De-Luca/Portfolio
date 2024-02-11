import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent {

  @ViewChild('f') form!: NgForm

  constructor() { }

  async inviaEmail(){
    emailjs.init('zETBIttw6E51nAo1f');
  let response = await emailjs.send("service_ma64g94","template_4r98ojs",{
    from_name: this.form.value.from_name,
    to_name: "Mercurio",
    from_email: this.form.value.from_email,
    message: this.form.value.message,
    });
    alert('Email inviata!!')
    this.form.reset();
  }
}
