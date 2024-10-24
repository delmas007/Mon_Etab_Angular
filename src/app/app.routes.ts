import { Routes } from '@angular/router';
import {ConnexionComponent} from './presentation/pages/connexion/connexion.component';
import {HomeComponent} from './presentation/pages/home/home.component';
import {SidebarComponent} from './presentation/components/layout/sidebar/sidebar.component';
import {ListStudentComponent} from './presentation/components/shared/student/list-student/list-student.component';
import {ListTeacherComponent} from './presentation/components/shared/teatcher/list-teacher/list-teacher.component';
import {ListUserComponent} from './presentation/components/shared/user/list-user/list-user.component';
import {RapportComponent} from './presentation/components/shared/rapport/rapport.component';
import {AddStudentComponent} from './presentation/components/shared/student/add-student/add-student.component';
import {AddTeacherComponent} from './presentation/components/shared/teatcher/add-teacher/add-teacher.component';
import {AddUserComponent} from './presentation/components/shared/user/add-user/add-user.component';
import {UpdateStudentComponent} from './presentation/components/shared/student/update-student/update-student.component';
import {
  UpdateTeacherComponent
} from './presentation/components/shared/teatcher/update-teacher/update-teacher.component';
import {UpdateUserComponent} from './presentation/components/shared/user/update-user/update-user.component';
import {AppSettingComponent} from './presentation/components/shared/app-setting/app-setting.component';
import {SchoolComponent} from './presentation/components/shared/school/school.component';

export const routes: Routes = [
  { path : "login" , component : ConnexionComponent},
  { path : "base" , component : SidebarComponent,children : [
      { path : "home" , component : HomeComponent},
      { path : "list-student" , component : ListStudentComponent},
      { path : "list-teacher" , component : ListTeacherComponent},
      { path : "list-user" , component : ListUserComponent},
      { path : "rapport" , component : RapportComponent},
      { path : "add-student" , component : AddStudentComponent},
      { path : "add-teacher" , component : AddTeacherComponent},
      { path : "add-user" , component : AddUserComponent},
      { path : "update-student" , component : UpdateStudentComponent},
      { path : "update-teacher" , component : UpdateTeacherComponent},
      { path : "update-user" , component : UpdateUserComponent},
      { path : "setting" , component : AppSettingComponent},
      { path : "school" , component : SchoolComponent},
    ]},
  { path : "" , redirectTo : "/login", pathMatch : "full"}
];
