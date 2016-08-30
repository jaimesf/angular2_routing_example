import { Component, OnInit } from '@angular/core';


import { AppService } from './app.service';


@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  providers: [AppService ],
  styleUrls: ['app/app.component.css']
})

export class AppComponent implements OnInit{

  title:string;
  content: string;

  constructor(private appService:AppService){}

  ngOnInit(){
      this.title = 'Routing example';
      this.content = this.appService.getMessage();
  }

}
