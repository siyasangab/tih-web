import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl!: string;

  constructor(private http: HttpClient, private configService: ConfigService) { 
    
  }

  get<T>(path: string) {
    return this.http.get<T>(`${this.getApiUrl()}/${path}`);
  }

  post<T>(path: string, data: any) {
    return this.http.post<T>(`${this.getApiUrl()}/${path}`, data);
  }

  private getApiUrl() {
    return this.configService.getConfig().apiUrl;
  }
}
