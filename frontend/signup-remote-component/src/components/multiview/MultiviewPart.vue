<script setup lang="ts">
import {computed, inject, Ref} from "vue";

const viewName = inject<String>("VIEW_NAME")
const stepCounter = inject<Ref<number>>(`VIEW_COUNTER_${viewName}`);
const currentViewIndex = inject<Ref<number>>(`CURRENT_VIEW_INDEX_${viewName}`);

if (!stepCounter) {
  throw new Error("");
}
const thisViewNumber = stepCounter.value++;

const shouldShow = computed(() => {
  return currentViewIndex.value === thisViewNumber;
});
</script>

<template>
  <div v-if="shouldShow">
    <slot/>
  </div>
</template>
