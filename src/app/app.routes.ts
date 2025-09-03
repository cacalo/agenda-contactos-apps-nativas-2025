import { Routes } from '@angular/router';
import { LoginPage } from './pages/login-page/login-page';
import { ContactsPage } from './pages/contacts-page/contacts-page';
import { ContactDetailsPage } from './pages/contact-details-page/contact-details-page';
import { LoggedLayout } from './layouts/logged-layout/logged-layout';
import { GroupsPage } from './pages/groups/groups';

export const routes: Routes = [
  {
    path: "login",
    component: LoginPage
  },
  {
    path: "",
    component: LoggedLayout,
    children: [
      {
        path: "",
        component: ContactsPage
      },
      {
        path: "contacts/:id",
        component: ContactDetailsPage
      },
      {
        path: "groups",
        component: GroupsPage
      },
    ]
  },

];
