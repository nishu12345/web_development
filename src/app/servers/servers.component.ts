import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // templateUrl: './servers.component.html',
  template: `
    <h3>I am Servers Template</h3>
    <app-server></app-server>
    <app-server></app-server>
  `,
  // styleUrls: ['./servers.component.css']
  styles: [
    `h3 {
      color: dodgerblue;
    }`
  ]
})
export class ServersComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
