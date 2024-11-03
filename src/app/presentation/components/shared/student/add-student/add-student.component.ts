import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {BaseService} from '../../../../../core/services/base-service.service';
import {environmentDev} from '../../../../../../environments/environment.dev';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit{

  form!: FormGroup;
  constructor(private baseService: BaseService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      lastName: new FormControl("",[Validators.required]),
      firstName: new FormControl("",[Validators.required]),
      gender: new FormControl("",[Validators.required]),
      matricule: new FormControl("",[Validators.required]),
      // classe: new FormControl("",[Validators.required]),
      birthday: new FormControl("",[Validators.required]),
      phoneNumber: new FormControl("",[Validators.required])
    });
  }


  saveData() {
    console.log(this.form.value)
    this.baseService.create(environmentDev.endPoint.student.create,this.form.value).subscribe({
      next:(response: any)=>{
        console.log(response)
      },
      error:(error: any)=>{
        console.log(error)
      }
    })
  }
}
