import { AuthenticationService } from '../../services';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, RouterOutlet } from '@angular/router';
import { routeAnimations } from '../animation/route-animations';

@Component({
  selector: 'layout-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  animations: [
    routeAnimations
    // animation triggers go here
  ]
})
export class SideNavComponent implements OnInit {

  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    constructor(private breakpointObserver: BreakpointObserver, private auth: AuthenticationService
      , private router: Router) {
      
    }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
