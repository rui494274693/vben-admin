import { HandlerEnum } from './enum';
import { updateHeaderBgColor, updateSidebarBgColor } from '/@/logics/theme/updateBackground';

import { useAppStore } from '/@/store/modules/app';
import { ProjectConfig } from '/#/config';
import { changeTheme } from '/@/logics/theme';
import { updateDarkTheme } from '/@/logics/theme/dark';
import { useRootSetting } from '/@/hooks/setting/useRootSetting';

export function baseHandler(event: HandlerEnum, value: any) {
  const appStore = useAppStore();
  const config = handler(event, value);
  appStore.setProjectConfig(config);
  if (event === HandlerEnum.CHANGE_THEME) {
    updateHeaderBgColor();
    updateSidebarBgColor();
  }
}

export function handler(event: HandlerEnum, value: any): DeepPartial<ProjectConfig> {
  const appStore = useAppStore();

  const { getThemeColor, getDarkMode } = useRootSetting();
  switch (event) {
    //系统主题
    case HandlerEnum.CHANGE_THEME_COLOR:
      if (getThemeColor.value === value) {
        return {};
      }
      changeTheme(value);

      return { themeColor: value };

    case HandlerEnum.CHANGE_THEME:
      if (getDarkMode.value === value) {
        return {};
      }
      updateDarkTheme(value);

      return {};

    //折叠菜单
    case HandlerEnum.MENU_COLLAPSED:
      return { menuSetting: { collapsed: value } };

    // 菜单展开宽度
    case HandlerEnum.MENU_WIDTH:
      return { menuSetting: { menuWidth: value } };

    // 显示 左侧菜单
    case HandlerEnum.MENU_SHOW_SIDEBAR:
      return { menuSetting: { show: value } };

    // 折叠菜单显示名称
    case HandlerEnum.MENU_COLLAPSED_SHOW_TITLE:
      return { menuSetting: { collapsedShowTitle: value } };

    case HandlerEnum.MENU_THEME:
      updateSidebarBgColor(value);
      return { menuSetting: { bgColor: value } };

    // 固定菜单
    case HandlerEnum.MENU_FIXED:
      return { menuSetting: { fixed: value } };

    // ============root==================
    // 全屏
    case HandlerEnum.FULL_CONTENT:
      return { fullContent: value };

    // 显示面包屑
    case HandlerEnum.SHOW_BREADCRUMB:
      return { showBreadCrumb: value };

    // 显示面包屑图标
    case HandlerEnum.SHOW_BREADCRUMB_ICON:
      return { showBreadCrumbIcon: value };

    //显示 LOGO
    case HandlerEnum.SHOW_LOGO:
      return { showLogo: value };

    // ============标签页==================

    //显示 标签页
    case HandlerEnum.TABS_SHOW:
      return { multiTabsSetting: { show: value } };
    // ============头部==================
    //顶栏主题
    case HandlerEnum.HEADER_THEME:
      updateHeaderBgColor(value);
      return { headerSetting: { bgColor: value } };

    //菜单搜索
    case HandlerEnum.HEADER_SEARCH:
      return { headerSetting: { showSearch: value } };

    //固定头部
    case HandlerEnum.HEADER_FIXED:
      return { headerSetting: { fixed: value } };

    default:
      return {};
  }
}
