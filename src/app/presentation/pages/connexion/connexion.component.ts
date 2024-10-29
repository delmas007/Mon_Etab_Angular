import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BaseService} from '../../../core/services/base-service.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {environmentDev} from '../../../../environments/environment.dev';
import {Login} from '../../../domains/interfaces/login';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent implements OnInit{
  formLogin!: FormGroup;
  login: Login={
    username: "",
    password: "",
    rememberMe: false
  }
  constructor(private router: Router,private service:BaseService) { }


  home() {
    this.router.navigateByUrl("/base/home");
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required,Validators.minLength(5)])
    });
  }
  isInvalidateInput(input: AbstractControl<any>){
    return input.invalid && (input.touched || input.dirty) ;
  }

  connexion(){
    this.service.connexion(environmentDev.endPoint.login)
  }
}
