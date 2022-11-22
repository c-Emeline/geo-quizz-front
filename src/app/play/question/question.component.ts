import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AnswerOption{
  Id: number,
  optionText: string,
}

export interface QuestionQCM{
  title: string,
  code_country: string,
  options: AnswerOption[],
  optionCorrect: string;
  }

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  nbOfQuestion = 10;
  questionNb = 1;
  widthC = "50px";
  percentage = (this.questionNb*100/this.nbOfQuestion).toString();

  //quizz settings
  qcm = false;
  //continent = null;
  
  goodAnswers = 0;
  answerOption : AnswerOption[] = [
    { Id: 1, optionText: "Rome"}, 
    { Id: 2, optionText: "Paris"}, 
    { Id: 3, optionText: "Londres"}, 
    { Id: 4, optionText: "Prague"}];

  currentQuestion :QuestionQCM = {
    title: "France",
    code_country: "FRA",
    options: this.answerOption,
    optionCorrect: "Paris"
  }

  constructor(private http:HttpClient) {

    //instantiate Quizz
    //this.changeQuestion();

  }

  ngOnInit(): void {
  }

  skip(event: Event): void{
    if (this.questionNb<this.nbOfQuestion){
      this.changeQuestion();
      console.log("skipped");
    }
    
  }

  validate(event: Event, chosenOption: String): void{
    if (this.currentQuestion.optionCorrect== chosenOption){
      //TODO turn button green
      //TODO turn other buttons disabled
      //TODO passer button animation
      this.goodAnswers++;
      if (this.questionNb<this.nbOfQuestion){
        this.changeQuestion();
      }
    }


  }

  changeQuestion(): void{
    let question =this.http.post<QuestionQCM>('http://localhost:4200/api/question/', this.questionNb);
    question.subscribe(question => { 
      this.currentQuestion = question; 
      this.answerOption = question.options;
      console.log(this.currentQuestion); 
    });   

    console.log("Question changed");

    /*this.answerOption = [
      { Id: 1, optionText: "Rome"}, 
      { Id: 2, optionText: "Lima"}, 
      { Id: 3, optionText: "Londres"}, 
      { Id: 4, optionText: "Prague"}]
    this.currentQuestion = {
      title: "Pérou",
      code_country: "PER",
      options: this.answerOption,
      optionCorrect: "Lima"
    }*/
    this.questionNb++;
    
  }



  

}
