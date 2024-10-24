import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [
    RouterLink,
    ToastModule,
    ConfirmDialogModule
  ],
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css'
})
export class ListStudentComponent {
  constructor() {
  }

  protected readonly confirm = confirm;


}
