<template>
  <div v-if="shouldShow">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, Ref } from "vue";

// This is a ref injected from FormWizard
// clones the step index to get the step's index and advances it by 1 for the next step
// meaning each step gets a index id starting from 1
const stepCounter = inject<Ref<number>>("STEP_COUNTER");
if (!stepCounter) {
  throw new Error("");
}
const currentIdx = stepCounter.value++;
// Grabs the live ref to the current form active step
const formStepIdx = inject<Ref<number>>("CURRENT_STEP_INDEX");

// If this step should be shown
const shouldShow = computed(() => {
  if (!formStepIdx) {
    return false;
  }
  return currentIdx === formStepIdx.value;
});
</script>
