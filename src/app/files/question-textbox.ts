// 表示一个普通问题，允许用户输入答案
// 该控件使用 input 元素表示在模板中，而 type 属性根据 options 参数中指定的 type 字段进行定义
import { QuestionBase } from "./question-base";
export class TextboxQuestion extends QuestionBase<string>{
    controlType = 'textbox';
}