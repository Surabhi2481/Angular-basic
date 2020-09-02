import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-warning',
    templateUrl: './warning.component.html',
    styleUrls: ['./warning.component.css'],
    /*styles: [
    `
    p{
      padding: 20px;
      background-color: mistyrose;
      border: 1px solid red;
    }
    `
  ]*/
})
export class WarningComponent implements OnInit{
    text:string = 'warning component';

    constructor() { }

  ngOnInit(): void {
  }
}