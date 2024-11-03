import {Component, OnInit} from '@angular/core';
import {BaseService} from '../../../../../core/services/base-service.service';
import {MessageService} from 'primeng/api';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {environmentDev} from '../../../../../../environments/environment.dev';

@Component({
  selector: 'app-add-teacher',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css'
})
export class AddTeacherComponent implements OnInit{
  form!: FormGroup;
  constructor(private baseService: BaseService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl("",[Validators.required]),
      lastName: new FormControl("",[Validators.required]),
      available: new FormControl("",[Validators.required]),
      specialty: new FormControl("",[Validators.required]),
      birthday: new FormControl("",[Validators.required]),
      gender: new FormControl("",[Validators.required]),
      phoneNumber: new FormControl("",[Validators.required])
    });
  }


  saveData() {
    this.baseService.create(environmentDev.endPoint.teacher.create,this.form.value).subscribe({
      next:(response: any)=>{
        console.log(response)
      },
      error:(error: any)=>{
        console.log(error)
      }
    })
  }
}
