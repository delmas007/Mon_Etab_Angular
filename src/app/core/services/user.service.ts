import { Injectable } from '@angular/core';
import {LocalStorageService} from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private local:LocalStorageService) { }
  isAuthenticated() :boolean {
    let token :string | null = this.local.getTokenn();
    if (token==null){
      return false;
    }
    return true;
  }
}
