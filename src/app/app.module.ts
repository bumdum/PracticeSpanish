import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { TextImageMatchComponent } from './text-image-match/text-image-match.component';
import { ListErrorsComponent, CustomMaterialModule, httpInterceptorProviders, ButtonExpandtoPageComponent} from './shared';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsoleComponent } from './console/console.component';

@NgModule({
  declarations: [
    AppComponent,
    TextImageMatchComponent,
    ListErrorsComponent,
    LoginComponent,
    DashboardComponent,
    ButtonExpandtoPageComponent,
    ConsoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    LayoutModule,
    DragDropModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
