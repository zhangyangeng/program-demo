/*
 * 本文件用于声明本系统需要的实体类
 * 包含 List类和 Todo类
 */

// 引入创建 uuid 的方法
import { generateUUID } from '../utils/uuid';

// 声明Todo类
export class Todo{
    _id!: string;
    title!: string;
    createdAt!: number;
    listUUID!: string;
    desc!: string;
    completedFlag!: boolean;
    completedAt!: number;
    dueAt!: number;
    planAt!: number;
    notifyMe = false;

    constructor(title: string, listUUID?: string){
        this._id = generateUUID();
        this.title = title;
        this.listUUID = listUUID!;
        this.completedFlag = false;
    }
}

// 声明List类
export class List{
    _id!: string;
    title!: string;
    createdAt!: number;

    constructor(title: string){
        this._id = generateUUID();
        this.title = title;
    }
}

// 声明Summary类
export class Summary{
    _id!: string;
    date!: number;
    completedTodos!: string[];
    cCount = 0;
    uncompletedTodos!: string[];
    uCount = 0;

    constructor(date: number, cItems: string[], uItems: string[]){
        this.date = date;
        this.completedTodos = cItems;
        this.uncompletedTodos = uItems;
        this.cCount = this.completedTodos.length;
        this.uCount = this.uncompletedTodos.length;
    }
}