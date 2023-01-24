import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { loginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ActivateHome } from './canactivate.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';

const routes: Routes = [
  {path:"", pathMatch:'full', redirectTo:'login'},
  {path:"login", component: loginComponent},
  {path:"home", component: HomeComponent, canActivate: [ActivateHome]},
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true  }
  ]
})
export class AppModule { }
