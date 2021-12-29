<template>
  <Header :class="getHeaderClass">
    <!-- 顶部左侧 -->
    <div :class="`${prefixCls}-left`">
      <!-- 切换布局菜单宽度按钮 -->
      <LayoutTrigger :theme="getHeaderTheme" :sider="false" />
      <!--  LayoutBreadcrumb 面包屑 -->
      <LayoutBreadcrumb v-if="getShowContent && getShowBread" :theme="getHeaderTheme" />
    </div>
    <!-- 顶部左侧 end -->

    <!-- 顶部右侧功能  -->
    <div :class="`${prefixCls}-action`">
      <!-- AppSearch 搜索功能 可删 -->
      <AppSearch :class="`${prefixCls}-action__item `" v-if="getShowSearch" />

      <!-- <ErrorAction v-if="getUseErrorHandle" :class="`${prefixCls}-action__item error-action`" /> -->
      <!--FullScreen 全屏-->
      <FullScreen v-if="getShowFullScreen" :class="`${prefixCls}-action__item fullscreen-item`" />
      <!-- AppLocalePicker 切换中英文 -->
      <AppLocalePicker
        v-if="getShowLocalePicker"
        :reload="true"
        :showText="false"
        :class="`${prefixCls}-action__item`"
      />
      <!-- 用户信息下拉菜单 -->
      <UserDropDown :theme="getHeaderTheme" />
      <!-- 项目、布局、主题配置 -->
      <SettingDrawer  :class="`${prefixCls}-action__item`" />
    </div>
  </Header>
</template>
<script lang="ts">
  import { defineComponent, unref, computed, onMounted } from 'vue';

  import { propTypes } from '/@/utils/propTypes';

  import { Layout } from 'ant-design-vue';
  import LayoutTrigger from '../trigger/index.vue';

  import { AppSearch } from '/@/components/Application';

  import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
  import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';
  import { useRootSetting } from '/@/hooks/setting/useRootSetting';

  import { SettingButtonPositionEnum } from '/@/enums/appEnum';
  import { AppLocalePicker } from '/@/components/Application';

  import {
    UserDropDown,
    LayoutBreadcrumb,
    FullScreen,
    // ErrorAction
  } from './components';
  import { useAppInject } from '/@/hooks/web/useAppInject';
  import { useDesign } from '/@/hooks/web/useDesign';

  import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent';
  import { useLocale } from '/@/locales/useLocale';

  export default defineComponent({
    name: 'LayoutHeader',
    components: {
      Header: Layout.Header,
      LayoutTrigger,
      LayoutBreadcrumb,
      UserDropDown,
      AppLocalePicker,
      FullScreen,
      AppSearch,
      // ErrorAction,
      SettingDrawer: createAsyncComponent(() => import('/@/layouts/default/setting/index.vue'), {
        loading: true,
      }),
    },
    props: {
      fixed: propTypes.bool,
    },
    setup(props) {
      const { prefixCls } = useDesign('layout-header');
      const {
        // getShowTopMenu,
        // getShowHeaderTrigger,
        // getSplit,
        // getIsMixMode,
        // getMenuWidth,
        // getIsMixSidebar,
      } = useMenuSetting();
      const {
        // getUseErrorHandle,
        getShowSettingButton,
        getSettingButtonPosition,
      } = useRootSetting();

      const {
        getHeaderTheme,
        getShowFullScreen,
        getShowNotice,
        getShowContent,
        getShowBread,
        getShowHeaderLogo,
        getShowHeader,
        getShowSearch,
      } = useHeaderSetting();

      const { getShowLocalePicker } = useLocale();

      const { getIsMobile } = useAppInject();

      const getHeaderClass = computed(() => {
        const theme = unref(getHeaderTheme);
        return [
          prefixCls,
          {
            [`${prefixCls}--fixed`]: props.fixed,
            [`${prefixCls}--mobile`]: unref(getIsMobile),
            [`${prefixCls}--${theme}`]: theme,
          },
        ];
      });

      const getShowSetting = computed(() => {
        if (!unref(getShowSettingButton)) {
          return false;
        }
        const settingButtonPosition = unref(getSettingButtonPosition);

        if (settingButtonPosition === SettingButtonPositionEnum.AUTO) {
          return unref(getShowHeader);
        }
        return settingButtonPosition === SettingButtonPositionEnum.HEADER;
      });

      // const getLogoWidth = computed(() => {
      //   if (!unref(getIsMixMode) || unref(getIsMobile)) {
      //     return {};
      //   }
      //   const width = unref(getMenuWidth) < 180 ? 180 : unref(getMenuWidth);
      //   return { width: `${width}px` };
      // });

      // const getSplitType = computed(() => {
      //   return unref(getSplit) ? MenuSplitTyeEnum.TOP : MenuSplitTyeEnum.NONE;
      // });

      // const getMenuMode = computed(() => {
      //   return unref(getSplit) ? MenuModeEnum.HORIZONTAL : null;
      // });
      onMounted(() => {
        // console.log(getShowHeaderTrigger.value);
        // console.log(getSplit.value);
      });
      return {
        prefixCls,
        getHeaderClass,
        getShowHeaderLogo,
        getHeaderTheme,
        // getShowHeaderTrigger,
        getIsMobile,
        getShowBread,
        getShowContent,
        // getSplitType,
        // getSplit,
        // getMenuMode,
        // getShowTopMenu,
        getShowLocalePicker,
        getShowFullScreen,
        getShowNotice,
        // getUseErrorHandle,
        // getLogoWidth,
        // getIsMixSidebar,
        getShowSettingButton,
        getShowSetting,
        getShowSearch,
      };
    },
  });
</script>
<style lang="less">
  @import './index.less';
</style>
