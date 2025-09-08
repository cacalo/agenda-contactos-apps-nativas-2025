import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [RouterModule,FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {

  errorLogin = false;

  login(form:any){
    console.log(form)
    this.errorLogin = false;
    if(!form.email || !form.password){
      this.errorLogin = true;
      return
    }
  }
}
