import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SevaUserRoleModel } from "./model/seva_user_role_model";
import { SevaUserModel } from "./model/seva_user_model";

@Injectable({
  providedIn: "root",
})
export class RegisterUserService {
  constructor(private http: HttpClient) {}

  baseURL: String = "http://localhost:8888/";

  registerUserService(sevaUserModel: SevaUserModel) {
    return this.http.post(this.baseURL + "registerUser", sevaUserModel);
  }
}
