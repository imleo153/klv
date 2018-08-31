import { Component,OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
LineChart=[];
  DoughnutChart=[];
	ngOnInit(){
		// Line chart:
		this.LineChart = new Chart('lineChart', {
		  type: 'line',
		data: {
		 labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
		 datasets: [{
		     label: 'Number of Items Sold in Months',
		     data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
		     fill:false,
		     lineTension:0.2,
		     borderColor:"red",
		     borderWidth: 1
		 }]
		}, 
		options: {
		 title:{
		     text:"Line Chart",
		     display:true
		 },
		 scales: {
		     yAxes: [{
		         ticks: {
		             beginAtZero:true
		         }
		     }]
		 }
		}
		});

		this.DoughnutChart = new Chart('SkillsChart', {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [10,30,60,20],
					backgroundColor: ["#F00","#026df3","#3fff45","#F90"],
					borderColor: ["transparent","transparent","transparent","transparent"],
					borderWidth: [0,0,0,0]
				}],
				labels: [
					'Angular',
					'JQuery',
					'PHP',
					'CSS'
				]
			};

		});
	}
}