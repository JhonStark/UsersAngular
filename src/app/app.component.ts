import { Component } from '@angular/core';
import { userInfo } from 'os';
import { Post } from './Post';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  users: string[] = ['https://www.whitehat4u.com', 'Jhon Stark'];


 addUser(newUser: HTMLInputElement){
   this.users.push(newUser.value);
   newUser.value = '';
   newUser.focus();
  
   localStorage.setItem('url', JSON.stringify(this.users));
   var valor = JSON.parse(localStorage.getItem('url'));
   
    return false;
 }


deleteUser(user, valor){
  for (let i = 0; i < this.users.length; i++) {
    if(user == this.users[i]) {
      this.users.splice(i, 1);
      localStorage.removeItem(valor);
    }
  }
    
  

  }
}


