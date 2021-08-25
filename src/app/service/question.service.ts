import { Injectable } from '@angular/core';
// 引入需要的包
import { of } from 'rxjs';
import { QuestionBase } from '../files/question-base';
import { DropdownQuestion } from '../files/question-dropdown';
import { TextboxQuestion } from '../files/question-textbox';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getQuestions(){
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: '勇敢评级：',
        options: [
          {
            key: 'solid',
            value: 'Solid'
          },
          {
            key: 'great',
            value: 'Great'
          },
          {
            key: 'good',
            value: 'Good'
          },
          {
            key: 'unproven',
            value: 'Unproven'
          }
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: '姓名：',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: '邮箱：',
        order: 2
      })
    ];

    return of(questions.sort((a,b) => a.order - b.order));
  }

  constructor() { }
}
