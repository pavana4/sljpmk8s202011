import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  
  // private baseUrl = "http://localhost:8080/api/v1/employees";
  // private baseUrl = "http://middle-tier.default.svc.cluster.local/api/v1/employees";
  // private baseUrl = "https://app.brainupgrade.in/api/api/v1/employees";
  private baseUrl='/api/v1/employees';
  // private baseUrl = environment.apiURL;
  constructor(private http: HttpClient) {}
  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }
  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }
  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
