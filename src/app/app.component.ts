import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';

  pageHeading = 'Welcome to Felipe\'s Tutorial';

  pageCount = 10;

  userObject = {
    'firstName': 'Felipe',
    'lastName': 'Tutoriais'
  };

  colVal = 2;

  imgUrl = 'test.png';
  imgAlt = 'This is missing Image text';
  isUserLoggedIn = true;

  txtColorVal = 'blue';

  tax: number = 10;
  successMsg: boolean = true;
  superPower = 'SuperMan'; //string

  txtColor: string = 'success';
  styleProp: string = 'purple';

  styleClsProp: string = 'c3';
  conditionClsProp: string = 'c4';

  name = 'ARC';


  getClsName(){
    return 'c3';
  }

  contacts = [
    {
      'firstName': 'Felipe',
      'lastName': 'Benutti',
      'contactId': 1234
    },
    {
      'firstName': 'ARC',
      'lastName': 'ADOKW',
      'contactId': 4321
    },
    {
      'firstName': 'Culo',
      'lastName': 'Su cu',
      'contactId': 8958
    },
  ]

}
