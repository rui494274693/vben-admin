import { ContentEnum, RouterTransitionEnum } from '/@/enums/appEnum';
import // MenuModeEnum,
// MenuTypeEnum,
// TopMenuAlignEnum,
// TriggerEnum,
// MixSidebarTriggerEnum,
'/@/enums/menuEnum';

import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

export enum HandlerEnum {
  // CHANGE_LAYOUT, //导航栏模式
  CHANGE_THEME_COLOR, //系统主题
  CHANGE_THEME,
  // 菜单
  // MENU_TRIGGER, //菜单折叠按钮
  // MENU_TOP_ALIGN, //顶部菜单布局
  MENU_COLLAPSED, //折叠菜单
  MENU_COLLAPSED_SHOW_TITLE, // 折叠菜单显示名称
  MENU_WIDTH, // 菜单展开宽度
  MENU_SHOW_SIDEBAR, // 显示 左侧菜单
  MENU_THEME, //
  MENU_SPLIT, //
  MENU_FIXED, // 固定菜单
  // MENU_TRIGGER_MIX_SIDEBAR, //混合菜单触发方式

  // 头部
  HEADER_THEME, //顶栏主题
  HEADER_FIXED, //固定头部

  HEADER_SEARCH, //菜单搜索

  // TABS_SHOW_QUICK, //显示 标签页快捷按钮
  // TABS_SHOW_REDO, //显示 标签页刷新按钮
  TABS_SHOW, //显示 标签页
  // TABS_SHOW_FOLD, //显示 标签页折叠按钮

  FULL_CONTENT, // 全屏
  // CONTENT_MODE, //内容区域宽度
  SHOW_BREADCRUMB, // 显示面包屑
  SHOW_BREADCRUMB_ICON, // 显示面包屑图标
  GRAY_MODE, // 灰色模式
  COLOR_WEAK, // 色弱模式
  SHOW_LOGO, //显示 LOGO

  // ROUTER_TRANSITION, //动画类型
  // OPEN_PROGRESS, // 顶部进度条
  // OPEN_PAGE_LOADING, //切换loading
  // OPEN_ROUTE_TRANSITION, //切换动画
}
//内容区域宽度
export const contentModeOptions = [
  {
    value: ContentEnum.FULL,
    label: t('layout.setting.contentModeFull'),
  },
  // {
  //   value: ContentEnum.FIXED,
  //   label: t('layout.setting.contentModeFixed'),
  // },
];
//顶部菜单布局
// export const topMenuAlignOptions = [
//   {
//     value: TopMenuAlignEnum.CENTER,
//     label: t('layout.setting.topMenuAlignRight'),
//   },
//   {
//     value: TopMenuAlignEnum.START,
//     label: t('layout.setting.topMenuAlignLeft'),
//   },
//   {
//     value: TopMenuAlignEnum.END,
//     label: t('layout.setting.topMenuAlignCenter'),
//   },
// ];
//菜单折叠按钮
// export const getMenuTriggerOptions = (hideTop: boolean) => {
//   return [
//     // {
//     //   value: TriggerEnum.NONE,
//     //   label: t('layout.setting.menuTriggerNone'),
//     // },
//     // {
//     //   value: TriggerEnum.FOOTER,
//     //   label: t('layout.setting.menuTriggerBottom'),
//     // },
//     ...(hideTop
//       ? []
//       : [
//           {
//             value: TriggerEnum.HEADER,
//             label: t('layout.setting.menuTriggerTop'),
//           },
//         ]),
//   ];
// };
//动画类型
// export const routerTransitionOptions = [
//   RouterTransitionEnum.ZOOM_FADE,
//   RouterTransitionEnum.FADE,
//   RouterTransitionEnum.ZOOM_OUT,
//   RouterTransitionEnum.FADE_SIDE,
//   RouterTransitionEnum.FADE_BOTTOM,
//   RouterTransitionEnum.FADE_SCALE,
// ].map((item) => {
//   return {
//     label: item,
//     value: item,
//   };
// });
//导航栏模式
// export const menuTypeList = [
//   {
//     title: t('layout.setting.menuTypeSidebar'),
//     mode: MenuModeEnum.INLINE,
//     type: MenuTypeEnum.SIDEBAR,
//   },
//   {
//     title: t('layout.setting.menuTypeMix'),
//     mode: MenuModeEnum.INLINE,
//     type: MenuTypeEnum.MIX,
//   },

//   {
//     title: t('layout.setting.menuTypeTopMenu'),
//     mode: MenuModeEnum.HORIZONTAL,
//     type: MenuTypeEnum.TOP_MENU,
//   },
//   {
//     title: t('layout.setting.menuTypeMixSidebar'),
//     mode: MenuModeEnum.INLINE,
//     type: MenuTypeEnum.MIX_SIDEBAR,
//   },
// ];
//混合菜单触发方式
// export const mixSidebarTriggerOptions = [
//   {
//     value: MixSidebarTriggerEnum.HOVER,
//     label: t('layout.setting.triggerHover'),
//   },
//   {
//     value: MixSidebarTriggerEnum.CLICK,
//     label: t('layout.setting.triggerClick'),
//   },
// ];
