import { defineComponent, computed, unref } from 'vue';
import { BasicDrawer } from '/@/components/Drawer/index';
import { Divider } from 'ant-design-vue';
import {
  ThemeColorPicker,
  SettingFooter, //底部按钮
  SwitchItem,
  InputNumberItem,
} from './components';
import { AppDarkModeToggle } from '/@/components/Application';

import { useRootSetting } from '/@/hooks/setting/useRootSetting';
import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';
import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
import { useMultipleTabSetting } from '/@/hooks/setting/useMultipleTabSetting';
import { useI18n } from '/@/hooks/web/useI18n';

import { HandlerEnum } from './enum';

import {
  HEADER_PRESET_BG_COLOR_LIST,
  SIDE_BAR_BG_COLOR_LIST,
  APP_PRESET_COLOR_LIST,
} from '/@/settings/designSetting';

const { t } = useI18n();

export default defineComponent({
  name: 'SettingDrawer',
  setup(_, { attrs }) {
    const {
      getShowBreadCrumb,
      getShowBreadCrumbIcon,
      getShowLogo,
      getFullContent,
      getShowDarkModeToggle,
      getThemeColor,
    } = useRootSetting();

    const {
      getIsHorizontal,
      getShowMenu,
      getCollapsedShowTitle,
      getMenuFixed,
      getCollapsed,
      getMenuWidth,
      getMenuBgColor,
      getIsMixSidebar,
    } = useMenuSetting();

    const {
      getShowHeader,
      getFixed: getHeaderFixed,
      getHeaderBgColor,
      getShowSearch,
    } = useHeaderSetting();

    const { getShowMultipleTab } = useMultipleTabSetting();

    const getShowMenuRef = computed(() => {
      return unref(getShowMenu) && !unref(getIsHorizontal);
    });

    //顶栏主题
    function renderHeaderTheme() {
      return (
        <ThemeColorPicker
          colorList={HEADER_PRESET_BG_COLOR_LIST}
          def={unref(getHeaderBgColor)}
          event={HandlerEnum.HEADER_THEME}
        />
      );
    }
    //主题菜单
    function renderSiderTheme() {
      return (
        <ThemeColorPicker
          colorList={SIDE_BAR_BG_COLOR_LIST}
          def={unref(getMenuBgColor)}
          event={HandlerEnum.MENU_THEME}
        />
      );
    }
    //系统主题
    function renderMainTheme() {
      return (
        <ThemeColorPicker
          colorList={APP_PRESET_COLOR_LIST}
          def={unref(getThemeColor)}
          event={HandlerEnum.CHANGE_THEME_COLOR}
        />
      );
    }

    /**
     * @description: 界面功能
     */
    function renderFeatures() {
      return (
        <>
          <SwitchItem
            title={t('layout.setting.menuCollapse')}
            event={HandlerEnum.MENU_COLLAPSED}
            def={unref(getCollapsed)}
            disabled={!unref(getShowMenuRef)}
          />

          <SwitchItem
            title={t('layout.setting.menuSearch')}
            event={HandlerEnum.HEADER_SEARCH}
            def={unref(getShowSearch)}
            disabled={!unref(getShowHeader)}
          />

          <SwitchItem
            title={t('layout.setting.collapseMenuDisplayName')}
            event={HandlerEnum.MENU_COLLAPSED_SHOW_TITLE}
            def={unref(getCollapsedShowTitle)}
            disabled={!unref(getShowMenuRef) || !unref(getCollapsed) || unref(getIsMixSidebar)}
          />

          <SwitchItem
            title={t('layout.setting.fixedHeader')}
            event={HandlerEnum.HEADER_FIXED}
            def={unref(getHeaderFixed)}
            disabled={!unref(getShowHeader)}
          />
          <SwitchItem
            title={t('layout.setting.fixedSideBar')}
            event={HandlerEnum.MENU_FIXED}
            def={unref(getMenuFixed)}
            disabled={!unref(getShowMenuRef) || unref(getIsMixSidebar)}
          />
          <InputNumberItem
            title={t('layout.setting.expandedMenuWidth')}
            max={600}
            min={100}
            step={10}
            event={HandlerEnum.MENU_WIDTH}
            disabled={!unref(getShowMenuRef)}
            defaultValue={unref(getMenuWidth)}
            formatter={(value: string) => `${parseInt(value)}px`}
          />
        </>
      );
    }
    //界面显示
    function renderContent() {
      return (
        <>
          <SwitchItem
            title={t('layout.setting.breadcrumb')}
            event={HandlerEnum.SHOW_BREADCRUMB}
            def={unref(getShowBreadCrumb)}
            disabled={!unref(getShowHeader)}
          />

          <SwitchItem
            title={t('layout.setting.breadcrumbIcon')}
            event={HandlerEnum.SHOW_BREADCRUMB_ICON}
            def={unref(getShowBreadCrumbIcon)}
            disabled={!unref(getShowHeader)}
          />

          <SwitchItem
            title={t('layout.setting.tabs')}
            event={HandlerEnum.TABS_SHOW}
            def={unref(getShowMultipleTab)}
          />

          <SwitchItem
            title={t('layout.setting.sidebar')}
            event={HandlerEnum.MENU_SHOW_SIDEBAR}
            def={unref(getShowMenu)}
            disabled={unref(getIsHorizontal)}
          />
          <SwitchItem
            title="Logo"
            event={HandlerEnum.SHOW_LOGO}
            def={unref(getShowLogo)}
            disabled={unref(getIsMixSidebar)}
          />
          <SwitchItem
            title={t('layout.setting.fullContent')}
            event={HandlerEnum.FULL_CONTENT}
            def={unref(getFullContent)}
          />
        </>
      );
    }
    return () => (
      <BasicDrawer
        {...attrs}
        title={t('layout.setting.drawerTitle')}
        width={330}
        class="setting-drawer"
      >
        {unref(getShowDarkModeToggle) && <Divider>{() => t('layout.setting.darkMode')}</Divider>}
        {unref(getShowDarkModeToggle) && <AppDarkModeToggle class="mx-auto" />}
        <Divider>{() => t('layout.setting.sysTheme')}</Divider>
        {renderMainTheme()}
        <Divider>{() => t('layout.setting.headerTheme')}</Divider>
        {renderHeaderTheme()}
        <Divider>{() => t('layout.setting.sidebarTheme')}</Divider>
        {renderSiderTheme()}
        <Divider>{() => t('layout.setting.interfaceFunction')}</Divider>
        {renderFeatures()}
        <Divider>{() => t('layout.setting.interfaceDisplay')}</Divider>
        {renderContent()}
        <Divider />
        <SettingFooter />
      </BasicDrawer>
    );
  },
});
