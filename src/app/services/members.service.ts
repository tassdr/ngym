import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/user";
import { Observable } from "rxjs";

// const httpOptions = {
//   headers: new HttpHeaders({
//     "Content-Type": "application/json",
//     Accept: "application/json"
//   })
// };

@Injectable()
export class MembersService {

  private users: User[] = [];
  constructor(private http: HttpClient) {}

  private url: string = "http://5cd3f2edb231210014e3d2ff.mockapi.io/api/test/members";


  getMembers() {
    return this.http.get<User[]>(this.url);
  }

  getMember(id: string): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.get<User>(url);
  }

  deleteMember(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.delete<User>(url);
  }

  updateMember(id, user): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.put<User>(url, user);
  }

  addMember(user): Observable<User> {
    return this.http.post<User>(this.url, user);
  }
}
