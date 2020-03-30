import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppComponent } from './../../app.component/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private thema: string;
  private cookieConsent = '0';
  private storage: any = window.localStorage;
  constructor( @Inject(DOCUMENT) private document, private appComponent: AppComponent) { }

  ngOnInit() {
    this.cookieConsent = window.localStorage.getItem('COOKIECONSENT');
    if (this.cookieConsent !== '1') { this.storage = window.sessionStorage; }
    this.thema = this.storage.getItem('thema');
    if ('' + this.thema !== '') {
      this.document.getElementById('thema').setAttribute('href', this.thema);
    } else {
      this.document.getElementById('thema').setAttribute('href', '../styles/stylelight.css');
    }
  }
  makeLight() {
    this.document.getElementById('thema').setAttribute('href', '../styles/stylelight.css');
    this.storage.setItem('thema', '../styles/stylelight.css');
  }
  makeDark() {
    this.document.getElementById('thema').setAttribute('href', '../styles/styledark.css');
    this.storage.setItem('thema', '../styles/styledark.css');
  }
}
