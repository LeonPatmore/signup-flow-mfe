<script setup lang="ts">
import { ref, computed, provide } from "vue";
import {VButton, VDivider} from "@vonage/vivid-vue";
const emit = defineEmits(["submit"]);

const currentStepIdx = ref(0);
const stepCounter = ref(0);
provide("STEP_COUNTER", stepCounter);
provide("CURRENT_STEP_INDEX", currentStepIdx);

// if this is the last step
const isLastStep = computed(() => {
  return currentStepIdx.value === stepCounter.value - 1;
});

// If the `previous` button should appear
const hasPrevious = computed(() => {
  return currentStepIdx.value > 0;
});

// We are using the "submit" handler to progress to next steps
// and to submit the form if its the last step
const onSubmit = (values: any) => {
  if (!isLastStep.value) {
    currentStepIdx.value++;
    return;
  }

  // Let the parent know the form was filled across all steps
  emit("submit", values);
};

function goToPrev() {
  if (currentStepIdx.value === 0) {
    return;
  }

  currentStepIdx.value--;
}
</script>

<template>
  <form v-on:submit.prevent="onSubmit">
    <slot />
    <br>
    <div>
      <VButton label="Previous" v-if="hasPrevious" type="button" @click="goToPrev"/>
      <VButton type="submit" :label="isLastStep ? 'Submit' : 'Next'"></VButton>
    </div>
  </form>
</template>
