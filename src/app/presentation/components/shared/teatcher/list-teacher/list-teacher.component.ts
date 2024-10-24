import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-list-teacher',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './list-teacher.component.html',
  styleUrl: './list-teacher.component.css'
})
export class ListTeacherComponent {

}
