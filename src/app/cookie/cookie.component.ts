import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {
  private cc: string = "COOKIECONSENT";
  private cookieConsent: string = "0";
  constructor() { }

  ngOnInit() {
    this.cookieConsent=window.localStorage.getItem(this.cc);
    if(this.cookieConsent==null){
      this.showModal();
  }
  }

  showModal() {
    $(document).ready(function () {
      $("#cookieModal").modal();
    });
  }

  acceptCookies() {
    window.localStorage.setItem(this.cc,"1")
    $("#cookieModal").modal('hide');
  }
  discardCookies() {
    window.localStorage.setItem(this.cc,"0");
    $("#cookieModal").modal('hide');
  }
  delCookies(){
    window.localStorage.removeItem(this.cc);
  }
}
