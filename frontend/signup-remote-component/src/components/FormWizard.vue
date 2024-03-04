<template>
  <form v-on:submit.prevent="onSubmit">
    <slot />

    <div>
      <button v-if="hasPrevious" type="button" @click="goToPrev">
        Previous
      </button>
      <button type="submit">{{ isLastStep ? "Submit" : "Next" }}</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed, provide } from "vue";
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
