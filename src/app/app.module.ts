import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { InformationComponent } from './information/information.component';

import {DataService} from './data.service';

const routes: Route[] = [
  { path: ' ', component: AppComponent },
  { path: 'information', component: InformationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
