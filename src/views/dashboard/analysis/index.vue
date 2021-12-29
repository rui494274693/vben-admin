<template>
  <div class="p-4">
    <a-button color="warning" block @click="handleResetSetting" class="my-3">
      重置
    </a-button>
    <GrowCard :loading="loading" class="enter-y" />
    <SiteAnalysis class="!my-4 enter-y" :loading="loading" />
    <div class="md:flex enter-y">
      <VisitRadar class="md:w-1/3 w-full" :loading="loading" />
      <VisitSource class="md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full" :loading="loading" />
      <SalesProductPie class="md:w-1/3 w-full" :loading="loading" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import GrowCard from './components/GrowCard.vue';
  import SiteAnalysis from './components/SiteAnalysis.vue';
  import VisitSource from './components/VisitSource.vue';
  import VisitRadar from './components/VisitRadar.vue';
  import SalesProductPie from './components/SalesProductPie.vue';

  import { useAppStore } from '/@/store/modules/app';
  import defaultSetting from '/@/settings/projectSetting';
  const loading = ref(true);
  const appStore = useAppStore();
  setTimeout(() => {
    loading.value = false;
  }, 1500);
  function handleResetSetting(): void {
    try {
      appStore.setProjectConfig(defaultSetting);
      console.log('成功');
    } catch (error: any) {
      console.log(error);
    }
  }
</script>
