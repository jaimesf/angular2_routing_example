import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { Router, ActivatedRoute  } from '@angular/router';
import { ExampleComponent } from './example/example.component'
import { OtherComponent } from './other/other.component'
import { MainComponent } from './main/main.component'




@NgModule({
  imports: [
      BrowserModule,
      routing,
  ],
  declarations: [
    AppComponent,
    ExampleComponent,
    OtherComponent,
    MainComponent
  ],
  providers : [appRoutingProviders],
  bootstrap : [AppComponent]

})
export class AppModule { }
