import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-contacts-page',
  imports: [RouterModule,ContactListItem],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.scss'
})
export class ContactsPage {

  listaContactos:Contact[] = [
    {
      id: "1",
      firstName: 'Gonzalo',
      lastName: "Bechara",
      number: "3476123123",
      image: "",
      company: "",
      address: "",
      email: 'gbechara@austral.edu.ar',
      isFavourite: true,
    },
    {
      id: "2",
      firstName: 'Lucho',
      lastName: "Barletta",
      number: "3471234234",
      image: "",
      company: "",
      address: "",
      email: 'lbarletta@austral.edu.ar'
    },
  ]

}
