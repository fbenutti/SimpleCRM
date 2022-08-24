import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';

  successMsg: boolean = true;

  superPower = 'WonderWoman' //string

  contacts = [
    {
      'firstName': 'ARC',
      'lastName': 'Felipe',
      'contactId': 1234
    },
    {
      'firstName': 'ADOKW',
      'lastName': 'Benutti',
      'contactId': 4321
    },
    {
      'firstName': 'Culo',
      'lastName': 'Su cu',
      'contactId': 8958
    },
  ]

}
