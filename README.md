# 更新日志

**2021-09-06**：新增服务端渲染，使用 Express 框架进行服务端渲染
- 克隆项目
- 安装 npm 相关依赖
- 使用 `npm run dev:ssr --configuration=zh` 命令进行运行
- 修改 `dist/Angular-Tour-of-Heroes/browser/zh/index.html` 中的 `/zh/` 为 `./` 
- 在浏览器中输入 `http://localhost:4200/zh/index.html` 即可正常运行

# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
