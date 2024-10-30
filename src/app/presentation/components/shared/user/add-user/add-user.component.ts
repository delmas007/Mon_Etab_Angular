import {Component, OnInit} from '@angular/core';
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
export class AddUserComponent implements OnInit{
  form! :FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      pseudo: new FormControl("",[Validators.required,Validators.min(4)]),
      motDePasse: new FormControl("",Validators.required),
      confirmeMotDePasse: new FormControl("",Validators.required),
    })
  }
  save(){
    console.log(this.form.value)
  }

}
