<script setup lang="ts">
import {VButton, VDialog} from "@vonage/vivid-vue";
import {ref} from "vue";
import BrandStep from "./steps/brand/BrandStep.vue";
import MultiviewManager from "./multiview/MultiviewManager.vue";
import MultiviewPart from "./multiview/MultiviewPart.vue";

const signup = ref(null)

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
          <MultiviewManager name="signup">
            <MultiviewPart>
              <BrandStep/>
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
