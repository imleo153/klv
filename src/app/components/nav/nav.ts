import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './nav.html',
  styleUrls: ['./nav.css']
})
export class Nav implements OnInit {

  constructor() { }

  ngOnInit() { }
	onSelect(): void {
		alert("asd");
		
	}

	$scope.selectMe = function (event){
		$(event.target).addClass('active');
	}
}
