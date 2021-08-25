// 表示在选择框中的一个选项列表
import { QuestionBase } from "./question-base";

export class DropdownQuestion extends QuestionBase<string>{
    controlType = 'dropdown';
}