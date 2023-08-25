import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  constructor(private http:HttpClient) {

   }

   getData(){
    return this.http.get("http://localhost:3000/login");
   }

   displayUser(id:any){
    return this.http.post("http://localhost:3000/login",id);
   }

   deleteD(id:any){
    return this.http.delete(`http://localhost:3000/login/${id}`);
   }

   updateD(body:any,id:any){
    return this.http.put(`http://localhost:3000/login/${id}`,body);
   }

}
