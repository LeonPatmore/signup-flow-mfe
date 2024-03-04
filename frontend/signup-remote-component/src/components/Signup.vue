<script setup lang="ts">
import { defineComponent } from "vue";
import FormWizard from "./FormWizard.vue";
import FormStep from "./FormStep.vue";
import { VDialog } from "@vonage/vivid-vue";

/**
 * Only Called when the last step is submitted
 */
function onSubmit(data: any) {
  console.log(`Submitted!`);
  console.log(JSON.stringify(data, null, 2));
}
</script>

<template>
  <div>
    <h1>Signup</h1>

    <Button v-on:click="openSignup">Show Signup</Button>

    <VDialog id="signup" ref="signup" headline="Signup">
      <FormWizard @submit="onSubmit">
        <FormStep>
          Enter username:
          <input />
        </FormStep>

        <FormStep>
          Enter password:
          <input />
        </FormStep>
      </FormWizard>
    </VDialog>
  </div>
</template>
