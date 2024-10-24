import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  constructor(private router: Router) { }


  home() {
    this.router.navigateByUrl("/base/home");
  }
}
