import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { AnaluzeViewComponent } from './analuze-view/analuze-view.component';
import { StarRatingModule } from 'angular-star-rating';
import { CompairComponent } from './compair/compair.component';
import { CompairViewComponent } from './compair-view/compair-view.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnalyzeComponent,
    AnaluzeViewComponent,
    CompairComponent,
    CompairViewComponent,
  ],
  imports: [
    BrowserModule,
    StarRatingModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
