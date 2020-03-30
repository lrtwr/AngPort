import { Observable } from 'rxjs';

export interface Idbservice<TModel> {

  Get(id: any): Observable<TModel>;

  Post(model: TModel): Observable<TModel>;

  Put(id: any, model: TModel): Observable<TModel>;

  Delete(id: any);
}
