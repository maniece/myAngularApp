import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AppService } from "../app.service";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})

export class loginComponent {
  loginForm: FormGroup;

  constructor(private router: Router, private appService: AppService) {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  OnSubmit() {
    if(this.loginForm.value.username === "Hello" && this.loginForm.value.password == "World" ) {
     this.appService.login = true;
     this.router.navigateByUrl('/home');
    } else {
      this.appService.login = false;
    }
  }
}