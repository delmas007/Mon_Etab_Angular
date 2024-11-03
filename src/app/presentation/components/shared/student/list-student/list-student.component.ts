import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {BaseService} from '../../../../../core/services/base-service.service';
import {environmentDev} from '../../../../../../environments/environment.dev';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [
    RouterLink,
    ToastModule,
    ConfirmDialogModule,
    NgForOf
  ],
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent implements OnInit{
  students!:any;
  constructor(private baseService:BaseService) {
  }


  ngOnInit(): void {
    this.baseService.getAll(environmentDev.endPoint.student.getAll,null).subscribe({
      next:(response:any)=>{
        this.students=response;
        console.log(this.students)
      },
      error:(erro:any)=>{
        console.log(erro)
      }
    })
  }


}
