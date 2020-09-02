import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
  /*styles: [
    `
    p{
      padding: 20px;
      background-color: green;
      border: 1px green;
    }
    `
  ]*/
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
