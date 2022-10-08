import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManageResourcesService {
  // apiurl = 'http://localhost:5000';
  //local server
  // apiurl = 'http://192.168.0.183:5000';
  //vercel-server
  apiurl = 'https://br-backend.vercel.app';
  reqUrl = (endpoint: string) => this.apiurl + endpoint;
  constructor(private http: HttpClient) {}
  getAllTemplates() {
    return this.http.get<any>(this.reqUrl('/global-templates'));
  }
  postReq(url: string, data: Object = {}) {
    // console.log(data);
    return this.http.post<any>(this.reqUrl(url), data);
  }
  getReq(url: string, data: object = {}) {
    return this.http.get<any>(this.reqUrl(url), data);
  }
  updateReq(url: string, data: object = {}) {
    return this.http.put<any>(this.reqUrl(url), data);
  }
  deleteReq(url: string, data: object = {}) {
    return this.http.delete<any>(this.reqUrl(url), data);
  }
  uploadReq(url: string, formData: FormData) {
    return this.http.post(this.reqUrl(url), formData);
  }
}
