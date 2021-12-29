import { ContentEnum } from '/@/enums/appEnum';

import { useI18n } from '/@/hooks/web/useI18n';

const { t } = useI18n();

export enum HandlerEnum {
  CHANGE_THEME_COLOR, //系统主题
  CHANGE_THEME,
  // 菜单
  MENU_COLLAPSED, //折叠菜单
  MENU_COLLAPSED_SHOW_TITLE, // 折叠菜单显示名称
  MENU_WIDTH, // 菜单展开宽度
  MENU_SHOW_SIDEBAR, // 显示 左侧菜单
  MENU_THEME, //
  MENU_FIXED, // 固定菜单

  // 头部
  HEADER_THEME, //顶栏主题
  HEADER_FIXED, //固定头部

  HEADER_SEARCH, //菜单搜索

  TABS_SHOW, //显示 标签页

  FULL_CONTENT, // 全屏
  SHOW_BREADCRUMB, // 显示面包屑
  SHOW_BREADCRUMB_ICON, // 显示面包屑图标
  SHOW_LOGO, //显示 LOGO
}
//内容区域宽度
export const contentModeOptions = [
  {
    value: ContentEnum.FULL,
    label: t('layout.setting.contentModeFull'),
  },
];
