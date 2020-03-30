import { Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngPort';
  largeIframeModalUrl = '';

  ngOnInit() { }

  showModal() {
    $(document).ready( () => {
      $('#large-iframe-modal').modal('show');
   });
  }

 public set setLargeIframeModalUrl(value: string) {
    this.largeIframeModalUrl = value;
    this.showModal();
  }
}
