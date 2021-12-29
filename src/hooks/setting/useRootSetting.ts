import type { ProjectConfig } from '/#/config';

import { computed } from 'vue';

import { useAppStore } from '/@/store/modules/app';
import { ThemeEnum } from '/@/enums/appEnum';

type RootSetting = Omit<
  ProjectConfig,
  'locale' | 'headerSetting' | 'menuSetting' | 'multiTabsSetting'
>;

export function useRootSetting() {
  const appStore = useAppStore();

  const getPageLoading = computed(() => appStore.getPageLoading);

  const getOpenKeepAlive = computed(() => appStore.getProjectConfig.openKeepAlive);

  const getSettingButtonPosition = computed(() => appStore.getProjectConfig.settingButtonPosition);

  const getCanEmbedIFramePage = computed(() => appStore.getProjectConfig.canEmbedIFramePage);

  const getPermissionMode = computed(() => appStore.getProjectConfig.permissionMode);

  const getShowLogo = computed(() => appStore.getProjectConfig.showLogo);

  const getUseOpenBackTop = computed(() => appStore.getProjectConfig.useOpenBackTop);

  const getShowSettingButton = computed(() => appStore.getProjectConfig.showSettingButton);

  const getShowBreadCrumb = computed(() => appStore.getProjectConfig.showBreadCrumb);

  const getThemeColor = computed(() => appStore.getProjectConfig.themeColor);

  const getShowBreadCrumbIcon = computed(() => appStore.getProjectConfig.showBreadCrumbIcon);

  const getFullContent = computed(() => appStore.getProjectConfig.fullContent);

  const getShowDarkModeToggle = computed(() => appStore.getProjectConfig.showDarkModeToggle);

  const getDarkMode = computed(() => appStore.getDarkMode);

  function setRootSetting(setting: Partial<RootSetting>) {
    appStore.setProjectConfig(setting);
  }

  function setDarkMode(mode: ThemeEnum) {
    appStore.setDarkMode(mode);
  }
  return {
    setRootSetting,
    getSettingButtonPosition,
    getFullContent,
    getPageLoading,
    getOpenKeepAlive,
    getCanEmbedIFramePage,
    getPermissionMode,
    getShowLogo,
    getShowBreadCrumb,
    getShowBreadCrumbIcon,
    getUseOpenBackTop,
    getShowSettingButton,
    getThemeColor,
    getDarkMode,
    setDarkMode,
    getShowDarkModeToggle,
  };
}
