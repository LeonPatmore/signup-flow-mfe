<script setup lang="ts">
import {provide, ref} from "vue";
const props = defineProps(['name'])

const currentViewIndex = ref(0);
const viewCounter = ref(0);
provide(`VIEW_COUNTER_${props.name}`, viewCounter);
provide(`CURRENT_VIEW_INDEX_${props.name}`, currentViewIndex);
provide(`VIEW_NAME`, props.name);

defineExpose({
  currentViewIndex
})
</script>

<template>
  <slot />
</template>
