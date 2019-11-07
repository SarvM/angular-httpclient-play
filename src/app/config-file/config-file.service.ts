import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Settings {
  apiUrl: string,
  userName: string, 
  userKey: string
}


@Injectable()
export class ConfigFileService {
  url = 'assets/settings.json';

  constructor(private http: HttpClient) {

  }

  getSettingsValue() {
    return this.http.get(this.url);
  }

  getSettingsValueType() {
    // now returns an Observable of Config
    return this.http.get<Settings>(this.url);
  }

}