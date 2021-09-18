import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { USERNAME } from 'src/app/services/local-storage/local-storage.namespace';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

// 引入动画
import { setting } from './setting.animation';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  animations: [ setting ]
})
export class SettingComponent implements OnInit {

  username!: string;                // 用户名
  isDisabled: boolean = true;       // 输入框状态
  confirmModal?: NzModalRef;        // 确认对话框

  constructor(
    // 注入服务
    private router: Router,
    private localStorage: LocalStorageService,
    private message: NzMessageService,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
    // 获取本地存储的用户名
    this.username = this.localStorage.get(USERNAME);
  }

  // 返回主页
  goBack(){
    // 判断输入框是否为禁用，防止用户有修改未保存
    if(this.isDisabled === false){
      this.confirmModal = this.modal.confirm({
        nzTitle: '提示：',
        nzContent: '检测到您有输入未保存，请确认是否返回？',
        nzIconType: 'warning',
        nzOnOk: () => {
          this.router.navigateByUrl('/main');
        }
      })
    }else{
      this.router.navigateByUrl('/main');
    }
  }

  // 修改用户名
  changeName(){
    // 获取旧用户名
    const oldUserName = this.localStorage.get(USERNAME);
    if(this.isDisabled){
      // 修改
      this.isDisabled = false;
    }else{
      // 保存
      this.isDisabled = true;
      // 若用户进行修改则将修改存到本地存储中，若未进行修改则返回
      if(this.username !== oldUserName){
        this.localStorage.set(USERNAME, this.username);
        this.message.create('success', "用户名保存成功！")
      }else{
        return;
      }
    }
  }

  // 回车事件
  enter(e: any){
    if(e.code === 13 || e.code === 'Enter'){
      this.changeName();
    }
  }
}
