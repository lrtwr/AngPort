import { HttpClient } from '@angular/common/http';
import { DefaultDetailComponent } from '../../default/default-detail/default-detail.component';
import { AppConfig, AppConfigClass, APP_CONFIG} from '../../Infra/app-config/app-config.module';
import { Branch } from '../../models/branch';
import { Component, OnInit,  OnChanges, Inject } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-branch-detail',
  templateUrl: './branch-detail.component.html',
  styleUrls: ['./branch-detail.component.css']
})
export class BranchDetailComponent extends DefaultDetailComponent<Branch> implements OnInit, OnChanges {


  constructor(
    public http: HttpClient,
    @Inject (AppConfig) public config: AppConfigClass
    ) {
      super(http, config.apiEndpoint + '/Branches');
  }

  ngOnInit() {
    super.ngOnInit();
    this.model = new Branch();
    this.htmlModelId = '#branch-modal';
  }
  onSubmit() {
    super.onSubmit(this.model, this.model.branchId);
  }
  public ngOnChanges() {
    super.ngOnChanges();
  }
}
