import { AppConfig, AppConfigClass } from '../../Infra/app-config/app-config.module';
import { HttpClient } from '@angular/common/http';
import { Branch } from './../../models/branch';
import { Component, OnInit, Inject } from '@angular/core';
import { DefaultComponent } from '../../default/default-component/default-component';
declare var $: any;

@Component({
  selector: 'app-sql-branch',
  templateUrl: './sql-branch.component.html',
  styleUrls: ['./sql-branch.component.css']
})

export class SqlBranchComponent extends DefaultComponent<Branch> implements OnInit {

  TModel = Branch;
  Varia: any;
  json = JSON;

  constructor(
    public http: HttpClient,
    @Inject(AppConfig) public config: AppConfigClass
  ) {
    super(http, config.apiEndpoint + '/Branches');
  }

  ngOnInit() {
    super.ngOnInit();
    this.selectedModel = new this.TModel();

    this.Varia = '' ;
    alert(this.Varia);
  }

  CreateModel() {
    super.CreateModel();
    this.selectedModel = new this.TModel();
  }

}
