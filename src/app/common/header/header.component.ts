import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  websiteName = "Quizz";
  imgSrc = '../../assets/img/earth-globe-with-continents-maps.png';
  connected = true;

  constructor() { }

  ngOnInit(): void {
  }

}