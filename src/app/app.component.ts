import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './files/question-base';
import { QuestionService } from './service/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ QuestionService ]
})
export class AppComponent {
  title = 'dynamic-form';
  questions$: Observable<QuestionBase<any>[]>;
  constructor(
    service: QuestionService
  ){
    this.questions$ = service.getQuestions();
  }
}
