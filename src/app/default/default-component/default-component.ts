import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DefaultApiService } from '../../services/default-api.service';

@Component({
  selector: 'app-default',
  templateUrl: './default-component.html',
  styleUrls: ['./default-component.css']
})
export class DefaultComponent<TModel> implements OnInit {
  models: any = [];
  selectedModel: TModel;
  selectedPurpose = '';
  private db: DefaultApiService<TModel>;

  constructor(
    public http: HttpClient,
    public apiURL
    ) {
    this.db = new DefaultApiService<TModel>(http, apiURL);
  }

  ngOnInit() {
    this.loadModels();
  }

  loadModels() {
    this.db.GetAll().subscribe((data: {}) => {
      this.models = data;
    });
  }

  deleteModel( model: TModel ) {
    this.selectedPurpose = 'delete';
    this.selectedModel = model;
  }

  CreateModel() {
    this.selectedPurpose = 'new';
  }

  editSelect(model: TModel) {
    this.selectedPurpose = 'edit';
    this.selectedModel = model;
  }
}
