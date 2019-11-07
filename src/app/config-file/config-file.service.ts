import { Injectable } from '@angular/core';

export interface Settings {
  apiUrl: string,
  userName: string, 
  userKey: string
}


@Injectable()
export class ConfigFileService {

}