import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ConfigFileComponent } from './config-file/config-file.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ConfigFileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
