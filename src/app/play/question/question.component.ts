import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  flag = "Joli drapeau";
  country = "Pays";
  qcm = false;
  nbOfQuestion = "10";
  currentQuestion = {
    id: "FRA",
    country: "France",
    capitalCity: "Paris",
    questionNb: "2"
  }

  constructor() { }

  ngOnInit(): void {

  }

}
