import { SearchComponent } from './search/search.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<SearchComponent> {
  canDeactivate(component: SearchComponent) {
    if (component.isDirty) {
      return window.confirm('You have unsaved changes. Do you want to leave?');
    }
    return true;
  }

}
