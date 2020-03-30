import { Idbservice } from './Idbservice';
import { Injectable } from '@angular/core';
import { SqlClient } from 'msnodesqlv8';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

const sql: SqlClient = require('msnodesqlv8');

export class DefaultSQLServerService<TModel> implements Idbservice<TModel> {
  // private sql = require('msnodesqlv8');
  private columns = '*';
  private filter =  '';

  constructor(public connectionString: string, public tableName: string, public keyColumn: string) {
  }

  GetAll(): Observable<TModel> {
    return this.ExecuteSelectStatement();
  }

  Get(id: any): Observable<TModel> {
    return this.ExecuteSelectStatement(this.keyColumn + '=' + id);
  }

  Post(model: TModel): Observable<TModel> {
    const statement = 'insert into ' + this.tableName + '';
    return this.ExecuteStatement(statement);
  }

  Put(id: any, model: TModel): Observable<TModel> {
    const statement = 'Update into ' + this.tableName + '';
    return this.ExecuteStatement(statement);
  }

  Delete(id: any) {
    const statement = 'delete ' + this.tableName + ' where ' + this.keyColumn + ' = ' + id;
    return this.ExecuteStatement(statement);
  }

  ExecuteStatement(statement: string){
    return this.sql.query(this.connectionString, statement, ( err, rows) => {
      console.log(err);
      catchError(err);
      return rows;
    });
  }

  ExecuteSelectStatement(columns?: string, where?: string) {
    return this.ExecuteStatement(this.getSelectStatement(columns, where));
  }

  getSelectStatement( columns?: string, where?: string) {
    let statement = 'Select ';
    statement += columns ? columns : this.columns;
    statement += where ? ' where ' + where : '';
    return statement;
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}


