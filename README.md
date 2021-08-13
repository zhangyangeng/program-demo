# 项目介绍

本项目是根据 **Angular** 官网的**快速上手**进行构建

项目搭建了一个简单的电商购物平台供初学者进行练手使用

[Angular CLI](https://github.com/angular/angular-cli) 版本为 12.2.1

# 已知问题

以下问题在本源码中已经解决，可直接食用

## products.ts问题

如果你跟着官网的步骤走，你会发现你在 `products.ts` 那里会卡住，这是因为该文件中少了一部分代码，需要导出一个 `Product` 接口

## app.module.ts问题

如果你使用官网给的在线IDE进行练习，你会发现生成的组件并没有在该文件中进行引入，需要自己手动引入

## cart.service.ts问题

在服务那一部分，官网给出的代码并没有引入 `Product` 需要自己手动引入

# 如何运行

将源码克隆到本地

使用 `npm install` 安装本项目的相关依赖

使用 `ng serve` 启动服务，启动成功后可直接输入 `http://localhost:4200/` 进行查看

使用 `ng build` 构建项目，构建好的项目在 `dist` 文件夹下
