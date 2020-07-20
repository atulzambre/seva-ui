import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class VerifyAccountService {
  baseURL: String = "http://localhost:8888/";
  constructor(private http: HttpClient) {}

  verifyAccountService(jwtToken: String) {
    return this.http.get(this.baseURL + "/verifyAccount/token/" + jwtToken);
  }
}
