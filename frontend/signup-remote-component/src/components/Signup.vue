<script setup lang="ts">
import {VButton, VDialog} from "@vonage/vivid-vue";
import {ref} from "vue";
import BrandStep from "./steps/brand/BrandStep.vue";
import MultiviewManager from "./multiview/MultiviewManager.vue";
import MultiviewPart from "./multiview/MultiviewPart.vue";

const signup = ref(null)
const signupMultiview = ref(null)
const brandRef = ref<string>()

function setBrand(val: string) {
  console.log(`Using brand ${val}`)
  brandRef.value = val
  console.log(signupMultiview.value)
  signupMultiview.value.currentViewIndex++
}

function openSignup() {
  signup.value?.showModal?.()
}
</script>

<template>
  <div>
    <VButton v-on:click="openSignup" label="Show Signup"/>
    <VDialog id="signup" ref="signup" headline="Signup">
      <template #body>
        <div class="solid">
          <MultiviewManager ref="signupMultiview" name="signup">
            <MultiviewPart>
              <BrandStep @setBrand="setBrand"/>
            </MultiviewPart>

            <MultiviewPart>
              Enter password:
              <input />
            </MultiviewPart>
          </MultiviewManager>
        </div>
      </template>
    </VDialog>
  </div>
</template>
