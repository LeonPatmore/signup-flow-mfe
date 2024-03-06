<script setup lang="ts">
import {VButton, VDialog} from "@vonage/vivid-vue";
import {ref} from "vue";
import BrandStep from "./steps/brand/BrandStep.vue";
import MultiviewManager from "./multiview/MultiviewManager.vue";
import MultiviewPart from "./multiview/MultiviewPart.vue";
import AggregatorsStep from "./steps/aggregators/AggregatorsStep.vue";

const signup = ref(null)
const signupMultiview = ref(null)
const brandRef = ref<string>()
const aggregatorsRef = ref<Array<string>>()

function nextView() {
  signupMultiview.value.currentViewIndex++
}

function setBrand(val: string) {
  console.log(`Using brand ${val}`)
  brandRef.value = val
  nextView()
}

function setAggregators(val: Array<string>) {
  console.log(`Using aggregators ${val}`)
  aggregatorsRef.value = val
  nextView()
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
              <AggregatorsStep @setAggregators="setAggregators"/>
            </MultiviewPart>

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

<style>
.button {
  margin-top: 20px;
}
</style>