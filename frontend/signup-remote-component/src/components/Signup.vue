<script setup lang="ts">
import FormWizard from "./FormWizard.vue";
import FormStep from "./FormStep.vue";
import {VButton, VDialog, VOption, VSelect} from "@vonage/vivid-vue";
import {onBeforeMount, ref} from "vue";
import {getBrands} from "../api/brands.ts"

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

const brands = ref()

onBeforeMount(async () => {
  brands.value = await getBrands()
})
</script>

<template>
  <div>
    <VButton v-on:click="openSignup" label="Show Signup"/>

    <VDialog id="signup" ref="signup" headline="Signup">
      <template #body>
        <div class="solid">
          <FormWizard @submit="onSubmit">
            <FormStep>
              Select a brand:
              <br>
              <br>
              <VSelect>
                <VOption v-for="brand in brands" :text="brand"></VOption>
              </VSelect>
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
