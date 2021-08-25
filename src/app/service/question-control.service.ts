import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../files/question-base';

// 该服务会收集一组 FormGroup 实例，这些实例会消费问题模型中的元数据
@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }
  toFormGroup(questions: QuestionBase<string>[]){
    const group: any = {};
    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required) : new FormControl(question.value || '');
    })
    return new FormGroup(group);
  }
}
