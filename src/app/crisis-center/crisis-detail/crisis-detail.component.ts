import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Crisis } from '../crisis';
import { CrisesService } from '../crises.service';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {
  crisis!: Crisis;
  editName = '';
  // 将这些服务作为私有变量添加到构造函数中
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    
    
    // 检索路由的参数
    this.route.data.subscribe(data => {
      const crisis: Crisis = data.crisis;
      console.log(data.crisis);
      this.editName = crisis.name;
      this.crisis = crisis;
    })
  }

  gotoCrises(){
    const crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', {
      id: crisisId,
      foo: 'foo'
    }],
    {
      relativeTo: this.route
    });
  }

  // 取消与保存，保存时更新实体对象，取消时放弃更改
  cancel(){
    this.gotoCrises();
  }
  save(){
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

}
