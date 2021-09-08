/*
 * 使用 localstorage 进行存储时最好使用命名空间来进行
 * 命名空间可以是应用名加模块名等形式
 */
// 全局的命名空间
export const GLOBAL_NAMESPACE = 'today.';

// app的命名空间
export const APP_INFO_NAMESPACE = GLOBAL_NAMESPACE + 'appInfo.';
export const INIT_FLAG = APP_INFO_NAMESPACE + 'initFlag';
export const START_USING_DATE = APP_INFO_NAMESPACE + 'startUsingDate';

// 用户的命名空间
export const USER_INFO_NAMESPACE = GLOBAL_NAMESPACE + 'userInfo.';
export const USERNAME = USER_INFO_NAMESPACE + 'username';
export const AVATAR_CODE = USER_INFO_NAMESPACE + 'avatarCode';

// ToDo的命名空间
export const TODO_NAMESPACE = GLOBAL_NAMESPACE + 'todo.';
export const TODOS = TODO_NAMESPACE + 'todos';

// 清单的命名空间
export const LIST_NAMESPACE = GLOBAL_NAMESPACE + 'list.';
export const LISTS = LIST_NAMESPACE + 'lists';

// 总结的命名空间
export const SUMMARY_NAMESPACE = GLOBAL_NAMESPACE + 'summary.';
export const LAST_SUMMARY_DATE = SUMMARY_NAMESPACE + 'lastSummaryDate';
export const SUMMARIES = SUMMARY_NAMESPACE + 'summaries';