import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FbassComponent } from './fbass/fbass.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, NgbModule.forRoot() ],
  declarations: [ AppComponent, FbassComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
