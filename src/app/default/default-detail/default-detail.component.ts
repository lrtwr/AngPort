import { HttpClient } from '@angular/common/http';
import { DefaultApiService } from '../../services/default-api.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-default-detail',
  templateUrl: './default-detail.component.html',
  styleUrls: ['./default-detail.component.css']
})

export class DefaultDetailComponent<TModel> implements OnInit, OnChanges {
  @Input() model: TModel ;
  @Input() purpose: string;
  confirmText = '';
  htmlModelId = '';
  modelService: DefaultApiService<TModel>;

  constructor(
    public http: HttpClient,
    private apiURL: string
    ) { }

  ngOnInit() {
    this.modelService = new DefaultApiService<TModel>(this.http, this.apiURL);
  }

  public ngOnChanges() {
    this.confirmText = this.purpose === 'delete' ? 'Delete' : 'Save';
    if (this.purpose !== '') {
      $(document).ready(() => {
        $(this.htmlModelId).modal('show');
      });
    }
  }

  onSubmit(model: TModel, id: any) {
    let ret: any;
    $(this.htmlModelId).modal('hide');

    switch (this.purpose.toUpperCase().trim()) {
      case 'DELETE':
        this.modelService.Delete(id).subscribe(data => { ret = data; });
        break;
      case 'NEW':
        this.modelService.Post(model).subscribe(data => { ret = data; });
        break;
      case 'EDIT':
        this.modelService.Put(id, model).subscribe(data => { ret = data; });
        break;
    }
  }
}
