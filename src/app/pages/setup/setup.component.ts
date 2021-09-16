import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { USERNAME, INIT_FLAG, START_USING_DATE } from 'src/app/services/local-storage/local-storage.namespace';
import { getTodayTime } from 'src/utils/time';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor(
    // 注入服务
    private localStorage: LocalStorageService,
    private router: Router
  ) { }
  
  username!: string;
  // 完成初始化方法
  completeSetup(): void{
    this.localStorage.set(INIT_FLAG, true);
    this.localStorage.set(START_USING_DATE, getTodayTime());
    this.localStorage.set(USERNAME, this.username);
    this.router.navigateByUrl('/main');
  }

  ngOnInit(): void {
  }

}
