import { HandlerEnum } from './enum';
import { updateHeaderBgColor, updateSidebarBgColor } from '/@/logics/theme/updateBackground';
import { updateColorWeak } from '/@/logics/theme/updateColorWeak';
import { updateGrayMode } from '/@/logics/theme/updateGrayMode';

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
    // case HandlerEnum.CHANGE_LAYOUT:
    //   const { mode, type, split } = value;
    //   const splitOpt = split === undefined ? { split } : {};

    //   return {
    //     menuSetting: {
    //       mode,
    //       type,
    //       collapsed: false,
    //       show: true,
    //       hidden: false,
    //       ...splitOpt,
    //     },
    //   };

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
    //菜单折叠按钮
    // case HandlerEnum.MENU_TRIGGER:
    //   return { menuSetting: { trigger: value } };

    //顶部菜单布局
    // case HandlerEnum.MENU_TOP_ALIGN:
    //   return { menuSetting: { topMenuAlign: value } };

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

    //混合菜单触发方式
    // case HandlerEnum.MENU_TRIGGER_MIX_SIDEBAR:
    //   return { menuSetting: { mixSideTrigger: value } };

    // ============动画==================
    //切换loading
    // case HandlerEnum.OPEN_PAGE_LOADING:
    //   appStore.setPageLoading(false);
    //   return { transitionSetting: { openPageLoading: value } };

    //动画类型
    // case HandlerEnum.ROUTER_TRANSITION:
    //   return { transitionSetting: { basicTransition: value } };

    //切换动画
    // case HandlerEnum.OPEN_ROUTE_TRANSITION:
    //   return { transitionSetting: { enable: value } };

    // 顶部进度条
    // case HandlerEnum.OPEN_PROGRESS:
    //   return { transitionSetting: { openNProgress: value } };

    // ============root==================
    // 全屏
    case HandlerEnum.FULL_CONTENT:
      return { fullContent: value };

    //内容区域宽度
    // case HandlerEnum.CONTENT_MODE:
    //   return { contentMode: value };

    // 显示面包屑
    case HandlerEnum.SHOW_BREADCRUMB:
      return { showBreadCrumb: value };

    // 显示面包屑图标
    case HandlerEnum.SHOW_BREADCRUMB_ICON:
      return { showBreadCrumbIcon: value };

    // 灰色模式
    case HandlerEnum.GRAY_MODE:
      updateGrayMode(value);
      return { grayMode: value };

    // 色弱模式
    case HandlerEnum.COLOR_WEAK:
      updateColorWeak(value);
      return { colorWeak: value };
    //显示 LOGO
    case HandlerEnum.SHOW_LOGO:
      return { showLogo: value };

    // ============标签页==================
    //显示 标签页快捷按钮
    // case HandlerEnum.TABS_SHOW_QUICK:
    //   return { multiTabsSetting: { showQuick: value } };

    //显示 标签页
    case HandlerEnum.TABS_SHOW:
      return { multiTabsSetting: { show: value } };

    //显示 标签页刷新按钮
    // case HandlerEnum.TABS_SHOW_REDO:
    //   return { multiTabsSetting: { showRedo: value } };

    //显示 标签页折叠按钮
    // case HandlerEnum.TABS_SHOW_FOLD:
    //   return { multiTabsSetting: { showFold: value } };

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
