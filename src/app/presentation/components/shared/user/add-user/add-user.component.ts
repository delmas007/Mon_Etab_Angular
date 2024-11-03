import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {BaseService} from '../../../../../core/services/base-service.service';
import {environmentDev} from '../../../../../../environments/environment.dev';

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
  constructor(private service:BaseService) {
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      pseudo: new FormControl("",[Validators.required,Validators.min(4)]),
      password: new FormControl("",Validators.required),
      confirmeMotDePasse: new FormControl("",Validators.required),
    })
  }
  save(){
    this.service.create(environmentDev.endPoint.user.create,this.form.value).subscribe({
      next:(response: any)=>{
        console.log(response)
      },
      error:(error: any)=>{
        console.log(error)
      }
    })
  }

}
