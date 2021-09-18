import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { SummaryService } from './summary.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { START_USING_DATE, USERNAME } from 'src/app/services/local-storage/local-storage.namespace';
import { getTodayTime, ONE_DAY } from 'src/utils/time';
import { Summary } from 'src/domain/entities';
import { pageSwitchTransition } from './summary.animation';



@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  animations: [pageSwitchTransition]
})
export class SummaryComponent implements OnInit {

  username = this.localStorage.get(USERNAME) || 'username';
  dateCount = Math.floor((getTodayTime() - this.localStorage.get(START_USING_DATE)) / ONE_DAY + 1);

  @HostBinding('@pageSwitchTransition') private state = 'activated';

  constructor(
    // 注入服务
    private summaryService: SummaryService,
    private localStorage: LocalStorageService,
    private router: Router,
    private noti: NzNotificationService
  ) { }

  ngOnInit(): void {
    this.summaryService.doSummary();
  }

  requestForDate(date: Date): Summary | null{
    return this.summaryService.summaryForDate(date.getTime());
  }

  showSummaryDetail(summary: Summary): void{
    if(!summary){
      return;
    }
    const { cCount, uCount } = summary;
    if(uCount){
      this.noti.error('有未完成的项目', `你完成了全部任务的 ${cCount/(cCount + uCount)}%`);
    }else if(cCount){
      this.noti.success('完成了这一天的全部任务', '干的漂亮');
    }
  }

  goBack(): void{
    this.router.navigateByUrl('/main');
  }
}
