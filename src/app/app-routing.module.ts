import { Component, NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AnalyzeComponent } from "./analyze/analyze.component";
import { CompairComponent } from "./compair/compair.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'analyze', component: AnalyzeComponent },
  { path: 'compair', component: CompairComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
