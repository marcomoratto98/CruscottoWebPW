import { Component } from '@angular/core';
declare let L;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hideMap=true;
  hideTable=true;
  title = 'cruscottoWeb';

  openMap(){
      this.hideMap = false;
      this.hideTable = true;   
  }

  openTable(){
    this.hideMap = true;
    this.hideTable = false;   
}

  ngOnInit(){
  }
}

