import { Component } from '@angular/core';

@Component({
  selector: 'app-compair',
  templateUrl: './compair.component.html',
  styleUrls: ['./compair.component.css']
})
export class CompairComponent {
  show: boolean= false;
  compair():void{
    this.show = !this.show;
  }
}
