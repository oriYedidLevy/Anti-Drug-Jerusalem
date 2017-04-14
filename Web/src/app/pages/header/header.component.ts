import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  newsData:string[];
  curr:string;
  index:number;
  constructor() { 
    this.index = 0;
    this.newsData = ['מספר נערים נצפו בקרית יובל','מקרה אונס חמור בקריות', 'תה חם הועבר לילדים'];
    this.curr = this.newsData[0];
    var that = this;

    setInterval(function(){
      that.index++;
      that.curr = that.newsData[that.index%that.newsData.length];
    },3000)
  }

  ngOnInit() {
  }

}
