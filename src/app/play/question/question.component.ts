import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AnswerOption{
  answerId: number,
  capital: string,
}

export interface QuestionQCM{
  id: string,
  country: string,
  answers: AnswerOption,
  capital: string;
  }

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
  questionNb = "2";
  answerOption : AnswerOption = { answerId: 0, capital: "Rome"}
  currentQuestion :QuestionQCM = {
    id: "FRA",
    country: "France",
    answers : this.answerOption,
    capital: "Paris"
  }

  constructor(private http:HttpClient) {
    const question:Observable<QuestionQCM> = this.http.get<QuestionQCM>('http://127.0.0.1:8080/question/');
    question.subscribe(question => {
      this.currentQuestion = question;
      console.log(this.currentQuestion);
    });

  }

  ngOnInit(): void {
  }

}
