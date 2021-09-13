import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { List } from 'src/domain/entities';
import { LISTS } from '../local-storage/local-storage.namespace';
import { LocalStorageService } from '../local-storage/local-storage.service';

type SpecialListUUID = 'today' | 'todo';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private current!: List;
  private lists: List[] = [];

  currentUuid: SpecialListUUID | string = 'today';
  currentUuid$ = new Subject<string>();
  current$ = new Subject<List>();
  lists$ = new Subject<List[]>();

  constructor(
    // 注入服务
    private localStorage: LocalStorageService
  ) { }
  
  private boradCast(): void{
    this.lists$.next(this.lists);
    this.current$.next(this.current);
    this.currentUuid$.next(this.currentUuid);
  }

  private persist(): void{
    this.localStorage.set(LISTS, this.lists);
  }

  private getByUuid(uuid: string): List{
    return this.lists.find(l => l._id === uuid)!
  }

  private update(list: List): void{
    const index = this.lists.findIndex(l => l._id === list._id);
    if(index === -1){
      this.lists.splice(index, 1, list);
      this.persist();
      this.boradCast();
    }
  }

  getCurrentListUuid(): SpecialListUUID | string{
    return this.currentUuid;
  }

  getAll(): void{
    this.lists = this.localStorage.getList(LISTS);
    this.boradCast();
  }

  setCurrentUuid(uuid: string): void{
    this.currentUuid = uuid;
    this.current = this.lists.find(l => l._id === uuid)!;
    this.boradCast();
  }

  add(title: string): void{
    const newList = new List(title);
    this.lists.push(newList);
    this.currentUuid = newList._id;
    this.current = newList;

    this.boradCast();
    this.persist();
  }

  rename(listUuid: string, title: string ){
    const list = this.getByUuid(listUuid);
    if(list){
      list.title = title;
      this.update(list);
    }
  }

  delete(uuid: string): void{
    const i = this.lists.findIndex(l => l._id === uuid);
    if(i !== -1){
      this.lists.splice(i, 1);
      this.currentUuid = this.lists.length ? this.lists[this.lists.length - 1]._id : this.currentUuid === 'today' ? 'today' : 'todo';
      this.boradCast();
      this.persist();
    }
  }
}
