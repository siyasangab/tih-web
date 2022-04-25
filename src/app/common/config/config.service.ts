import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from './Config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config!: Config;

  constructor(private http: HttpClient) {
    this.load();
  }

  public load() {
    if (this.config) {
      return new Promise(resolve => {
        resolve(true);
      })
    }

    return new Promise<boolean>((resolve, reject) => {
      const configFile = 'assets/config.json';

      this.http
        .get<Config>(configFile)
        .subscribe((data) => {
          this.config = data;
          resolve(true);
        })
    })
  }

  public getConfig = () => this.config;
}
