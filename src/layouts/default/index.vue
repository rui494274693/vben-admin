<template>
  <Layout :class="prefixCls">
    <!-- <LayoutFeatures /> -->
    <!-- <LayoutHeader fixed v-if="getShowFullHeaderRef" /> -->
    <Layout :class="[layoutClass]">
      <!-- LayoutSideBar 左侧菜单栏-->
      <LayoutSideBar v-if="getShowSidebar || getIsMobile" />
      <Layout :class="`${prefixCls}-main`">
        <!-- LayoutMultipleHeader 顶部和已打开tab栏 -->
        <LayoutMultipleHeader />
        <!-- Layout 右侧主体main-->
        <LayoutContent />
        <!-- <LayoutFooter /> -->
      </Layout>
    </Layout>
  </Layout>
</template>

<script lang="ts">
  import { defineComponent, computed, unref } from 'vue';
  import { Layout } from 'ant-design-vue';
  // import { createAsyncComponent } from '/@/utils/factory/createAsyncComponent'; //异步注册组件
  // import LayoutHeader from './header/index.vue';
  import LayoutContent from './content/index.vue'; //主体main 子路由显示的connent
  import LayoutSideBar from './sider/index.vue'; //左侧菜单栏
  import LayoutMultipleHeader from './header/MultipleHeader.vue'; //顶部和已打开tab栏
  import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';

  import { useMenuSetting } from '/@/hooks/setting/useMenuSetting';
  import { useDesign } from '/@/hooks/web/useDesign';

  import { useAppInject } from '/@/hooks/web/useAppInject';

  export default defineComponent({
    name: 'DefaultLayout',
    components: {
      // LayoutFeatures: createAsyncComponent(() => import('/@/layouts/default/feature/index.vue')),
      // LayoutFooter: createAsyncComponent(() => import('/@/layouts/default/footer/index.vue')),
      // LayoutHeader,
      LayoutContent, //主体main 子路由显示的connent
      LayoutSideBar, //左侧菜单栏
      LayoutMultipleHeader, //顶部和已打开tab栏
      Layout,
    },
    setup() {
      const { prefixCls } = useDesign('default-layout');
      const { getIsMobile } = useAppInject();
      const { getShowFullHeaderRef } = useHeaderSetting();
      const { getShowSidebar, getIsMixSidebar, getShowMenu } = useMenuSetting();

      const layoutClass = computed(() => {
        let cls: string[] = ['ant-layout'];
        if (unref(getIsMixSidebar) || unref(getShowMenu)) {
          cls.push('ant-layout-has-sider');
        }
        return cls;
      });

      return {
        getShowFullHeaderRef,
        getShowSidebar,
        prefixCls,
        getIsMobile,
        getIsMixSidebar,
        layoutClass,
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~'@{namespace}-default-layout';

  .@{prefix-cls} {
    display: flex;
    width: 100%;
    min-height: 100%;
    background-color: @content-bg;
    flex-direction: column;

    > .ant-layout {
      min-height: 100%;
    }

    &-main {
      width: 100%;
      margin-left: 1px;
    }
  }
</style>
