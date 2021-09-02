import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { from, Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // 定义属性
  private heroesUrl = 'api/heroes';
  // 在请求中添加一个特殊的请求头
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  

  // 定义方法
  // 返回一个可观察对象的英雄列表
  getHeroes(): Observable<Hero[]>{
    // 当获取到英雄列表后发送一条消息
    this.messageService.add('HeroService: fetched heroes');
    // 使用管道扩展Observable的结果，并给它一个 catchError() 操作符用来拦截失败的Observable
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }
  // 获取指定的英雄
  getHero(id: number): Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    // 当获取到该英雄时向列表中发送一条消息
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  // 更新英雄详情界面的修改
  updateHero(hero: Hero): Observable<any>{
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  // 添加英雄
  addHero(hero: Hero): Observable<Hero>{
    // 使用post期待服务器为该英雄生成一个id，然后通过Observable返回给调用者
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    )
  }
  // 删除英雄
  deleteHero(id: number): Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    )
  }
  // 搜索英雄
  searchHeroes(term: string): Observable<Hero[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ? this.log(`found heroes matching "${term}"`) : this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    )
  }
  // 因为频繁调用messageService服务，所以放进一个log 方法中
  private log(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }
  // 处理HTTP请求出错
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  constructor(
    // 注入消息服务
    private messageService: MessageService,
    // 注入HTTP
    private http: HttpClient
  ) { }
}
