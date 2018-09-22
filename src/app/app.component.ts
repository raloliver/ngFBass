import { Component } from '@angular/core';
import { FbassComponent } from './fbass/fbass.component'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}
