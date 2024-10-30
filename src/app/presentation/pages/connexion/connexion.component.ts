import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { BaseService } from '../../../core/services/base-service.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { environmentDev } from '../../../../environments/environment.dev';
import { Login } from '../../../domains/interfaces/login';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  formLogin!: FormGroup;
  login: Login = {
    username: "",
    password: "",
    rememberMe: false
  };

  constructor(private router: Router, private service: BaseService) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(5)])
    });
  }

  home() {
    this.router.navigateByUrl("/base/home");
  }

  isInvalidateInput(input: AbstractControl<any>) {
    return input.invalid && (input.touched || input.dirty);
  }

  connexion() {
    this.login.username = this.formLogin.value.username;
    this.login.password = this.formLogin.value.password;
    this.service.connexion(environmentDev.endPoint.login, this.login).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
