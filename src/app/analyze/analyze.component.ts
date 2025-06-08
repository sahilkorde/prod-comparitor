import { Component } from '@angular/core';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent {
  show: boolean = false;
  url: string = '';
  platfromname: string = '';

  Analyze(url: string, platform: string): void{
    this.url = url;
    this.platfromname = platform;
    this.show = !this.show;
  }
}
