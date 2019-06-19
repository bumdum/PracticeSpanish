import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { TextImageMatchComponent } from './text-image-match/text-image-match.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Role } from './shared';
import { ConsoleComponent } from './console/console.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: DashboardComponent},
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent, data: {animation: 'DashboardPage'}},
  { path: 'match', canActivate: [AuthGuard], component: TextImageMatchComponent, data: { roles: [Role.User], animation: 'MatchPage'} },
  { path: 'console', canActivate: [AuthGuard], component: ConsoleComponent, data: { roles: [Role.User]} },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: false } // <-- debugging purposes only
    )],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
