import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }
  
  url:string="http://localhost:8085/";

  getUserById(id : number){
    return this.http.get<User>(this.url + "/Users/id/" + id);
  }

  getUserByUsername(username : string){
    return this.http.get<User>(this.url + "/Users/username/" + username);
  }

  addUser(user : User){
    return this.http.post<User>(this.url + "/Users/add" , user);
  }

}
