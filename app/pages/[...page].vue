<script setup lang="ts">
const route = useRoute()
const path = computed(() => route.path)

const { data: pageData } = await useAsyncData(
  () => `page-content:${path.value}`,
  () => queryCollection('content').path(path.value).first(),
  {
    watch: [path]
  }
)
</script>

<template>
    <ContentRenderer v-if="pageData" :value="pageData" />
</template>
