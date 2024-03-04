<script setup lang="ts">
import FormWizard from "./FormWizard.vue";
import FormStep from "./FormStep.vue";
import { VDialog } from "@vonage/vivid-vue";
import {ref} from "vue";

const signup = ref(null)

function openSignup() {
  signup.value?.showModal?.()
}

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

    <VButton v-on:click="openSignup">Show Signup</VButton>

    <VDialog id="signup" ref="signup" headline="Signup" class="solid" no-light-dismiss>
      <template #body>
        <div class="solid">
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
        </div>
      </template>
    </VDialog>
  </div>
</template>

<style>
.solid {
  background: rgb(255, 255, 255, 1);
}
</style>
