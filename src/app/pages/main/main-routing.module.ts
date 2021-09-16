import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InitGuardService } from "src/app/services/init-guard/init-guard.service";
import { DetailComponent } from "./detail/detail.component";
import { MainComponent } from "./main.component";

const routes: Routes = [
    {
        path: 'main',
        component: MainComponent,
        // 设置路由守卫策略
        canActivate: [InitGuardService],
        // 设置子路由
        children: [
            {
                path: ':id',
                component: DetailComponent,
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule{ }