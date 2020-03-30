import { AppConfigModule } from './infra/app-config/app-config.module';
import { CompanyDetailComponent } from './data/company-detail/company-detail.component';
import { EmployeeDetailComponent } from './data/employee-detail/employee-detail.component';
import { BranchDetailComponent } from './data/branch-detail/branch-detail.component';
import { CompanyComponent } from './data/company/company.component';
import { BranchComponent } from './data/branch/branch.component';
import { EmployeeComponent } from './data/employee/employee.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component/app.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { IframeComponent } from './layout/iframe/iframe.component';
import { WiebenikComponent } from './wiebenik/wiebenik.component';
import { SafePipe } from './pipes/safe.pipe';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddressComponent } from './address/address.component';
import { CookieService } from 'ngx-cookie-service';
import { CookieComponent } from './layout/cookie/cookie.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SqlBranchComponent } from './data/sql-branch/sql-branch.component';

declare var $: any;

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'iframe', component: IframeComponent },
  { path: 'wiebenik', component: WiebenikComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: 'companies', component: CompanyComponent },
  { path: 'branches', component: BranchComponent },
  { path: 'sqlbranches', component: SqlBranchComponent },
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
    CookieComponent,
    BranchComponent,
    EmployeeComponent,
    CompanyComponent,
    BranchDetailComponent,
    EmployeeDetailComponent,
    CompanyDetailComponent,
    SqlBranchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppConfigModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', enableTracing: true })
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
