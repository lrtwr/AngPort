import { Employee } from './../../models/employee';
import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DefaultComponent } from '../../default/default-component/default-component';
import { AppConfig, AppConfigClass} from '../../Infra/app-config/app-config.module';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent extends DefaultComponent<Employee> implements OnInit {
  TModel = Employee;
  constructor(
    public http: HttpClient,
    @Inject (AppConfig) public config: AppConfigClass
    ) {
      super(http, config.apiEndpoint + '/Employees' );
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

