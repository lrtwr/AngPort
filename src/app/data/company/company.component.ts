import { Company } from './../../models/company';
import { AppConfig, AppConfigClass } from '../../Infra/app-config/app-config.module';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultComponent } from '../../default/default-component/default-component';


declare var $: any;

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})

export class CompanyComponent extends DefaultComponent<Company> implements OnInit {
  TModel = Company;
  constructor(
    public http: HttpClient,
    @Inject(AppConfig) public config: AppConfigClass
  ) {
    super(http, config.apiEndpoint + '/Companies');
  }

  ngOnInit() {
    super.ngOnInit();
    this.selectedModel = new this.TModel();
  }

  CreateModel() {
    super.CreateModel();
    this.selectedModel = new this.TModel();
  } zzzzzz
}


