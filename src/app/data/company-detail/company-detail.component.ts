import { HttpClient } from '@angular/common/http';
import { DefaultDetailComponent } from '../../default/default-detail/default-detail.component';
import { Component, OnInit, Input, OnChanges, Inject } from '@angular/core';
import { Company } from '../../models/company';
import { AppConfig, AppConfigClass} from '../../Infra/app-config/app-config.module';

declare var $: any;

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})

export class CompanyDetailComponent extends DefaultDetailComponent<Company> implements OnInit, OnChanges {

  constructor(
    public http: HttpClient,
    @Inject (AppConfig) public config: AppConfigClass
    ) {
    super(http, config.apiEndpoint + '/Companies');
  }

  ngOnInit() {
    super.ngOnInit();
    this.model = new Company();
    this.htmlModelId = '#company-modal';
  }

  onSubmit() {
    super.onSubmit(this.model, this.model.companyId);
  }

  ngOnChanges() {
    super.ngOnChanges();
  }
}
