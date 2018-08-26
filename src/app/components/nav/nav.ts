import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './nav.html',
  styleUrls: ['./nav.css']
})
export class Nav implements OnInit {

  constructor() { }

  ngOnInit() { }

  isSelected = 1;
  selected(e){
  	this.isSelected = e;
  }
}
