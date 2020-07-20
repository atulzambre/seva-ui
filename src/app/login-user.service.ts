import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SevaUserModel } from "./model/seva_user_model";

@Injectable({
  providedIn: "root",
})
export class LoginUserService {
  constructor(private http: HttpClient) {}

  baseURL: String = "http://localhost:8888/";

  loginUserService(sevaUser: SevaUserModel) {
    return this.http.post(this.baseURL + "loginUser", sevaUser);
  }
}
