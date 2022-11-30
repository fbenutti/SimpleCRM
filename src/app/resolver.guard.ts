import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResolverGuard implements Resolve<any> {

  // we will have a service - call service API to get some info

/*
  Example of real usage:
  this.userService.getAccountInformation(userId).subscribe(data => {

  });
 */

  //imagine after the service be called, it will populate a obj such as:
  userObj = {
    userId: 10,
    username: 'Felipe'
  };

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      return this.userObj;
  }

}
