import {
  MenuTypeEnum,
  MenuModeEnum,
  // TriggerEnum,
  //  MixSidebarTriggerEnum
} from '/@/enums/menuEnum';
import {
  // ContentEnum,
  PermissionModeEnum,
  ThemeEnum,
  // RouterTransitionEnum,
  SettingButtonPositionEnum,
  SessionTimeoutProcessingEnum,
} from '/@/enums/appEnum';

import { CacheTypeEnum } from '/@/enums/cacheEnum';

export type LocaleType = 'zh_CN' | 'en' | 'ru' | 'ja' | 'ko';
//菜单设置
export interface MenuSetting {
  bgColor: string;
  fixed: boolean;
  collapsed: boolean;
  // canDrag: boolean;
  show: boolean;
  hidden: boolean;
  menuWidth: number;
  mode: MenuModeEnum;
  type: MenuTypeEnum;
  theme: ThemeEnum;
  // topMenuAlign: 'start' | 'center' | 'end';
  // trigger: TriggerEnum;
  // accordion: boolean;
  // closeMixSidebarOnChange: boolean;
  collapsedShowTitle: boolean;
  // mixSideTrigger: MixSidebarTriggerEnum;
  mixSideFixed: boolean;
}
//标签页设置
export interface MultiTabsSetting {
  cache: boolean;
  show: boolean;
  showQuick: boolean;
  canDrag: boolean;
  showRedo: boolean;
  showFold: boolean;
}
//头部设置
export interface HeaderSetting {
  bgColor: string;
  fixed: boolean;
  show: boolean;
  theme: ThemeEnum;
  // 全屏显示
  showFullScreen: boolean;
  // 是否显示锁屏
  useLockPage: boolean;
  // 显示文件按钮
  showDoc: boolean;
  // 显示消息中心按钮
  showNotice: boolean;
  showSearch: boolean;
}

export interface LocaleSetting {
  showPicker: boolean;
  // 当前语言
  locale: LocaleType;
  // 默认语言
  fallback: LocaleType;
  // 可用地区
  availableLocales: LocaleType[];
}
//动画配置
// export interface TransitionSetting {
//   //  是否打开页面切换动画
//   enable: boolean;
//   // 路由基本切换动画
//   basicTransition: RouterTransitionEnum;
//   // 是否打开页面切换加载
//   openPageLoading: boolean;
//   // 是否打开顶部进度条
//   openNProgress: boolean;
// }
//界面显示
export interface ProjectConfig {
  // 权限相关信息的存储位置
  permissionCacheType: CacheTypeEnum;
  // 是否显示配置按钮
  showSettingButton: boolean;
  // 是否显示主题切换按钮
  showDarkModeToggle: boolean;
  // 配置按钮显示的位置
  settingButtonPosition: SettingButtonPositionEnum;
  // Permission mode
  permissionMode: PermissionModeEnum;
  // 会话超时处理
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum;
  // 灰色模式
  // grayMode: boolean;
  // 色弱模式
  // colorWeak: boolean;
  // 主题颜色
  themeColor: string;

  // 主界面全屏显示，不显示菜单，顶部显示
  fullContent: boolean;
  // 内容宽度
  // contentMode: ContentEnum;
  // 是否显示logo
  showLogo: boolean;
  // 是否显示全局页脚
  showFooter: boolean;
  // menuType: MenuTypeEnum;
  headerSetting: HeaderSetting;
  // 菜单设置
  menuSetting: MenuSetting;
  // 标签页设置
  multiTabsSetting: MultiTabsSetting;
  // 动画配置
  // transitionSetting: TransitionSetting;
  // pageLayout 是否保持 keep-alive缓存
  openKeepAlive: boolean;
  // 锁屏时间
  lockTime: number;
  // 显示面包屑
  showBreadCrumb: boolean;
  // 显示面包屑icon
  showBreadCrumbIcon: boolean;
  // 使用 报错-处理-插件
  useErrorHandle: boolean;
  // 是否显示返回顶部
  useOpenBackTop: boolean;
  // 是否有可能嵌入iframe页面
  canEmbedIFramePage: boolean;
  // 切换接口时是否删除未关闭消息和通知
  closeMessageOnSwitch: boolean;
  // 切换接口时，是否取消已发送但未响应的http请求。
  removeAllHttpPending: boolean;
}

export interface GlobConfig {
  // Site title
  title: string;
  // Service interface url
  apiUrl: string;
  // Upload url
  uploadUrl?: string;
  //  Service interface url prefix
  urlPrefix?: string;
  // Project abbreviation
  shortName: string;
}
export interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string;
  // Service interface url
  VITE_GLOB_API_URL: string;
  // Service interface url prefix
  VITE_GLOB_API_URL_PREFIX?: string;
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string;
  // Upload url
  VITE_GLOB_UPLOAD_URL?: string;
}
