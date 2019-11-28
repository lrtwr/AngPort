import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component/app.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IframeComponent } from './iframe/iframe.component';
import { WiebenikComponent } from './wiebenik/wiebenik.component';
import { SafePipe } from './pipes/safe.pipe';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddressComponent } from './address/address.component';
import { CookieService } from 'ngx-cookie-service';
import { CookieComponent } from './cookie/cookie.component';
declare var $: any;

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'iframe', component: IframeComponent },
  { path: 'wiebenik', component: WiebenikComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IframeComponent,
    WiebenikComponent,
    SafePipe,
    HomeComponent,
    PageNotFoundComponent,
    AddressComponent,
    CookieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{enableTracing:true})
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
