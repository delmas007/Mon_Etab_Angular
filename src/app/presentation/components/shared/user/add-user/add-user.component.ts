import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {BaseService} from '../../../../../core/services/base-service.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  form!: FormGroup;
  constructor(private baseService: BaseService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      pseudo: new FormControl("",[Validators.required]),
      motDePasse: new FormControl("",[Validators.required]),
      confirmeMotDePasse: new FormControl("",[Validators.required])
    });
  }

  saveData() {
    console.log(this.form.value)
  }
}
