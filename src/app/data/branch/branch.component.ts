import { AppConfig, AppConfigClass} from '../../Infra/app-config/app-config.module';
import { HttpClient } from '@angular/common/http';
import { Branch } from './../../models/branch';
import { Component, OnInit, Inject } from '@angular/core';
import { DefaultComponent } from '../../default/default-component/default-component';

declare var $: any;

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})

export class BranchComponent extends DefaultComponent<Branch> implements OnInit {
  TModel = Branch;

  constructor(
    public http: HttpClient,
    @Inject (AppConfig) public config: AppConfigClass
     ) {
    super(http, config.apiEndpoint + '/Branches');
  }

  ngOnInit() {
    super.ngOnInit();
    this.selectedModel = new this.TModel();
  }

  CreateModel() {
    super.CreateModel();
    this.selectedModel = new this.TModel();
  }

}
