<script setup lang="ts">
import FormWizard from "./FormWizard.vue";
import FormStep from "./FormStep.vue";
import {VButton, VDialog} from "@vonage/vivid-vue";
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
    <VButton v-on:click="openSignup" label="Show Signup"/>

    <VDialog id="signup" ref="signup" headline="Signup">
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
