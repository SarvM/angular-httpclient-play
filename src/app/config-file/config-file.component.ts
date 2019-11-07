import { Component, OnInit } from '@angular/core';
import { Settings, ConfigFileService } from './config-file.service';

@Component({
  selector: 'app-config-file',
  templateUrl: './config-file.component.html',
  styleUrls: ['./config-file.component.css'],
  providers: [ConfigFileService]
})
export class ConfigFileComponent implements OnInit {

  settings: Settings;

  constructor(private settingsService: ConfigFileService) { }

  ngOnInit() {
  }

  clear() {
    this.settings = undefined;
  }

  get diagnostic() { return JSON.stringify(this.settings); }

  showSettings() {
    this.settingsService.getSettingsValue()
      .subscribe(
        (data: Settings) => this.settings = { ...data },         
      );
  }

}