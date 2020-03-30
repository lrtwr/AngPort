import { Employee } from './../../models/employee';
import { HttpClient } from '@angular/common/http';
import { DefaultDetailComponent } from '../../default/default-detail/default-detail.component';
import { Component, OnInit, OnChanges, Inject } from '@angular/core';
import { AppConfig, AppConfigClass} from '../../Infra/app-config/app-config.module';

declare var $: any;

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent extends DefaultDetailComponent<Employee> implements OnInit, OnChanges {

  constructor(
    public http: HttpClient,
    @Inject (AppConfig) public config: AppConfigClass
    ) {
      super(http, config.apiEndpoint + '/Employees' );
  }
  ngOnInit() {
    super.ngOnInit();
    this.model = new Employee();
    this.htmlModelId = '#employee-modal';
  }
  onSubmit() {
    super.onSubmit(this.model, this.model.id);
  }
  public ngOnChanges() {
    super.ngOnChanges();
  }
}
