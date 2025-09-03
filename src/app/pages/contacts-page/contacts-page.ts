import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { Contact } from '../../interfaces/contact';
import { AuthService } from '../../services/auth-service';
import { ContactsService } from '../../services/contacts-service';

@Component({
  selector: 'app-contacts-page',
  imports: [RouterModule,ContactListItem],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.scss'
})
export class ContactsPage {

  authService = inject(AuthService);
  contactsService = inject(ContactsService);

}
