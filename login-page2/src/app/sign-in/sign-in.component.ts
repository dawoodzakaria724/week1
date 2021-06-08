import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  regusterUserData = {}
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.login().subscribe (data => console.log(data));
  }

  onClick() {
    console.log('hello');
  }

}
