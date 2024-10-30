import {Component, OnInit} from '@angular/core';
import {BaseService} from '../../../../../core/services/base-service.service';
import {MessageService} from 'primeng/api';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

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
      nom: new FormControl("",[Validators.required]),
      prenom: new FormControl("",[Validators.required]),
      vacant: new FormControl("",[Validators.required]),
      matiere: new FormControl("",[Validators.required]),
      date: new FormControl("",[Validators.required]),
      ville: new FormControl("",[Validators.required]),
      telephone: new FormControl("",[Validators.required])
    });
  }


  saveData() {
    console.log(this.form.value)
  }
}
