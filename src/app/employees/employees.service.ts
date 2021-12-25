import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Person } from './employee.type'
import { NzMessageService } from 'ng-zorro-antd/message';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient, private message: NzMessageService) { }

  url = "http://localhost:3000/employees"
  // urladd = "http://localhost:3000/"
  fetchData(curPage: number, pageSize: number) {

    const newurl = `${this.url}?_page=${curPage}&_limit=${pageSize}`
    return this.http.get<Person[]>(newurl, {
      observe: 'response'
    })
  }

  del(id: number) {
    return this.http.delete<object>(`${this.url}/${id}`)
    // return this.http.delete<object>(`${this.url}/${id}`)
  }

  add(employee: Person) {
    return this.http.post(`${this.url}`, employee)
  }

  findEmployeeId(id: number) {
    return this.http.get<Person>(`${this.url}/${id}`)
  }
  //update based on employee id
  update(id: number, params: Person) {
    return this.http.patch<Person>(`${this.url}/${id}`, params)
  }

}
