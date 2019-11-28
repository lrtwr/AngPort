import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;



@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit {
  private iframeUrl: string;

  constructor( private route: ActivatedRoute ){
    }

ngOnInit(){
this.iframeUrl=this.route.snapshot.queryParamMap.get("url");
this.iframeUrl="" + this.iframeUrl;
}
}

