import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRouterModule} from './router/app-router.module';
import {IndexComponent } from './pages/index/index.component';
import {DemoComponent} from './pages/demo/demo.component';
import {HomeComponent} from './pages/home/home.component';
import { CardComponent } from './component/card/card.component';
/*
import { CardHeadComponent } from './component/card-hrader/card-hrader.component';
*/



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
      DemoComponent,
      HomeComponent,
    CardComponent

    /*
          CardHeadComponent
    */
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
