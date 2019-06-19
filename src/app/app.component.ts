import { Component, OnInit } from '@angular/core';
import { routeAnimations, AuthenticationService } from './shared';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    routeAnimations
    // animation triggers go here
  ]
})
export class AppComponent implements OnInit {
  title = 'PracticeSpanishApp';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

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
