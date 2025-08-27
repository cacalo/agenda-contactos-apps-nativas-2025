import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contacts-page',
  imports: [RouterModule],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.scss'
})
export class ContactsPage {

  contactos = [
    {
      nombre: 'Gonzalo',
      telefono: 3476123123,
      email: 'gbechara@austral.edu.ar'
    },
    {
      nombre: 'Lucho',
      telefono: 3471234234,
      email: 'lbarletta@austral.edu.ar'
    }
  ]

}
