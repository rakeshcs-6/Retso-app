
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url = "http://localhost:3000/resturants"

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url);
  }

  saveToResto(data: object) {
    return this.http.post(this.url, data);
  }

  deleteResto(data: number) {
    return this.http.delete(`${this.url}/${data}`);
  }

  getCurrentData(data: number) {
    return this.http.get(`${this.url}/${data}`);
  }
  
  storeUpdatedValue(data: any, id: any) {
    console.log(data)
    return this.http.put(`${this.url}/${id}`, data);
  }
}
