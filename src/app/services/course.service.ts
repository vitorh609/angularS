import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Courses } from '../Courses';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  urlApi = 'api/courses'

  constructor(private http: HttpClient) { 

  }
  //pegando lista de curso
  getList(): Observable<Courses[]>{
    return this.http.get<Courses[]>( this.urlApi);
  }

  //salvando form group list
  save(record: Partial<Courses>){
    return this.http.post<Courses>(this.urlApi, record);
  }
}
