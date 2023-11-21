import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  
  
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/locales');
  }
  insertData(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/addlocal', data);
  }
  deleteData(id){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deletelocal/'+id);
  }
  getLocalById(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/locales/'+id);
  }
  updateData(id,data){
    return this.httpClient.put('http://127.0.0.1:8000/api/updatelocal/'+id, data);
  }
  //----------------------------------------------------------------------------  

  getDataPersona(){
    return this.httpClient.get('http://127.0.0.1:8000/api/persona');
  }

  getPersonaById(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/persona/'+id);
  }

  insertDataPersona(data){
      return this.httpClient.post('http://127.0.0.1:8000/api/addpersona', data);
  }


  deleteDataPersona(id){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deletepersona/'+id);
  }


  updateDataPersona(id,data){
    return this.httpClient.put('http://127.0.0.1:8000/api/updatepersona/'+id, data);
  }
}
