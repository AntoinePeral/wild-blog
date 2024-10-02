import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../models/Message.model';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  newMessage : Message ={
    lastName: "",
    firstName: "",
    email: "",
    content: "",
  }

  onSubmit(){
    console.log(`Formulaire envoyé!`);
    console.log(this.newMessage);
  }
}
